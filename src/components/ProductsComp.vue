<template>
  <div class="pdt">
    <div
      v-for="product in products"
      :key="product.id"
      class="card"
      style="width: 25rem"
    >
      <img
        class="card-img-top"
        :src="product.productImageURL"
        width="50"
        height="250"
        alt="product image"
      />
      <div class="card-body">
        <h3 class="card-header">Name: {{ product.productName }}</h3>
        <p class="card-text">
          <strong>Details:</strong> {{ product.productDescription }}
        </p>
        <h5 class="card-footer">Price: Rs {{ product.productPrice }}</h5>

        <button class="btn btn-primary" @click="addToCart(product)">
          Add to cart
        </button>
      </div>
    </div>
  </div>

  <!-- <div>
    <cart-comp :selectedProduct="selectedProduct" />
  </div> -->
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  methods: {
    addToCart(addProduct) {
      // console.log("productID on clicked product is ", ID);
      // let tempProd = this.products.find((product) => product.id === ID);
      // console.log("tempProd", tempProd);
      // this.$store.state.selectedProduct = tempProd;
      // console.log("selectedProduct", this.$store.state.selectedProduct);
      // this.$store.state.selectedProduct.thatproduct =
      //   !this.$store.state.selectedProduct.thatproduct;

      // if (this.selectedProduct) {
      //   this.selectedProduct.qty++;
      // }

      // console.log("productID on clicked product is ", ID);
      // let selectedProduct = this.products.find((product) => product.id === ID);
      // console.log("selectedProduct", selectedProduct);
      console.log("newProduct", addProduct);
      this.$store.dispatch("addItem", addProduct);

      this.$router.push("/cart");
    },
  },
};
</script>

<style>
.pdt {
  display: flex;
  margin-top: 80px;
}
</style>
