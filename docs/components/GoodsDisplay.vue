<template>
    <div class="goods-container">
      <div 
        v-for="(item, index) in goodsList" 
        :key="index" 
        class="goods-item"
        @click="handleClick(item)"
      >
        <img :src="item.img" class="goods-image">
        <div class="goods-info">
          <div class="goods-title">{{ item.title }}</div>
          <div class="goods-price">¥{{ item.price.toFixed(2) }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      goodsList: {
        type: Array,
        required: true,
        validator: value => value.every(item => 
          'img' in item && 'title' in item && 'price' in item
        )
      }
    },
    methods: {
      handleClick(item) {
        this.$emit('item-click', item)
      }
    }
  }
  </script>
  
  <style scoped>
  .goods-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
  }
  
  .goods-item {
    width: 220px;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .goods-item:hover {
    transform: translateY(-3px);
  }
  
  .goods-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
  
  .goods-info {
    padding: 12px;
  }
  
  .goods-title {
    font-size: 14px;
    color: #333;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  .goods-price {
    font-size: 18px;
    color: #ff4646;
    margin-top: 8px;
    font-weight: bold;
  }
  </style>