$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".main-nav").css({ "opacity": "1" })
        }
    })
});
