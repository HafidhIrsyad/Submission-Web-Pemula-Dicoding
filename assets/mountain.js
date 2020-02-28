const club = document.querySelector(".container");
const t1 = new TimelineMax();

t1.fromTo(
  club,
  1,
  { height: "0%" },
  { height: "80%", ease: Power2.easeInOut }
).fromTo(
  club,
  1.2,
  { width: "100%" },
  { width: "80%", ease: Power2.easeInOut }
);
