import { Workbox } from "workbox-window";

export function registerSW(): void {
  if ("serviceWorker" in navigator) {
    console.log("📦 Service Worker supported, registering...");

    const wb = new Workbox("/sw.js");

    wb.addEventListener("controlling", () => {
      console.log(
        "🎯 Service worker is now controlling the page. Dispatching custom event."
      );
      window.dispatchEvent(new CustomEvent("sw-offline-ready"));
    });

    wb.register()
      .then((registration: ServiceWorkerRegistration | undefined) => {
        if (registration) {
          console.log("✅ SW registered successfully");

          if (navigator.serviceWorker.controller) {
            console.log(
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
        console.log("❌ SW registration failed: ", registrationError);
      });
  } else {
    console.log("❌ Service workers are not supported in this browser");
  }
}
