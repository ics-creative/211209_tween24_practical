import { Ease24, Event24, Tween24 } from "tween24";

const VELOCITY = 10;

// ナビゲーション下線
document.querySelectorAll(".creative_nav li").forEach((element) => {
  const underLineElement = element.querySelector(".creative_underline");
  const enterAnimation = Tween24.tween(
    underLineElement,
    0.5,
    Ease24._2_QuadOut
  ).width("100%");
  const leaveAnimation = Tween24.tween(
    underLineElement,
    0.5,
    Ease24._2_QuadOut
  ).width("0%");
  Event24.add(
    element,
    Event24.MOUSE_ENTER,
    Tween24.func(() => {
      leaveAnimation.skip();
      enterAnimation.play();
    })
  );
  Event24.add(
    element,
    Event24.MOUSE_LEAVE,
    Tween24.func(() => {
      enterAnimation.skip();
      leaveAnimation.play();
    })
  );
});

/**
 * トゥイーンの初期状態を設定
 * @type {Tween24}
 */
const initProps = Tween24.serial(
  Tween24.propText(".creative_mainText_title").x(-20).opacity(0),
  Tween24.propText(".creative_mainText_paragraph").x(-5).opacity(0),
  Tween24.prop(".creative_contents").scaleY(0),
  Tween24.prop(".creative_nav_title").opacity(0),
  Tween24.prop(".creative_nav li").opacity(0).y(-80),
  Tween24.prop(".creative_bar").height(0).width(1),
  Tween24.prop(".creative_bar__upper").y(240),
  Tween24.prop(".creative_bar__lower").y(-240),
  Tween24.prop(".creative_image_star").opacity(0),
  Tween24.prop(".creative_image_picture").opacity(0).scale(0.85)
);

/**
 * コンテンツが広がるトゥイーン
 * @type {Tween24}
 */
const ScreenTween = Tween24.tween(".creative_contents", 0.5, Ease24._3_CubicOut)
  .scaleY(1)
  .delay(0.5);

/**
 * 上下の線のトゥイーン
 * @type {Tween24}
 */
const lineTween = Tween24.serial(
  Tween24.tween(".creative_bar", 0.5, Ease24._3_CubicOut)
    .width("100%")
    .jump(0.8),
  Tween24.parallel(
    Tween24.tween(".creative_bar__upper", 0.5, Ease24._3_CubicOut).y(0),
    Tween24.tween(".creative_bar__lower", 0.5, Ease24._3_CubicOut).y(0),
    Tween24.tween(".creative_bar", 0.5, Ease24._3_CubicOut).height(10)
  )
);

/**
 * タイトルのトゥイーン
 */
const titleTween = Tween24.serial(
  Tween24.lag(
    0.03,
    Tween24.tweenText(".creative_mainText_title", 0.4, Ease24._3_CubicOut)
      .x(0)
      .opacity(1)
  )
);

/**
 * 文章のトゥイーン
 */
const paragraphTween = Tween24.serial(
  Tween24.lagTotal(
    1,
    Tween24.tweenText(".creative_mainText_paragraph", 0.4, Ease24._3_CubicOut)
      .x(0)
      .opacity(1)
  )
);

/**
 * ナビゲーションのトゥイーン
 * @type {Tween24}
 */
const showNavigationTween = Tween24.parallel(
  Tween24.tween(".creative_nav_title", 0.8, Ease24._3_CubicOut).opacity(1),
  Tween24.lagTotal(
    0.3,
    Tween24.tween(".creative_nav li", 0.2, Ease24._3_CubicOut).y(0)
  ),
  Tween24.lagTotal(
    0.3,
    Tween24.tween(".creative_nav li", 1, Ease24._3_CubicOut).opacity(1)
  )
);

/**
 * 星が出現するトゥイーン
 * @type {Tween24}
 */
const starsTween = Tween24.lagTotalEase(
  0.8,
  Ease24._Linear,
  Tween24.tween(".creative_image_star", 0.5, Ease24._3_CubicOut).opacity(1)
);

/**
 * 星座のトゥイーンの配列
 * @type {Tween24[]}
 */
const pathTweenList = Array.from(document.querySelectorAll("svg path")).map(
  (path) => {
    const pathLength = path.getTotalLength();
    const tweenData = { progress: { value: 0 } };

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
        Ease24._3_CubicOut,
        tweenData.progress
      )
        .onUpdate(update)
        .onComplete(() => {
          tweenData.progress.value = 100;
        })
    );
    return pathTween;
  }
);

/**
 * 星座のトゥイーンをしたあとに蠍座の画像を出すトゥイーン
 * @type {Tween24}
 */
const pictureAndPathTween = Tween24.serial(
  Tween24.parallel(pathTweenList[0], pathTweenList[1]),
  Tween24.parallel(
    Tween24.tween(".creative_image_picture", 0.2, Ease24._3_CubicOut).scale(1),
    Tween24.tween(".creative_image_picture", 0.8, Ease24._3_CubicOut).opacity(1)
  )
);

/**
 * 背景で動くテキストのトゥイーン配列
 * @type {Tween24[]}
 */
const bgTextTweenList = Array.from(
  document.querySelectorAll(".creative_bgText")
).map((element) => {
  const firstText = element.querySelector(".firstText");
  const secondText = element.querySelector(".secondText");

  // まえ側のテキスト
  const firstTextTween = Tween24.serial(
    Tween24.prop(firstText).y(0),
    Tween24.tweenVelocity(firstText, VELOCITY).y("-100%")
  );
  // うしろ側のテキスト（見きれないようにする）
  const secondTextTween = Tween24.serial(
    Tween24.prop(secondText).y("100%"),
    Tween24.tweenVelocity(secondText, VELOCITY).y(0)
  );

  // ベルトスクロールのループTweenを返す
  return Tween24.loop(0, Tween24.parallel(firstTextTween, secondTextTween));
});

/**
 * アニメーション全体を実行する
 * @type {Tween24}
 */
const timeline = Tween24.serial(
  Tween24.func(() => {
    document.querySelectorAll("svg path").forEach((path) => {
      const pathLength = path.getTotalLength();
      path.setAttribute("stroke-dasharray", String(pathLength));
      path.setAttribute("stroke-dashoffset", String(pathLength));
    });
  }),
  initProps,
  Tween24.parallel(
    ScreenTween,
    lineTween,

    Tween24.parallel(
      Tween24.serial(
        Tween24.parallel(starsTween, pictureAndPathTween),
        Tween24.parallel(
          titleTween,
          paragraphTween,
          bgTextTweenList[0],
          bgTextTweenList[1],
          showNavigationTween.delay(0.8)
        )
      )
    ).delay(0.8)
  )
);

timeline.play();

document.querySelector(".js-replay").addEventListener("click", () => {
  timeline.stop();
  document.querySelectorAll(".creative_bgText").forEach((element) => {
    const firstText = element.querySelector(".firstText");
    const secondText = element.querySelector(".secondText");
    Tween24.prop(firstText).y(0).play();
    Tween24.prop(secondText).y("100%").play();
  });
  initProps.play();
  timeline.play();
});
