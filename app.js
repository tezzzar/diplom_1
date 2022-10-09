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

// ------------Button - Top ---------------

const btnUp = {
  el: document.querySelector(".button-top"),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove("btn-up_hide");
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add("btn-up_hide");
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener("scroll", () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 2600 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector(".button-top").onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();
