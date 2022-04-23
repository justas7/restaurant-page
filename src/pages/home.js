const displayHome = function () {
  const home = document.createElement("div");
  const h = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const content = document.getElementById("content");
  home.classList.add("home");
  h.textContent = "Frank's Frankurters";

  p1.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, excepturi laboriosam. Est
  pariatur inventore vero harum esse molestias, doloremque ab?`;

  p2.textContent = "Work hours: 24/7";

  home.appendChild(h);
  home.appendChild(p1);
  home.appendChild(p2);
  content.appendChild(home);
};

export default displayHome;
