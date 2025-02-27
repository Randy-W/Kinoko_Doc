---
layout: page
---

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
          image: '../goods/菌菌吧唧2.png',
          title: '菌菌吧唧 75mm',
          description: '75mm的大吧唧，很好看\n美工最在线的一集',
          price: 15,
        },
        {
          image: '../goods/菌菌吧唧.png',
          title: '菌菌吧唧',
          description: '58mm的吧唧\n是菌菌最早的实物周边之一',
          price: 10,
        },
        {
          image: '../goods/菌菌立牌.png',
          title: '大立牌',
          description: '长宽均超过10cm的亚克力立牌',
          price: 20,
        },
        {
          image: '../goods/菌菌钥匙扣.png',
          title: '钥匙扣',
          description: '5cm大小的钥匙扣\n正反双面印，可以看到菌菌的皮鼓',
          price: 10,
        },
        {
          image: '../goods/菌菌鼓面罩.jpg',
          title: '鼓面罩',
          description: '正好适合街机太鼓鼓面的保护罩\n也许可以防止路人打扰游玩',
          price: 20,
        },
        {
          image: '../goods/旋转立牌.png',
          title: '旋转立牌',
          description: `7cm的旋转立牌，底座有轴承可以转。
我们需要更多的菌菌！`,
          price: 99.99,
        },
      ],
    };
  },
};
</script>


<ProductGallery :products="products"  />
