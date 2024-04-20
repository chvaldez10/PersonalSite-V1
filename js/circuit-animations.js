/**
 * Change switch position based on user click.
 */

$(document).ready(function () {
  const $latchSwitch = $("#latchSwitch");
  const $bulb = $(".bulb");
  const $circuitSwitch = $(".rotate-45");

  $latchSwitch.on("change", function () {
    if ($latchSwitch.prop("checked")) {
      $bulb.addClass("on");
      $circuitSwitch.removeClass("rotate-45");
    } else {
      $bulb.removeClass("on");
      $circuitSwitch.addClass("rotate-45");
    }
  });
});
