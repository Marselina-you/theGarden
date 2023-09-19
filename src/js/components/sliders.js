const teamSlider = document.querySelector('.team-slider');

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


