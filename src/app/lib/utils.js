import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import path from "path";
import { fileURLToPath } from "url";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function getDirname() {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
}
export function resolvePath(relativePath) {
  return path.resolve(getDirname(), relativePath);
}
