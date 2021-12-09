import { Ease24, Tween24 } from "tween24";

// 見出しのトゥイーン
Tween24.serial(
  Tween24.propText(".headline").x(-20).opacity(0),
  Tween24.lag(
    0.03,
    Tween24.tweenText(".headline", 0.4, Ease24._3_CubicOut).x(0).opacity(1)
  )
).play();

// 文章のトゥイーン
Tween24.serial(
  Tween24.propText(".text").xy(-5, 15).opacity(0).rotation(45),
  Tween24.lagTotal(
    2,
    Tween24.tweenText(".text", 0.4, Ease24._3_CubicOut)
      .xy(0, 0)
      .opacity(1)
      .rotation(0)
  )
).play();

document.querySelector(".js-replay-headline").addEventListener("click", () => {
  Tween24.serial(
    Tween24.propText(".headline").x(-40).opacity(0),
    Tween24.lag(
      0.02,
      Tween24.tweenText(".headline", 0.4, Ease24._3_CubicOut).x(0).opacity(1)
    )
  ).play();
});

document.querySelector(".js-replay-text").addEventListener("click", () => {
  Tween24.serial(
    Tween24.propText(".text").xy(-5, 15).opacity(0).rotation(45),
    Tween24.lagTotal(
      2,
      Tween24.tweenText(".text", 0.4, Ease24._3_CubicOut)
        .xy(0, 0)
        .opacity(1)
        .rotation(0)
    )
  ).play();
});
