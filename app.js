$(".slider").slick({
  dots: true,
  arrows: false,
});

let dotsFix = document.querySelectorAll("button[role='tab']");
dotsFix.forEach((item) => {
  item.classList.add("slider-button-fix");
});

// let slickDotsFix = document.querySelector(".slick-dots");
// slickDotsFix.classList.add("slick-dots-fix");

let slickDotsFix = document.querySelectorAll(".slick-dots");
slickDotsFix.forEach((item) => {
  item.classList.add("slick-dots-fix");
});

// let slickText = document.querySelectorAll(".slider__item");
// console.log(slickText);

$(".slider2").slick({
  dots: true,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 5,
});
