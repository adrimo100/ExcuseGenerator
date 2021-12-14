/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#btn").addEventListener("Click", () => {
    document.querySelector("#the-excuse").innerHTML = generatedExcuse();
  });
};

let generatedExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let a, b, c, d;

  a = Math.floor(Math.random() * who.length);

  b = Math.floor(Math.random() * who.length);

  c = Math.floor(Math.random() * who.length);

  d = Math.floor(Math.random() * who.length);

  var str = who[a] + " " + action[b] + " " + what[c] + " " + when[d];

  return str;
};
