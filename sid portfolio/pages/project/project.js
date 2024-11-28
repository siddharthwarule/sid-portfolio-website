// Show loader until page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Simulate loading delay

  
  setTimeout(() => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('projects');

    // Ensure all images are fully loaded or reloaded
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', () => {
        console.warn(`Image failed to load: ${img.src}`);
        img.src = img.src; // Attempt to reload the image
      });

      if (!img.complete || img.naturalWidth === 0) {
        img.src = img.src; // Reload the image
      }
    });

    // Hide loader and display content
    if (loader) loader.style.display = 'none'; // Hide loader
    if (content) content.classList.remove('hidden'); // Show main content

    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }, 2000); // Adjust delay as needed
});


// const para = document.querySelector("#your-element"); // Update this with your actual element selector
const toggleButton = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

gsap.to("#navbar",{
  // backgroundColor:"black",
  color :"black",
  zindex:-10,
  duration:2,
  scrollTrigger:{
      trigger:"#textmain",
      scroller:"body",
      // markers:"true",
      start : "top 10%",
      end :"top 20%",
      // scrub:0.2,
  
  }
})

// document.querySelectorAll("#navbar a").forEach((element) => {
//     element.addEventListener("mouseenter", () => {
//         gsap.to("#cursors", {
//             backgroundColor: "rgba(255, 255, 255, 0.295)",
//             scale:2,
//             // filter:"blur(0px)",
//             duration: 0.2,
//         });
//     });
// });

// document.querySelectorAll("#navbar a").forEach((element) => {
//     element.addEventListener("mouseleave", () => {
//         gsap.to("#cursors", {
//             backgroundColor: "#e9c82396",
//             // filter: "blur(30px)",
//             scale:1,
//             duration:0.2,
//         });
//     });
// });



gsap.from("#navbar a",{
 
  opacity:0,
  y:-50,
  duration:5,
  delay:2,
  stagger:0.3
 
})

gsap.to("#navbar a",{
  color :"black",
  duration:0.5,
  scrollTrigger:{
      trigger:"#textmain",
      scroller:"body",
      // markers:"true",
      start : "top 30%",
      end :"top 100%",
      scrub:0.2,
  
  }
})

gsap.from("#navbar img",{
   
  opacity:0,
  y:-50,
  duration:5, 
  delay:2.7,
  stagger:0.3
 
})


// const para = document.querySelector("#your-element"); // Update this with your actual element selector

// paralax animation start from here _____________________________________________________________________________________________________

gsap.from(".bg-img", {
  y: 300,               // Start from below
  opacity: 0,           // Fade in effect
  duration:1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-3",
    start: "top bottom",  // Start animation when top of .bg-img hits bottom of viewport
    toggleActions: "play none none none",
  }
});

gsap.from(".mountain-1", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});

// Repeat similar blocks for each mountain and fog layer
gsap.from(".mountain-2", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
   
  }
});

gsap.from(".mountain-3", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});

// Continue for the other mountains and fog layers
gsap.from(".mountain-4", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});

gsap.from(".mountain-5", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});

gsap.from(".mountain-6", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});

gsap.from(".mountain-7", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});

gsap.from(".mountain-8", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});

gsap.from(".paralax_text", {
  x:50,
  opacity: 0,
  duration:6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".mountain-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});


gsap.from(".fog-1", {
  y: 300,
  opacity: 0,
  duration: 6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".fog-1",
    start: "top bottom",
    toggleActions: "play none none none",
  }
});


// Helper function to throttle the movement speed
// Helper function to apply throttling for smoother transitions
let lastX = 0;
let lastY = 0;
function throttle(value, target, rate = 0.05) {
  return gsap.utils.interpolate(value, target, rate);
}

para.addEventListener("mousemove", function (e) {
  const newX = throttle(lastX, e.x, 0.1);
  const newY = throttle(lastY, e.y, 0.1);

  lastX = newX;
  lastY = newY;

  // Background layers (slower movement)
  gsap.from(".bg-img", {
    x: newX  * 0.5,
    // y: newY  ,
    // duration: 1,
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





// ---------------------------------------------------------------------------------------------------------------------------------
