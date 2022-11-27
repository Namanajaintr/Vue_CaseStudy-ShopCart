<template>
  <div id="image">
    <div class="login-page mt-5">
      <transition name="fade">
        <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <Form class="container border border-dark form-group bg-light">
              <h1>Login In</h1>

              <Field
                type="email"
                name="email"
                class="form-control border-dark mt-3"
                placeholder="Email"
                required
                :rules="validateEmail"
                v-model="emailLogin"
              />
              <p><ErrorMessage name="email" class="errmsg" /></p>

              <Field
                type="password"
                name="password"
                class="form-control border-dark mt-2"
                placeholder="Password"
                required
                :rules="validatePassword"
                v-model="passwordLogin"
              />
              <p><ErrorMessage name="password" class="errmsg" /></p>

              <button
                type="submit"
                class="btn btn-primary mt-2 border-dark"
                @click="doLogin"
              >
                Submit
              </button>
              <p>
                Don't have an account?
                <router-link to="/signup" @click="forSignup"
                  >Sign up here</router-link
                >
              </p>
              <p>
                <router-link to="/signup">Forgot your password?</router-link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
      emptyFields: false,
    };
  },

  methods: {
    forSignup() {
      this.$router.push("/signup");
    },

    //validate email
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },

    //validate password
    validatePassword(value) {
      if (value) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passRegex.test(value)) {
          return true;
        } else {
          return "*enter valid password";
        }
      } else {
        return "*password required";
      }
    },

    doLogin() {
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        this.$store.commit("login");
        alert("You are now logged in");
        this.$router.push("/products");
      }
    },
  },
};
</script>

<style>
.errmsg {
  color: red;
}

#image {
  background-image: url("https://img.freepik.com/premium-vector/illustration-indian-couple-indian-traditional-dress_96037-542.jpg?size=626&ext=jpg&ga=GA1.2.552790662.1664449862");
  margin-top: 100px;
}
</style>
