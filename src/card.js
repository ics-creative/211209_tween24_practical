import { Ease24, Tween24 } from "tween24";

// 初期状態（透過・y座標）をセット
const setInitialState = Tween24.prop(".card *").opacity(0).y(40);

// カード内の個々の要素のフェードTween
const fadeTween = Tween24.tween(".card *", 1, Ease24._4_QuartOut)
  .opacity(1)
  .y(0);

// 個々のフェードTweenを連続的に実行
const cardTween = Tween24.lag(0.1, fadeTween);

Tween24.serial(setInitialState, cardTween).play();

document.querySelector(".js-replay").addEventListener("click", () => {
  Tween24.serial(setInitialState, cardTween).play();
});
