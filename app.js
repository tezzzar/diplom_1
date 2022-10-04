$(".slider").slick({
  dots: true,
});

let dotsFix = document.querySelectorAll("button[role='tab']");
dotsFix.forEach((item) => {
  item.classList.add("slider-button-fix");
});

let slickDotsFix = document.querySelector(".slick-dots");
slickDotsFix.classList.add("slick-dots-fix");

// let slickText = document.querySelectorAll(".slider__item");
// console.log(slickText);
