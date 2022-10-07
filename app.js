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
  $(".slider3").slick("slickGoTo", $this.data("index"));

  sliderDotsActive.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
  this.classList.add("active");
  return $this;
});

const btnPrev = document.querySelector(".slider3 .slick-prev"),
  btnNext = document.querySelector(".slider3 .slick-next");

const showNext = () => {
  const current = document.querySelector(".slider-dots__item.active");
  const nextElem = current.nextElementSibling;
  const first = document.querySelector(".slider-dots__item");
  if (nextElem) {
    current.classList.remove("active");
    nextElem.classList.add("active");
  } else current.classList.remove("active"), first.classList.add("active");
};
const showPrev = () => {
  const current = document.querySelector(".slider-dots__item.active");
  const prevElem = current.previousElementSibling;
  const last = document.querySelector("#lastElement");
  if (prevElem) {
    current.classList.remove("active");
    prevElem.classList.add("active");
  } else current.classList.remove("active"), last.classList.add("active");
};
btnPrev.addEventListener("click", showPrev);
btnNext.addEventListener("click", showNext);
