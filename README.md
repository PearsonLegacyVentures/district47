# Toastmasters District 47 — Modern Website Rebuild

Modern, mobile-first website for Toastmasters District 47, serving South Florida and The Islands of The Bahamas.

## Status

This repository was initialized on October 5, 2026 as a clean rebuild of the public District 47 website.

### Build phases
1. Content extraction and inventory — completed
2. Content audit and information architecture — completed
3. Toastmasters-compliant design system — implemented
4. Website build — implemented
5. Data-driven clubs/leaders/resources — implemented
6. QA/compliance — documented and build-ready

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Content sources

Public District information was migrated from:
- https://www.toastmastersd47.org/
- https://www.toastmastersd47.org/district-47-clubs/
- https://www.toastmastersd47.org/directory/
- https://www.toastmastersd47.org/contests-contest-resources/
- https://www.toastmastersd47.org/district-calendar/
- https://www.toastmastersd47.org/about-district-47/

Official Toastmasters policies and brand requirements:
- https://www.toastmasters.org/en-us/membership/leadership/governing-documents
- https://content.toastmasters.org/image/upload/02330-001-0001-brand-manual.pdf

## Production note

The current public site remains untouched. The rebuild now uses the official District 47 logo and approved photography published on the existing District website. Before a domain cutover, those media assets should be copied to the new production host so they do not depend on the legacy WordPress origin.
