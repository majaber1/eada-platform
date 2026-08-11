# EADA | إعادة

A polished bilingual (Arabic/English) interactive prototype for evaluating circular-economy routes for surplus assets and inventory.

## Features

- Re-export, resale, redeployment, and recycling assessment
- Demonstration opportunity marketplace and browser-local dashboard
- Browser-local organization workspace, transaction pipeline, compliance checklist, audit trail, privacy controls, and JSON export
- Responsive RTL/LTR UI with keyboard and reduced-motion support
- Installable manifest, release checks, and GitHub Pages deployment

Identity usage, palette, typography, voice, and interface principles are documented in [BRAND.md](BRAND.md).

## Scope

EADA is a decision-support prototype, not a live marketplace, certified inspection, laboratory analysis, or binding valuation. Scoring rules, prices, opportunities, and buyer flows are demonstration data. Images stay in the browser and records use local storage on the current device.

A production service requires authenticated accounts, a secured backend, verified market feeds, buyer/recycler onboarding, computer-vision validation, compliance rules, logistics quotes, audit trails, and professional security/privacy review.

The Operations workspace deliberately models these workflows without claiming production security. Organization identity, case status, compliance references, and audit events remain device-local. It also displays an 11-point readiness register showing which capabilities still require external providers or infrastructure.

Scrap AI now lives in the separate [`majaber1/scrap-ai`](https://github.com/majaber1/scrap-ai) repository so its image analysis, valuation, and listing workflow can evolve independently.

## Run and test

```powershell
npm run serve
npm test
```

Open <http://localhost:8080>. The public site deploys to GitHub Pages through the included workflow.

## Architecture and localization

The application is dependency-free static HTML, CSS, and JavaScript. Arabic and English share the same semantic markup; `lang` and `dir` switch at document level, while CSS logical properties preserve RTL/LTR behavior. Theme and language are device preferences. Product records remain device-local and are not authoritative production data.

No environment variables are currently required. See [`.env.example`](.env.example), [`docs/PRODUCT_AUDIT.md`](docs/PRODUCT_AUDIT.md), and [`docs/RELEASE_REPORT.md`](docs/RELEASE_REPORT.md).

## License

MIT
