window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").classList.add("nav-background-change");
  } else {
    document.querySelector("nav").classList.remove("nav-background-change");
    document.querySelector("nav").classList.add("nav-background-change-back");
    console.log("scroll -50");
  }
}
