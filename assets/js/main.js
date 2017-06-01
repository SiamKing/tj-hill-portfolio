$(() => {
   var scroll_start = 0;
   var about = $('#about');
   var offset = about.offset();
  //  offset.top -= 10;
    if (about.length){
   $(document).scroll(() => {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css({'background-color': '#fff'});
          $("nav a").css('color', 'black');
       } else {
          $('.navbar-default').css({'background-color': 'transparent'});
          $("nav a").css({'color': 'white', 'background-color': 'transparent'});
       }
   });

   $("#nav-home").click(() => {
     $.scrollTo("#top", 800);
   });

   $("#about-me").click(() => {
     $.scrollTo("#about", 800);
     $(".navbar-default").css({'background-color': '#fff'});
     $("nav a").css('color', 'black');
   });

   $("#nav-skills").click(() => {
     $.scrollTo("#skills", 800);
     $(".navbar-default").css({'background-color': '#fff'});
     $("nav a").css('color', 'black');
   });




   $("ul li").click(() => {
      // remove classes from all
      $("ul li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
    }
});
