/**
 * Simple Dom animations for visual effects.
 */

/**
 * Remove navbar background if the user is at the top of the page.
 */
$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $("nav").addClass("nav-background-change");
  } else {
    $("nav").removeClass("nav-background-change");
    $("nav").addClass("nav-background-change-back");
  }
});

/**
 * The following jQuery selectors is to automate section scrolling.
 */
$("#about-me-a").click(function () {
  $("html, body").animate(
    { scrollTop: $("#about-me").offset().top },
    100,
    "linear"
  );
});

$("#about-me-arrow").click(function () {
  $("html, body").animate(
    { scrollTop: $("#about-me").offset().top },
    100,
    "linear"
  );
});

$("#BSC-a").click(function () {
  $("html, body").animate({ scrollTop: $("#BSC").offset().top }, 100, "linear");
});

$("#CMG-a").click(function () {
  $("html, body").animate({ scrollTop: $("#CMG").offset().top }, 100, "linear");
});

$("#BT-lab-a").click(function () {
  $("html, body").animate(
    { scrollTop: $("#BT-lab").offset().top },
    100,
    "linear"
  );
});

$("#CFMC-a").click(function () {
  $("html, body").animate(
    { scrollTop: $("#CFMC").offset().top },
    100,
    "linear"
  );
});

$("#project-highlights-a").click(function () {
  $("html, body").animate(
    { scrollTop: $("#project-highlights").offset().top },
    100,
    "linear"
  );
});

/**
 * Open GitHub profile.
 */
$("#github-button").click(function () {
  window.open("https://github.com/chvaldez10", "_blank");
});

/**
 * Open resume from GitHub page.
 */
$("#resume-button").click(function () {
  window.open(
    "https://github.com/chvaldez10/PersonalSite-V1/blob/main/pdfs/Christian-Valdez_Resume.pdf",
    "_blank"
  );
});

/**
 * Dashed line animation.
 */
$(window).on("scroll", function () {
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
