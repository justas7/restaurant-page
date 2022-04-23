import HotDog from "../images/hotdog.svg";

const displayNav = function () {
  const navContainer = document.createElement("div");
  const ul = document.createElement("ul");
  const content = document.getElementById("content");
  const p = document.createElement("p");
  const img = new Image();
  img.src = HotDog;
  p.textContent = "Frank's Frankfurters";
  navContainer.classList.add("nav");

  for (let i = 1; i <= 4; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
  }

  ul.children[1].textContent = "Home";
  ul.children[2].textContent = "Menu";
  ul.children[3].textContent = "Contacts";
  ul.children[0].appendChild(img);
  ul.children[0].appendChild(p);

  navContainer.appendChild(ul);
  content.appendChild(navContainer);
  return ul;
};

export default displayNav;
