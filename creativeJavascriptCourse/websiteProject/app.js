let controller;
let slideScene;
let pageScene;
let detailScene;
function animateSlides() {
  //init controller
  controller = new ScrollMagic.Controller();
  //select somethings
  const sliders = document.querySelectorAll('.slide');
  const nav = document.querySelector('.nav-header');
  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector('.reveal-img');
    const img = slide.querySelector('img');
    const revealText = slide.querySelector('.reveal-text');
    //gsap
    // gsap.to(revealImg, 1, { x: '100%' });
    // gsap.to(revealText, 1, { x: '100%' });
    const slideT1 = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' },
    });
    slideT1.fromTo(revealImg, { x: '0%' }, { x: '100%' });
    slideT1.fromTo(img, { scale: 2 }, { scale: 1 }, '-=1');
    slideT1.fromTo(revealText, { x: '0%' }, { x: '100%' }, '-=0.75');
    slideT1.fromTo(nav, { y: '-100%' }, { y: '0%' }, '-=0.25');
    //create scene
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideT1)
      .addIndicators({
        colorStart: 'white',
        colorTrigger: 'white',
        name: 'slide',
      })
      .addTo(controller);
    //new animation
    const pageT1 = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
    pageT1.fromTo(nextSlide, { y: '0%' }, { y: '50%' });
    pageT1.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageT1.fromTo(nextSlide, { y: '50%' }, { y: '0%' }, '-=');
    // create new scene
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: '100%',
      triggerHook: 0,
    })
      .addIndicators({
        colorStart: 'white',
        colorTrigger: 'white',
        name: 'page',
        indent: 200,
      })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageT1)
      .addTo(controller);
  });
}
const mouse = document.querySelector('.cursor');
const mouseTxt = mouse.querySelector('span');
const burger = document.querySelector('.burger');
function cursor(e) {
  mouse.style.top = e.pageY + 'px';
  mouse.style.left = e.pageX + 'px';
}
function activeCursor(e) {
  const item = e.target;

  if (item.id === 'logo' || item.classList.contains('burger')) {
    mouse.classList.add('nav-active');
  } else {
    mouse.classList.remove('nav-active');
  }
  if (item.classList.contains('explore')) {
    mouse.classList.add('explore-active');
    gsap.to('.title-swipe', 1, { y: '0%' });
    mouseTxt.innerText = 'tap';
  } else {
    mouse.classList.remove('explore-active');
    gsap.to('.title-swipe', 1, { y: '100%' });
    mouseTxt.innerText = '';
  }
}
function navToggle(e) {
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    gsap.to('.line1', 0.5, { rotate: '45%', y: 5, background: 'black' });
    gsap.to('.line2', 0.5, { rotate: '-45%', y: -5, background: 'black' });
    gsap.to('#logo', 1, { color: 'black' });
    gsap.to('.nav-bar', 1, { clipPath: 'circle(2500px at 100% -10%)' });
    document.body.classList.add('hide');
  } else {
    e.target.classList.remove('active');
    gsap.to('.line1', 0.5, { rotate: '0', y: 0, background: 'white' });
    gsap.to('.line2', 0.5, { rotate: '0', y: 0, background: 'white' });
    gsap.to('#logo', 1, { color: 'white' });
    gsap.to('.nav-bar', 1, { clipPath: 'circle(50px at 100% -10%)' });
    document.body.classList.remove('hide');
  }
}
//barba page transitions
const logo = document.querySelector('#logo');
barba.init({
  views: [
    {
      namespace: 'home',
      beforeEnter() {
        animateSlides();
        logo.href = '.index.html';
      },
      beforeLeave() {
        slideScene.destroy();
        pageScene.destroy();
        controller.destroy();
      },
    },
    {
      namespace: 'fashion',
      beforeEnter() {
        logo.href = '../index.html';
        detailAnimation();
        gsap.fromTo(
          '.nav-header',
          1,
          { y: '100%' },
          { y: '0%', ease: 'power2.inOut' }
        );
      },
      beforeLeave() {
        controller.destroy();
        detailScene.destroy();
      },
    },
  ],
  transitions: [
    {
      leave({ current, next }) {
        let done = this.async();
        //an animation
        const t1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
        t1.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
        t1.fromTo(
          '.swipe',
          0.5,
          { x: '-100%' },
          { x: '0%', oncomplete: done },
          '-=0.5'
        );
      },
      enter({ current, next }) {
        let done = this.async();
        //scroll to the top
        window.scrollTo(0, 0);
        const t1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
        t1.fromTo(
          '.swipe',
          1,
          { x: '0%' },
          { x: '100%', stagger: 0.5, oncomplete: done },
          '-=0.5'
        );
        t1.fromTo(next.container, 1.25, { opacity: 0 }, { opacity: 1 });
      },
    },
  ],
});
function detailAnimation() {
  controller = new ScrollMagic.Controller();
  const slides = document.querySelectorAll('.detail-slide');
  slides.forEach((slide, index, slides) => {
    const slideT1 = gsap.timeline({ defaults: { duration: 1 } });
    let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
    const nextImg = nextSlide.querySelector('img');
    slideT1.fromTo(slide, { opacity: 1 }, { opacity: 0 });
    slideT1.fromTo(nextSlide, { opacity: 0 }, { opacity: 1 }, '-=1');
    slideT1.fromTo(nextImg, { x: '50%' }, { x: '0%' });

    detailScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: '100%',
      triggerHook: 0,
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(slideT1)
      .addIndicators({
        colorStart: 'white',
        colorTrigger: 'white',
        name: 'detailScene',
      })
      .addTo(controller);
  });
}
//event listeners
burger.addEventListener('click', navToggle);
window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);
//invoking functions
