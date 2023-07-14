function createImage() {
  const image = document.createElement("img");
  image.alt = "Charles E. Cheese's";
  image.src =
    "https://cdn.openart.ai/stable_diffusion/734d235a941bc89874026460bd2fce9c46008b0a_2000x2000.webp";
  image.style.width = "100%";
  image.style.height = "auto";

  image.className = "myImage";
  const container = document.createElement("div");
  container.className = "imageContainer";
  container.appendChild(image);
  return container;
}

export default createImage;
