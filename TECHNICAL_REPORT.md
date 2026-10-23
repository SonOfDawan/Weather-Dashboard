# Technical Project Report
## Weather Dashboard Web Application

**Student:** Plangji Solomon Dawan  
**Institution:** Miva Open University  
**Department:** B.Sc. Computer Science  
**Placement:** Defems Technologies  
**Training mode:** Virtual SIWES  
**Week:** 10  
**Week ending:** 23 October 2026  
**Supervisor:** ____________________  
**Matriculation number:** ____________________

## 1. Project Description and Problem Statement

The Weather Dashboard Web Application is a browser-based application that presents current weather information for a city selected by a user. Weather services commonly return structured data that is useful to software but not immediately readable to a person. The project solves this problem by providing a search box and a visual current-weather card showing the city, temperature, weather condition, humidity, wind speed, feels-like temperature and local observation time.

The application was selected as a practical SIWES Week 10 mini-project because it combines user interface development, API integration, JSON processing, input validation and software testing in a small but realistic system.

## 2. Functional Requirements and Acceptance Criteria

FR1 requires the system to allow a user to search for a city. The acceptance test is that text can be entered and submitted without a page refresh.

FR2 requires current weather retrieval. The acceptance test is that a valid city is geocoded and a successful weather response updates the dashboard.

FR3 requires temperature, conditions, humidity and wind speed. The acceptance test is that each value is displayed in labelled sections when the API response contains the required data.

FR4 requires empty-input validation. The acceptance test is that an empty submission displays an error and does not call the API.

FR5 requires useful failure messages. The acceptance test is that unknown cities, unsuccessful HTTP responses, incomplete data and network failures show an explanatory message without fabricated values.

FR6 requires responsiveness. The acceptance test is that the dashboard remains readable and usable at desktop and mobile widths.

## 3. System Design and Tools

The system is a static client-side web application. The browser loads HTML, CSS and JavaScript files. When the user submits a city, JavaScript sends a GET request to the Open-Meteo Geocoding API. The first result supplies latitude and longitude. JavaScript then sends those coordinates to the Open-Meteo Weather Forecast API with the `current` fields requested. Both responses are JSON.

HTML5 provides semantic elements such as `header`, `nav`, `main`, `section`, `form` and `footer`. CSS3 defines reusable colour variables, grid and flex layouts, spacing, contrast and a mobile media query. Vanilla JavaScript handles events, `fetch`, `URLSearchParams`, loading state, validation and DOM updates. Git is used for local version history and GitHub can be used as the remote repository.

## 4. Implementation Details

The home page contains a labelled search form and a weather result area. The submit handler trims the input and rejects an empty value. While requests are running, the button and input are disabled and the button text changes to `Searching...`, preventing duplicate submissions.

The `findCity` function safely constructs a geocoding URL with `URLSearchParams`. It checks `response.ok`, parses JSON and reports when no result exists. The `getCurrentWeather` function similarly requests temperature, relative humidity, apparent temperature, weather code and wind speed. It checks that the response includes usable current temperature data before updating the interface.

Weather codes are mapped to documented descriptions and symbols. The local observation time and timezone from the API response are shown when available. The About page explains the project and the Contact page demonstrates client-side validation. No API key or unnecessary authentication is used.

## 5. Testing and Results

Testing includes valid Abuja and Lagos searches, an unknown city, empty input, network or unsuccessful API handling, navigation, contact validation, responsive layouts and console review. The authoritative test table is maintained in `README.md` and is marked `NOT TESTED` until each check has actually been performed. This avoids claiming results that have not been observed.

**Observed test notes:**  
- Browser test date: ____________________  
- Abuja result: ____________________  
- Lagos result: ____________________  
- Error handling result: ____________________  
- Mobile layout result: ____________________  
- Console result: ____________________

## 6. Lessons Learned

This project demonstrates that API integration is more than displaying a successful response. A robust application validates user input, handles unavailable services, checks response status, shows progress and avoids displaying invented information. I also learned that an API may need more than one endpoint: the geocoder translates a human city name into coordinates, while the weather service uses those coordinates.

The project reinforced separation of concerns. HTML describes content, CSS controls presentation, and JavaScript controls behaviour. I also learned how Git records changes and how GitHub can provide a shareable remote repository. The final repository URL should be added here after publishing: ____________________

## Screenshot Plan

Capture: the dashboard with Abuja, the dashboard with Lagos, an unknown-city error, the About page, Contact validation, a mobile-width dashboard, the file tree and source code in VS Code, and the browser console after normal testing. Hide passwords, tokens and private details.
