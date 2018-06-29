import Vue from "vue";
import Router from "vue-router";
import Create from "./views/Create.vue";
import Collection from "./views/Collection.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "create",
      component: Create
    },
    {
      path: "/collection",
      name: "collection",
      component: Collection
    }
  ]
});
