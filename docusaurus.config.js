module.exports = {
  title: 'MunsterJS',
  tagline: 'Simple but powerful javascript framework.',
  url: 'https://munsterjs.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  favicon: '/img/favicon.ico',
  organizationName: 'monster-js',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'MunsterJS',
      logo: {
        alt: 'MunsterJS logo',
        src: '/img/munster.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/monster-js',
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
              href: 'https://stackoverflow.com/questions/tagged/monsterjs',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/monster-js',
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
              href: 'https://github.com/monster-js',
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
          editUrl: 'https://github.com/monster-js/docs-v1/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};