/**
 * Simple Dom animations for visual effects.
 */

/**
 * Remove navbar background if the user is at the top of the page.
 */
$(window).scroll(function () {
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
 * The following jQuery selectors is to automate section scrolling.
 */
$("#Bio").click(function () {
  $("html, body").animate(
    { scrollTop: $("#about-me").offset().top - 30 },
    100,
    "linear"
  );
});

$("#about-me-arrow").click(function () {
  $("html, body").animate(
    { scrollTop: $("#about-me").offset().top - 30 },
    100,
    "linear"
  );
});

$("#Education").click(function () {
  $("html, body").animate(
    { scrollTop: $("#MEng").offset().top - 30 },
    100,
    "linear"
  );
});

$("#Experience").click(function () {
  $("html, body").animate(
    { scrollTop: $("#Showpass").offset().top - 30 },
    100,
    "linear"
  );
});

$("#Research").click(function () {
  $("html, body").animate(
    { scrollTop: $("#BT-lab").offset().top - 30 },
    100,
    "linear"
  );
});

$("#Volunteer").click(function () {
  $("html, body").animate(
    { scrollTop: $("#CFMC").offset().top - 30 },
    100,
    "linear"
  );
});

$("#current-project").click(function () {
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
