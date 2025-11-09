import { defineConfig, defineProject } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'url';
import path from 'node:path';
import { playwright } from '@vitest/browser-playwright';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    coverage: {
      provider: 'istanbul',
      enabled: true,
    },
    projects: [
      {
        test: {
          name: 'unit',
          environment: 'jsdom',
          setupFiles: './src/test/setup.ts',
          include: ['src/**/*.{test,spec}.ts'],
        },
      },
      defineProject({
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
            storybookScript: 'pnpm storybook --no-open',
          }),
        ],
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
          },
        },
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      }),
    ],
  },
});
