gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

// Animation for ".info" element
tl.from(".info", {
  duration: 1,
  opacity: 0,
  x: -500,
});

// Animation for ".img-anim" element
tl.from(".img-anim", {
  duration: 1,
  opacity: 0,
  x: 500,
  overflow: "hidden",
});

// Animation for ".features-card" elements with ScrollTrigger
gsap.from(".features-card", {
  duration: 1,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".features-card",
    start: "top 60%",
    end: "top 30%",
    toggleActions: "restart none none none",
  },
});

gsap.from(".upper-text", {
  duration: 1,
  opacity: 0,
  y: -300,
  scrollTrigger: {
    trigger: ".upper-text",
    start: "top 60%",
    end: "top 30%",
    toggleActions: "restart none none none",
  },
});

gsap.from([".lower-div", ".dotted-line"], {
  duration: 1,
  opacity: 0,
  y: 300,
  scrollTrigger: {
    trigger: ".upper-text",
    start: "top 60%",
    end: "top 10%",
    toggleActions: "restart none none none",
  },
});
