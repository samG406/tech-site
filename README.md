# Sylvan

Structured real estate income framework website for Registered Investment Advisors (RIAs).

## Overview

Single-page website providing information about Sylvan's standardized structured real estate income framework, including governance, offerings, and portfolio integration details.

## Project Structure

```
.
├── index.html
├── styles.css
├── vercel.json
└── README.md
```

## Features

- Single-page application with smooth scroll navigation
- Responsive design for desktop and mobile devices
- Sticky navigation header
- Seven main content sections: Home, Start Here, How It Works, Offerings, Governance, Portfolio Role, FAQ

## Requirements

No dependencies or build process required. Standard web browser with HTML5 and CSS3 support.

## Local Development

Open `index.html` directly in a web browser, or use a local HTTP server:

```bash
python -m http.server 8000
```

Navigate to `http://localhost:8000` in your browser.

## Deployment

### Vercel

Deploy via Vercel CLI:

```bash
npm i -g vercel
vercel
```

Or connect your Git repository to the Vercel dashboard for automatic deployments.

The included `vercel.json` provides optimal static site configuration.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright 2024 Sylvan. All rights reserved.
