module.exports = {
  title: 'MunsterJS',
  tagline: 'Simple but powerful javascript framework.',
  url: 'https://munsterjs.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  favicon: '/img/favicon.ico',
  organizationName: 'munster-dev',
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
          href: 'https://github.com/munster-dev',
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
              href: 'https://discord.com/invite/munster',
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
              href: 'https://github.com/munster-dev',
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
          editUrl: 'https://github.com/munster-dev/docs/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};