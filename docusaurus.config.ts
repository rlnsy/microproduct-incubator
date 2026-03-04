import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const REPO_URL = 'https://github.com/TrilemmaFoundation/microproduct-incubator';

const config: Config = {
  title: 'Microproduct Incubator',
  tagline: 'Focused apps that turn data into usable tools and real utility.',
  favicon: 'img/logo.svg',

  url: 'https://microproducts.trilemma.foundation',
  baseUrl: '/',

  organizationName: 'TrilemmaFoundation',
  projectName: 'microproduct-incubator',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${REPO_URL}/edit/main/`,
        },
        blog: false,
        pages: {},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Microproduct Incubator',
      items: [
        {
          to: '/docs/intro/what-is-a-microproduct',
          label: 'Start Here',
          position: 'left',
        },
        {
          to: '/docs/playbook/ideation',
          label: 'Playbook',
          position: 'left',
        },
        {
          to: '/docs/showcase/microproducts',
          label: 'Showcase',
          position: 'left',
        },
        {
          to: '/docs/resources/',
          label: 'Resources',
          position: 'left',
        },
        {
          to: '/docs/contribute/how-to-contribute',
          label: 'Contribute',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: REPO_URL,
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/AS7WMx7Cy2',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trilemma Foundation`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
