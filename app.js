// PUT YOUR CODE HERE

const introText = gsap.timeline({
    scrollTrigger: {
      trigger: `#intro`,
      start: `top center;`,
      end: `bottom center;`,
      scrub: true,
      pin: true,
      //markers: true,
    },
  });

  introText
  .to("#intro",{ y: 200,opacity: 1, duration: 1 })
  .from("#li-about,#li-projects,#li-skills,#li-contact",{ x: -200, duration: 0.3});

  const abouText = gsap.timeline({
      scrollTrigger: {
        trigger: `#about`,
        start: `top center;`,
        end: `bottom center;`,
        scrub: true,
        //pin: true,
        //markers: true,
      },
    });

    abouText
    
    .from(`#about .text-content`, { x: 1200, y: 1000, duration: 1  })
    .to(`#about .text-content`, { x: 0, y: 0, duration: 1  })
    .to(`#li-about`, { backgroundColor: `white`,duration: 1,})
    
  ;
  
   


    const projText = gsap.timeline({
      scrollTrigger: {
        trigger: `#projects`,
        start: `top center;`,
        end: `bottom center;`,
        scrub: true,
        //pin: true,
        //markers: true,
      },
    });

    projText
    .from(`#projects .text-content`, { x: 1200, y: 1000, duration: 1 })
    .to(`#projects .text-content`, { x: 0, y: 0, duration: 1  })
    .to(`#li-projects`, { backgroundColor: `white`,duration: 1,});
    //.to(`#projects .text-content`, { x: 2200, y: 1000, duration: 1 });

    const skillText = gsap.timeline({
      scrollTrigger: {
        trigger: `#skills`,
        start: `top center;`,
        end: `bottom center;`,
        scrub: true,
        //pin: true,
        //markers: true,
      },
    });

    skillText
    .from(`#skills .text-content`, { x: 1200, y: 1000, duration: 1  })
    .to(`#skills .text-content`, { x: 0, y: 0, duration: 1  })
    .to(`#li-skills`, { backgroundColor: `white`,duration: 1,});

    const contactText = gsap.timeline({
      scrollTrigger: {
        trigger: `#contact`,
        start: `top center;`,
        end: `bottom center;`,
        scrub: true,
        //pin: true,
        //markers: true,
      },
    });

    contactText
    .from(`#contact .text-content`, { x: 1200, y: 0, duration: 1  })
    .to(`#contact .text-content`, { x: 0, y: 0, duration: 1  })
    .to(`#li-contact`, { backgroundColor: `white`,duration: 1,});