import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('.to-top');
const toTop = document.querySelector('.to-top');
console.log(toTop);
//const hero = document.querySelector('.hero');
let heroHeight;
//heroHeight = hero.offsetHeight;

//

if (document.querySelector('.hero')) {
  heroHeight = document.querySelector('.hero').offsetHeight;
  console.log(heroHeight);
}


const isVisibleToTop = (y = 0) => {
  if (y >= heroHeight) {
    toTop.classList.add('to-top--active');
  } else {
    toTop.classList.remove('to-top--active');
  }
}
isVisibleToTop(window.scrollY);

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  isVisibleToTop(y);
});
