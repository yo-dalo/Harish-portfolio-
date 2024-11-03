
gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", () => {
  gsap.to(".loader", {
    y: "-100%",
    duration: 3,
        ease: "power4.out", // Using a predefined ease type for smoother animation

  });
  gsap.to(".loader_", {
    y: "-100%",
    duration: 4,
    ease: "power4.out", // Using a predefined ease type for smoother animation
  });
});







// Create a timeline
/*
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",  // Element to trigger the timeline
    start: "top ",    // When the top of .container hits the center of the viewport
    end: "center center",      // When the bottom of .container reaches the top of the viewport
    scrub: 1,               // Smooth scrolling effect
    pin: true,              // Pins the element while scrolling through the timeline
    markers: true,          // Show markers for debugging
  }
});
*/
/*&& 

tl.to(".main_text_h1",{
  x:50,
  
  
})
*/
