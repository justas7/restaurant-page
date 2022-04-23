import Map from "../images/map.jpeg";

const content = document.getElementById("content");
const contacts = document.createElement("div");
const info = document.createElement("div");
const img = new Image();

const displayContacts = function () {
  img.src = Map;

  contacts.appendChild(img);
  contacts.appendChild(info);
  contacts.classList.add("contacts");
  content.appendChild(contacts);
};

const removeContacts = function () {
  contacts.remove();
  info.remove();
  img.remove();
};

export { removeContacts, displayContacts };
