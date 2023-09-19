const teamSlider = document.querySelector('.team-slider');
const assortimentSlider = document.querySelector('.assortiment-slider');
const assortimentSliderNav = document.querySelector('.assortiment-nav');
console.log(teamSlider);
console.log(assortimentSlider);
console.log(assortimentSliderNav);


if (teamSlider) {


  var swiper = new Swiper(".team-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
if (assortimentSlider) {

  var swiper = new Swiper(".assortiment-nav", {
    loop: true,
    spaceBetween: 35,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".assortiment-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

