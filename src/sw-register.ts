import { Workbox } from "workbox-window";

export function registerSW(): void {
  if ("serviceWorker" in navigator) {
    console.log("📦 Service Worker supported, registering...");

    const wb = new Workbox("/sw.js");

    // Show a prompt to user when new SW is waiting
    const showSkipWaitingPrompt = (): void => {
      console.log("New service worker available");
      if (confirm("New version available! Reload to update?")) {
        wb.messageSW({ type: "SKIP_WAITING" });
      }
    };

    wb.addEventListener("installed", (event) => {
      if (!event.isUpdate) {
        console.log("✅ Service worker installed for the first time");

        // Check if SW is active using the proper method
        wb.active
          .then((activeSW) => {
            if (activeSW) {
              console.log("🔄 First install - reloading to activate SW");
              window.location.reload();
            }
          })
          .catch((error) => {
            console.log("Error checking active SW:", error);
          });
      } else {
        console.log("🔄 Service worker updated");
      }
    });

    wb.addEventListener("waiting", showSkipWaitingPrompt);

    wb.addEventListener("controlling", () => {
      console.log("🎯 Service worker is now controlling the page");
    });

    wb.addEventListener("activated", (event) => {
      console.log("🚀 Service worker activated", event);
    });

    // Handle service worker messages
    wb.addEventListener("message", (event) => {
      if (event.data && event.data.type === "CACHE_UPDATED") {
        console.log("Cache updated, reloading page...");
        window.location.reload();
      }

      if (event.data && event.data.type === "SKIP_WAITING") {
        console.log("Skipping waiting - reloading");
        window.location.reload();
      }
    });

    wb.register()
      .then((registration: ServiceWorkerRegistration | undefined) => {
        if (registration) {
          console.log("✅ SW registered successfully");

          // Check if there's a waiting service worker
          if (registration.waiting) {
            console.log("Service worker waiting to activate");
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
          }

          // Listen for controller changes
          navigator.serviceWorker.addEventListener("controllerchange", () => {
            console.log("🔄 Controller changed, reloading page...");
            window.location.reload();
          });

          // Listen for when SW becomes active
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "activated") {
                  console.log("🔄 New SW activated, reloading...");
                  window.location.reload();
                }
              });
            }
          });
        } else {
          console.log("Service worker registration returned undefined");
        }
      })
      .catch((registrationError: Error) => {
        console.log("❌ SW registration failed: ", registrationError);

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

    // Add offline/online event listeners
    window.addEventListener("online", () => {
      console.log("App is online");
      wb.messageSW({ type: "NETWORK_ONLINE" });
    });

    window.addEventListener("offline", () => {
      console.log("App is offline");
      wb.messageSW({ type: "NETWORK_OFFLINE" });
    });
  } else {
    console.log("❌ Service workers are not supported in this browser");
  }
}

// Utility to check SW status
export function checkSWStatus(): void {
  if ("serviceWorker" in navigator) {
    console.log("🔍 SW Status Check:");
    console.log("Controller:", !!navigator.serviceWorker.controller);

    navigator.serviceWorker.ready.then(() => {
      console.log("SW ready state resolved");
    });

    navigator.serviceWorker.getRegistration().then((registration) => {
      if (registration) {
        console.log("Registration found");
        console.log("Active:", !!registration.active);
        console.log("Waiting:", !!registration.waiting);
        console.log("Installing:", !!registration.installing);
      } else {
        console.log("No registration found");
      }
    });
  }
}

// Simple check if SW is controlling
export function isSWControlling(): boolean {
  return !!navigator.serviceWorker?.controller;
}
