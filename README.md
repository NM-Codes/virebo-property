# Virebo Property

Virebo Property is an independent student portfolio project: a responsive real-estate website concept built to demonstrate interface design and front-end development. It presents sample property listings, property-related service sections, navigation, and supporting informational pages.

The website is a front-end demonstration, not a real estate business. Listings, prices, testimonials, vacancies, and other business-like content are illustrative and must not be treated as real offers or verified claims. Forms are demonstrative and do not send or store submissions.

## Project highlights

- Responsive home page with a property-photo hero, custom Virebo mark, services, sample listings, and project overview.
- Property browsing page with sample listing data.
- Property service tabs and in-page navigation.
- Informational pages for the project approach, areas of the interface, careers-page layout, and contact form.
- Language selector interface for English & Swedish
- Custom SVG brand mark and favicon.

## Live demo

The project is configured to deploy to GitHub Pages at:

https://nm-codes.github.io/virebo-property/

Every push to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml` and publishes the latest build. The first deployment may take a few minutes after the workflow is enabled.

## Built with

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- i18next and react-i18next
- Lucide React icons

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal, usually `http://localhost:5173`.

## Available commands

```sh
npm run dev
npm run build
npm run preview
npm run lint
```

## Project structure

```text
public/
  virebo-mark.svg        Brand mark and browser favicon
src/
  assets/                Property and service images/icons
  components/            Page sections and reusable interface components
  data/                  Sample property listings
  locales/               Translation resources
  types/                 TypeScript data types
  App.tsx                Routes and shared page layout
  main.tsx               Application entry point
```

## Demo data and production readiness

The property data is local sample content in `src/data/mockProperties.ts`. There is no backend, authentication, database, live property feed, or form-submission service. Replace all sample listings and any remaining example copy with accurate, authorized content before presenting the site as anything other than a prototype.

Before publishing the project in a portfolio or deploying it publicly, verify that you have permission to use every photograph, icon, font, and other asset included in the project. Add attribution where required and replace any assets whose license or origin cannot be confirmed. The project name is a working identity and has not been checked for trademark or domain conflicts.

## AI assistance

AI tools were used to assist with parts of the implementation and project wording. The code and interface were reviewed and tested as part of the project workflow. AI assistance is disclosed here for transparency; it does not replace checking third-party asset rights, accessibility, data accuracy, or production behavior.

## Portfolio presentation

This project can be presented as a front-end portfolio demonstration focused on responsive layout, React component composition, TypeScript, navigation, and interface prototyping. Describe your own contribution accurately and make clear that the listings and forms are demonstrations rather than live services.
