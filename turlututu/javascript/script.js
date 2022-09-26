// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("h3").style.fontSize = "medium";
    document.getElementById("header").style.height = "45px";
    document.getElementById("header").style.opacity = "0.8";
    document.getElementById("a1").style.fontSize = "medium";
    document.getElementById("a2").style.fontSize = "medium";
    document.getElementById("a3").style.fontSize = "medium";
    document.getElementById("a4").style.fontSize = "medium";
    document.getElementById("a5").style.fontSize = "medium";
    document.getElementById("a6").style.fontSize = "medium";
    document.getElementById("a7").style.fontSize = "medium";
    console.log('ca descend');
  } else {
    document.getElementById("h3").style.fontSize = "x-large";
    document.getElementById("header").style.height = "60px";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("a1").style.fontSize = "large";
    document.getElementById("a2").style.fontSize = "large";
    document.getElementById("a3").style.fontSize = "large";
    document.getElementById("a4").style.fontSize = "large";
    document.getElementById("a5").style.fontSize = "large";
    document.getElementById("a6").style.fontSize = "large";
    document.getElementById("a7").style.fontSize = "large";
    console.log('on est en haut');
  }
}