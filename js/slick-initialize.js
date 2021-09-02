$(document).ready(function () {
  $(".image-slider").slick({
    dots: false,
    infinite: false,
    speed: 350,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: $(".image-slider__btn-back"),
    nextArrow: $(".image-slider__btn-forward"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  });
  $(".quote-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 20000,
    prevArrow: $(".quote-slider__btn-back"),
    nextArrow: $(".quote-slider__btn-forward"),
  });
});
