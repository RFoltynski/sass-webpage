
window.onkeydown = function (e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (code === 37) { //up key
    plusDivs(-1);
  } else if (code === 39) { //down key
    plusDivs(1);
  }
};
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

var keyclick = {
};



function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log(n);
  var dots = document.getElementsByClassName("w3-button");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-button-red", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-button-red";
}



