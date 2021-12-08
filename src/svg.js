import { Ease24, Tween24 } from "tween24";

// パス要素を取得
const path = document.querySelector("svg path");

// パスの長さを取得
const pathLength = path.getTotalLength();

// パスの長さを破線の間隔として設定
path.setAttribute("stroke-dasharray", String(pathLength));

// アニメーション進捗のオブジェクト。valueの値をTweenさせる
const tweenData = { progress: { value: 0 } };

/**
 * アップデート時の実行する関数
 * 進捗率に応じてパスのオフセットを設定する
 */
const update = () => {
  // 進捗率に長さを掛けたものがオフセット値
  const offset = pathLength * (tweenData.progress.value / 100);
  path.setAttribute("stroke-dashoffset", String(offset));
};

const pathTween = Tween24.serial(
  Tween24.prop(tweenData.progress, { value: 100 }),
  Tween24.tween(
    tweenData.progress,
    1,
    Ease24._1_SineIn,
    tweenData.progress
  ).onUpdate(update)
);

pathTween.play();

document.querySelector(".js-replay").addEventListener("click", () => {
  path.setAttribute("stroke-dasharray", String(pathLength));
  pathTween.play();
});
