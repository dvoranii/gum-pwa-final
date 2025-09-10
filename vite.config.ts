import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
            },
          ],
        ],
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      scope: "/",
      base: "/",
      includeAssets: [
        "favicon.ico",
        "icon-512.png",
        "icon-196.png",
        "manifest.json",
        "fonts/Gotham-BlackIta.otf",
        "fonts/Gotham-Bold.otf",
        "fonts/Gotham-BoldIta.otf",
        "fonts/Gotham-Book.otf",
        "fonts/Gotham-BookIta.otf",
        "fonts/Gotham-Light.otf",
        "fonts/Gotham-LightIta.otf",
        "fonts/Gotham-Medium.otf",
        "fonts/Gotham-MediumIta.otf",
        "fonts/Gotham-Thin.otf",
        "fonts/Gotham-ThinIta.otf",
        "fonts/Gotham-Ultra.otf",
        "fonts/Gotham-UltraIta.otf",
        "fonts/Gotham-XLight.otf",
        "fonts/Gotham-XLightIta.otf",
      ],
      workbox: {
        // This is the correct way to handle specific SPA routes.
        // The `precache` array is automatically populated with the build artifacts.
        // We use runtime caching with `NetworkFirst` to ensure these
        // pages are cached on first visit.
        // The `MapsFallback` ensures that for any URL not in the cache,
        // the app's `index.html` is served, which then loads the React SPA.

        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        globPatterns: [
          "**/*.{js,css,html,ico,webmanifest,json}",
          "assets/**/*",
        ],
        navigateFallback: "/index.html",
        navigateFallbackDenylist: [/^((?!-page-|-service-worker).)*$/],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,

        runtimeCaching: [
          // This rule handles all your SPA routes that are not static assets.
          // It will cache them using a `NetworkFirst` strategy.
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "app-pages-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          // CRITICAL: Fonts
          {
            urlPattern: /\.(?:otf|ttf|woff|woff2|eot)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "fonts-cache",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
          // CRITICAL: Images
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp|gif|ico)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets",
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
});
