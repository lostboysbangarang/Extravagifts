     images= document.querySelector(".anime");
observer= new IntersectionObserver((entries) => {
    console.log(entries);
})
observer.observe(images)