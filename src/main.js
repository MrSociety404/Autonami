import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

// set localStorage

const usertry = localStorage.getItem("user");

if (!usertry) {
  const user = {
    name: "Robert",
    contacts: [
      {
        name: "André mon fils",
        phone: "+32 778 65 86 90",
      },
      {
        name: "Joselyne",
        phone: "+32 976 27 80 86",
      },
    ],
  };

  localStorage.setItem("user", JSON.stringify(user));
}
