// Menu Hambúrguer: início
let show = true; 

// Selecionando as classes: início
const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
// Selecionando as classes: fim
// Adcionando evento clique e interagindo com a classe "on": início
menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})
// Adcionando evento clique e interagindo com a classe "on": fim
// Menu Hambúrguer: fim