$(function() {
  var scroll_start = 0;
  var about = $('#about');
  var offset = about.offset();
  offset.top -= 10;;
  if (about.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".navbar-default").css({'background-color': '#fff', 'opacity': '1'});
        $("nav a").css('color', 'black');
      } else {
        $('.navbar-default').css({'background-color': 'transparent'});
        $("nav a").css({'color': 'white', 'background-color': 'transparent'});
      }
    });
  }

  $(document).on("scroll", onScroll);


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

  $("ul.nav li").click(function() {
    var anchor = $(this).find('a').attr('href')
    console.log(anchor)

    $.scrollTo(anchor, 800)
    // remove classes from all
    $("nav ul li").removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
  });

});


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        console.log(refElement.position().top)
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('navbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
