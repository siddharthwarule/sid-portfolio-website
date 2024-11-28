
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


//responsive navbar 
const toggleButton = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


gsap.from("#navbar a",{
   
    opacity:0,
    y:-50,
    duration:2,
    delay:1,
    stagger:0.3
   
})

gsap.from("#navbar img",{
   
    opacity:0,
    y:-50,
    duration:2,
    delay:1.6,
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
    zIndex: 100 ,
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

// We need our animation run on the basis of scrolling we can use for that 
// Scrub 
// For the svg animation line code we can write code from here 

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

let page = document.querySelector("#main");
let cursor = document.querySelector("#cursors");
let page2  = document.querySelector("#page2");
let svg = document.querySelector("svg");
let glowingBox = document.querySelector("#glow")
let icon = document.querySelector("#icon")


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
   

  // if(true){
gsap.to(cursor,{
      // x:20,
      y:(100-e.x),
      duration:2,
      // scale:0  
  })

gsap.to("#develop", {
    y:-600,
    x:-500,
    rotation: 360, // Rotates 360 degrees
    duration: 2,
    delay: 0.2
});

gsap.to("#design", {
    x: -600,
    y: -800,
    rotation: 360, // Rotates 360 degrees
    duration: 2,
    delay: 0.2
});

gsap.to("#deliver", {
    x: 800,
    y: -500,
    rotation: 360, // Rotates 360 degrees
    duration: 2,
    delay: 0.2
});


// gsap.to(".glowing-box",{
//   // x:20,
//   y:(100-e.x),
//   duration:2,
//   delay:0
//   // scale:0  
// })

// Responsive animation using GSAP
gsap.to(".gif-img", {
    duration: 2,
    top: "35%", // Use percentage for responsive vertical positioning
    delay: 0.4,
    opacity: 1,
    ease: "power2.out", // Add easing for smoother animation
    onUpdate: () => {
      // Optional: Add dynamic logic if needed for responsiveness
    },
  });
  
  /* Adjust animation dynamically on resize */
  window.addEventListener("resize", () => {
    const newTop = window.innerWidth < 768 ? "65%" : "65%"; // Adjust based on screen width
    gsap.to(".gif-img", {
      top: newTop,  
      duration: 1, // Smooth transition for the new position
    });
  });
  
  // }
})

glowingBox.addEventListener("click", (e) => {
    // Animate the custom cursor
    gsap.to(cursor, {
      x: e.clientX - 30, // Adjust for cursor size
      y: e.clientY - 30,
      duration: 2,
      ease: "power2.out",
    });
  
    // Animate the #develop element
    gsap.to("#develop", {
      y: -600,
      x: -500,
      rotation: 360, // Full rotation
      duration: 2,
      delay: 0.2,
      ease: "back.out(1.7)", // Add easing
    });
  
    // Animate the #design element
    gsap.to("#design", {
      x: -600,
      y: -800,
      rotation: 360,
      duration: 2,
      delay: 0.2,
      ease: "back.out(1.7)",
    });
  
    // Animate the #deliver element
    gsap.to("#deliver", {
      x: 800,
      y: -500,
      rotation: 360,
      duration: 2,
      delay: 0.2,
      ease: "back.out(1.7)",
    });
  
    // Animate .gif-img with responsive positioning
    gsap.to(".gif-img", {
      duration: 2,
      top: "35%", // Responsive positioning
      delay: 0.4,
      opacity: 1,
      ease: "power2.out",
    });
  
    // Adjust animations dynamically on window resize
    window.addEventListener("resize", () => {
      const newTop = window.innerWidth < 768 ? "65%" : "35%"; // Adjust based on screen width
      gsap.to(".gif-img", {
        top: newTop,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
  
icon.addEventListener("click", (e) => {
    // Animate the custom cursor
    gsap.to(cursor, {
      x: e.clientX - 30, // Adjust for cursor size
      y: e.clientY - 30,
      duration: 2,
      ease: "power2.out",
    });
  
    // Animate the #develop element
    gsap.to("#develop", {
      y: -600,
      x: -500,
      rotation: 360, // Full rotation
      duration: 2,
      delay: 0.2,
      ease: "back.out(1.7)", // Add easing
    });
  
    // Animate the #design element
    gsap.to("#design", {
      x: -600,
      y: -800,
      rotation: 360,
      duration: 2,
      delay: 0.2,
      ease: "back.out(1.7)",
    });
  
    // Animate the #deliver element
    gsap.to("#deliver", {
      x: 800,
      y: -500,
      rotation: 360,
      duration: 2,
      delay: 0.2,
      ease: "back.out(1.7)",
    });
  
    // Animate .gif-img with responsive positioning
    gsap.to(".gif-img", {
      duration: 2,
      top: "35%", // Responsive positioning
      delay: 0.4,
      opacity: 1,
      ease: "power2.out",
    });
  
    // Adjust animations dynamically on window resize
    window.addEventListener("resize", () => {
      const newTop = window.innerWidth < 768 ? "65%" : "35%"; // Adjust based on screen width
      gsap.to(".gif-img", {
        top: newTop,
        duration: 1,
        ease: "power2.out",
      });
    });
  });


// ------------------------------------------------------------------------------------------------------------------------------------

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



