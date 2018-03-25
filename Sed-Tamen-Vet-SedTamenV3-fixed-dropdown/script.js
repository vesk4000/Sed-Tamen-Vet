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

function mouseOver()
{
	previd = document.getElementsByClassName("prev");
	previd[0].style.color = "white";
	previd[0].style.backgroundColor = "rgba(0,0,0,0.8)";
	nextid = document.getElementsByClassName("next");
	nextid[0].style.color = "white";
	nextid[0].style.backgroundColor = "rgba(0,0,0,0.8)";
}
function mouseOut()
{
	previd = document.getElementsByClassName("prev");
	previd[0].style.color = "rgba(0,0,0,0)";
	previd[0].style.backgroundColor = "rgba(0,0,0,0)";
	nextid = document.getElementsByClassName("next");
	nextid[0].style.color = "rgba(0,0,0,0)";
	nextid[0].style.backgroundColor = "rgba(0,0,0,0)";
}

function initMap() {
        /*var uluru = {lat: -25.363, lng: 131.044};*/
		var uluru = {lat: 43.217125, lng: 27.939333};
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
		  });
}

/*$(document).ready(function(){
setSlides(0);
});*/