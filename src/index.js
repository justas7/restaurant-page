import "./styles/normalize.css";
import "./styles/main.css";
import "./styles/home.css";
import "./styles/nav.css";
import "./styles/menu.css";
import "./styles/contacts.css";

import displayNav from "./pages/nav.js";
import { removeHome, displayHome } from "./pages/home.js";
import { removeMenu, displayMenu } from "./pages/menu.js";
import { removeContacts, displayContacts } from "./pages/contacts.js";

const ul = displayNav();

displayHome();

ul.addEventListener("click", function (e) {
  if (e.target.textContent === "Menu") {
    removeHome();
    removeMenu();
    removeContacts();
    displayMenu();
  } else if (e.target.textContent === "Contacts") {
    removeHome();
    removeMenu();
    removeContacts();
    displayContacts();
  } else if (e.target.textContent === "Home") {
    removeHome();
    removeMenu();
    removeContacts();
    displayHome();
  }
});
