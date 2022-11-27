import { createRouter, createWebHistory } from "vue-router";

import store from "./store";
import HomeComp from "./components/HomeComp";
import LoginComp from "./components/LoginComp";
import SignupComp from "./components/SignupComp";
import ProductsComp from "./components/ProductsComp";
import CartComp from "./components/CartComp";
import ShipmentComp from "./components/ShipmentComp";

let router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/home",
      component: HomeComp,
    },
    {
      path: "/login",
      component: LoginComp,
    },
    {
      path: "/signup",
      component: SignupComp,
    },
    {
      path: "/products",
      component: ProductsComp,
    },
    {
      path: "/cart",
      component: CartComp,
    },
    {
      path: "/ship",
      component: ShipmentComp,
    },
  ],
});

// protection router guard - protect the particular route

router.beforeEach(async (to) => {
  // to: the target route location being navigated to.
  // from: the current route location  being navigated away from.
  // console.log("to", to);
  // console.log("from", from);
  // explicitly return false will cancel the navigation
  //return true
  if (to.path === "/products" && store.state.isAuthenticated) {
    return true;
  } else if (to.path === "/products" && !store.state.isAuthenticated) {
    return "/login";
  } else if (to.path === "/cart" && store.state.isAuthenticated) {
    return true;
  } else if (to.path === "/cart" && !store.state.isAuthenticated) {
    return "/login";
  }
});
export default router;
