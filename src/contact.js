// contact.js

function createContact() {
  const div = document.createElement("div");
  div.classList.add("tab-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  div.appendChild(h1);

  const contact = document.createElement("div");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Phone: 123-456-7890";
  contact.appendChild(phoneNumber);

  const address = document.createElement("p");
  address.textContent = "Address: 123 Main St, Anytown, USA";
  contact.appendChild(address);

  div.appendChild(contact);
  return div;
}

export default createContact;
