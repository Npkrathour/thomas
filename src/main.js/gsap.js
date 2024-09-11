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

// gsap.from(".animate-1", {
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".animate-1",
//     scroller: "body",
//     top: "top 60%",
//     end: "top 30%",
//     scrub: "true",
//   },
// });

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
    markers: "true",
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
    markers: "true",
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
    markers: "true",
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
