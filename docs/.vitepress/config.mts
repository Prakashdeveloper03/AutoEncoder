import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AutoEncoder",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Team", link: "/team" },
      { text: "About", link: "/about" },
      { text: "Notebook", link: "/notebook" },
    ],

    head: [
      ["link", { rel: "icon", type: "image/svg", href: "/icon.svg" }],
      ["meta", { name: "theme-color", content: "#ffffff" }],
    ],

    logo: "/icon.svg",

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Team", link: "/team" },
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
