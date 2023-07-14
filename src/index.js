import createHeadline from "./headline";
import createImage from "./image";
import createDescription from "./description";

function loadHomePage() {
  const contentDiv = document.getElementById("content");

  contentDiv.appendChild(createHeadline());
  contentDiv.appendChild(createImage());
  contentDiv.appendChild(createDescription());
}

// Call the function when the page loads
loadHomePage();
