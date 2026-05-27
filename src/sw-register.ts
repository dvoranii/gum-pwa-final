import { Workbox } from "workbox-window";
import { log } from "./utils/log";

export function registerSW(): void {
  if ("serviceWorker" in navigator) {
    log("📦 Service Worker supported, registering...");

    const wb = new Workbox("/sw.js");

    wb.addEventListener("controlling", () => {
      log(
        "🎯 Service worker is now controlling the page. Dispatching custom event."
      );
      window.dispatchEvent(new CustomEvent("sw-offline-ready"));
    });

    wb.register()
      .then((registration: ServiceWorkerRegistration | undefined) => {
        if (registration) {
          log("✅ SW registered successfully");

          if (navigator.serviceWorker.controller) {
            log(
              "Service worker already controlling - app is ready for offline."
            );
            window.dispatchEvent(new CustomEvent("sw-offline-ready"));
          }

          wb.addEventListener("waiting", () => {
            if (confirm("New version available! Reload to update?")) {
              wb.messageSW({ type: "SKIP_WAITING" });
            }
          });
        }
      })
      .catch((registrationError: Error) => {
        log("❌ SW registration failed: ", registrationError);
      });
  } else {
    log("❌ Service workers are not supported in this browser");
  }
}
