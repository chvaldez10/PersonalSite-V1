$(".tab-navigation-container").on("click", ".tab-link", function () {
  var $container = $(this).closest(".tab-navigation-container");
  var $activeIndicator = $container.find(".tab-active-indicator");

  // Update active link
  $container.find(".tab-link.active").removeClass("active");
  $(this).addClass("active");

  // Position the active indicator beneath the current active tab
  $activeIndicator.css("left", $(this).position().left);

  // Update active content
  var targetId = $(this).data("target");
  $container.find(".tab-content.active").removeClass("active");
  $(targetId).addClass("active");
});
