$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active-header");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active-header");
        }
    });
});