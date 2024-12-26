---
layout: "home"

hero:
  name: "菌菌帮助文档"
  text: ""
  tagline: 
  actions:
    - theme: brand
      text: 立即查看
      link: /markdown-examples
  image:
      src: /index_logo.png
      alt: logo

features:
  - icon: 🚀
    title: 进步的
    details: 菌菌是紧跟群友需求持续的更新的
  - icon: 🌌
    title: 唯一的
    details: 菌菌是目前唯一的太鼓群Bot
---
<style>
:root {
  /* --vp-home-hero-name-color: transparent; */
  /* --vp-home-hero-name-background: -webkit-linear-gradient(120deg,rgb(97, 155, 255) 55%, #f8332f); */

  --vp-home-hero-image-background-image: linear-gradient(-45deg,rgb(97, 155, 255) 55%, #f8332f 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
