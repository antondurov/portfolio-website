import { readdir, readFile } from "fs/promises";
import path from "path";
import { put } from "@vercel/blob";
import { initLog } from "packages";

const log = initLog(process.env.LOG_LEVEL || "info");

const sourceDir = process.argv[2];

async function uploadMusic() {
    if (!sourceDir) {
        log.error("Usage: bun scripts/uploadMusic.ts <path-to-folder-of-songs>");
        process.exit(1);
    }
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        log.error("BLOB_READ_WRITE_TOKEN is not set. Add it to .envrc and re-run direnv allow.");
        process.exit(1);
    }

    const entries = await readdir(sourceDir);
    const files = entries.filter((f) => /\.(mp3|wav)$/i.test(f));

    if (files.length === 0) {
        log.error(`No .mp3/.wav files found in ${sourceDir}`);
        process.exit(1);
    }

    for (const file of files) {
        const buffer = await readFile(path.join(sourceDir, file));
        const blob = await put(`music/${file}`, buffer, { access: "public" });
        log.info(`${file} -> ${blob.url}`);
    }
}

uploadMusic();
