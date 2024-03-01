hamburguer = document.querySelector(".hamburguer");
hamburguer.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

window.sr = ScrollReveal({
    duration: 2500,
    distance: '30px',
    reset: false,
    mobile:false
})

//First Container
sr.reveal(".sub-containers",{delay:200})

sr.reveal(".first-sub-container-img,.first-text-box,.main-title-element,.second-img-box,.third-text-box,.fourth-img-box",{
    delay: 100,
    origin: 'left'
})

/*Segundo Container*/
sr.reveal(".second-sub-container-text,.first-img-box,.second-text-box,.third-img-box,.fourth-text-box",{
    duration: 1000,
    distance: '35px',
    origin: 'right'
})
/*Quarto Container*/
sr.reveal(".first-card,.second-card,.third-card",{
    duration: 1500,
    distance: '35px',
    delay: 200
})

