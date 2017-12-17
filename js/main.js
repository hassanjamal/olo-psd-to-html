// Doc Ready function
var ready = function ( fn ) {
  if ( typeof fn !== 'function' ) return;
  if ( document.readyState === 'interactive' || document.readyState === 'complete' ) { return fn(); }
  document.addEventListener( 'DOMContentLoaded', fn, false );
};

// Add class on header on scroll
function headerOnScroll() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 500) {
            $('.header').addClass("header-scrolled");
        } else {
            $('.header').removeClass("header-scrolled");
        }
    });
}

// Smooth scrolling on anchor links
function smoothScroll() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
    });
}

// Hightlight nav on scroll
function highlightScroll() {
    $(window).on('scroll', function() {
        $('.section').each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('.sidemenu a').removeClass('active');
                $('.sidemenu a[href$="#'+ id +'"]').addClass('active');

                if(id === 'section-1' || id === 'section-2' || id === 'section-3' || id === 'section-4' || id === 'section-5' || id === 'section-6') {
                    $('.sidemenu').show();
                } else {
                    $('.sidemenu').hide();
                }
            }
        });
    });
}


// Document is loaded
ready(function () {

    // Add class on header on scroll
    headerOnScroll();

    // Smooth scrolling on internal links
    smoothScroll();

    // Scrolling init
    $.scrollify({
        section : ".section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "linear",
        scrollSpeed: 700,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });

    // Video link
    $('.video').magnificPopup({type: 'iframe'});

    // Hightlight nav on scroll
    highlightScroll();

    // Trigger scroll on page load
    $(window).scroll();
});

