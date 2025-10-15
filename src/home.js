export default function loadHomePage() {
  const content = document.getElementById("content");

 
  content.innerHTML = "";

  
  const image = document.createElement("img");
  image.src = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80";
  image.alt = "Restaurant";
  image.style.width = "100%";
  image.style.maxWidth = "800px";
  image.style.display = "block";
  image.style.margin = "0 auto";
  image.style.borderRadius = "8px";


  const headline = document.createElement("h2");
  headline.textContent = "Welcome to The Gourmet Haven";
  headline.style.textAlign = "center";
  headline.style.marginTop = "20px";
  headline.style.fontFamily = "Arial, sans-serif";
  headline.style.color = "#333";

 
  const description = document.createElement("p");
  description.textContent =
    "At The Gourmet Haven, we serve delicious meals crafted with love and the finest ingredients. " +
    "Our chefs combine traditional flavors with modern techniques to create an unforgettable dining experience. " +
    "Come join us for a taste of perfection!";
  description.style.textAlign = "center";
  description.style.maxWidth = "700px";
  description.style.margin = "10px auto";
  description.style.fontFamily = "Arial, sans-serif";
  description.style.color = "#555";
  description.style.lineHeight = "1.6";


  content.appendChild(image);
  content.appendChild(headline);
  content.appendChild(description);
}
