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
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}",
          "**/*.{otf,ttf,woff,woff2}",
        ],
        navigateFallback: "/index.html",
        navigateFallbackAllowlist: [/^((?!\.\w+$).)*$/],
        runtimeCaching: [
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
            urlPattern: /\.(?:html)$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: false,
        type: "module",
      },
    }),
  ],
});
