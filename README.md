# Friends of Poway Seniors — Website Redesign

A full redesign and rebuild of the [Friends of Poway Seniors (FOPs)](https://www.friendsofpowayseniors.org/) website, a 501(c)(3) nonprofit connecting volunteers with elderly community members in Poway, CA. Built by a student team as part of the Open Coding Society Computer Science program.

**Team:** [Your Name], Vivian Zhang, Nitya Remias  
**Instructor:** John Mortensen  
**Course:** AP Computer Science / Open Coding Society

---

## Overview

The original FOPs site had significant layout and usability issues. We redesigned it from the ground up with a focus on accessibility, intuitive navigation, and operational tools that can support the organization's day-to-day needs — not just a cosmetic refresh.

The site is built on GitHub Pages using Jekyll, with a Python/Flask backend for dynamic features.

---

## Pages

### Home (`/fops/`)
- Full redesign with a clean, accessible layout
- Sticky navigation bar with dropdown Events menu
- Large logo display, mission and vision cards
- AI chatbot widget (bottom-right) powered by a Flask backend
- Animated entrance effects and consistent FOPS brand colors

### BINGO (`/fopsbingo/`)
- Event info: location, schedule (Tuesday & Sunday), pricing, concessions, game rules
- Volunteer signup form with availability and role preferences, submitted to backend database
- **Playable digital Bingo game** — 75-ball, 5×5 card, auto-caller, win detection (rows, columns, diagonals), keyboard shortcuts, win screen

### Social Lunch (`/fopslunch/`)
- Program info: hours (Mon–Fri, 11:30 AM–1 PM), chef announcement, reservation requirements
- Volunteer signup form (availability by day, preferred role)
- **Lunch reservation form** — saves to backend with date, guest count, dietary notes
- Tab-based layout separating info/volunteer from reservations

### ReRuns ReSale Shoppe (`/fopsshop/`)
- Shoppe hours, donation guidelines, accepted payment methods
- Community impact section: transitional housing, homeless outreach, animal rescue
- Volunteer signup form with role options (cashier, sorting, merchandising, pickup, distribution)
- Impact tab with stats grid and partner organization highlights

### Event Predictor (`/fopspredictor/`)
- **ML-based attendance forecasting** for BINGO, Social Lunch, ReRuns Shoppe, and Birthday Certificate events
- Input parameters: event type, month, day of week, season, weather, prior attendance, members notified, holiday week, flyer sent
- Real-time prediction updates on any input change
- Confidence interval display, feature importance breakdown
- Trained on historical FOPs attendance trends

### About Us (`/fopsaboutus/`)
- Board of Directors (2025–2026) and Staff listings
- Organization history and mission
- Contact information and City of Poway partnership banner
- Links to City of Poway senior programs

### Resources (`/fopsresources/`)
- Community resources for seniors

---

## Features

### AI Chatbot
A 24/7 assistant widget embedded on the home page. Visitors can ask questions about services, events, and volunteering. Connected to a Flask backend (`/api/chat`) with conversation history support and suggested quick-reply chips.

### Volunteer & Reservation Database
All volunteer applications (BINGO, Social Lunch, ReRuns) and lunch reservations are submitted via `POST` to a Flask/Python backend and stored persistently. Each submission returns a unique ID confirmation.

### ML Event Predictor
A machine learning model predicts event attendance based on:
- Event type baseline attendance
- Season, weather, day of week, and month factors
- Prior week attendance and members notified
- Holiday week and flyer distribution bonuses
- Confidence scoring and feature importance visualization

### Digital Bingo Game
A fully playable browser-based Bingo game built in vanilla JavaScript:
- Randomly generated 5×5 card with free space
- Auto-marks called numbers on the player's card
- Detects wins across rows, columns, and both diagonals
- Visual board tracker, recent calls panel, win flash screen
- Space/Enter keyboard shortcut for calling numbers

### Navigation
- Consistent sticky navbar across all pages
- Dropdown Events menu (ReRuns, BINGO, Social Lunch, Event Predictor)
- Live API status indicator on event pages

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JS |
| Fonts | Playfair Display, DM Sans (Google Fonts) |
| Backend | Python / Flask |
| Database | Persistent storage via Flask API endpoints |
| Hosting | GitHub Pages (Jekyll) |
| AI Chatbot | Flask `/api/chat` endpoint |
| ML Predictor | Python model served via Flask |
| Config | Jekyll `_config.yml`, JS import maps (`@api/config`) |

---

## Backend API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/chat` | POST | AI chatbot messages |
| `/api/chat/test` | GET | Chatbot health check |
| `/api/bingo/volunteer` | POST | BINGO volunteer signup |
| `/api/bingo/test` | GET | BINGO API health check |
| `/api/social-lunch/volunteer` | POST | Social Lunch volunteer signup |
| `/api/social-lunch/reserve` | POST | Lunch reservation |
| `/api/social-lunch/test` | GET | Lunch API health check |
| `/api/reruns/volunteer` | POST | ReRuns volunteer signup |
| `/api/reruns/test` | GET | ReRuns API health check |

---

## Setup

This project follows the standard Open Coding Society Pages setup.

```bash
git clone <this-repo>
cd <repo-dir>/scripts
./activate_ubuntu.sh   # or activate_macos.sh
bundle install
make
```

Update `_config.yml` with your repository name:

```yaml
github_repo: "pages"
baseurl: "/pages"
```

Backend runs separately:

```bash
python app.py
```

The frontend uses a JS import map to resolve the backend URI:

```js
import { pythonURI, fetchOptions } from '@api/config';
```

---

## Design System

All pages share a consistent visual identity:

| Variable | Value | Use |
|---|---|---|
| `--sage-dk` | `#2e5238` | Page background |
| `--sage` | `#4a7c59` | Cards, inputs |
| `--gold` | `#c9913d` | Accents, buttons |
| `--gold-lt` | `#e8c37a` | Headings, highlights |
| `--white` | `#ffffff` | Primary text |

Fonts: **Playfair Display** (headings) + **DM Sans** (body)

---

## Acknowledgments

Thank you to Nia Stefani, Dorothy Carlson, Scott Vandervort, John Mortensen, and everyone at the CTE fair who provided feedback on our work. Special thanks to the Friends of Poway Seniors organization for the opportunity to build something with real community impact.