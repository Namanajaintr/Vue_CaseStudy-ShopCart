<template>
  <div class="card" style="width: 25rem">
    <div
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      class="card"
      style="width: 18rem"
    >
      <img
        class="card-img-top"
        :src="cartItem.productImageURL"
        width="50"
        height="250"
        alt="product image"
      />
      <div class="card-body">
        <h3 class="card-header">Name: {{ cartItem.productName }}</h3>
        <p class="card-text">Details: {{ cartItem.productDescription }}</p>
        <span class="card-text">
          Qty:
          <input
            v-model="cartItem.qty"
            class="input-qty"
            type="number"
            placeholder="Qty"
            min="1"
          />
        </span>
        <div>
          <br />
        </div>
        <h5 class="card-footer">
          Total Price: Rs
          <!-- {{ totalPrice }} -->
          {{ cartItem.productPrice * cartItem.qty }}
        </h5>
        <div class="card-text">
          <span class="input-group-btn">
            <button @click="deleteFromCart(cartItem)">
              Delete item🗑️<span class="glyphicon glyphicon-trash"></span>
            </button>
          </span>
        </div>
      </div>

      <button class="btn btn-small btn-success" @click="placeOrder()">
        Place Order
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    deleteFromCart(dltproduct) {
      console.log("dltproduct", dltproduct);
      // this.selectedProduct.splice(index, 1);
      this.$store.dispatch("deleteItem", dltproduct);
    },
    placeOrder() {
      this.$router.push("/ship");
      this.cartItem.qty = "";
    },
  },
};
</script>

<style></style>
