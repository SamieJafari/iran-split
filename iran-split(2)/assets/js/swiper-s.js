var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    clickable: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".mySwiper-2", {
  loop: true,
  slidesPerView: 5.5,
  spaceBetween: 30,
  clickable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
var fio = new Swiper(".mySwiper2", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    100: {
      slidesPerView: 2,
      spaceBetween:10,
    },
    460: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});