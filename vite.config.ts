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
        // CRITICAL: Increase cache size limit for fonts and assets
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB

        // CRITICAL: More specific glob patterns
        globPatterns: [
          "**/*.{js,css,html,ico,webmanifest,json}",
          "**/*.{png,svg,webp,jpg,jpeg,gif}",
          "**/*.{otf,ttf,woff,woff2,eot}",
          "assets/**/*", // Explicitly include assets folder
        ],

        // CRITICAL: Navigation fallback for offline SPA
        navigateFallback: "/index.html",
        navigateFallbackAllowlist: [/^((?!\.(?:json|xml|txt|ico)$).)*$/], // Better regex

        // CRITICAL: Force immediate activation
        skipWaiting: true,
        clientsClaim: true,

        // CRITICAL: Clean up old caches
        cleanupOutdatedCaches: true,

        runtimeCaching: [
          // CRITICAL: HTML pages - Network First with fast timeout
          {
            urlPattern: /\.(?:html|htm)$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
              networkTimeoutSeconds: 3, // Fallback to cache quickly
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          // CRITICAL: CSS files
          {
            urlPattern: /\.(?:css)$/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "css-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 60, // 60 days
              },
            },
          },
          // CRITICAL: JavaScript files
          {
            urlPattern: /\.(?:js)$/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "js-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 60, // 60 days
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
          {
            urlPattern: "/important-page",
            handler: "NetworkFirst",
            options: {
              cacheName: "important-pages",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
        type: "module",
      },
    }),
  ],
});
