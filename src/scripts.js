function menuOnOff(){
    document
        .querySelector(".menu-section")
        .classList
        .toggle("on")
};
// function pageOnOff(){
//     document
//         .querySelector("pageSelect1")
//         .classList
//         .tog
// }


export {menuOnOff};

/*let show = true; 
let optionShow = false;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

const menuOption = document.querySelector(".contato")

menuOption.addEventListener("click", () => {
    if(!show) {
        document.body.style.overflow = "initial"
        menuSection.classList.toggle("on", show)
        show = !show;
    }
    
    
})

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    
    show = !show;
})*/