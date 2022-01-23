"use strict";
let i = 0;
let colors = [
  "dodgerblue",
  "green",
  "blue",
  "lightcyan",
  "yellow",
  "pink",
  "cyan",
  "lime",
  "black",
  "silver",
  "greenyellow",
  "maroon",
  "indianred",
  "navy",
  "aqua",
  "aliceblue",
  "darkgreen",
  "aquamarine",
  "azure",
  "cadetblue",
  "chocolate",
  "coral",
  "darkgreen",
  "darkmagenta",
  "darkorange",
  "darkorchid",
  "darkseagreen",
  "darkslategrey",
  "dodgerblue",
  "fuchsia",
];
let pressedkey = document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  document.querySelector(".pressedKey").style.color = "white";
  document.querySelector(".pressedKey").textContent = e.key;
  i++;
  document.querySelector(".highscore").textContent = i;
  let randomColorID = Math.trunc(Math.random() * colors.length);
  document.querySelector("body").style.backgroundColor = colors[randomColorID];
});
let randomColorID, randomTextID;
let tap = document.addEventListener("click", function () {
  document.querySelector(".pressedKey").textContent = "TAP";
  i++;
  document.querySelector(".highscore").textContent = i;
  randomTextID = Math.trunc(Math.random() * colors.length);
  randomColorID = Math.trunc(Math.random() * colors.length);
  document.querySelector("body").style.backgroundColor = colors[randomColorID];
  document.querySelector(".pressedKey").style.color = colors[randomTextID];
});
