import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AutoEncoder",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Notebook", link: "/notebook" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [{ text: "Notebook", link: "/notebook" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Prakashdeveloper03/AutoEncoder",
      },
    ],
  },
});
