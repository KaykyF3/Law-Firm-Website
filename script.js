hamburguer = document.querySelector(".hamburguer");
hamburguer.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

window.sr = ScrollReveal({reset:true})
window.sr = ScrollReveal({mobile:false})

//First Container

sr.reveal(".sub-containers",{
    duration: 1000,
    distance: '35px'
})


sr.reveal(".first-sub-container-img",{
    duration: 1000,
    distance: '35px',
    origin: 'left'
})

/*Segundo Container*/
sr.reveal(".second-sub-container-text",{
    duration: 1000,
    distance: '35px',
    origin: 'right'
})

/*Terceiro Container*/

sr.reveal(".first-text-box",{
    duration: 1000,
    distance: '35px',
    origin: 'left'
})

sr.reveal(".first-img-box",{
    duration: 1000,
    distance: '35px',
    origin: 'right'
})

sr.reveal(".main-title-element",{
    duration: 1500,
})

sr.reveal(".second-text-box",{
    duration: 1000,
    distance: '35px',
    origin: 'right'
})

sr.reveal(".second-img-box",{
    duration: 1000,
    distance: '35px',
    origin: 'left'
})


sr.reveal(".third-text-box",{
    duration: 1000,
    distance: '35px',
    origin: 'left'
})

sr.reveal(".third-img-box",{
    duration: 1000,
    distance: '35px',
    origin: 'right'
})

sr.reveal(".fourth-text-box",{
    duration: 1000,
    distance: '35px',
    origin: 'right'
})

sr.reveal(".fourth-img-box",{
    duration: 1000,
    distance: '35px',
    origin: 'left'
})

/*Quarto Container*/

sr.reveal(".first-card",{
    duration: 1500,
    distance: '35px',
    delay: 500
})

sr.reveal(".second-card",{
    duration: 1500,
    distance: '35px',
    delay: 1000
})

sr.reveal(".third-card",{
    duration: 1500,
    distance: '35px',
    delay: 1500
})
