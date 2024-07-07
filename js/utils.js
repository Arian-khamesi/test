$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 3
            },
            768: {
                items: 2.5
            },
            1000: {
                items: 3
            },
            1150: {
                items: 4
            },
            1500: {
                items: 5
            },
            1900: {
                items: 6
            }
        }
    });

});

$(".carousel_img").ready(
    function () {
        $(".owl-stage-outer").animate({ paddingRight: "90px" }, 600, "linear");
        $(".owl-stage-outer").animate({ paddingRight: "120px" }, 600, "linear");
    }
)

$(".carousel_item").mouseenter(function (e) {
    $(e.target).animate({ opacity: "0.5" }, 200, "linear", function () {
        $(e.target).attr("src", "./images/slider2.webp")
    });
    $(e.target).animate({ opacity: "1" }, 200, "linear")
})
$(".carousel_item").mouseleave(function (e) {
    $(e.target).animate({ opacity: "0.5" }, 200, "linear", function () {
        $(e.target).attr("src", "./images/slider.webp")
    });
    $(e.target).animate({ opacity: "1" }, 200, "linear")
})

// $(".carousel_item").mouseleave(function (e) {
//     $(e.target).fadeOut(100, "linear", function () {
//         $(e.target).attr("src", "./images/slider.webp")
//     }).fadeIn(100)
// })