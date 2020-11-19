let controller;
let slideScene;
let pageScene;
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
let mouse = document.querySelector('.cursor');
let mouseTxt = mouse.querySelector('span');
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

window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);
animateSlides();