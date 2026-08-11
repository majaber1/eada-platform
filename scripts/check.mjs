import { access, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const required = ["index.html", "styles.css", "app.js", "manifest.webmanifest", "robots.txt", "BRAND.md", ".env.example", "docs/PRODUCT_AUDIT.md", "docs/RELEASE_REPORT.md", "assets/favicon.svg", "assets/logo-mark.svg", "assets/logo-lockup.svg", "assets/reexport-saudi.jpg"];
await Promise.all(required.map((file) => access(file)));
const html = await readFile("index.html", "utf8");
for (const marker of ["<html lang=", "meta name=\"description\"", "id=\"mainContent\"", "aria-live=\"polite\"", "manifest.webmanifest"]) {
  if (!html.includes(marker)) throw new Error(`Missing release marker: ${marker}`);
}
for (const uxMarker of ["id=\"themeBtn\"", "id=\"contextBar\"", "id=\"connectionState\""]) if (!html.includes(uxMarker)) throw new Error(`Missing UX marker: ${uxMarker}`);
for (const capability of ["id=\"operations\"", "id=\"profileForm\"", "id=\"pipelineList\"", "id=\"complianceChecklist\"", "id=\"auditList\""]) {
  if (!html.includes(capability)) throw new Error(`Missing operations capability: ${capability}`);
}
for (const dashboardMarker of ["id=\"dashboardPipeline\"", "id=\"dashboardCompliance\"", "id=\"caseStatusBars\"", "id=\"dashboardActivity\""]) {
  if (!html.includes(dashboardMarker)) throw new Error(`Missing dashboard capability: ${dashboardMarker}`);
}
const syntax = spawnSync(process.execPath, ["--check", "app.js"], { stdio: "inherit" });
if (syntax.status !== 0) process.exit(syntax.status ?? 1);
JSON.parse(await readFile("manifest.webmanifest", "utf8"));
JSON.parse(await readFile("data/meta.json", "utf8"));
console.log(`Release checks passed (${required.length} required files).`);
