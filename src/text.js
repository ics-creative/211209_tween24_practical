import { Ease24, Tween24 } from "tween24";

Tween24.serial(
  Tween24.propText(".text").x(-20).opacity(0),
  Tween24.lag(
    0.03,
    Tween24.tweenText(".text", 0.4, Ease24._3_CubicOut).x(0).opacity(1)
  )
).play();

document.querySelector(".js-replay").addEventListener("click", () => {
  Tween24.serial(
    Tween24.propText(".text").x(-40).opacity(0),
    Tween24.lag(
      0.02,
      Tween24.tweenText(".text", 0.4, Ease24._3_CubicOut).x(0).opacity(1)
    )
  ).play();
});
