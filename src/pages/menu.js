import Frankfurter1 from "../images/frankfurter1.png";
import Frankfurter2 from "../images/frankfurter2.png";
import Frankfurter4 from "../images/frankfurter4.png";
import Frankfurter5 from "../images/frankfurter5.png";

const products = [
  {
    name: "Sticky cider onion frankfurters",
    price: 6,
    info: "Sweet-and-sticky take on a frankfurters, topped with caramelised onions cooked in cider.",
    img: Frankfurter1,
  },
  {
    name: "Honey-mustard frankfurters",
    price: 5,
    info: "Frankfurters with our two-cheese, honey-and-mustard topping.",
    img: Frankfurter2,
  },
  {
    name: "Maple-glazed frankfurters",
    price: 6,
    info: "Maple-glazed frankfurters with mustardy onions.",
    img: Frankfurter4,
  },
  {
    name: "Frankfurters with Roasted Red Peppers",
    price: 7,
    info: "Frankfurters with Roasted Red Peppers, cream cheese, jalapenos, and onions.",
    img: Frankfurter5,
  },
];

const displayMenu = function () {
  const content = document.getElementById("content");
  const menu = document.createElement("div");

  products.forEach((product) => {
    const imgContainer = document.createElement("div");
    const menuItem = document.createElement("div");
    const infoContainer = document.createElement("div");
    const h = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const img = new Image();

    img.src = product.img;
    h.textContent = product.name;
    p1.textContent = product.info;
    p2.textContent = `${product.price}$`;

    menu.classList.add("menu");
    imgContainer.classList.add("imgContainer");
    menuItem.classList.add("menuItem");
    infoContainer.classList.add("infoContainer");

    menuItem.appendChild(h);
    menuItem.appendChild(imgContainer);
    menuItem.appendChild(infoContainer);
    imgContainer.appendChild(img);
    infoContainer.appendChild(p1);
    infoContainer.appendChild(p2);
    menu.appendChild(menuItem);
    content.appendChild(menu);
  });

  //   menu.textContent = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Error, reprehenderit consequatur!
  //   Quibusdam, quidem in? Ducimus accusamus dicta doloremque facilis vel?`;
};

export default displayMenu;
