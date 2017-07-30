/*
window.onload = function() {
  document.getElementById( "preloader" ).style.display = "none";
  document.querySelector( ".page-wrapper" ).style.display = "block";
}
*/
$(document).ready(function() {
    $("#preloader").css("display","none");
    $(".page-wrapper").css("display","block");
    
    var carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3,
        separation: 120,
        horizonOffset:30,
        sizeMultiplier:.6,

        movedToCenter: function(clickedItem) {
            var imageId = clickedItem.attr('id');

            if (imageId === 'image-1') {
                $(".serie").addClass("hide");
                $(".serie-1").removeClass('hide');

                $(".carousel-text").removeClass("show-text");
                $("#text-1").addClass("show-text");

            }
            if (imageId === 'image-2') {
                $(".serie").addClass("hide");
                $(".serie-2").removeClass('hide')

                $(".carousel-text").removeClass("show-text");
                $("#text-2").addClass("show-text");

            }
            if (imageId === 'image-3') {
                $(".serie").addClass("hide");
                $(".serie-3").removeClass('hide')

                $(".carousel-text").removeClass("show-text");
                $("#text-3").addClass("show-text");

            }
            if (imageId === 'image-4') {
                $(".serie").addClass("hide");
                $(".serie-4").removeClass('hide')

                $(".carousel-text").removeClass("show-text");
                $("#text-4").addClass("show-text");

            }
            if (imageId === 'image-5') {
                $(".serie").addClass("hide");
                $(".serie-5").removeClass('hide')

                $(".carousel-text").removeClass("show-text");
                $("#text-5").addClass("show-text");
            }

        }
    });

    $('#prev').bind('click', function() {
        carousel.prev();
        return false
    });

    $('#next').bind('click', function() {
        carousel.next();
        return false;
    });


    $(".serie").addClass("hide");
    $(".serie-1").removeClass("hide");

    $("#text-1").addClass("show-text");

    new Swiper(".serie", {
        pagination: ".swiper-pagination",
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween:51,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

});