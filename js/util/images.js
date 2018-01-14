var IMAGES = {};
var SRC = [
  "cactus_large",
  "cactus_large_flower",
  "cactus_med",
  "cactus_med_flower",
  "rock",
  "bank",
  "billboard_0",
  "billboard_1",
  "billboard_2",
  "billboard_3",
  "bullet_north",
  "bullet_east",
  "bullet_south",
  "bullet_west",
  "church",
  "crow",
  "crow-dead",
  "crow-with-shadow",
  "cow_north",
  "cow_east",
  "cow_south",
  "cow_west",
  "cow_west_branded",
  "cowboy_north",
  "cowboy_east",
  "cowboy_south",
  "cowboy_west",
  "cowboy_4x",
  "outhouse_open",
  "outhouse_closed",
  "horse_north",
  "horse_east",
  "horse_south",
  "horse_west",
  "cowboy_horse_north",
  "cowboy_horse_east",
  "cowboy_horse_south",
  "cowboy_horse_west",
  "fire",
  "tomahawk_north",
  "tomahawk_east",
  "tomahawk_south",
  "tomahawk_west",
  "arrow_north",
  "arrow_east",
  "arrow_south",
  "arrow_west",
  "dead_cow",
  "dead_horse",
  "bones",
  "fence_east",
  "fence_north",
  "fence_south",
  "fence_west",
  "logo",
  "totem_half",
  "pole_half",
  "native",
  "native_chief",
  "tepee",
  "totem",
  "cabin",
  "station",
  "saloon",
  "mansion",
  "signpost",
  "signpost_tall",
  "watertower",
  "oasis-tiny",
  "oasis-large",
  "fish-array",
  "fish-giant",
  "dog-east",
  "dog-west",
  "prospector",
  "grave1",
  "grave2",
  "grave3",
  "grave4",
  "grave5",
  "grave6",
  "grave7",
];

document.addEventListener("DOMContentLoaded", function() {
  var cont = document.getElementById("image-container");
  for (var i = 0; i < SRC.length; i++) {
    var img = document.createElement("img");
    img.src = "img/" + SRC[i] + ".gif";
    cont.appendChild(img);
  }
});
