// Smooth scroll
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

//show/hide menu button
var showHideMenu = function(){
  $('#menuButton').click(function(){
    $('#mainNav').toggleClass("showMenu");
  })
  $('.menuButton').click(function(){
    $('#mainNav').removeClass("showMenu");
  })
};
showHideMenu();
$(window).scroll(function(){
  $('nav').addClass('scrolledNavBar');
  if($(window).scrollTop()===0){
    $('nav').removeClass('scrolledNavBar');
  }
});


//check if scrolled / change menu class
$(window).scroll(function() {
   var hT = $('header').offset().top,
       hH = $('header').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('.galimg').addClass('galScrolled');
   }
});

//for modal
$('.images').click(function(){
  var modal=$('.modal');
  var imagine=$('.modalImg');
  var name=$(this).children().attr("src");
  modal.css('display', 'block');
  imagine.attr('src', name);
  //alert(name);
})
$('.closeModal').click(function(){
  $('.modal').css('display', 'none');
})
$('.modal').click(function(){
  $('.modal').css('display', 'none');
}).children().click(function(e) {
  return false;
});


//myMap
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(47.155331, 27.625492),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
myMap();
