
//-------------------------------------------------------------------|
// side-navbar menu opening and closing when clicking hamburger menu |
//-------------------------------------------------------------------|
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
//------------------------------------------------------------------|
// dropdown opening, arrow moving, and language disappearing behind |
//------------------------------------------------------------------|
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownArrow = document.getElementById('dropdown-arrow')
const languageSelector = document.querySelector('.language-selector')

dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show')
    dropdownArrow.classList.toggle('flipped')
    
    if (!languageSelector.classList.contains('show')) {
        setTimeout(() => {
            languageSelector.classList.add('show')
        }, 250)
    } else {
        languageSelector.classList.remove('show')
    }
})



//----------------------------------------------------------------------------------------------------|
// makes all logo click events lead to index page - this would have to be changed for other languages |
//----------------------------------------------------------------------------------------------------|
const brandLogo = document.querySelectorAll('.logo')

brandLogo.forEach(logo => {
    logo.addEventListener('click', () => {
        window.location.href = 'index-en.html'
    })
})

const brandLogo = document.querySelectorAll('.logo-dk')

brandLogo.forEach(logo => {
    logo.addEventListener('click', () => {
        window.location.href = 'index.html'
    })
})




const landingCarouselContent = document.querySelector('.landing-carousel-content')
const landingCarouselItems = document.querySelectorAll('.landing-carousel-item')
const landingCarouselRadioBtns = document.querySelectorAll('.landing-carousel-radio-buttons input[type="radio"]')
let currentIndex = 0

function showSlide(index) {
    const offset = -index * 100
    landingCarouselContent.style.transform = `translateX(${offset}%)`
    landingCarouselRadioBtns[index].checked = true
    currentIndex = index
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % landingCarouselItems.length
    showSlide(nextIndex)
}

landingCarouselRadioBtns.forEach((radio, index) => {
    radio.addEventListener("click", () => showSlide(index))
})

setInterval(nextSlide, 3000)