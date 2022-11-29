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


// gsap.set("#project02", {
//     scrollTrigger: {

//         trigger:'#project02 img',
//         start:'0% 70%',
//         end: '100% 30%',
//         markers: true,
//         toggleClass: {
//             targets: "#project02",
//             className: "active" }

//     }})



// const tl = gsap.timeline({
//     defaults: {
//         ease: 'none'
//     },
//     scrollTrigger: {
//         trigger: '.bcg-parallax',
//         start: 'top 80%',
//         end: 'bottom 50%',
//         scrub: true,
//         markers: {
//             visible: true,
//             startColor: 'pink',
//             endColor: 'pink',
//             label: 'truc'
//         }
//     }
// }) 

// tl

// .from('.content-wrapper', {
//     duration: 2, 
//     autoAlpha: 0
//     }, 0.5)
// .from('.bcg', {
//     duration: 2, 
//     y: '-30%'
//     },0)



gsap.to(["#intro h1, #intro p"], {
    autoAlpha: 0,
    ease: 'none',
    scrollTrigger: {
        trigger: '#intro .content',
        start:'top-=5% top',
        // end:'bottom top+=20%',
        pin: true,
        scrub: true,
        markers: {
            visible: true,
            startColor: 'pink',
            endColor: 'pink',
            label: 'truc'
        }
    } 
    
    })


}); //ready