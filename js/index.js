window.addEventListener("load", () => {
  var hero = document.querySelector(".fals");
  var tl = new TimelineMax();

  tl.fromTo(hero, 1, { y: -50 }, { y: 0 });
});
