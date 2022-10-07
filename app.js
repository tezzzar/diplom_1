$(".slider").slick({
  dots: true,
  arrows: false,
});

let dotsFix = document.querySelectorAll("button[role='tab']");
dotsFix.forEach((item) => {
  item.classList.add("slider-button-fix");
});

let slickDotsFix = document.querySelectorAll(".slick-dots");
slickDotsFix.forEach((item) => {
  item.classList.add("slick-dots-fix");
});

$(".slider2").slick({
  dots: true,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 2,
});

$(".slider3").slick({
  dots: false,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 5,
});

$(".slider-dots .slider-dots__item").click(function () {
  var $this = $(this);
  let sliderDotsActive = document.querySelectorAll(".slider-dots__item");
  sliderDotsActive.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
    $(".slider3").slick("slickGoTo", $this.data("index"));
    this.classList.add("active");
  });
});
