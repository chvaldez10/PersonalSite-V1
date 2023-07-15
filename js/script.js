$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $("nav").addClass("nav-background-change");
  } else {
    $("nav").removeClass("nav-background-change");
    $("nav").addClass("nav-background-change-back");
  }
});

$("#about-me-a").click(function () {
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

$("#github-button").click(function () {
  window.open("https://github.com/chvaldez10", "_blank");
});

$("#resume-button").click(function () {
  window.open(
    "https://github.com/chvaldez10/PersonalSite-V1/blob/76060b30f44b9e98b1b2086b32334b1fdb823a8b/pdfs/Christian-Valdez_Resume.pdf",
    "_blank"
  );
});
