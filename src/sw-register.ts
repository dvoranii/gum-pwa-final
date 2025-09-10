import { Workbox } from "workbox-window";

export function registerSW(): void {
  if ("serviceWorker" in navigator) {
    console.log("📦 Service Worker supported, registering...");

    const wb = new Workbox("/sw.js");

    // The 'controlling' event is fired after the service worker is activated
    // and is now controlling the page. This is the perfect moment to signal
    // that the app is ready for offline use.
    wb.addEventListener("controlling", () => {
      console.log(
        "🎯 Service worker is now controlling the page. Dispatching custom event."
      );
      window.dispatchEvent(new CustomEvent("sw-offline-ready"));
    });

    // wb.register() initiates the service worker registration
    wb.register()
      .then((registration: ServiceWorkerRegistration | undefined) => {
        if (registration) {
          console.log("✅ SW registered successfully");

          // CRITICAL: Handle the case where the SW is already installed on page load.
          // In this scenario, the 'controlling' event might not fire immediately.
          // This check ensures the event is sent on subsequent visits.
          if (navigator.serviceWorker.controller) {
            console.log(
              "Service worker already controlling - app is ready for offline."
            );
            window.dispatchEvent(new CustomEvent("sw-offline-ready"));
          }

          // Handle other Workbox events for updates (optional but good practice)
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
