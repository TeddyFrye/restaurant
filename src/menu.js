// menu.js

function createMenu() {
  const div = document.createElement("div");
  div.classList.add("tab-menu");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  div.appendChild(h1);

  const menu = document.createElement("div");

  const pizza = document.createElement("p");
  pizza.textContent = "Pizza - $10";
  menu.appendChild(pizza);

  const soda = document.createElement("p");
  soda.textContent = "Soda - $5";
  menu.appendChild(soda);

  div.appendChild(menu);

  return div;
}

export default createMenu;
