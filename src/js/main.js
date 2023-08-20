window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
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
        initialSLide: 1,
      },
    },
  });
});
