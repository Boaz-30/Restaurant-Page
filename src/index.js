import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

loadHomePage();

const homeBtn = document.getElementById("homebtn")
const menuBtn = document.getElementById("menubtn")
const contactBtn = document.getElementById("contactbtn")

homeBtn.addEventListener("click", loadHomePage);
menuBtn.addEventListener("click", loadMenuPage);
contactBtn.addEventListener("click", loadContactPage);