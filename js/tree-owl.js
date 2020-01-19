	$('#three-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["◀","▶"],
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        980:{
            items:1,
            nav:true
        },
        1200:{
            items:1,
            nav:true,
            loop:true
        }
    }
})