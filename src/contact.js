export default function loadContactPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const headline = document.createElement("h2");
  headline.textContent = "Contact Us";
  headline.style.textAlign = "center";

  const address = document.createElement("p");
  address.textContent = "123 Gourmet Street, Flavor Town, USA";
  address.style.textAlign = "center";

  const phone = document.createElement("p");
  phone.textContent = "Phone: (123) 456-7890";
  phone.style.textAlign = "center";

  content.appendChild(headline);
  content.appendChild(address);
  content.appendChild(phone);
}
