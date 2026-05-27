import { useEffect, useState } from "react";
import { log } from "../utils/log";

export const usePWAStatus = () => {
  const [isOfflineReady, setIsOfflineReady] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const handleOfflineReady = () => {
        log("App is ready for offline use! 🎉");
        setIsOfflineReady(true);
      };

      window.addEventListener("sw-offline-ready", handleOfflineReady);

      if (navigator.serviceWorker.controller) {
        log("Service worker already controlling - app ready for offline");
        setIsOfflineReady(true);
      }

      return () => {
        window.removeEventListener("sw-offline-ready", handleOfflineReady);
      };
    }
  }, []);

  return isOfflineReady;
};
