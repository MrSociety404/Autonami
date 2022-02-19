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
        id: "8deae8b2-664d-4390-a4ce-ec2da6a91b92",
        name: "Faire le potager",
        date: "2022-02-19",
        heure: "17:00",
        help: "2",
        location: "Jardin",
      },
      {
        id: "d0765838-9d3c-47be-99c9-3cdec2b50c19",
        name: "Boire une bibine",
        date: "2022-02-19",
        heure: "18:00",
        help: "1",
        location: "Maison",
      },
      {
        id: "447ddd14-24c4-40f2-9898-de7d3cec8dfa",
        name: "Regarder le Standart",
        date: "2022-02-19",
        heure: "20:00",
        help: "0",
        location: "Café",
      },
    ],
  };

  localStorage.setItem("user", JSON.stringify(user));
}
