function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

window.addEventListener('click', function(e){
    if (!document.getElementById('nav').contains(e.target) && (!document.getElementById('menu-bar').contains(e.target)) && (!document.getElementById('menu-bg').contains(e.target))){
        document.getElementById("menu-bar").classList.remove("change");
        document.getElementById("nav").classList.remove("change");
        document.getElementById("menu-bg").classList.remove("change-bg");
  } 
})

function contact(){
    document.getElementsByClassName("aboutme")[0].style.display = "none";
    document.getElementById("baboutme").classList.remove("active");

    document.getElementsByClassName("portfolio")[0].style.display = "none";
    document.getElementById("bportfolio").classList.remove("active");

    document.getElementsByClassName("resume")[0].style.display = "none";
    document.getElementById("bresume").classList.remove("active");

    document.getElementsByClassName("contact")[0].style.display = "block";
    document.getElementById("bcontact").classList.add("active");

    document.getElementById("index").textContent = "C";
}

function aboutMe(){
    document.getElementsByClassName("aboutme")[0].style.display = "block";
    document.getElementById("baboutme").classList.add("active");

    document.getElementsByClassName("portfolio")[0].style.display = "none";
    document.getElementById("bportfolio").classList.remove("active");

    document.getElementsByClassName("resume")[0].style.display = "none";
    document.getElementById("bresume").classList.remove("active");

    document.getElementsByClassName("contact")[0].style.display = "none";
    document.getElementById("bcontact").classList.remove("active");

    document.getElementById("index").textContent = "A";
}

function portfolio(){
    document.getElementsByClassName("aboutme")[0].style.display = "none";
    document.getElementById("baboutme").classList.remove("active");

    document.getElementsByClassName("portfolio")[0].style.display = "block";
    document.getElementById("bportfolio").classList.add("active");

    document.getElementsByClassName("resume")[0].style.display = "none";
    document.getElementById("bresume").classList.remove("active");

    document.getElementsByClassName("contact")[0].style.display = "none";
    document.getElementById("bcontact").classList.remove("active");

    document.getElementById("index").textContent = "P";
}

function resume(){
    document.getElementsByClassName("aboutme")[0].style.display = "none";
    document.getElementById("baboutme").classList.remove("active");

    document.getElementsByClassName("portfolio")[0].style.display = "none";
    document.getElementById("bportfolio").classList.remove("active");

    document.getElementsByClassName("resume")[0].style.display = "block";
    document.getElementById("bresume").classList.add("active");

    document.getElementsByClassName("contact")[0].style.display = "none";
    document.getElementById("bcontact").classList.remove("active");

    document.getElementById("index").textContent = "R";
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
