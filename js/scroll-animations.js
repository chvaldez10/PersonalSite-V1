/**
 * jQuery selectors are used to automate section scrolling. Animation might feel different on different OS.
 */
$("#bio").click(() => {
  $("html, body").animate(
    { scrollTop: $("#about-me").offset().top - 30 },
    250,
    "linear"
  );
});

$("#about-me-arrow").click(() => {
  $("html, body").animate(
    { scrollTop: $("#about-me").offset().top - 30 },
    250,
    "linear"
  );
});

$("#experience").click(() => {
  $("html, body").animate(
    { scrollTop: $("#experience-section").offset().top - 30 },
    250,
    "linear"
  );
});

$("#education").click(() => {
  $("html, body").animate(
    { scrollTop: $("#meng").offset().top - 75 },
    250,
    "linear"
  );
});

$("#volunteer").click(() => {
  $("html, body").animate(
    { scrollTop: $("#CFMC").offset().top - 30 },
    250,
    "linear"
  );
});

$("#current-project").click(() => {
  $("html, body").animate(
    { scrollTop: $("#project-highlights").offset().top },
    250,
    "linear"
  );
});
