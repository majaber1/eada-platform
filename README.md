# EADA | إعادة

A polished bilingual (Arabic/English) interactive prototype for evaluating circular-economy routes for surplus assets, inventory, and scrap.

## Features

- Re-export, resale, redeployment, and recycling assessment
- Scrap material, purity scenario, and indicative value calculation
- Demonstration opportunity marketplace and browser-local dashboard
- Browser-local organization workspace, transaction pipeline, compliance checklist, audit trail, privacy controls, and JSON export
- Responsive RTL/LTR UI with keyboard and reduced-motion support
- Installable manifest, release checks, and GitHub Pages deployment

Identity usage, palette, typography, voice, and interface principles are documented in [BRAND.md](BRAND.md).

## Scope

EADA is a decision-support prototype, not a live marketplace, certified inspection, laboratory analysis, or binding valuation. Scoring rules, prices, opportunities, and buyer flows are demonstration data. Images stay in the browser and records use local storage on the current device.

A production service requires authenticated accounts, a secured backend, verified market feeds, buyer/recycler onboarding, computer-vision validation, compliance rules, logistics quotes, audit trails, and professional security/privacy review.

The Operations workspace deliberately models these workflows without claiming production security. Organization identity, case status, compliance references, and audit events remain device-local. It also displays an 11-point readiness register showing which capabilities still require external providers or infrastructure.

## Run and test

```powershell
npm run serve
npm test
```

Open <http://localhost:8080>. The public site deploys to GitHub Pages through the included workflow.

## License

MIT
