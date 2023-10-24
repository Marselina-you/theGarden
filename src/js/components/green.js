import { gsap } from "gsap";
let tl = gsap.timeline();

tl.from('.header', {y:-90, duration: 0.3})

  .from('.header__logo', {opacity: 0, duration: 0.4})
  .from('.header__nav', {opacity: 0, duration: 0.4})
  .from('.hero__logo', {opacity: 0, duration: 0.5})
  .from('.hero__content', {opacity: 0, x:-941, duration: 0.5})



  //.from('.hero__btn', {opacity: 0, duration: 1})





