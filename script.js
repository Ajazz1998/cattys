
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
    setTimeout(carousel, 2500);
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
