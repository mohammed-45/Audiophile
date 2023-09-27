import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import Checkout from "../pages/Checkout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/category/:category",
      name: "CategoryPage",
      component: CategoryPage,
    },
    {
      path: "/product/:product",
      name: "ProductPage",
      component: ProductPage,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
    },
  ],
});

export default router;
