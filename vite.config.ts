import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
        },
        workbox: {
          globPatterns: [],
          runtimeCaching: [],
        },
        includeAssets: ['favicon.ico', 'robots.txt'],
        manifest: {
          name: 'Zhoost',
          short_name: 'Zhoost',
          description: 'Zhoost',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/assets/images/pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png',
            },
            {
              src: '/assets/images/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/assets/images/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/assets/images/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 6545,
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    resolve: {
      alias: {
        src: '/src',
      },
    },
  };
});
