const GITHUB_REPO = 'docs-v1';
const BASE_URL = '/';
const GITHUB_ORG = 'monster-js';

module.exports = {
  title: 'MonsterJS',
  tagline: 'Simple but powerful javascript framework.',
  url: 'https://monster-js.org',
  baseUrl: BASE_URL,
  onBrokenLinks: 'throw',
  favicon: '/img/favicon.ico',
  organizationName: GITHUB_ORG,
  projectName: GITHUB_REPO,
  themeConfig: {
    navbar: {
      title: 'MonsterJS',
      logo: {
        alt: 'MonsterJS logo',
        src: '/img/monster.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/' + GITHUB_ORG,
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/' + GITHUB_ORG,
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/' + GITHUB_ORG,
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/' + GITHUB_ORG,
            },
          ],
        },
      ],
      copyright: `Copyright (c) 2020 Darius Bualan Jr.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/' + GITHUB_ORG + '/' + GITHUB_REPO + '/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};