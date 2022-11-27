<template>
  <div id="image2">
    <div class="login-page mt-5">
      <transition name="fade">
        <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <Form class="container border border-dark form-group bg-light">
              <h1>Sign Up</h1>

              <Field
                type="email"
                name="email"
                class="form-control border-dark mt-3"
                placeholder="Email"
                required
                :rules="validateEmail"
                v-model="emailReg"
              />
              <p><ErrorMessage name="email" class="errmsg" /></p>

              <Field
                type="password"
                name="password"
                class="form-control border-dark mt-2"
                placeholder="Password"
                required
                :rules="validatePassword"
                v-model="passwordReg"
              />
              <p><ErrorMessage name="password" class="errmsg" /></p>

              <Field
                type="password"
                name="confpassword"
                class="form-control border-dark mt-2"
                placeholder="Confirm Password"
                required
                :rules="validateConfPassword"
                v-model="confirmReg"
              />
              <p><ErrorMessage name="confpassword" class="errmsg" /></p>

              <button
                type="submit"
                class="btn btn-primary border-dark mt-2"
                @click="doRegister"
              >
                Submit
              </button>
              <p>
                Already have an account?
                <router-link to="/login" @click="forLogin"
                  >Login in here</router-link
                >
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
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
    };
  },

  methods: {
    forLogin() {
      this.$router.push("/login");
    },

    //validate email
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "*This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "*This field must be a valid email";
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
          return "*Enter valid password";
        }
      } else {
        return "*Password required";
      }
    },

    //validate confirm password
    validateConfPassword() {
      if (this.passwordReg === this.confirmReg) {
        return true;
      } else {
        return "*Password doesnot match";
      }
    },

    doRegister() {
      if (
        this.emailReg === "" ||
        this.passwordReg === "" ||
        this.confirmReg === ""
      ) {
        this.emptyFields = true;
      } else {
        alert("You are now registered");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.errmsg {
  color: red;
}
#image2 {
  background-image: url("https://img.freepik.com/free-vector/collection-asian-women-different-ages_23-2147850765.jpg?size=338&ext=jpg&ga=GA1.2.552790662.1664449862");
  margin-top: 100px;
}
</style>
