import { expect, test } from "bun:test";
import { initLog } from "./log.ts";

test("suppresses below the max level", () => {
    const log = initLog("warn");
    expect(log.debug).not.toBe(console.debug);
    expect(log.info).not.toBe(console.info);
    expect(log.warn).toBe(console.warn);
    expect(log.error).toBe(console.error);
});

test("unknown max level logs everything", () => {
    expect(initLog("bogus").debug).toBe(console.debug);
});
