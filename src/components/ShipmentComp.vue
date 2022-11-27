<template>
  <form class="form border border-primary">
    <h2>Shipment Details</h2>
    <div><br /></div>
    <h4 class="subheading">Customer information</h4>

    <label class="label" for="firstName">First name</label>
    <input
      class="input"
      type="text"
      v-model="form.customer.firstName"
      name="firstName"
      placeholder="Enter your first name"
      required
    />

    <label class="label" for="lastName">Last name</label>
    <input
      class="input"
      type="text"
      v-model="form.customer.lastName"
      name="lastName"
      placeholder="Enter your last name"
      required
    />

    <label class="label" for="email">Email</label>
    <input
      class="input"
      type="text"
      v-model="form.customer.email"
      name="email"
      placeholder="Enter your email"
      required
    />
    <div><br /></div>
    <h4 class="subheading">Shipping details</h4>

    <label class="label" for="fullname">Full name</label>
    <input
      class="input"
      type="text"
      v-model="form.shipping.name"
      name="name"
      placeholder="Enter your shipping full name"
      required
    />

    <label class="label" for="street">Street address</label>
    <input
      class="dinput"
      type="text"
      v-model="form.shipping.street"
      name="street"
      placeholder="Enter your street address"
      required
    />

    <label class="label" for="city">City</label>
    <input
      class="checkout__input"
      type="text"
      v-model="form.shipping.city"
      name="city"
      placeholder="Enter your city"
      required
    />

    <label class="label" for="postalZipCode">Postal/Zip code</label>
    <input
      class="input"
      type="text"
      v-model="form.shipping.postalZipCode"
      name="postalZipCode"
      placeholder="Enter your postal/zip code"
      required
    />
    <div><br /></div>
    <h4 class="subheading">Payment information</h4>

    <label class="label" for="cardNum">Credit card number</label>
    <input
      class="input"
      type="text"
      name="cardNum"
      v-model="form.payment.cardNum"
      placeholder="Enter your card number"
    />

    <label class="label" for="expMonth">Expiry month</label>
    <input
      class="input"
      type="text"
      name="expMonth"
      v-model="form.payment.expMonth"
      placeholder="Card expiry month"
    />

    <label class="label" for="expYear">Expiry year</label>
    <input
      class="input"
      type="text"
      name="expYear"
      v-model="form.payment.expYear"
      placeholder="Card expiry year"
    />

    <label class="label" for="ccv">CCV</label>
    <input
      class="input"
      type="text"
      name="ccv"
      v-model="form.payment.ccv"
      placeholder="CCV (3 digits)"
    />
    <div><br /></div>
    <div>
      <button class="btn-confirm" @click.prevent="confirmOrder">
        Confirm order
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        customer: {
          firstName: "Namana",
          lastName: "Jain",
          email: "jain@email.com",
        },
        shipping: {
          name: "Namana Jain",
          street: "123 Fake Street",
          city: "Something",

          postalZipCode: "94107",
          country: "US",
        },
        fulfillment: {
          shippingOption: "",
        },
        payment: {
          cardNum: "4242 4242 4242 4242",
          expMonth: "01",
          expYear: "2023",
          ccv: "123",
          billingPostalZipCode: "94107",
        },
      },
    };
  },
  methods: {
    confirmOrder() {
      alert("Thanks for shopping with us");
      this.$router.push("/home");
    },
  },
};
</script>

<style></style>
