$(window).on("load", function() {
    $(".loader").delay(1000).fadeOut("slow");
});

$(document).ready(function() {
    $("#currentYear").text((new Date()).getFullYear());
    attachTopScroller(".scrollUp");

    // Initialize the carousel
    $('#myCarousel').carousel({
        interval: 2000 // Adjust the interval time in milliseconds as you need
    });
});

function attachTopScroller (elementId){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(elementId).fadeIn();
        } else {
            $(elementId).fadeOut();
        }
    });

    // Scroll To Top Animation
    $(elementId).click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
};

document.addEventListener("DOMContentLoaded", function () {
  const navLink = document.getElementById("dynamicNav");

  navLink.addEventListener("mouseover", function () {
    if (!navLink.classList.contains("clicked")) {
      navLink.textContent = "Don't click here...";
    }
  });

  navLink.addEventListener("mouseout", function () {
    if (!navLink.classList.contains("clicked")) {
      navLink.textContent = "I'm warning you...";
    }
  });

  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    navLink.textContent = "Thank you for formally accepting my PhD application!";
    navLink.classList.add("clicked");
  });
});

