// usePWAStatus.ts
import { useEffect, useState } from "react";

export const usePWAStatus = () => {
  const [isOfflineReady, setIsOfflineReady] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // Listen for custom event from sw-register
      const handleOfflineReady = () => {
        console.log("App is ready for offline use! 🎉");
        setIsOfflineReady(true);
      };

      window.addEventListener("sw-offline-ready", handleOfflineReady);

      // Check if service worker is already controlling on mount
      if (navigator.serviceWorker.controller) {
        console.log(
          "Service worker already controlling - app ready for offline"
        );
        setIsOfflineReady(true);
      }

      return () => {
        window.removeEventListener("sw-offline-ready", handleOfflineReady);
      };
    }
  }, []);

  return isOfflineReady;
};
