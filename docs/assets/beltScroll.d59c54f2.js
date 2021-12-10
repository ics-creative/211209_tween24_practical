import "./modulepreload-polyfill.b7f2da20.js";
/* empty css              */ import { t as e } from "./vendor.864692c0.js";
const t = 100,
  n = document.querySelector(".beltScroll .firstText"),
  l = document.querySelector(".beltScroll .secondText"),
  c = e.exports.Tween24.serial(
    e.exports.Tween24.prop(n).x(0),
    e.exports.Tween24.tweenVelocity(n, t).x("-100%")
  ),
  w = e.exports.Tween24.serial(
    e.exports.Tween24.prop(l).x("100%"),
    e.exports.Tween24.tweenVelocity(l, t).x(0)
  ),
  i = e.exports.Tween24.parallel(c, w);
e.exports.Tween24.loop(0, i).play();
document.querySelectorAll(".multiBeltScroll").forEach((o) => {
  const r = o.querySelector(".firstText"),
    s = o.querySelector(".secondText"),
    x = e.exports.Tween24.serial(
      e.exports.Tween24.prop(r).x(0),
      e.exports.Tween24.tweenVelocity(r, t).x("-100%")
    ),
    p = e.exports.Tween24.serial(
      e.exports.Tween24.prop(s).x("100%"),
      e.exports.Tween24.tweenVelocity(s, t).x(0)
    ),
    T = e.exports.Tween24.parallel(x, p);
  e.exports.Tween24.loop(0, T).play();
});
