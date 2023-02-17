$(function(){
  gsap.to(".sec1 .left", {
    xPercent: -100,
    scrollTrigger: {
      trigger: ".sec1 ul",
      start: "-=100% top",
      end: "+=250%",
      scrub: "5",
      toggleActions: "play play reverse reverse",
      // markers: true
    }
  });
  gsap.set(".sec1 .right", {xPercent: -100});
  gsap.to(".sec1 .right", {xPercent: 0,
    scrollTrigger: {
      trigger: ".sec1 ul",
      start: "-=100% top",
      end: "+=250%",
      scrub: "5",
      toggleActions: "play play reverse reverse",
      // markers: true
    }
  });
  gsap.set(".sec2 .type1", {xPercent: 18, yPercent: 300, rotation: 140});
  gsap.set(".sec2 .type2", {xPercent: -20, yPercent: 1000, rotation: -75});
  gsap.set(".sec2 .type3", {xPercent: -20, rotation: 70});
  gsap.set(".sec2 .type4", {xPercent: 40, yPercent: 700, rotation: -140});
  gsap.set(".sec2 .type5", {yPercent: 500,rotation: -10});
});
