import "./style.7f2dd081.js";
import { t as e } from "./vendor.864692c0.js";
e.exports.Tween24.serial(
  e.exports.Tween24.propText(".text").x(-20).opacity(0),
  e.exports.Tween24.lag(
    0.03,
    e.exports.Tween24.tweenText(".text", 0.4, e.exports.Ease24._3_CubicOut)
      .x(0)
      .opacity(1)
  )
).play();
document.querySelector(".js-replay").addEventListener("click", () => {
  e.exports.Tween24.serial(
    e.exports.Tween24.propText(".text").x(-40).opacity(0),
    e.exports.Tween24.lag(
      0.02,
      e.exports.Tween24.tweenText(".text", 0.4, e.exports.Ease24._3_CubicOut)
        .x(0)
        .opacity(1)
    )
  ).play();
});
