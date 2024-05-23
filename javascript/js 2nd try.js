
//--------------|
// the carousel |
//--------------|


var slidePosition = 1;
SlideShow(slidePosition);

//-----------------------|
// forward/back controls |
//-----------------------|
function plusSlides(n) {
  SlideShow(slidePosition += n);
}


function currentSlide(n) {
  SlideShow(slidePosition = n);
}


//------------------------------------------------|
// dots under images and visibility of containers |
//------------------------------------------------|
function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  var circles2 = document.getElementsByClassName("dots2");
  var circles3 = document.getElementsByClassName("dots3");
  var circles4 = document.getElementsByClassName("dots4");
  var circles5 = document.getElementsByClassName("dots5");
  var circles6 = document.getElementsByClassName("dots6");
  var circles7 = document.getElementsByClassName("dots7");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  for (i = 0; i < circles2.length; i++) {
    circles2[i].className = circles2[i].className.replace(" enable", "");
}
for (i = 0; i < circles3.length; i++) {
  circles3[i].className = circles3[i].className.replace(" enable", "");
}
for (i = 0; i < circles4.length; i++) {
  circles4[i].className = circles4[i].className.replace(" enable", "");
}
for (i = 0; i < circles5.length; i++) {
  circles5[i].className = circles5[i].className.replace(" enable", "");
}
for (i = 0; i < circles6.length; i++) {
  circles6[i].className = circles6[i].className.replace(" enable", "");
}
for (i = 0; i < circles7.length; i++) {
  circles7[i].className = circles7[i].className.replace(" enable", "");
}
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
  circles2[slidePosition-1].className += " enable";
  circles3[slidePosition-1].className += " enable";
  circles4[slidePosition-1].className += " enable";
  circles5[slidePosition-1].className += " enable";
  circles6[slidePosition-1].className += " enable";
  circles7[slidePosition-1].className += " enable";
} 



//----------------|
// read more lakes|
//----------------|


function readmore() {
  var gone = document.getElementById("disappear");
  var text = document.getElementById("appear");
  var show = document.getElementsByClassName("readmore")
  var hide = document.getElementsByClassName("readless")[0]; // Select the first element with class "readless"

  gone.style.display = "none";
  text.style.display = "inline";
  hide.style.display = "block";
  show.style.display = "none";
}

function readless() {
  var gone = document.getElementById("disappear");
  var text = document.getElementById("appear");
  var hide = document.getElementsByClassName("readless")
  var show = document.getElementsByClassName("readmore")[0]; // Select the first element with class "readmore"

  gone.style.display = "inline";
  text.style.display = "none";
  show.style.display = "block";
  hide.style.display = "none";
}



function getSlide(){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('slide');
}

function showSlide(slideNumber){
  // Selecting the fishbox based on the slide number
  const item = document.querySelectorAll('.Containers');
  
  // Adjusting the slide number to match the array index (0-based)
  const adjustedSlideNumber = slideNumber - 1;
  
  // Checking if the slide number is within the valid range
  if (adjustedSlideNumber >= 0 && adjustedSlideNumber < item.length) {
    // Scroll to the fishbox corresponding to the slide number
    item[adjustedSlideNumber].scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const slideNumber = getSlide();
  if (slideNumber){
    showSlide(parseInt(slideNumber)); // Parsing slideNumber as an integer
  }
});

// function showSlide(slideNumber){
//   const carousel = document.getElementsByClassName('slideshow-container fade');
//   const items = carousel.getElementsByClassName('Containers');
//   items[slideNumber - 1].scrollIntoView();
// }

// document.addEventListener('DOMContentLoaded', ()=>{
//   const slideNumber = getSlideFromUrl();
//   if (slideNumber){
//     showSlide(slideNumber);
//   }
// })