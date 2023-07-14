import "./styles.css";
import createHeadline from "./headline.js";
import createImage from "./image.js";
import createDescription from "./description.js";
import createContact from "./contact.js";
import createMenu from "./menu.js";
import backgroundImage from "./img/wallpaper1.png";

function loadHomePage() {
  const contentDiv = document.getElementById("content");

  contentDiv.appendChild(createHeadline());
  contentDiv.appendChild(createImage());
  contentDiv.appendChild(createDescription());
}

function clearContent() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

//Adds background image
document.body.style.backgroundImage = `url(${backgroundImage})`;
document.body.style.backgroundSize = "auto";
document.body.style.backgroundRepeat = "repeat";
document.body.style.backgroundPosition = "left top";

document.querySelector("#home-tab").addEventListener("click", () => {
  clearContent();
  loadHomePage();
});

document.querySelector("#contact-tab").addEventListener("click", () => {
  clearContent();
  const contactContent = createContact();
  document.querySelector("#content").appendChild(contactContent);
});

document.querySelector("#menu-tab").addEventListener("click", () => {
  clearContent();
  const menuContent = createMenu();
  document.querySelector("#content").appendChild(menuContent);
});

// Call the function when the page loads
loadHomePage();
