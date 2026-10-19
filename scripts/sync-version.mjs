// Copies the version that `changeset version` wrote to package.json into the plugin manifest,
// which is the version Claude Code reads.
import { readFileSync, writeFileSync } from "node:fs";

const { version } = JSON.parse(readFileSync("package.json", "utf8"));
const manifestPath = ".claude-plugin/plugin.json";
const manifest = readFileSync(manifestPath, "utf8");
const updated = manifest.replace(/("version":\s*")[^"]*(")/, `$1${version}$2`);

if (!updated.includes(`"version": "${version}"`)) {
  console.error(`sync-version: no "version" field found in ${manifestPath}`);
  process.exit(1);
}
writeFileSync(manifestPath, updated);
console.log(`sync-version: ${manifestPath} -> ${version}`);
