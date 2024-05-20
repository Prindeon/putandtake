
//side-navbar menu opening and closing when clicking hamburger menu
const hamburgerMenu = document.getElementById('hamburger-menu')
const mobileNav = document.getElementById('mobile-nav')
const overlay = document.getElementById('overlay')

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
    overlay.classList.toggle('show')
})

overlay.addEventListener('click', () => {
    mobileNav.classList.remove('show')
    overlay.classList.remove('show')
})