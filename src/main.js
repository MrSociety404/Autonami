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
        name: "Mon Petit Ruddy ",
        phone: "+32 778 65 86 90",
      },
      {
        name: "Ma grande Joséphine",
        phone: "+32 976 27 80 86",
      },
    ],
    // HELP : 0 = NON, 1 = BENEVOLE, 2 = FAMILLE
    events: [
      {
        name: "Faire le potager",
        date: "2022-02-19",
        heure: "17:00",
        help: 2,
        location: "Jardin",
      },
      {
        name: "Boire une bibine",
        date: "2022-02-19",
        heure: "18:00",
        help: 1,
        location: "Maison",
      },
      {
        name: "Regarder le Standart",
        date: "2022-02-19",
        heure: "20:00",
        help: 0,
        location: "Café",
      },
    ],
  };

  localStorage.setItem("user", JSON.stringify(user));
}
