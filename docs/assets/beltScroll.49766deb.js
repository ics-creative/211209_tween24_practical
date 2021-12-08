import "./style.7f2dd081.js";
import { t as e } from "./vendor.864692c0.js";
const s = 100;
document.querySelectorAll(".beltScroll").forEach((t) => {
  const o = t.querySelector(".firstText"),
    r = t.querySelector(".secondText"),
    n = e.exports.Tween24.serial(
      e.exports.Tween24.prop(o).x(0),
      e.exports.Tween24.tweenVelocity(o, s).x("-100%")
    ),
    x = e.exports.Tween24.serial(
      e.exports.Tween24.prop(r).x("100%"),
      e.exports.Tween24.tweenVelocity(r, s).x(0)
    ),
    T = e.exports.Tween24.parallel(n, x);
  e.exports.Tween24.loop(0, T).play();
});
