const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 2000, // 2000ms = 2 detik
      speed: 600, // durasi transisi antar slide dalam milidetik
      disableOnInteraction: false // Tetap lanjut walaupun user interaksi
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  });
  