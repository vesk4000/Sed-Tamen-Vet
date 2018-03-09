$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 0) {
        //console.log('a');
        $(".mainmenu").addClass("mainmenuChange");
    } else {
        //console.log('a');
        $(".mainmenu").removeClass("mainmenuChange");
    }
});
var slideIndex = 1;
showSlides(slideIndex);
var slide2 = 0;
setSlides(0);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
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

function setSlides(slide2)
{
	var i;
	var slides2 = document.getElementsByClassName("secondSlide");
	/*slide2 = n;*/
	for(i = 0;i < slides2.length; i++)
	{
		slides2[i].style.display = "none";
	}
	slides2[slide2].style.display = "block";  
}

/*$(document).ready(function(){
setSlides(0);
});*/