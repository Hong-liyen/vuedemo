import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/index.vue";
import Product from "./views/product/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product",
      name: "product",
      component: Product
    },
    {
      path: "/news",
      name: "news",
      component: () =>
        import("./views/news/index.vue")
    },
    {
      path: "/culture",
      name: "culture",
      component: () =>
        import("./views/culture/index.vue")
    },
    {
      path: "/mobile",
      name: "mobile",
      component: () =>
        import("./views/mobile/index.vue")
    },
    {
      path: "/cooperation",
      name: "cooperation",
      component: () =>
        import("./views/cooperation/index.vue")
    }
  ]
});
