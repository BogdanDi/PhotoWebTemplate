
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



$(window).scroll(function() {
   var hT = $('header').offset().top,
       hH = $('header').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('.galimg').addClass('galScrolled');
   }
});
