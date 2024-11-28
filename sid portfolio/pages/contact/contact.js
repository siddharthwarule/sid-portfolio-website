async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate inputs 
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  console.log(name+email+message);

  let isValid = true;

  if (!name.trim()) {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (!message.trim()) {
    messageError.classList.remove("hidden");
    isValid = false;
  } else {
    messageError.classList.add("hidden");
  }

  if (!isValid) return;

  // Send data to backend
  try {
    const response = await fetch("https://i5ee2aw932.execute-api.us-east-1.amazonaws.com/form/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
              },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    
    if (response.ok) {
      document.getElementById("thankYouModal").classList.remove("hidden");
    } else {
      alert(result.error || "Submission failed!");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    // alert("An error occurred. Please try again.");
  }
}

function closeModal() {
  document.getElementById("thankYouModal").classList.add("hidden");
}
  
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