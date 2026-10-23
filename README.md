# Weather Dashboard Web Application

## Project Information

- **Student:** Plangji Solomon Dawan
- **Institution:** Miva Open University
- **Department:** B.Sc. Computer Science
- **Placement:** Defems Technologies
- **Training mode:** Virtual SIWES
- **Project:** Weather Dashboard Web Application
- **Week:** 10
- **Week ending:** 23 October 2026

## Problem Statement

Weather information is useful for planning daily activities, but raw API responses are difficult for a beginner or general user to read. This application provides a clear dashboard where a user searches for a city and sees its current weather conditions.

## Objectives

1. Build a semantic HTML5 interface with working navigation.
2. Use CSS3 to create a responsive and accessible layout.
3. Use vanilla JavaScript to validate input, call APIs and update the page.
4. Practise reading JSON responses and handling loading and error states.
5. Use Git and GitHub-ready project organisation.

## Functional Requirements and Acceptance Criteria

- **FR1:** The system shall allow users to search for a city. A city search field and submit button are available.
- **FR2:** The system shall retrieve current weather data for the selected city. The app geocodes the city before requesting forecast data.
- **FR3:** The system shall display temperature, weather conditions, humidity and wind speed. It also displays feels-like temperature, coordinates and local observation time.
- **FR4:** The system shall validate empty user input. Empty searches are stopped with a readable message.
- **FR5:** The system shall display helpful messages for invalid cities and failed requests. HTTP errors, missing data, unknown cities and network failures are handled.
- **FR6:** The system shall provide a responsive interface. The layout changes for small screens and remains keyboard accessible.

## Tools and Technologies

HTML5, CSS3, vanilla JavaScript, JSON, Visual Studio Code, Git, GitHub, and a browser. No framework or API key is used.

## API Endpoints

1. Geocoding: `https://geocoding-api.open-meteo.com/v1/search`
2. Current weather: `https://api.open-meteo.com/v1/forecast`

The JavaScript constructs query strings with `URLSearchParams`, checks `response.ok`, and reads JSON with `response.json()`.

## Folder Structure

```text
WeatherDashboard/
|-- index.html
|-- about.html
|-- contact.html
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
|-- README.md
|-- TECHNICAL_REPORT.md
`-- .gitignore
```

## How to Run

From the project folder, run:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. A local server is recommended because it gives the pages a consistent web origin. Stop it with `Ctrl+C`.

## Testing Procedure and Results

Results below are updated only after a test has been performed in this environment.

| Test case | Expected result | Actual result | Status |
|---|---|---|---|
| Search Abuja | Current weather card displays Abuja data | Not yet verified in browser | NOT TESTED |
| Search Lagos | Current weather card displays Lagos data | Not yet verified in browser | NOT TESTED |
| Search a nonexistent city | Helpful not-found message appears and no fake weather is shown | Not yet verified in browser | NOT TESTED |
| Submit empty search | Validation message appears and request is not sent | Not yet verified in browser | NOT TESTED |
| Simulate failed API/network request | Helpful error message appears | Not yet verified in browser | NOT TESTED |
| Navigate Dashboard, About and Contact | Each page opens successfully | Not yet verified in browser | NOT TESTED |
| Contact form with empty/invalid values | Field messages identify invalid input | Not yet verified in browser | NOT TESTED |
| Desktop and mobile layouts | Content remains readable without horizontal overflow | Not yet verified in browser | NOT TESTED |
| Browser console | No application errors during normal use | Not yet verified in browser | NOT TESTED |

## Known Limitations

- Open-Meteo availability and internet access are required for live results.
- The geocoder returns the first matching result, so a common city name may need a more specific search.
- The contact form is a frontend demonstration and does not send messages to a server.
- Weather data describes current conditions, not a long-term forecast.

## Attribution

Weather data is provided by [Open-Meteo](https://open-meteo.com/) and its [Geocoding API](https://open-meteo.com/en/docs/geocoding-api). This project is for non-commercial educational use and does not require an API key.

## Screenshots to Capture

Capture these for the SIWES submission: the dashboard showing Abuja data, the dashboard showing Lagos data, the unknown-city error, the About page, the Contact page with validation messages, the dashboard at a narrow mobile width, the project files in VS Code, and the browser Developer Tools Console showing no application errors. Do not capture passwords or private information.

## Final Submission Checklist

- [ ] Run the app locally and capture the working dashboard.
- [ ] Test the cases in the table and replace NOT TESTED with honest results.
- [ ] Review the report and fill any placeholders.
- [ ] Check `git status` and inspect files before publishing.
- [ ] Create the GitHub repository only after confirming its visibility and name.
- [ ] Add the final GitHub URL to the report.

## GitHub Publishing Summary

Git is the version-control tool on the computer; GitHub hosts a remote copy online. Do not share passwords or tokens in chat. Sign in through GitHub's official browser flow.

```powershell
git init
git add .
git commit -m "Build Weather Dashboard application"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/WeatherDashboard.git
git push -u origin main
```

Replace `YOUR-USERNAME` locally with your own GitHub username. Create the empty repository named `WeatherDashboard` on GitHub first. Before the first push, run `git status` and inspect `git diff --cached` for secrets or private files. Publishing requires your explicit confirmation.

## Future Updates

After changing files, run `git add .`, review `git diff --cached`, commit with `git commit -m "Describe the change"`, and push with `git push`.

## Supervision Briefing

- **Problem:** The dashboard turns difficult-to-read weather API data into a simple current-conditions view.
- **Why this project:** It demonstrates frontend structure, styling, API integration, JSON processing and error handling in one practical application.
- **What Open-Meteo is:** A free weather service. I use its geocoding endpoint to find coordinates and its forecast endpoint to retrieve current conditions.
- **Why two endpoints:** A city name is not enough for weather lookup. The first endpoint converts the name to latitude and longitude; the second uses those coordinates.
- **How the technologies work together:** HTML creates the page, CSS controls appearance and responsive layout, and JavaScript connects user actions to API requests and page updates.
- **What JSON is:** A text format used to structure data returned by the APIs so JavaScript can read named values.
- **What REST API means:** A web service accessed through URLs and HTTP requests. This app uses GET requests and checks the response before reading it.
- **How I tested:** I tested valid searches, invalid input, errors, navigation, contact validation, responsive layout and the console. The final statuses must match the actual table results.
- **Limitations:** The app needs internet access, uses the first geocoding match and has no backend for contact messages.
- **Git and GitHub:** Git records versions locally; GitHub stores the project remotely so it can be reviewed and shared.
