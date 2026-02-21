// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.classList.add("shadow");
    } else {
        nav.classList.remove("shadow");
    }
});

// OWL CAROUSEL FIX (hanya 1 kali pemanggilan)
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 }
        }
    });
});
