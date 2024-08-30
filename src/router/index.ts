import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetailView,
    meta: { breadcrumb: "DTF Sheet" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
