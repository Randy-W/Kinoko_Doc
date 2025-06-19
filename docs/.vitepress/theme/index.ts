// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { h, type Plugin } from 'vue';
import { useData, useRoute } from 'vitepress';
import type { EnhanceAppContext } from 'vitepress';



import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import {  
  NolebaseHighlightTargetedHeading,  
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css' //*
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
  InjectionKey
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'


import Hero from '../theme/Layout.vue';
import NCard from './components/NCard.vue';

import './custom.css';
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 'aside-outline-before': () => h(ShareButton),
      // 'home-hero-before': () => h(Hero),
      // 'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'layout-top': () => [h(NolebaseHighlightTargetedHeading)],
    })
  },
  enhanceApp({ app }) {
    app.component('NCard', NCard)
    app.provide(InjectionKey, {
      locales: { // 配置国际化 //
        'zh-CN': { // 配置简体中文 //
          title: { 
            title: '阅读增强插件', 
          } 
        }, 
        'en': { // 配置英文 //
          title: { 
            title: 'Enhanced Readabilities Plugin', 
          } 
        } 
      } 
    } as Options)
  },
  setup() {
    const route = useRoute();
    const { frontmatter } = useData();
    // codeblocksFold({ route, frontmatter }, true, 400);
  }
}