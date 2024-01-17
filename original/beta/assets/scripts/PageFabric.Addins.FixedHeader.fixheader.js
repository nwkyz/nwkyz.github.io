$(document).ready(function () {

    let headerHeight = $("header").height();

    $(window).scroll(function () {

        let scrollPos = $(window).scrollTop();

        if (scrollPos >= headerHeight) {
            $("header").addClass("fixed-header");
        }
        else {
            $("header").removeClass("fixed-header");
        }
    });

});