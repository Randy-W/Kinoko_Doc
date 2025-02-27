---
layout: page
outline: false
---



<style>
.full-width-container {
  /* 基础响应式 */
  max-width: 90vw;  /* 防止溢出视口 */
  margin: 5% 5% 5% 5%;
  
  }
</style>

<script>
import ProductGallery from '/components/ProductDisplay.vue';

export default {
  name: 'ParentComponent',
  components: {
    ProductGallery,
  },
  data() {
    return {
      products: [
        {
          image: '../goods/菌菌吧唧2.jpg',
          title: '菌菌吧唧 75mm',
          description: '75mm的大吧唧，很好看\n美工最在线的一集',
          price: 15,
          buyLink:'https://pages.goofish.com/sharexy?userid=6vlVYV7BQgZdy4wDZfjobA==&bft=personal&bfp'
        },
        {
          image: '../goods/菌菌吧唧.jpg',
          title: '菌菌吧唧',
          description: '58mm的吧唧\n是菌菌最早的实物周边之一',
          price: 10,
          buyLink:'https://pages.goofish.com/sharexy?userid=6vlVYV7BQgZdy4wDZfjobA==&bft=personal&bfp'
        }, 
        {
          image: '../goods/菌菌立牌.jpg',
          title: '大立牌',
          description: '长宽均超过10cm的亚克力立牌',
          price: 20,
          buyLink:'https://pages.goofish.com/sharexy?userid=6vlVYV7BQgZdy4wDZfjobA==&bft=personal&bfp'
        },
        {
          image: '../goods/菌菌钥匙扣.jpg',
          title: '钥匙扣',
          description: '5cm大小的钥匙扣\n正反双面印，可以看到菌菌的皮鼓',
          price: 10,
          buyLink:'https://pages.goofish.com/sharexy?userid=6vlVYV7BQgZdy4wDZfjobA==&bft=personal&bfp'
        },
        {
          image: '../goods/菌菌鼓面罩.jpg',
          title: '鼓面罩',
          description: '正好适合街机太鼓鼓面的保护罩\n也许可以防止路人打扰游玩',
          price: 20,
          buyLink:'https://pages.goofish.com/sharexy?userid=6vlVYV7BQgZdy4wDZfjobA==&bft=personal&bfp'
        },
        {
          image: '../goods/旋转立牌.jpg',
          title: '旋转立牌',
          description: `7cm的旋转立牌，底座有轴承可以转。
我们需要更多的菌菌！`,
          price: 15,
          buyLink:'https://pages.goofish.com/sharexy?userid=6vlVYV7BQgZdy4wDZfjobA==&bft=personal&bfp'
        },
      ],
    };
  },
};
</script>


<div class="full-width-container">
<ProductGallery :products="products"/>
</div>