
$(document).ready(function(){
  $(".category_item").click(function(){
    
      var catagory = $(this).attr("id");
      
      if(catagory == "all"){
          $(".grid-item").hide();

          setTimeout(function(){
              $(".grid-item").show();

          }, 300)
      } else {
          $(".grid-item").hide();

          setTimeout(function(){
              $("." + catagory).show();

          }, 300)
      }
  });

});



const counters = document.querySelectorAll('.counter');
const speed = 100; 

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;


		const inc = target / speed;
    const targets = Math.round(inc);

		if (count < target) {
			counter.innerText = count + targets;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});



$(document).ready(function() {
  $('.js--wp-1').waypoint(function(){
    $('.js--wp-1').addClass('counter'); 
}, {
    offset: '50%'
});

  $('.js--wp-slide').waypoint(function(){
    $('.js--wp-slide').addClass('animated fadeIn'); 
}, {
    offset: '80%'
});

  $('.js--wp-copy').waypoint(function(){
    $('.js--wp-copy').addClass('animated fadeInUp'); 
}, {
    offset: '100%'
});

$('.js--wp-2').waypoint(function(){
$('.js--wp-2').addClass('animated fadeInRight'); 
}, {
offset: '50%'
});

$('.js--wp-3').waypoint(function(){
$('.js--wp-3').addClass('animated fadeInLeft'); 
}, {
offset: '50%'
});

$('.js--wp-footerright').waypoint(function(){
$('.js--wp-footerright').addClass('animated fadeInRight'); 
}, {
offset: '70%'
});

$('.js--wp-footerleft').waypoint(function(){
$('.js--wp-footerleft').addClass('animated fadeInLeft'); 
}, {
offset: '70%'
});

$('.js--wp-25').waypoint(function(){
$('.js--wp-25').addClass('animated fadeInRight'); 
}, {
offset: '50%'
});

$('.js--wp-35').waypoint(function(){
$('.js--wp-35').addClass('animated fadeInLeft'); 
}, {
offset: '50%'
});

$('.js--wp-4').waypoint(function(){
$('.js--wp-4').addClass('animated swing'); 
}, {
offset: '70%'
});

$('.js--wp-5').waypoint(function(){
$('.js--wp-5').addClass('animated pulse'); 
}, {
offset: '70%'
});

});


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "grid";  
    setTimeout(carousel, 4500);
}

var myIndex = 0;
carouse();

function carouse() {
  var i;
  var x = document.getElementsByClassName("mySlid");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carouse, 3500);
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);

}

function currentDiv(n) {
  showDivs(slideIndex = n);

}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}


var slidesIndex = 1;
showD(slidesIndex);

function plusD(n) {
  showD(slidesIndex += n);
}

function currentD(n) {
  showD(slidesIndex = n);
}

function showD(n) {
  var i;
  var x = document.getElementsByClassName("slideShow");
  var dots = document.getElementsByClassName("demos");
  if (n > x.length) {slidesIndex = 1}
  if (n < 1) {slidesIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  x[slidesIndex-1].style.display = "block";  
  dots[slidesIndex-1].className += " actives";
}


