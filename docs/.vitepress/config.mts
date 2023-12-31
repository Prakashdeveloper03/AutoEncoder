import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AutoEncoder",
  cleanUrls: true,
  head: [["link", { rel: "icon", type: "image/svg", href: "/icon.svg" }]],

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Team", link: "/team" },
      { text: "Guide", link: "/guide" },
      { text: "About", link: "/about" },
      { text: "Notebook", link: "/notebook" },
    ],

    logo: { src: "/icon.svg", width: 24, height: 24 },

    sidebar: [
      {
        text: "Sections",
        items: [
          { text: "Team", link: "/team" },
          { text: "Guide", link: "/guide" },
          { text: "About", link: "/about" },
          { text: "Notebook", link: "/notebook" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Prakashdeveloper03/AutoEncoder",
      },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/Prakashdeveloper03/AutoEncoder/edit/main/docs/:path",
    },

    lastUpdated: true,

    footer: {
      message: "Thank you for visiting ❤",
      copyright: "Copyright © 2023 by Siva Prakash",
    },
  },
});
