import fs from "fs";
import path from "path";

export function getEntries() {
  const f = fs.readFileSync(path.join(process.cwd(), "entries.json"), "utf-8");
  return Object.values(JSON.parse(f));
}
