// function init(){
    
// }

// window.addEventListener('load', function(){
//     init();
// });


// A $( document ).ready() block.

gsap.registerPlugin(ScrollTrigger);



$( document ).ready(function() {
    console.log( "ready!" );

// gsap.to("#intro img", {
    
//     opacity:0,
//     scrollTrigger: {
//         trigger: '#intro h1',
//         start:'center 300px',
//         end:'bottom 200px',
//         scrub: true,
//         markers:true
//     }
//     })


gsap.set("#project02", {
    scrollTrigger: {

        trigger:'#project02 img',
        start:'0% 80%',
        end: '100% 50%',
        markers: true,
        toggleClass: {
            targets: "#project02",
            className: "active" }

    }})





}); //ready