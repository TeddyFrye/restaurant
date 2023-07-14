// home.js

function createHomePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(createHeadline());
  contentDiv.appendChild(createImage());
  contentDiv.appendChild(createDescription());
}

export default createHomePage;
