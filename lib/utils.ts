import fs from "fs";
import path from "path";
import { Entry } from "./types";

export function getEntries(): Entry[] {
  const f = fs.readFileSync(
    path.join(process.cwd(), "data/entries.json"),
    "utf-8",
  );
  return Object.values(JSON.parse(f));
}
