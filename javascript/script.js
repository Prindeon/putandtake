
//side-navbar menu opening and closing when clicking hamburger menu
const hamburgerMenu = document.getElementById('hamburger-menu')
const mobileNav = document.getElementById('mobile-nav')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close-btn')

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
    overlay.classList.toggle('show')
})

overlay.addEventListener('click', () => {
    mobileNav.classList.remove('show')
    overlay.classList.remove('show')
})

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('show')
    overlay.classList.remove('show')
})

const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownArrow = document.getElementById('dropdown-arrow')

dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show')
    dropdownArrow.classList.toggle('flipped')

})
