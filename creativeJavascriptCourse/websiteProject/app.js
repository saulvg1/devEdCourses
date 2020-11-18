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

animateSlides();

// let controller;
// let slideScene;
// let pageScene;
// function animateSlides() {
//   controller = new ScrollMagic.Controller();
//   //Select some things
//   const sliders = document.querySelectorAll('.slide');
//   const nav = document.querySelector('.nav-header');
//   //loop over each slide
//   sliders.forEach((slide, index, slides) => {
//     const revealImg = slide.querySelector('.reveal-img');
//     const img = slide.querySelector('img');
//     const revealText = slide.querySelector('.reveal-text');
//     //gsap
//     const slideTl = gsap.timeline({
//       defaults: { duration: 1, ease: 'power2.inOut' },
//     });
//     slideTl.fromTo(revealImg, { x: '0%' }, { x: '100%', opacity: 0.5 });

//     slideTl.fromTo(revealImg, { x: '0%' }, { x: '100%' });
//     slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, '-=1');
//     slideTl.fromTo(revealText, { x: '0%' }, { x: '100%' }, '-=0.75');

//     //CREATE new SCENE
//     slideScene = new ScrollMagic.Scene({
//       triggerElement: slide,
//       triggerHook: 0.25,
//       //reverse: false
//     })
//       .setTween(slideTl)
//       .addIndicators({
//         colorStart: 'white',
//         colorTrigger: 'white',
//         name: 'slide',
//       })
//       .addTo(controller);

//     //NEW ANIMATION
//     const pageTl = gsap.timeline();
//     let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
//     pageTl.fromTo(nextSlide, { y: '0%' }, { y: '50%' });
//     pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
//     pageTl.fromTo(nextSlide, { y: '50%' }, { y: '0%' }, '-=0.5');
//     //NEW SCENE
//     pageScene = new ScrollMagic.Scene({
//       triggerElement: slide,
//       duration: '100%',
//       triggerHook: 0,
//     })
//       .addIndicators({
//         colorStart: 'white',
//         colorTrigger: 'white',
//         name: 'page',
//         indent: 200,
//       })
//       .setPin(slide, { pushFollowers: false })
//       .setTween(pageTl)
//       .addTo(controller);
//   });
// }
// animateSlides();
