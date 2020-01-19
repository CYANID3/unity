	$('#two-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["◀","▶"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: true
        },
        980:{
            items:1,
            nav:true,
            dots:true
        },
        1200:{
            items:1,
            nav:true,
            dots:true,
            loop:true
        }
    }
})