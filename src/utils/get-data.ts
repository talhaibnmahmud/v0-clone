import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getData() {
  const projectRoot = process.cwd();
  const dataDir = path.join(projectRoot, "src", "data");
  const fileName = path.join(dataDir, "demo.html");

  const content = await readFile(fileName, "utf-8");
  return { content };
}
