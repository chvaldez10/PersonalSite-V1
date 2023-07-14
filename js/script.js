$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $("nav").addClass("nav-background-change");
  } else {
    $("nav").removeClass("nav-background-change");
    $("nav").addClass("nav-background-change-back");
  }
});

$("#about-me-a").click(function () {
  console.log("here");
  $("html, body").animate({ scrollTop: $("#about-me").offset().top }, 1000);
});

$("#BSC-a").click(function () {
  console.log("here");
  $("html, body").animate({ scrollTop: $("#BSC").offset().top }, 1000);
});

$("#CMG-a").click(function () {
  console.log("here");
  $("html, body").animate({ scrollTop: $("#CMG").offset().top }, 1000);
});

$("#BT-lab-a").click(function () {
  console.log("here");
  $("html, body").animate({ scrollTop: $("#BT-lab").offset().top }, 1000);
});

$("#CFMC-a").click(function () {
  console.log("here");
  $("html, body").animate({ scrollTop: $("#CFMC").offset().top }, 1000);
});
