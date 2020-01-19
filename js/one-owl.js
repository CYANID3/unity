	$('#one-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText : ["",""],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: false
        },
        720:{
            items:2,
            nav:false,
            dots: false
        },
        1200:{
            items:4,
            nav:true,
            loop:true,
            dots: false
        }
    }
})