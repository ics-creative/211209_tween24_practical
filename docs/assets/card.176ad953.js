import "./style.7f2dd081.js";
import { t as e } from "./vendor.864692c0.js";
const t = document.querySelectorAll(".card *");
e.exports.Tween24.prop(".card *").opacity(0).y(40).play();
const r = e.exports.Tween24.tween(".card *", 0.8, e.exports.Ease24._3_CubicOut)
  .opacity(1)
  .y(0);
e.exports.Tween24.lag(0.1, r).play();
document.querySelector(".js-replay").addEventListener("click", () => {
  e.exports.Tween24.prop(Array.from(t)).opacity(0).y(40).play(),
    e.exports.Tween24.lag(0.1, r).play();
});
