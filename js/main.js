$(document).ready(function () {
    // make header section as tall as the window
    $(".header,.about").height($(window).height())

    // when user clicks on one of the nav buttons, we scroll to the section with 
    // an id equal to the button's data-value attribute.
    $(".navbar-nav a").click(function (e) {
        e.preventDefault()
        const distanceFromTopToAboutSection = $(
            "#" + $(this).data("value")
        ).offset().top
        $("html,body").animate(
            {
                scrollTop: distanceFromTopToAboutSection,
            },
            1000
        )
    })
})
