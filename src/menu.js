export  default  function loadMenuPage(){
     const content = document.getElementById("content");
  content.innerHTML = "";

  const headline = document.createElement("h2");
  headline.textContent = "Our Menu";
  headline.style.textAlign = "center";

  const menuList = document.createElement("ul");
  menuList.style.listStyle = "none";
  menuList.style.textAlign = "center";
  menuList.style.padding = "0";

  const items = ["Spaghetti Carbonara", "Grilled Salmon", "Caesar Salad", "Cheeseburger"];
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.margin = "10px 0";
    menuList.appendChild(li);
  });

  content.appendChild(headline);
  content.appendChild(menuList);
}