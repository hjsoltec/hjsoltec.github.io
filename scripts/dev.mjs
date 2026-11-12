import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

// Accept the development flags used by both Next.js and managed previews.
const args = process.argv.slice(2);
const forwarded = [];
let hostname = "0.0.0.0";
for (let i = 0; i < args.length; i++) {
  if (["--host", "--hostname"].includes(args[i])) {
    if (!args[i + 1] || args[i + 1].startsWith("-")) throw new Error("A hostname is required.");
    hostname = args[++i];
  } else if (/^--(?:host|hostname)=/.test(args[i])) {
    hostname = args[i].slice(args[i].indexOf("=") + 1);
  } else if (args[i] !== "--strictPort") {
    forwarded.push(args[i]);
  }
}
const next = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const child = spawn(process.execPath, [next, "dev", "--hostname", hostname, ...forwarded], { stdio: "inherit", env: process.env });
child.on("error", error => { console.error(error.message); process.exitCode = 1; });
child.on("exit", code => { process.exitCode = code ?? 1; });
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
