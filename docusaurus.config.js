const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Flarum Documentation',
  tagline: 'Forums made simple.',
  url: 'https://flarum.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'flarum',
  projectName: 'flarum',

  i18n: {
    defaultLocale: 'en',
    locales: ['vi'],
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
      }
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath : '/',
          sidebarPath: './sidebars.js',
          sidebarCollapsible: false,
          editUrl: 'https://github.com/flarum/docs/tree/master',
          lastVersion: 'current',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      logo: {
        alt: 'Flarum Docs Logo',
        src: 'img/logotntech.jpg',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Flarum. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['php', 'bash'],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-remove-line',
          line: 'remove-next-line',
          block: { start: 'remove-start', end: 'remove-end' },
        },
        {
          className: 'code-block-insert-line',
          line: 'insert-next-line',
          block: { start: 'insert-start', end: 'insert-end' },
        },
      ],
    },
    algolia: {
      appId: 'QHP1YG60G0',
      apiKey: 'dcfd7f09bbede3329311afd89da074b7',
      indexName: 'flarum',
      contextualSearch: true,
    }
  }),
};
