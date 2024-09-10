const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    scrub: true,
    start: "bottom 34%",
    end: "top 2%",
    pin: true,
    // markers: true,
  },
});

const tl2 = gsap.timeline({});
