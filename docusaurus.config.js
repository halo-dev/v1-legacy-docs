const darkCodeTheme = require("prism-react-renderer/themes/palenight");
const math = require("remark-math");
const katex = require("rehype-katex");
const mermaid = require("mdx-mermaid");
const VersionsArchived = require("./versionsArchived.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Halo 1.x 文档",
  tagline: "Halo 1.x 的文档站点",
  url: "https://docs.halo.run",
  baseUrl: "/",
  favicon: "img/favicon-96x96.png",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  organizationName: "halo-dev", // Usually your GitHub org/user name.
  projectName: "halo", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/halo-dev/docs/edit/main/",
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [math, mermaid],
          rehypePlugins: [katex],
          lastVersion: "1.6",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Halo 1.x 文档",
        logo: {
          alt: "Halo Logo",
          src: "https://halo.run/upload/2021/03/Adaptive256-463ca9b92e2d40268431018c07735842.png",
        },
        items: [
          {
            href: "https://halo.run",
            label: "官网",
          },
          {
            href: "https://bbs.halo.run",
            label: "论坛",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                label: "Halo 2.x",
                href: "https://docs.halo.run",
              },
              ...Object.entries(VersionsArchived).map(
                ([versionName, versionUrl]) => ({
                  label: versionName,
                  href: versionUrl,
                })
              ),
              {
                to: "/versions",
                label: "All versions",
              },
            ],
          },
          {
            href: "https://github.com/halo-dev/halo",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://gitee.com/halo-dev/halo",
            label: "Gitee",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © 2023 凌霞软件. Built with Docusaurus.`,
        links: [
          {
            title: "关于",
            items: [
              {
                label: "官网",
                href: "https://halo.run",
              },
              {
                label: "应用市场",
                href: "https://halo.run/store/apps",
              },
              {
                label: "GitHub 组织",
                href: "https://github.com/halo-dev",
              },
              {
                label: "Gitee 组织",
                href: "https://gitee.com/halo-dev",
              },
              {
                label: "Server Status",
                href: "https://status.halo.run",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "官方论坛",
                href: "https://bbs.halo.run",
              },
              {
                label: "微信公众号",
                href: "https://halo.run/upload/2021/03/B3C27F16-4890-4633-81CC-20BA4B28F94F-2415126255c749b290312ca22d9bdeb0.jpeg",
              },
              {
                label: "GitHub Issues",
                href: "https://github.com/halo-dev/halo/issues",
              },
              {
                label: "Telegram Channel",
                href: "https://t.me/halo_dev",
              },
              {
                label: "Telegram Group",
                href: "https://t.me/HaloBlog",
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: ".markdown :not(a) > img",
      },
    }),
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  scripts: [
    {
      src: "https://track.halo.run/api/script.js",
      defer: true,
      "data-site-id": "7",
    },
  ],
  stylesheets: [
    {
      href: "https://unpkg.com/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
    },
  ],
};

module.exports = config;
