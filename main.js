
$(function(){
  $("#nav-placeholder").load("nav.html");
});

$(function(){
  $("#footer-placeholder").load("footer.html");
});


/*let currentScrollPosition = 0;
let scrollAmount = 200;

const sCont = document.querySelector(".flash__container");
const hScroll  = document.querySelector(".flash__section1");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

let maxScroll= -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val){
  currentScrollPosition += (val*scrollAmount);
if(currentScrollPosition>0){
  currentScrollPosition = 0
  btnScrollLeft.style.opacity = "0";
}else{
  btnScrollLeft.style.opacity = "1"
}
if(currentScrollPosition<maxScroll){
  currentScrollPosition = maxScroll;
  btnScrollRight.style.opacity = "0";
}else{
  btnScrollRight.style.opacity ="1"
}
  sCont.style.left = currentScrollPosition +"px";
}*/

$(".silabus1").click(function(){
  $(".silabus1__line").toggle(".active")
  $(".chevron1 .uil").toggleClass("togle");
})

$(".silabus2").click(function(){
  $(".silabus2__line").toggle(".active")
  $(".chevron2 .uil").toggleClass("togle");
})
$(".silabus3").click(function(){
  $(".silabus3__line").toggle(".active")
  $(".chevron3 .uil").toggleClass("togle");
})
$(".silabus4").click(function(){
  $(".silabus4__line").toggle(".active")
  $(".chevron4 .uil").toggleClass("togle");
})
$('.flash__container').slick({
  dots: true,
  arrow: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		