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
    "https://github.com/chvaldez10/PersonalSite-V1/blob/main/pdfs/Resume.pdf",
    "_blank"
  );
});

// for circuit elements
const latchSwitch = document.getElementById("latchSwitch");
const bulb = document.querySelector(".bulb");
const circuitSwitch = document.querySelector(".rotate-45");

latchSwitch.addEventListener("change", function () {
  if (latchSwitch.checked) {
    bulb.classList.add("on");
    circuitSwitch.classList.remove("rotate-45");
  } else {
    bulb.classList.remove("on");
    circuitSwitch.classList.add("rotate-45");
  }
});

// for scrolling
const highlight = document.querySelectorAll(".highlight");
const observer = new IntersectionObserver((entries) => {
  console.log(entries);
});

observer.observe(highlight[0]);
