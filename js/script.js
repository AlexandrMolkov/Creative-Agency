 "use strict";

// добавляет .webp

function addWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
addWebP(function (support) {
    if (support == true) {
        document.querySelector(`body`).classList.add(`webp`);
        console.log(`support`)
    } else {console.log(`NOTsupport`)}
    
})


const burgerMenu = document.querySelector(`.burger-menu`)

const burger = document.querySelector(`#burger`)
burger.addEventListener(`click`,(e)=>{
    e.preventDefault();
    burger.classList.toggle(`open`)
    burgerMenu.classList.toggle(`show`)
    if(burger.classList.contains(`open`)){
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
})

function overflowControl() {
    if(document.body.offsetWidth < 768 && burger.classList.contains(`open`)){
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
}


window.onresize = function() {
    overflowControl()
}












