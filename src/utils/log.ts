// /src/utils/log.ts

/**
 * Logs messages only when the application is running in a non-production (DEV) environment.
 * Uses Vite's built-in environment variable import.meta.env.PROD.
 * * @param args - A variable list of arguments to pass to console.log.
 */
export const log = (...args: unknown[]): void => {
  if (!import.meta.env.PROD) {
    console.log(...args);
  }
};
