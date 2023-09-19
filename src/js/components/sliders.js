const teamSlider = document.querySelector('.team-slider');
const assortimentSlider = document.querySelector('.assortiment-slider');
const assortimentSliderNav = document.querySelector('.assortiment-nav');
const eventSlider = document.querySelector('.event-slider');



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


if (eventSlider) {
  const workSlider = new Swiper(eventSlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".event__next",
      prevEl: ".event__prev",
    },
  });

  workSlider.on('slideChange', function () {

    eventBtns.forEach(el => {
      el.classList.remove('event-nav__btn--active')
          });
          document.querySelector(`.event-nav__btn[data-index="${workSlider.realIndex}"]`).classList.add('event-nav__btn--active');
  });
  const eventBtns = document.querySelectorAll('.event-nav__btn');

  eventBtns.forEach((el, idx) => {

    el.setAttribute('data-index', idx)
    el.addEventListener('click', (e) => {
    const index = e.currentTarget.dataset.index;

    eventBtns.forEach(el => {
el.classList.remove('event-nav__btn--active')
    });
    e.currentTarget.classList.add('event-nav__btn--active');

    workSlider.slideTo(index);
    })
  })
}


