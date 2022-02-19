import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

// set localStorage

const user = {
  name: "Robert",
};

localStorage.setItem("user", JSON.stringify(user));
