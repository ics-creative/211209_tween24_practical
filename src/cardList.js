import { Ease24, Tween24 } from "tween24";

/**
 * 交差時のコールバック関数
 * @param entries
 */
const intersectionCallback = (entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // 交差した要素のdata属性からtweenIdを取得
      const tweenId = entry.target.dataset.tweenId;
      // 200ミリ秒ずつ遅延させて実行
      setTimeout(() => {
        Tween24.playById(tweenId);
      }, 200 * index);
    }
  });
};

/**
 * Intersection Observerを作成
 * @type {IntersectionObserver}
 */
const observer = new IntersectionObserver(intersectionCallback, {
  // 見えてから実行したいので、画面下よりも少し上に範囲を設定
  rootMargin: "0px 0px -15%",
});

// カードコンポーネントの全要素
const cardElements = document.querySelectorAll(".card");

// Tweenアニメーションを作成
cardElements.forEach((cardElement, index) => {
  const children = cardElement.querySelectorAll("*");
  Tween24.prop(Array.from(children)).opacity(0).y(40).play();

  // カード内フェードTweenアニメーション
  const fadeTween = Tween24.tween(Array.from(children), 1, Ease24._4_QuartOut)
    .opacity(1)
    .y(0);

  // 個々のフェードTweenを連続的に実行
  const cardTween = Tween24.lag(0.1, fadeTween);

  // Tweenアニメーションにidを付与
  cardTween.id(`${index}`);

  // Intersection Observer側から読み出せるようにdata属性にセット
  cardElement.dataset.tweenId = `${index}`;

  // オブザーバーで監視
  observer.observe(cardElement);
});
