import { t as e } from "./vendor.864692c0.js";
document.querySelectorAll(".list_item a").forEach((t) => {
  const n = t.querySelector(".underline"),
    o = e.exports.Tween24.tween(n, 0.5, e.exports.Ease24._2_QuadOut).width(
      "100%"
    ),
    r = e.exports.Tween24.tween(n, 0.5, e.exports.Ease24._2_QuadOut).width(
      "0%"
    );
  e.exports.Event24.add(
    t,
    e.exports.Event24.MOUSE_ENTER,
    e.exports.Tween24.func(() => {
      r.skip(), o.play();
    })
  ),
    e.exports.Event24.add(
      t,
      e.exports.Event24.MOUSE_LEAVE,
      e.exports.Tween24.func(() => {
        o.skip(), r.play();
      })
    );
});
