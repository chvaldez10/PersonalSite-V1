/**
 * Remove navbar background if the user is at the top of the page.
 */
$(window).scroll(() => {
  if ($(document).scrollTop() > 20) {
    $("nav")
      .removeClass("navbar-background-change-back")
      .addClass("nav-background-change");
  } else {
    $("nav")
      .removeClass("nav-background-change")
      .addClass("nav-background-change-back");
  }
});

/**
 * Document ready commands.
 */
$(document).ready(() => {
  // Scroll to top on page load
  $(this).scrollTop(0);

  // Ensure the page starts at the top even if refreshed
  $(window).on("beforeunload", () => {
    $(window).scrollTop(0);
  });

  // Collapse the navbar when a link is clicked in mobile view
  $(".nav-link").click(function () {
    let navbarToggle = $(".navbar-toggler");
    if (
      navbarToggle.is(":visible") &&
      navbarToggle.attr("aria-expanded") === "true"
    ) {
      navbarToggle.trigger("click"); // Simulate click to collapse navbar
    }
  });
});

/**
 * Open GitHub profile.
 */
$("#github-button").click(() => {
  window.open("https://github.com/chvaldez10", "_blank");
});

/**
 * Open resume from GitHub page.
 */
$("#resume-button").click(() => {
  window.open(
    "https://github.com/chvaldez10/chvaldez10.github.io/blob/main/pdfs/Christian-Valdez_Resume.pdf",
    "_blank"
  );
});

/**
 * Dashed line animation.
 */
$(window).on("scroll", () => {
  var $dashedLine = $(".dashed-line");
  var $dashedContainer = $(".dashed-container");

  // get position relative to viewport
  var containerPosition = $dashedContainer.offset().top;
  var screenPosition = $(window).height();

  // check if container is visible
  if (containerPosition < $(window).scrollTop() + screenPosition) {
    $dashedLine.css("height", "100%");
  } else {
    $dashedLine.css("height", "0%");
  }
});
