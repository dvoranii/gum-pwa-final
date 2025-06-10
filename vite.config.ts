import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
            }
          ]
        ]
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico','icon/*.png'],
      manifest: {
        "name": "GUM",
        "short_name": "GUM",
        "description": "GUM e-Detailing Tool",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#000000",
        "icons": [
          {
            "src": "/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "/icon-196.png",
            "sizes": "196x196",
            "type": "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,otf}'],
      },
      devOptions: {
        enabled: false,
        type: 'module'
      },
    })
  ]
});