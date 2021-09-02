$(window).scroll(function () {
    $(".scroll").css("opacity", 1 - $(window).scrollTop() / 150);
  });
  