import "./modulepreload-polyfill.b7f2da20.js";
/* empty css              */ import { t as e } from "./vendor.864692c0.js";
e.exports.Tween24.serial(
  e.exports.Tween24.propText(".headline").x(-20).opacity(0),
  e.exports.Tween24.lag(
    0.03,
    e.exports.Tween24.tweenText(".headline", 0.4, e.exports.Ease24._3_CubicOut)
      .x(0)
      .opacity(1)
  )
).play();
e.exports.Tween24.serial(
  e.exports.Tween24.propText(".text").xy(-5, 15).opacity(0).rotation(45),
  e.exports.Tween24.lagTotal(
    2,
    e.exports.Tween24.tweenText(".text", 0.4, e.exports.Ease24._3_CubicOut)
      .xy(0, 0)
      .opacity(1)
      .rotation(0)
  )
).play();
document.querySelector(".js-replay-headline").addEventListener("click", () => {
  e.exports.Tween24.serial(
    e.exports.Tween24.propText(".headline").x(-40).opacity(0),
    e.exports.Tween24.lag(
      0.02,
      e.exports.Tween24.tweenText(
        ".headline",
        0.4,
        e.exports.Ease24._3_CubicOut
      )
        .x(0)
        .opacity(1)
    )
  ).play();
});
document.querySelector(".js-replay-text").addEventListener("click", () => {
  e.exports.Tween24.serial(
    e.exports.Tween24.propText(".text").xy(-5, 15).opacity(0).rotation(45),
    e.exports.Tween24.lagTotal(
      2,
      e.exports.Tween24.tweenText(".text", 0.4, e.exports.Ease24._3_CubicOut)
        .xy(0, 0)
        .opacity(1)
        .rotation(0)
    )
  ).play();
});
