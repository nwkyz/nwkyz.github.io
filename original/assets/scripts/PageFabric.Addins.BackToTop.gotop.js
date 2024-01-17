$(document).ready(function () {
    $("body").append("<div class='goTopButton'><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 407.436 407.436\" style=\" margin:10px; width:20px; height:20px;  enable-background:new 0 0 407.436 407.436;\"  xml:space=\"preserve\"><polygon fill=\"white\" points=\"203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 \"/></svg></div>");
});

$(window).scroll(function () {

    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $(".goTopButton").show();
    }
    else {
        $(".goTopButton").hide();
    }
});

$(document).on("click", ".goTopButton", function () {
    window.scrollTo(0, 0);
});