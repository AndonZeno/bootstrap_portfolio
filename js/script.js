$(document).ready(function () {
  var typed = new Typed(".typed", {
    strings: ["Web Developer", "Software Engineer"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  })

  // sticky navbar

  let nav_top_offset = $(".header_area").height() + 663

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop()
        if (scroll >= nav_top_offset) {
          $(".header_area .main-menu").addClass("navbar_fixed")
          $(".about-area").addClass("sticky_about_area")
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed")
          $(".about-area").removeClass("sticky_about_area")
        }
      })
    }
  }

  navbarFixed()
})
