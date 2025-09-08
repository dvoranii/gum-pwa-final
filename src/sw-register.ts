import { Workbox } from "workbox-window";

export function registerSW(): void {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("/sw.js");

    const showSkipWaitingPrompt = (): void => {
      console.log("New service worker available");
    };

    wb.addEventListener("installed", (event) => {
      if (!event.isUpdate) {
        console.log("Service worker installed for the first time");
      } else {
        console.log("Service worker updated");
      }
    });

    wb.addEventListener("waiting", showSkipWaitingPrompt);

    wb.addEventListener("controlling", () => {
      console.log("Service worker is now controlling the page");
      window.location.reload();
    });

    // Add error handling for service worker redundancy
    wb.addEventListener("redundant", () => {
      console.log("Service worker became redundant");
    });

    // Handle service worker messages
    wb.addEventListener("message", (event) => {
      if (event.data && event.data.type === "CACHE_UPDATED") {
        console.log("Cache updated, reloading page...");
        window.location.reload();
      }
    });

    wb.register()
      .then((registration: ServiceWorkerRegistration | undefined) => {
        if (registration) {
          console.log("SW registered successfully: ", registration);

          // Check if there's a waiting service worker
          if (registration.waiting) {
            console.log("Service worker waiting to activate");
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
          }

          // Listen for controller changes
          navigator.serviceWorker.addEventListener("controllerchange", () => {
            console.log("Controller changed, reloading page...");
            window.location.reload();
          });

          // Periodically check for updates
          setInterval(() => {
            registration.update().catch((error) => {
              console.log("SW update check failed: ", error);
            });
          }, 60 * 60 * 1000); // Check every hour
        } else {
          console.log("Service worker registration returned undefined");
        }
      })
      .catch((registrationError: Error) => {
        console.log("SW registration failed: ", registrationError);

        // Fallback: try to unregister any problematic service workers
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              console.log("Problematic service worker unregistered");
              window.location.reload();
            });
          });
        }
      });

    // Add offline/online event listeners for debugging
    window.addEventListener("online", () => {
      console.log("App is online");
      wb.messageSW({ type: "NETWORK_ONLINE" });
    });

    window.addEventListener("offline", () => {
      console.log("App is offline");
      wb.messageSW({ type: "NETWORK_OFFLINE" });
    });
  } else {
    console.log("Service workers are not supported in this browser");
  }
}
