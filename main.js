
gsap.registerPlugin(ScrollTrigger);

var x1 = gsap.timeline({
        scrollTrigger: {
    scroller:"body",
    trigger: ".page_1",  // Element to trigger the timeline
    start: "top top",    // When the top of .container hits the center of the viewport
    end: "top top",      // When the bottom of .container reaches the top of the viewport
    scrub: 1,               // Smooth scrolling effect
    pin: true,              // Pins the element while scrolling through the timeline
  //  markers: true,          // Show markers for debugging
  }


})





window.addEventListener("load", () => {
  gsap.to(".loader", {
    y: "-100%",
    duration: 2,
        ease: "power4.out", // Using a predefined ease type for smoother animation

  });
  gsap.to(".loader_", {
    y: "-100%",
    duration: 2.4,
    ease: "power4.out", // Using a predefined ease type for smoother animation
  });
});



gsap.from(".main_text_h1",{
  y:90,
  delay:2,
  
})




gsap.from("._2 .left_2 .img img",{
  x:500,
  delay:3,
  scrollTrigger: {
    scroller:"body",
    trigger: "._2",  // Element to trigger the timeline
    start: "top center",    // When the top of .container hits the center of the viewport
    end: "top center",      // When the bottom of .container reaches the top of the viewport
   scrub: 1,               // Smooth scrolling effect
  //  pin: true,              // Pins the element while scrolling through the timeline
    markers: true,          // Show markers for debugging
  }




  
})






/*
tl_1.from(".loader_main_text",{
  
  y:60,
  duration:1,
  
},"a")
*/

gsap.to(".loader_main_text span",{
  
  x:60,
  duration:5,
  
},)




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
