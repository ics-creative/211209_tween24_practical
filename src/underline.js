import { Ease24, Event24, Tween24 } from "tween24";

document.querySelectorAll(".list_item a").forEach((element) => {
  const underLineElement = element.querySelector(".underline");

  // ホバー開始時のトゥイーン
  const enterAnimation = Tween24.tween(
    underLineElement,
    0.2,
    Ease24._2_QuadOut
  ).width("100%");

  // ホバー終了時のトゥイーン
  const leaveAnimation = Tween24.tween(
    underLineElement,
    0.5,
    Ease24._2_QuadOut
  ).width("0%");

  // ホバーイベントをaタグに付与
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
