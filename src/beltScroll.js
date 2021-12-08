import { Tween24 } from "tween24";

/**
 * スクロールする速さ
 * @type {number}
 */
const VELOCITY = 100;

document.querySelectorAll(".beltScroll").forEach((beltScrollElement) => {
  const firstText = beltScrollElement.querySelector(".firstText");
  const secondText = beltScrollElement.querySelector(".secondText");

  // まえ側のテキスト
  const firstTextTween = Tween24.serial(
    Tween24.prop(firstText).x(0),
    Tween24.tweenVelocity(firstText, VELOCITY).x("-100%")
  );
  // うしろ側のテキスト（見きれないようにする）
  const secondTextTween = Tween24.serial(
    Tween24.prop(secondText).x("100%"),
    Tween24.tweenVelocity(secondText, VELOCITY).x(0)
  );

  // 両者を同時に動かす
  const beltTween = Tween24.parallel(firstTextTween, secondTextTween);

  // ベルトスクロールをループ実行する
  Tween24.loop(0, beltTween).play();
});
