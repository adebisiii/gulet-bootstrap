$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4,
    loop: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        1170:{
            items:3
        }
    }
});
