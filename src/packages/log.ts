type LogMethod = (...data: any[]) => void;
export type LogFunc = Record<Level, LogMethod>;

const LEVELS = ['debug', 'info', 'warn', 'error'] as const;
type Level = (typeof LEVELS)[number];

// import.meta.env works in both Bun (alias for process.env) and Vite
// (needs envPrefix 'LOG_' in vite.config.ts to expose it to the browser)
const globalLevel = import.meta.env?.LOG_LEVEL ?? 'debug';

const noop: LogMethod = () => {};

export function initLog(maxLevel: string = globalLevel): LogFunc {
    // unknown maxLevel (index -1) logs everything, rather than silently dropping it all
    const on = (l: Level) => LEVELS.indexOf(l) >= LEVELS.indexOf(maxLevel as Level);
    return {
        debug: on('debug') ? console.debug : noop,
        info: on('info') ? console.info : noop,
        warn: on('warn') ? console.warn : noop,
        error: on('error') ? console.error : noop,
    };
}
