
// document.addEventListener("DOMContentLoaded", () => {
//     const para = document.querySelector("#para");
//     const parallaxElements = document.querySelectorAll(".parallax");
  
//     if (para) {
//       para.addEventListener("mousemove", (e) => {
//         const xValue = (e.clientX - window.innerWidth / 2) ;
//         const yValue = (e.clientY - window.innerHeight / 2) ;
//   console.log(xValue , yValue);



//         parallaxElements.forEach((el, index) => {
//         //   const depth = (index + 1) * 0.2; // adjust depth factor to control movement intensity
//           el.style.transform = `translate(calc(-50% + ${xValue}px))(calc(-50% + ${yValue}px))`;
//         });
//       });
//     } else {
//       console.log("Section #para not found.");
//     }
//   });
  
// function scroll(){

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });

//     // Proxy scroll position to ScrollTrigger
//     ScrollTrigger.scrollerProxy('#main', {
//         scrollTop(value) {
//             return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//         }
//     });

//     // Setup ScrollTrigger
//     ScrollTrigger.defaults({ scroller: '#main' });
// });

// }

// scroll();

//navbar animation 

//siddharth name animation
// gsap.to("#page3 h1",{
//     duration:5,
//     color:"black",
//     transform:"translateX(-100%)",
//     scrollTrigger:{
//        trigger:"#page3",
//        scroller:"body",
//        markers:true,
//        start:"top 10%", 
//        end:"top 100%",
//        pin:true,
//        scrub:3
//     }
   
//    })

// document.addEventListener("DOMContentLoaded", () => {
//     const para = document.querySelector("#para");
//     const parallaxElements = document.querySelectorAll(".paralax");
  
//     if (para) {
//       para.addEventListener("mousemove", (e) => {
//         // Center the x and y values based on the mouse position
//         const xValue = (e.clientX - window.innerWidth / 2)/100 ;
//         const yValue = (e.clientY - window.innerHeight / 2)/100;
  
//         console.log(xValue , yValue);

//         parallaxElements.forEach((el, index) => {
//           const depth = (index + 1) * 0.3; // Adjust depth for more or less intensity
//           el.style.trnsform = `translate(-50% -50%)`;

//           console.log(el.style.trnsform);
//         });
//       });
//     } else {
//       console.log("Section #para not found.");


//     }
//   });
  

  
   
gsap.to("#page3 h1", {
    duration: 10,
    color: "black",
    x: "-100%",  // Shortened 'translateX(-100%)' to 'x'
    ease: "power2.inOut",  // Easing for smoother transitions
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 10%", 
      end: "top 100%",
      pin: true,
      scrub: 2,  // Lowered scrub for more responsive smoothness
      // markers: true  // Uncomment if you still want to debug
    }
  });
  


gsap.to("#navbar",{
    backgroundColor:"black",
    color :"white",
    zindex:-10,
    duration:1,
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
    duration:2,
    delay:1,
    stagger:0.3
   
})

gsap.to("#navbar a",{
    color :"white",
    duration:0.1,
    scrollTrigger:{
        trigger:"#textmain",
        scroller:"body",
        // markers:"true",
        start : "top 30%",
        end :"top 100%",
        scrub:0.2,
    
    }
})

// gsap.to("#cursors",{
//     backgroundColor:"white",
//     // duration:0.2,
//     // filter:"blur(0px)",
//     scrollTrigger:{
//         trigger:"#textmain",
//         scroller:"body",
//         // markers:"true",
//         start : "top -5%",
//         scrub:0.2,
    
//     }
// })


// Animate an element when it enters the viewport

gsap.from("#textmain span", {
    // opacity: 0,
    scale: 0, // Start from a smaller scale (e.g., 0.5)
    duration:1,
    delay: 2,
    ease: "sine.out",
    stagger:1   
  });

  gsap.from("video", {
    // opacity: 0,
    scale: 0, // Start from a smaller scale (e.g., 0.5)
    duration:2,
    ease: "sine.out",
    stagger:1
  });





  let spanString = "";
  document.querySelector(".animated-subtext").textContent.split('').forEach(element => {

    spanString +=`<span>${element}</span>`
    
  });
  
  console.log(spanString);

  document.querySelector(".animated-subtext").innerHTML =spanString;


  gsap.from(".animated-subtext span", {
    opacity: 0,
    Y:10,
    duration: 0.05,     // Reduce the duration for a faster animation
    ease: "power2.out", // Ease function for the animation
    stagger: 0.05,      // Reduce the stagger for a quicker sequence
    delay:5
});


gsap.from(".glowing-box", {
    opacity: 0,
    Y:10,
    duration: 0.05,     // Reduce the duration for a faster animation
    ease: "power2.out", // Ease function for the animation
    stagger: 0.05,      // Reduce the stagger for a quicker sequence
    delay:5
});





//we need our animation run on the basis of scrolling we can use for that 
// Scrub 

// for the svg animation line code we can write code from here

var path ="M 10 60 Q 650 60 900 60" ;
var finalPath ="M 10 60 Q 650 60 900 60"  ;

var string = document.querySelector("#string");

string.addEventListener("mousemove",function(e){
    // console.log(e);
    path = `M 10 60 Q ${(e.x)-230} ${(e.y)-230} 900 60`
    console.log(path)
    gsap.to("svg path",{
        attr:{
            d:path
        },
        duration:0.3,
        ease:"power3.out",

    })
});


string.addEventListener("mouseleave",()=>{
    console.log("mouseleave")
    gsap.to("svg path",{
        attr:{
            d:finalPath
        },
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})


// curser anmation start from here 

let page = document.querySelector("#page1");
let cursor = document.querySelector("#cursors");
let page2  = document.querySelector("#page2");
let svg = document.querySelector("svg");


gsap.from("#cursors",{
    opacity:0,
    delay:6
})


page.addEventListener("mousemove",function(e){

    console.log(e);
    gsap.to(cursor,{
      x:e.x-30,
      y:e.y-30,
      duration:1,
      ease:"back.out"
    })

})

page.addEventListener("mouseleave",(e)=>{
   
  if(true){
  gsap.to(cursor,{
      // x:20,
      y:(100-e.x),
      duration:2,
      // scale:0  
  })
}
  
})

// const para = document.querySelector("#your-element"); // Update this with your actual element selector


// const para = document.querySelector("#your-element"); // Update this with your actual element selector

// paralax animation start from here _____________________________________________________________________________________________________

gsap.from(".bg-img", {
  y: 300,               // Start from below
  opacity: 0,           // Fade in effect
  duration:3,
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
  duration: 3,
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
  duration: 3,
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
  duration: 3,
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
  duration: 3,
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
  duration: 3,
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
  duration: 3,
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
  duration: 3,
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
  duration: 3,
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
  duration:4,
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
  duration: 2,
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


// ---------------------------------------------------------------------------------------------------------------------------------

var scroller = document.querySelector("#scroller");

scroller.addEventListener("mousemove",(e)=>{

    scroller.addEventListener("mouseenter", (e) => {
        console.log(e);
        scroller.style.animationPlayState = 'paused';
    });
    
    // Add event listener to resume the animation on mouseleave
    scroller.addEventListener("mouseleave", (e) => {
        console.log(e);
        scroller.style.animationPlayState = 'running';
    });
})

function animateSVGPath() {
    // Select the path element
    const path = document.querySelector('#string');
  
    // Reset the path to the beginning
  
    // Animate the path with a delay
    gsap.from(path, {
      opacity:0,
      y:200,
      duration:2, // Adjust duration as needed
      delay: 7, // Delay of 6 seconds
      ease: "elastic.out(1,0.3)",
    //   ease: "power2.inOut" // Adjust easing function as needed
    });
  }
       
  // Call the function to start the animation
  animateSVGPath();




//drower animation start from here 

let timeline1 = gsap.timeline();


timeline1.to("#menu",{
    right:0,
    // duration:0.23,
 
})

timeline1.from("#menu h1",{
    x:140,
    opacity:0,
    stagger:0.28,
    duration:0.2,
})

timeline1.pause();

let menubtn = document.querySelector("#navmenubtn");

menubtn.addEventListener("click",function(){
    console.log("Sas")
    timeline1.play();
})

let closemenu = document.querySelector("#closeIcon");

closemenu.addEventListener("click",function(){
    timeline1.reverse();
})



