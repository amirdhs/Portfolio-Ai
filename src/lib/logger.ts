/** Minimal structured server logger. Never pass personal data or message contents. */
export type LogFn = (event: string, details?: Record<string, unknown>) => void;

export const logServerEvent: LogFn = (event, details = {}) => {
  console.error(
    JSON.stringify({ level: "error", event, ...details, at: new Date().toISOString() }),
  );
};
