



document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function fillProgressBars() {
    progressBars.forEach(bar => {
      if (isElementInViewport(bar)) {
        bar.style.width = "90%"; // Trigger fill to 90%
      }
    });
  }

  window.addEventListener("scroll", fillProgressBars);
});


const toggleButton = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


gsap.to("#navbar",{
    // backgroundColor:"black",
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

gsap.from("#navbar img",{
   
  opacity:0,
  y:-50,
  duration:2,
  delay:1.6,
  stagger:0.3
 
})



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