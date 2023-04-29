/*
----------------------
    Swiper Slider
----------------------
*/

const swiperSlider = document.querySelector(".swiper");
if (swiperSlider) {
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: false,
  });
}
