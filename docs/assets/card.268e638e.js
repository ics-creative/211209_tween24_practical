import "./modulepreload-polyfill.b7f2da20.js";
/* empty css              */ import { t as e } from "./vendor.864692c0.js";
const t = e.exports.Tween24.prop(".card *").opacity(0).y(40),
  o = e.exports.Tween24.tween(".card *", 1, e.exports.Ease24._4_QuartOut)
    .opacity(1)
    .y(0),
  r = e.exports.Tween24.lag(0.1, o);
e.exports.Tween24.serial(t, r).play();
document.querySelector(".js-replay").addEventListener("click", () => {
  e.exports.Tween24.serial(t, r).play();
});
