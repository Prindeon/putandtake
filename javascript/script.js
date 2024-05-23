
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

const brandLogoDk = document.querySelectorAll('.logo-dk')

brandLogoDk.forEach(logo => {
    logo.addEventListener('click', () => {
        window.location.href = 'index.html'
    })
})



//------------------------------------------------------------------------|
// Updates index for carousel slides on landing page and moves the slides |
//------------------------------------------------------------------------|
const landingCarouselContent = document.querySelector('.landing-carousel-content')
const landingCarouselItems = document.querySelectorAll('.landing-carousel-item')
const landingCarouselRadioBtns = document.querySelectorAll('.landing-carousel-radio-buttons input[type="radio"]')
let currentIndex = 0
let slideInterval

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

// resets interval for when the radio buttons are clicked
function resetSlideInterval() {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, 5000)
}

landingCarouselRadioBtns.forEach((radio, index) => {
    radio.addEventListener("click", () => {
        showSlide(index)
        resetSlideInterval()
    })
})

slideInterval = setInterval(nextSlide, 5000)

//---------------------------------------|
// review card clickable moving carousel |
//---------------------------------------|
const reviewCardContainer = document.querySelector('.review-card-container')
const reviewCard = document.querySelectorAll('.review-card')
const reviewRadioBtns = document.querySelectorAll('.review-radio-buttons input[type="radio"]')
let currentReview = 0

function showReviewCard(review) {
    const reviewOffset = -review * 100
    reviewCardContainer.style.transform = `translateX(${reviewOffset}%)`
    reviewRadioBtns[review].checked = true
    currentReview = review
}

function nextReviewCard() {
    const nextReview = (currentReview + 1) % reviewCard.length
    showReviewCard(nextReview)
}

function previousReviewCard() {
    const nextReview = (currentReview - 1) % reviewCard.length
    showReviewCard(nextReview)
}

reviewRadioBtns.forEach((radio, review) => {
    radio.addEventListener('click', () => {
        showReviewCard(review)
    })
})

document.querySelector('.review-arrow-forward').addEventListener('click', () => nextReviewCard())

document.querySelector('.review-arrow-back').addEventListener('click', () => previousReviewCard())