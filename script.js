hamburguer = document.getElementById("hamburguer")

hamburguer.onclick = function menu() {
    nav = document.getElementById("nav-bar")
    nav.classList.toggle('active')
    /*if(nav.style.display == 'block') {
        nav.style.display = 'none'
    }else {
        nav.style.display = 'block'
    }*/
};

window.sr = ScrollReveal({reset:true})

/*First Container*/

sr.reveal(".sub-containers",{
    duration: 1000,
    distance: '90px'
})


sr.reveal(".first-sub-container-img",{
    duration: 1000,
    distance: '90px',
    origin: 'left'
})

/*Segundo Container*/
sr.reveal(".second-sub-container-text",{
    duration: 1000,
    distance: '90px',
    origin: 'right'
})

/*Terceiro Container*/

sr.reveal(".first-text-box",{
    duration: 1000,
    distance: '90px',
    origin: 'left'
})

sr.reveal(".first-img-box",{
    duration: 1000,
    distance: '90px',
    origin: 'right'
})

sr.reveal(".main-title-element",{
    duration: 1500,
})

sr.reveal(".second-text-box",{
    duration: 1000,
    distance: '90px',
    origin: 'right'
})

sr.reveal(".second-img-box",{
    duration: 1000,
    distance: '90px',
    origin: 'left'
})


sr.reveal(".third-text-box",{
    duration: 1000,
    distance: '90px',
    origin: 'left'
})

sr.reveal(".third-img-box",{
    duration: 1000,
    distance: '90px',
    origin: 'right'
})

sr.reveal(".fourth-text-box",{
    duration: 1000,
    distance: '90px',
    origin: 'right'
})

sr.reveal(".fourth-img-box",{
    duration: 1000,
    distance: '90px',
    origin: 'left'
})

/*Quarto Container*/

sr.reveal(".first-card",{
    duration: 1500,
    distance: '90px',
    delay: 500
})

sr.reveal(".second-card",{
    duration: 1500,
    distance: '90px',
    delay: 1000
})

sr.reveal(".third-card",{
    duration: 1500,
    distance: '90px',
    delay: 1500
})






