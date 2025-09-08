import { Workbox } from "workbox-window";

export function registerSW() {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("/sw.js");

    const showSkipWaitingPrompt = () => {
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

    wb.register()
      .then((registration: ServiceWorkerRegistration | undefined) => {
        if (registration) {
          console.log("SW registered successfully: ", registration);

          if (registration.waiting) {
            console.log("Service worker waiting to activate");
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
          }
        } else {
          console.log("Service worker registration returned undefined");
        }
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  }
}
