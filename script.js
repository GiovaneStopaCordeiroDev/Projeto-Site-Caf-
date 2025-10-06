const menuHamburguer = document.getElementById("menu-hamburguer");
const navList = document.getElementById("nav-list");

menuHamburguer.addEventListener("click", () => {
    menuHamburguer.toggleAttribute("active");
    navList.classList.toggle("active");
});



