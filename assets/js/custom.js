(function ($) {
  "use strict";
  // for sticky navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".navbar-area").addClass("sticky");
    } else {
      $(".navbar-area").removeClass("sticky");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".navbar-area .main-nav").addClass("sticky");
    } else {
      $(".navbar-area .main-nav").removeClass("sticky");
    }
  });

  // Mean Menu
  $(".mean-menu").meanmenu({
    meanScreenWidth: "1199",
  });

  // popup button
  $(".popup-button").click(function () {
    $(".popup").css("visibility", "visible");
    $(".popup-content").addClass("hi");
  });
  $("#popup-close").click(function () {
    $(".popup").css("visibility", "hidden");
    $(".popup-content").removeClass("hi");
  });

  // Small Device popup button
  $(".small-device-popup-btn").click(function () {
    $(".small-device-popup").css("visibility", "visible");
    $(".small-device-popup").css("width", "30%");
    $(".sidebar-popup-content").addClass("s-active");
  });
  $("#side-popup-close").click(function () {
    $(".small-device-popup").css("visibility", "hidden");
    $(".small-device-popup").css("width", "0px");
    $(".sidebar-popup-content").removeClass("s-active");
  });

  $(".main-banner-slider-area").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    autoplay: true,
    loop: true,
    dots: false,
    items: 1,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
  });

  $(".portfolio-slider-area").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    autoplay: true,
    loop: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  $(".testimonial-slider-area").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoplay: true,
    loop: true,
    dots: true,
    items: 5,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  $(".partner-slider-area").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoplay: true,
    loop: true,
    dots: false,
    items: 5,
    responsive: {
      0: {
        items: 2,
        margin: 20,
      },
      576: {
        items: 3,
        margin: 70,
      },
      992: {
        items: 4,
        margin: 100,
      },
      1200: {
        items: 5,
        margin: 100,
      },
    },
  });

  $(".service-slider-area").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".testimonial-slider-area-2").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".service-slider-area-3").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoplay: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".portfolio-slider-area-3").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  $(".testimonial-slider-area-3").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoplay: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 1.5,
      },
      1400: {
        items: 2,
      },
      1550: {
        items: 2.4,
      },
    },
  });

  // Video PopUp
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  // language select
  $("select").niceSelect();

  //   // TweenMax JS
  //   $(".about-img-2,.why-only-img-area-2").mousemove(function (e) {
  //     var wx = $(window).width();
  //     var wy = $(window).height();
  //     var x = e.pageX - this.offsetLeft;
  //     var y = e.pageY - this.offsetTop;
  //     var newx = x - wx / 2;
  //     var newy = y - wy / 2;
  //     $(".shape1,.shape2").each(function () {
  //       var speed = $(this).attr("data-speed");
  //       if ($(this).attr("data-revert")) speed *= -0.4;
  //       TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
  //     });
  //   });

  // countdown
  $("#getting-started-d").countdown("2022/03/05", function (event) {
    $(this).html(
      event.strftime("<div><span>%D</span> <span>Days </span> </div> ")
    );
  });
  $("#getting-started-h").countdown("2022/03/05", function (event) {
    $(this).html(
      event.strftime("<div><span>%H</span> <span>Hours </span> </div> ")
    );
  });
  $("#getting-started-m").countdown("2022/03/05", function (event) {
    $(this).html(
      event.strftime("<div><span>%M</span> <span>minutes </span> </div> ")
    );
  });
  $("#getting-started-s").countdown("2022/03/05", function (event) {
    $(this).html(
      event.strftime("<div><span>%S</span> <span>seconds </span> </div> ")
    );
  });

  // Subscribe form
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly.");
      } else {
        // everything looks good!
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }
  $(".newsletter-form").ajaxChimp({
    url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
    callback: callbackFunction,
  });

  // Go to Top
  $(function () {
    // Scroll Event
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) $(".go-top").addClass("active");
      if (scrolled < 600) $(".go-top").removeClass("active");
    });
    // Click Event
    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
  });

  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  $(".progress-bar-area").appear(function () {
    $("#bar1").barfiller({
      duration: 2500,
    });
    $("#bar2").barfiller({
      duration: 2500,
    });
    $("#bar3").barfiller({
      duration: 2500,
    });
    $("#bar4").barfiller({
      duration: 2500,
    });
  });

  // WOW Animation JS
  if ($(".wow").length) {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  }
})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
// (function () {
//   if (localStorage.getItem("theme") === "theme-dark") {
//     setTheme("theme-dark");
//     document.getElementById("slider").checked = false;
//   } else {
//     setTheme("theme-light");
//     document.getElementById("slider").checked = true;
//   }
// })();
