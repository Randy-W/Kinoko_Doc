<script>
import GoodsDisplay from '/components/GoodsDisplay.vue'

export default {
  components: { GoodsDisplay },
  data() {
    return {
      products: [
        {
          img: '../goods/菌菌吧唧.png',
          title: '菌菌吧唧',
          price: 10
        },
        {
          img: '../goods/菌菌吧唧2.png',
          title: '菌菌吧唧2 75mm',
          price: 15
        },
        {
          img: '../goods/菌菌立牌.png',
          title: '立牌',
          price: 20
        },
        {
          img: '../goods/菌菌钥匙扣.png',
          title: '钥匙扣',
          price: 10
        },
        {
          img: '../goods/旋转立牌.png',
          title: '旋转立牌',
          price: 15
        }
      ]
    }
  },
  methods: {
    handleItemClick(item) {
      console.log('点击商品:', item)
      // 跳转详情页逻辑
    }
  }
}
</script>

<goods-display 
    :goods-list="products"
    @item-click="handleItemClick"
  />