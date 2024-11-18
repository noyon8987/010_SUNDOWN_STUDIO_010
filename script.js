// Locomotive Cdn Code Stats Here
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// Locomotive Cdn Code Ends Here

let elems = document.querySelector('.elems');
let fixedImage = document.querySelector('.fixed_image');

elems.addEventListener('mouseenter', () => {
    fixedImage.style.display = "block"
})

elems.addEventListener('mouseleave', () => {
    fixedImage.style.display = 'none'
})


let elem = document.querySelectorAll('.elem');

elem.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        let image = e.getAttribute('data-image');
        fixedImage.style.backgroundImage = `url(${image})`
    })
})


// Swiper Code Starts Here
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// Swiper Code Ends Here