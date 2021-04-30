// const rolliePollie=document.querySelectorAll(".collect");
// rolliePollie.forEach((el) => {
//     el.style.opacity = 0
// });
// $time(document).ready(function() {
//     $time(".container").waypoint(function () {
//         $time(".container").css({
//             animation: "holdMe 3500ms ease-in-out forwards",
//             opacity: "1"
//         });
//     }, (offset: "90%"));
// });
// $(window).scroll(function(){
//     console.log("scrolled");
//     // init();
//     // chkPos();
// })














// var elements;
// var windowHeight;


// function init() {
//     elements=document.querySelectorAll(".container");
//     console.log(elements);
//     windowHeight= window.innerHeight;
// }
// function chkPos() {
//     console.log("Pos Check");
//     console.log(elements);
//     for (var i=0; i<elements.length; i++) {
//         var element=elements[i];
//         var top=elements[i].getBoundingClientRect().top;
//         if (top-windowHeight<=0){
//             element.classList.add("collect");
//             element.css({
//                 animation: "holdMe 3500ms ease-in-out forwards",
//                 opacity: "1"
//             });
//         }
//     }
// }
// window.addEventListener("scroll", chkPos);
// window.addEventListener("resize",init);
// window.onload = init();

// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();


// const faders = document.querySelectorAll(".fade-in");
// const appOpt = {
//     threshold: 1
// };
// const aOS = new IntersectionObserver(function(
//     entries,
//     aOS
//     ) {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//                 return;
//             } else {
//                 entry.target.classList.add("appear");
//                 aOS.unobserve(entry.target);
//             }
//         })
//     }, aOS);
// faders.forEach(fader => {
//     aOS.observe(fader);
// })
if ('IntersectionObserver' in window) {
    console.log("Your browser supports IntersectionObserver");
} else {
    console.log("Your browser does not support IntersectionObserver");
}
// let faders = document.querySelectorAll(".fade-in");
// console.log("Help");
// const appOpt = {
//     threshold: 1
// };
// const aOS = new IntersectionObserver(function(entries, aOS) {
//     console.log("Init");
//     entries.forEach(entry => {
//         // if(!entry.isIntersecting) {
//         //     console.log("Bad!");
//         //     return;
//         // } else {
//         //     console.log("Good.");
//         //     entry.target.classList.add("appear");
//         //     aOS.unobserve(entry.target);
//         // }
//         console.log("Init");
//         console.log(entry);
//     })
// }, appOpt);

// // faders.forEach(fader => {
// //     aOS.observe(fader);
// // })
// // console.log(aOS);
// aOS.observe(faders[1]);