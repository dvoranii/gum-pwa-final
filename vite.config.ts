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
              fileName: true
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
            "src": "/icon/192x192-icon.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon/512x512-icon.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,otf}']
      },
      devOptions: {
        enabled: true
      }
    })
  ]
});