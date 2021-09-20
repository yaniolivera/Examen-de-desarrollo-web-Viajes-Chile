/* animate smooth scrolling sections */
$("nav ul li a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 500, function () {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});
// change color menu 
$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-info");
    } else {
        $("#menu").removeClass("bg-info");
    }
});