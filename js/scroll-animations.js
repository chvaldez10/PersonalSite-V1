/**
 * jQuery selectors is to automate section scrolling. Animation might feel different on different OS.
 */
$("#bio").click(function () {
  $("html, body").animate(
    { scrollTop: $("#about-me").offset().top - 30 },
    250,
    "linear"
  );
});

$("#about-me-arrow").click(function () {
  $("html, body").animate(
    { scrollTop: $("#about-me").offset().top - 30 },
    250,
    "linear"
  );
});

$("#experience").click(function () {
  $("html, body").animate(
    { scrollTop: $("#experience-section").offset().top - 30 },
    250,
    "linear"
  );
});

$("#Education").click(function () {
  $("html, body").animate(
    { scrollTop: $("#MEng").offset().top - 30 },
    250,
    "linear"
  );
});

$("#Volunteer").click(function () {
  $("html, body").animate(
    { scrollTop: $("#CFMC").offset().top - 30 },
    250,
    "linear"
  );
});

$("#current-project").click(function () {
  $("html, body").animate(
    { scrollTop: $("#project-highlights").offset().top },
    250,
    "linear"
  );
});
