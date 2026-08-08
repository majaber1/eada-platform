import { access, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const required = ["index.html", "styles.css", "app.js", "manifest.webmanifest", "robots.txt", "assets/favicon.svg", "assets/reexport-saudi.jpg"];
await Promise.all(required.map((file) => access(file)));
const html = await readFile("index.html", "utf8");
for (const marker of ["<html lang=", "meta name=\"description\"", "id=\"mainContent\"", "aria-live=\"polite\"", "manifest.webmanifest"]) {
  if (!html.includes(marker)) throw new Error(`Missing release marker: ${marker}`);
}
const syntax = spawnSync(process.execPath, ["--check", "app.js"], { stdio: "inherit" });
if (syntax.status !== 0) process.exit(syntax.status ?? 1);
JSON.parse(await readFile("manifest.webmanifest", "utf8"));
JSON.parse(await readFile("data/meta.json", "utf8"));
console.log(`Release checks passed (${required.length} required files).`);
