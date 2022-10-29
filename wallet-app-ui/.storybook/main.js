module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-react-router-v6',
    'storybook-addon-styled-component-theme/dist/preset',
    'storybook-addon-intl/register',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['./src/assets', './src/i18n/'],
  previewHead: (head) => `
    ${head}
    <style>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    body {
      padding: 0 !important;
      margin: 0 !important;
      background-color: rgba(26,28,50,1) !important;
    }
</style>
  `,
};
