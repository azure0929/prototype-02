$(".open-nav").click(function () {
  $(this).addClass("active");
  $(".close-nav").addClass("active");
  $(".front").fadeOut();
  $(".back").fadeIn();
});
$(".close-nav").click(function () {
  $(this).removeClass("active");
  $(".open-nav").removeClass("active");
  $(".back").fadeOut();
  $(".front").fadeIn();
});
