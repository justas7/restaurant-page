import Map from "../images/map.jpeg";

const content = document.getElementById("content");
const contacts = document.createElement("div");
const info = document.createElement("div");
const adress = document.createElement("div");
const phone = document.createElement("div");
const email = document.createElement("div");
const img = new Image();

const displayContacts = function () {
  img.src = Map;
  adress.innerHTML = "Adress: <br>random place";
  email.innerHTML = "Email: <br>frank7@franksfrankfursters.com";
  phone.innerHTML = "Phone: <br> 111 222 333 444";

  info.appendChild(adress);
  info.appendChild(email);
  info.append(phone);
  contacts.appendChild(img);
  contacts.appendChild(info);
  contacts.classList.add("contacts");
  content.appendChild(contacts);
};

const removeContacts = function () {
  while (contacts.firstChild) {
    contacts.removeChild(contacts.firstChild);
  }
  contacts.remove();
};

export { removeContacts, displayContacts };
