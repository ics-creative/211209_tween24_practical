import { Ease24, Tween24 } from "tween24";

const children = document.querySelectorAll(".card *");

// 初期状態（透過・y座標）をセット
Tween24.prop(".card *").opacity(0).y(40).play();

// カード内の個々の要素のフェードTween
const fadeTween = Tween24.tween(".card *", 0.8, Ease24._3_CubicOut)
  .opacity(1)
  .y(0);

// 個々のフェードTweenを連続的に実行
Tween24.lag(0.1, fadeTween).play();

document.querySelector(".js-replay").addEventListener("click", () => {
  Tween24.prop(Array.from(children)).opacity(0).y(40).play();
  Tween24.lag(0.1, fadeTween).play();
});
