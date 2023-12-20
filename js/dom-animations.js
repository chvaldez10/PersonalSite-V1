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
  $("html, body").animate({ scrollTop: $("#about-me").offset().top }, 1000);
});

$("#about-me-arrow").click(function () {
  $("html, body").animate({ scrollTop: $("#about-me").offset().top }, 1000);
});

$("#BSC-a").click(function () {
  $("html, body").animate({ scrollTop: $("#BSC").offset().top }, 1000);
});

$("#CMG-a").click(function () {
  $("html, body").animate({ scrollTop: $("#CMG").offset().top }, 1000);
});

$("#BT-lab-a").click(function () {
  $("html, body").animate({ scrollTop: $("#BT-lab").offset().top }, 1000);
});

$("#CFMC-a").click(function () {
  $("html, body").animate({ scrollTop: $("#CFMC").offset().top }, 1000);
});

$("#project-highlights-a").click(function () {
  $("html, body").animate(
    { scrollTop: $("#project-highlights").offset().top },
    1000
  );
});

$("#github-button").click(function () {
  window.open("https://github.com/chvaldez10", "_blank");
});

/**
 * Open resume from GitHub page.
 */
$("#resume-button").click(function () {
  window.open(
    "https://github.com/chvaldez10/PersonalSite-V1/blob/main/pdfs/Resume.pdf",
    "_blank"
  );
});
