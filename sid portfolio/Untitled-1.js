para.addEventListener("mousemove", function (e) {
  const newX = throttle(lastX, e.x, 0.1);
  const newY = throttle(lastY, e.y, 0.1);

  lastX = newX;
  lastY = newY;

  // Background layers (slower movement)
  gsap.from(".bg-img", {
    x: newX  ,
    // y: newY  ,
    duration: 1,
    ease: "power1.out",
  });

  gsap.from(".mountain-1", {
    x: newX * 0.05,
    // y: newY * 0.05,
    duration: 0.8,
    ease: "power1.out",
  });

  // Middle layers (moderate movement)
  gsap.from(".mountain-2", {
    x: newX * 0.05,
    // y: newY * 0.05,
    duration: 0.8,
    ease: "power1.out",
  });
  
  gsap.from(".mountain-3", {
    x: newX * 0.07,
    // y: newY * 0.07,
    duration: 1,
    ease: "power1.out",
  });

  // Foreground layers (faster movement, inverse Y for upward effect)
  gsap.from(".mountain-4", {
    x: newX * 0.1,
    // y: -newY * 0.1,  // Negative Y to move upward
    duration: 1.2,
    ease: "power1.out",
  });

  gsap.from(".mountain-5", {
    x: newX * 0.12,
    // y: -newY * 0.12,  // Negative Y to move upward
    duration: 1.5,
    ease: "power1.out",
  });

  gsap.from(".mountain-6", {
    x: newX * 0.15,
    // y: -newY * 0.15,  // Negative Y to move upward
    duration: 1.8,
    ease: "power1.out",
  });

  gsap.from(".mountain-7", {
    x: newX * 0.18,
    // y: -newY * 0.18,  // Negative Y to move upward
    duration: 2,
    ease: "power1.out",
  });

  gsap.from(".mountain-8", {
    x: newX * 0.2,
    // y: -newY * 0.2,  // Negative Y to move upward
    duration: 2.2,
    ease: "power1.out",
  });

  gsap.from(".mountain-9", {
    x: newX * 0.2,
    // y: -newY * 0.2,  // Negative Y to move upward
    duration: 2.5,
    ease: "power1.out",
  });


  gsap.from(".fog-1", {
    x: newX * 0.2,
    // y: -newY * 0.2,  // Negative Y to move upward
    duration: 2.5,
    ease: "power1.out",
  });

  gsap.from(".fog-2", {
    x: newX * 0.2,
    // y: -newY * 0.2,  // Negative Y to move upward
    duration: 2.5,
    ease: "power1.out",
  });

  gsap.from(".fog-3", {
    x: newX * 0.2,
    // y: -newY * 0.2,  // Negative Y to move upward
    duration: 2.5,
    ease: "power1.out",
  });



});
