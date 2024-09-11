const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    scroller: "body",
    scrub: 0.5,
    start: "bottom 34%",
    end: "top 2%",
    pin: true,
    // markers: true,
  },
});

const tl2 = gsap.timeline();
tl2.from(".animate-1", {
  scale: 0.5,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".animate-1",
    scroller: "body",
    top: "top 50%",
    end: "top 30%",
    scrub: "0.5",
    stagger: "true",
  },
});

tl2.from(".animate-2", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".animate-2",
    scroller: "body",
    top: "top 50%",
    end: "top 30%",
    scrub: "0.5",
  },
});

tl2.from(".animate-3", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".animate-3",
    scroller: "body",
    top: "top 50%",
    end: "top 30%",
    scrub: "0.5",
  },
});

var tl3 = gsap.timeline();
tl3.from(".Navbar li", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  stagger: "0.5",
});

var tl3 = gsap.timeline();
tl3.from(".Navbar", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
});

var tl6 = gsap.timeline();
tl6.from(".contact-section .images-1", {
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: ".images-1",
    start: "top 50%",
    scrub: "true",
    stagger: 0.5,
  },
});

tl6.from(".contact-section .images-4", {
  duration: 1,
  rotate: 180,
  scrollTrigger: {
    trigger: ".images-4",
    start: "top 50%",
    scrub: "true",
    stagger: 0.5,
  },
});

tl6.from(".contact-section .images-5", {
  duration: 1,
  rotate: 180,
  scrollTrigger: {
    trigger: ".images-5",
    start: "top 50%",
    scrub: "true",
    stagger: 0.5,
  },
});

tl6.from(".contact-section .images-3", {
  duration: 1,
  rotate: 90,
  scrollTrigger: {
    trigger: ".images-3",
    start: "top 50%",
    scrub: "true",
    stagger: 0.5,
  },
});
