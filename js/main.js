$(document).ready(function () {
  $(".slider").slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../images/icons/chevron-left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../images/icons/chevron-right.svg"></button>',
    fade: true,
    cssEase: "linear",
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          dots: false,
        },
      },
    ],
  });
});
