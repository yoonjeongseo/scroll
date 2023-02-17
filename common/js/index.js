$(function(){
  //sec1
  gsap.to(".sec1 .left", {
    xPercent: -100,
    scrollTrigger: {
      trigger: ".sec1 ul",
      start: "-=100% top",
      end: "+=250%",
      scrub: "5",
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
      // markers: true
    }
  });

  //sec2
  gsap.set(".sec2 .type1", {xPercent: 50, yPercent: 200, rotation: 140});
  gsap.set(".sec2 .type2", {xPercent: -35, yPercent: 1600, rotation: -75});
  gsap.set(".sec2 .type3", {xPercent: -40, yPercent: -400, rotation: 70});
  gsap.set(".sec2 .type4", {xPercent: 30, yPercent: 800, rotation: -150});
  gsap.set(".sec2 .type5", {xPercent: -70, yPercent: 600, rotation: -10});

  gsap.to(".sec2 .type1", {xPercent: 30, yPercent: 100,
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: "+=200%",
      scrub: "2",
      // markers: true
    }
  });
  gsap.to(".sec2 .type2", {xPercent: -40, yPercent: 700,
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: "+=300%",
      scrub: "2",
      // markers: true
    }
  });
  gsap.to(".sec2 .type3", {xPercent: -20, yPercent: 100,
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: "+=250%",
      scrub: "2",
      // markers: true
    }
  });
  gsap.to(".sec2 .type4", {xPercent: 50, yPercent: 400,
    scrollTrigger: {
      trigger: ".sec2",
      start: "30% top",
      end: "+=300%",
      scrub: "2",
      // markers: true
    }
  });
  gsap.to(".sec2 .type5", {xPercent: 0, yPercent: 200,
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: "+=300%",
      scrub: "2",
      // markers: true
    }
  });

  //sec3
  pannelLeftTl = gsap.timeline({
    scrollTrigger: {
			trigger: ".sec3 .left",
			start: "0% 0%",
			end: "+=300%",
			scrub: 1,
      pin: ".sec3 .left",
      // pinSpacing: false,
      // markers: true
		},
  })
  pannelLeftTl.to(".sec3 .left", {
		xPercent: -302,
		ease: "power1.in",
	});

  // pannelTopTl = gsap.timeline({
  //   scrollTrigger: {
	// 		trigger: ".sec3 .top",
	// 		start: "0 0%",
	// 		// end: "+=100%",
	// 		scrub: 1,
  //     pin: ".sec3 .top",
  //     pinSpacing: false,
  //     markers: true
	// 	},
  // })
  // pannelTopTl.to(".sec3 .top .move1", {yPercent: -100})
  // .to(".sec3 .top .move2", {yPercent: -200})
  // .to(".sec3 .top .move3", {yPercent: -300})
  // .to(".sec3 .top .move4", {yPercent: -400});

  pannel = gsap.utils.toArray(".sec3 .top li");
  pannel.forEach(pannel => {
    gsap.to(pannel, {
      scrollTrigger: {
        pin: true,
        pinSpacing: false,
        trigger: pannel,
        start: "top top",
        markers: true,
      }
    })
  })
});
