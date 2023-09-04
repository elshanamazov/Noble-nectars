import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".story__slider", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.4,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      576: {
        slidesPerView: 1.4,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 1,
      },
    },
  });
});
