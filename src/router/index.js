import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/day",
    name: "Journée",
    component: import("../views/Day.vue"),
  },
  {
    path: "/event",
    name: "Evènement",
    component: import("../views/Event.vue"),
  },
  {
    path: "/help",
    name: "Aide",
    component: import("../views/Help.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

// Change the name of the current page
router.beforeEach((to, from, next) => {
  document.title = `Autonami - ${to.name}`;
  next();
});

export default router;
