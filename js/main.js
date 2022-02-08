$(document).ready(function () {
    $(".header").height($(window).height())
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
