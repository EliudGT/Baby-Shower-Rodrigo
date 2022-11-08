//nav responseive
function navSlide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
    //Animate links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
    })
}

let funct = navSlide();
console.log(funct)

//Pop up function
let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add('open-popup')
}

function closePopup() {
    popup.classList.remove('open-popup')
}