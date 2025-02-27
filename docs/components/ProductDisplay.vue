<!-- ProductGallery.vue -->
<template>
  <div class="product-gallery">
    <div class="product" v-for="(product, index) in products" :key="index">
      <div class="image-container">
        <img :src="product.image" alt="Product Image" class="product-image" />
      </div>
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-description" style="white-space: pre-wrap;">{{ product.description }}</p>
      <a :href="product.buyLink" class="buy-button" target="_blank" rel="noopener noreferrer">
        ￥{{ product.price.toFixed(2) }}
      </a>
    </div>
  </div>
</template>



<script>
export default {
  name: 'ProductGallery',
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
      validator(value) {
        return value.every(
          (item) =>
            item &&
            typeof item.image === 'string' &&
            typeof item.title === 'string' &&
            typeof item.description === 'string' &&
            typeof item.price === 'number' &&
            typeof item.buyLink === 'string'
        );
      },
    },
  },
};
</script>

<style scoped>
.product-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.product {
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 使容器保持正方形 */
  overflow: hidden;
}

.product-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保持图片比例，确保完整显示 */
  object-position: center; /* 图片居中显示 */
  transform: translate(-50%, -50%);
}

.product-title {
  font-size: 1.2em;
  margin: 10px 0;
  color: #333;
}

.product-description {
  font-size: 0.9em;
  color: #757575;
  margin: 10px 0;
}

.buy-button {
  display: inline-block;
  background-color: #3f92ff;
  color: white;
  padding: 8px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.1em;
  margin-top: 0px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.356); */
}

.buy-button:hover {
  background-color: #3f92ff;
}
</style>
