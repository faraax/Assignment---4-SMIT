$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            770: {
                items: 2,
                margin: 2,
                nav: false,
            },
            1200: {
                items: 3,
                margin: 3,
                nav: false,
            }
        }
    });
    $('#menu').slicknav({
        label:'',
    })
    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if(value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    })
    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active.item');
    })
}); 