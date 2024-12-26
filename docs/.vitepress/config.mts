import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "菌菌帮助文档",
  description: "菌菌帮助文档",
  base: '/Kinoko_Doc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '太鼓功能',
        items: [
          { text: '查歌', link: '/taiko/search' },
          { text: '别名查歌', link: '/taiko/api-examples' },
          { text: '歌曲位置', link: '/taiko/markdown-examples' },
          { text: '段位', link: '/taiko/markdown-examples' },
          { text: '难易度表', link: '/taiko/markdown-examples' },
          { text: '小游戏', link: '/taiko/markdown-examples' },
          { text: '查鼓点', link: '/taiko/markdown-examples' },

        ]
      }
    ],

  }
})
