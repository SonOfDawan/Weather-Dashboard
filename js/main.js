const weatherCodes = {
  0: ['Clear sky', '☀'],
  1: ['Mainly clear', '🌤'], 2: ['Partly cloudy', '⛅'], 3: ['Overcast', '☁'],
  45: ['Fog', '〰'], 48: ['Rime fog', '〰'],
  51: ['Light drizzle', '🌦'], 53: ['Drizzle', '🌦'], 55: ['Dense drizzle', '🌧'],
  56: ['Light freezing drizzle', '🌧'], 57: ['Freezing drizzle', '🌧'],
  61: ['Slight rain', '🌦'], 63: ['Rain', '🌧'], 65: ['Heavy rain', '🌧'],
  66: ['Light freezing rain', '🌧'], 67: ['Heavy freezing rain', '🌧'],
  71: ['Slight snow', '🌨'], 73: ['Snow', '🌨'], 75: ['Heavy snow', '❄'], 77: ['Snow grains', '❄'],
  80: ['Rain showers', '🌦'], 81: ['Rain showers', '🌧'], 82: ['Heavy rain showers', '🌧'],
  85: ['Snow showers', '🌨'], 86: ['Heavy snow showers', '🌨'],
  95: ['Thunderstorm', '⛈'], 96: ['Thunderstorm with hail', '⛈'], 99: ['Thunderstorm with hail', '⛈']
};

const weatherForm = document.querySelector('#weather-form');
if (weatherForm) {
  const cityInput = document.querySelector('#city-input');
  const searchButton = document.querySelector('#search-button');
  const formMessage = document.querySelector('#form-message');
  const result = document.querySelector('#weather-result');

  // Search for coordinates first, then request current conditions for that location.
  weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (!city) {
      showMessage('Please enter a city name before searching.', true);
      cityInput.focus();
      return;
    }

    setLoading(true);
    try {
      const location = await findCity(city);
      const weather = await getCurrentWeather(location.latitude, location.longitude);
      displayWeather(location, weather);
      showMessage(`Showing current conditions for ${location.name}.`);
    } catch (error) {
      showMessage(error.message, true);
    } finally {
      setLoading(false);
    }
  });

  async function findCity(city) {
    const parameters = new URLSearchParams({ name: city, count: '1', language: 'en', format: 'json' });
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${parameters}`);
    if (!response.ok) throw new Error('The city search service is unavailable. Please try again.');
    const data = await response.json();
    if (!data.results || data.results.length === 0) throw new Error(`We could not find “${city}”. Check the spelling and try again.`);
    return data.results[0];
  }

  async function getCurrentWeather(latitude, longitude) {
    const parameters = new URLSearchParams({
      latitude: String(latitude), longitude: String(longitude),
      current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
      timezone: 'auto'
    });
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${parameters}`);
    if (!response.ok) throw new Error('The weather service could not return data. Please try again.');
    const data = await response.json();
    if (!data.current || typeof data.current.temperature_2m !== 'number') throw new Error('The weather response was incomplete. Please try again.');
    return data;
  }

  function displayWeather(location, data) {
    const current = data.current;
    const [description, icon] = weatherCodes[current.weather_code] || ['Weather conditions unavailable', '☁'];
    document.querySelector('#location-name').textContent = `${location.name}, ${location.country_code || location.country || ''}`.replace(/, $/, '');
    document.querySelector('#observation-time').textContent = `Observed locally at ${formatObservationTime(current.time, data.timezone)}`;
    document.querySelector('#weather-icon').textContent = icon;
    document.querySelector('#weather-description').textContent = description;
    document.querySelector('#temperature-value').textContent = formatNumber(current.temperature_2m);
    document.querySelector('#feels-like').textContent = `Feels like ${formatNumber(current.apparent_temperature)}°C`;
    document.querySelector('#humidity-value').textContent = formatNumber(current.relative_humidity_2m);
    document.querySelector('#wind-value').textContent = formatNumber(current.wind_speed_10m);
    document.querySelector('#coordinates-value').textContent = `${Number(location.latitude).toFixed(2)}, ${Number(location.longitude).toFixed(2)}`;
  }

  function formatObservationTime(time, timezone) {
    if (!time) return 'local time unavailable';
    const date = new Date(`${time}:00`);
    return Number.isNaN(date.getTime()) ? `${time} (${timezone || 'local time'})` : `${date.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })} (${timezone || 'local time'})`;
  }

  function formatNumber(value) { return typeof value === 'number' ? value.toFixed(1) : '--'; }
  function showMessage(message, isError = false) { formMessage.textContent = message; formMessage.classList.toggle('error', isError); }
  function setLoading(isLoading) {
    searchButton.disabled = isLoading;
    searchButton.textContent = isLoading ? 'Searching...' : 'Search weather';
    cityInput.disabled = isLoading;
    result.setAttribute('aria-busy', String(isLoading));
  }
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = [
      { input: document.querySelector('#name'), error: document.querySelector('#name-error'), message: 'Please enter your name.' },
      { input: document.querySelector('#email'), error: document.querySelector('#email-error'), message: 'Please enter a valid email address.' },
      { input: document.querySelector('#message'), error: document.querySelector('#message-error'), message: 'Please enter a message.' }
    ];
    let valid = true;
    fields.forEach(({ input, error, message }) => {
      const isEmail = input.type === 'email';
      const fieldIsValid = input.value.trim() && (!isEmail || input.validity.valid);
      input.classList.toggle('invalid', !fieldIsValid);
      error.textContent = fieldIsValid ? '' : message;
      if (!fieldIsValid) valid = false;
    });
    const contactMessage = document.querySelector('#contact-message');
    contactMessage.textContent = valid ? 'Thank you. Your feedback is valid for this frontend demonstration.' : 'Please correct the highlighted fields.';
    contactMessage.classList.toggle('error', !valid);
  });
}
