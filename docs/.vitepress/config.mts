import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "菌菌帮助文档",
  description: "菌菌帮助文档",
  // base: '/Kinoko_Doc/',
  markdown: {
    theme: {
        dark: 'dracula-soft',
        light: 'github-dark',
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '概览',
        items: [
          { text: '介绍', link: '/quick_start/introduction' },
        ]
      },
      {
        text: '太鼓功能',
        items: [
          { text: '查歌', link: '/taiko/search' },
          { text: '别名查歌', link: '/taiko/alia-search' },
          { text: '歌曲位置', link: '/taiko/song-location' },
          { text: '段位', link: '/taiko/dani' },
          { text: '难易度表', link: '/taiko/dondernote' },
          { text: '小游戏', link: '/taiko/mini-game' },
          { text: '查鼓点', link: '/taiko/find-arcades' },

        ]
      }
    ],
  }
})
