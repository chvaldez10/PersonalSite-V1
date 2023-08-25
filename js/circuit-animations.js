/**
 * Change switch position based on user click.
 */

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
