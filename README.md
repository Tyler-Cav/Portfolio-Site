<div align="center">

# Tyler Cavanaugh — Portfolio

A personal developer portfolio built with React and Vite, showcasing my projects, background, and design work.

[![Live Site](https://img.shields.io/badge/Live%20Site-tylercav.dev-2ea44f?style=for-the-badge)](https://tylercav.dev/)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-5-007FFF?logo=mui&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)
![Heroku](https://img.shields.io/badge/Deployed%20on-Heroku-430098?logo=heroku&logoColor=white)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)

## Overview

This repository contains the source code for [tylercav.dev](https://tylercav.dev/), my personal portfolio. It's a single-page React application with client-side routing that presents who I am, what I've built, and how to get in touch.

## Features

- **About Me** — An introduction and bio, featuring an animated flip-dot display.
- **Portfolio** — Project cards highlighting past work with links to live demos and source code.
- **Designs** — A gallery of design work.
- **Contact** — A contact form plus links to GitHub and LinkedIn.
- **Responsive Layout** — A dedicated mobile navigation bar for smaller screens.

## Tech Stack

| Category   | Tools                                      |
| ---------- | ------------------------------------------ |
| Framework  | React 18                                   |
| Build Tool | Vite 8                                     |
| Routing    | React Router 6                             |
| UI / Styles | Material UI 5, Emotion, Sass, CSS Modules |
| Linting    | ESLint                                     |
| Hosting    | Heroku                                     |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Tyler-Cav/Portfolio-Site.git
cd Portfolio-Site

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port set in the `PORT` environment variable).

## Available Scripts

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the Vite development server                   |
| `npm run build`        | Create a production build in `dist/`                |
| `npm run preview`      | Preview the production build locally                |
| `npm run lint`         | Run ESLint across the project                       |
| `npm run serve-heroku` | Serve the production build on `$PORT` (used by Heroku) |

## Project Structure

```
Portfolio-Site/
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── Procfile              # Heroku process definition
└── src/
    ├── main.jsx          # App entry & route definitions
    ├── App.jsx           # Root layout (header, content, footer)
    ├── assets/           # Images, logos, video, and audio
    ├── Utils/            # Helpers and configuration
    └── Pages/
        ├── AboutMe/      # Bio and flip-dot display
        ├── Portfolio/    # Project cards
        ├── Designs/      # Design gallery
        ├── Contact/      # Contact form
        └── Home/         # Header, navigation, and footer
```

## Deployment

The site is deployed on **Heroku**. The `Procfile` runs `npm run serve-heroku`, which serves the production build with `vite preview` on the port Heroku assigns. Allowed hosts are configured in `vite.config.js`.

## Contact

Have a question or want to work together? Reach out through any of the channels below.

[![GitHub](https://img.shields.io/badge/GitHub-Tyler--Cav-181717?logo=github&logoColor=white)](https://github.com/Tyler-Cav)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Tyler%20Cavanaugh-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tylercavanaugh/)
[![Portfolio](https://img.shields.io/badge/Portfolio-tylercav.dev-2ea44f)](https://tylercav.dev/)
