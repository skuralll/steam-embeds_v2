import type { StorybookConfig } from '@storybook/react-vite';
import autoStoryGenerator from '@takuma-ru/auto-story-generator';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-backgrounds',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      plugins: [
        autoStoryGenerator.vite({
          preset: 'react',
          imports: ['src/components/**/*.tsx'],
        }),
      ],
    }),
};
export default config;
