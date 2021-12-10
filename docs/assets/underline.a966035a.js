import "./modulepreload-polyfill.b7f2da20.js";
/* empty css              */ import { t as e } from "./vendor.864692c0.js";
document.querySelectorAll(".list_item a").forEach((t) => {
  const o = t.querySelector(".underline"),
    n = e.exports.Tween24.tween(o, 0.2, e.exports.Ease24._2_QuadOut).width(
      "100%"
    ),
    r = e.exports.Tween24.tween(o, 0.5, e.exports.Ease24._2_QuadOut).width(
      "0%"
    );
  e.exports.Event24.add(
    t,
    e.exports.Event24.MOUSE_ENTER,
    e.exports.Tween24.func(() => {
      r.skip(), n.play();
    })
  ),
    e.exports.Event24.add(
      t,
      e.exports.Event24.MOUSE_LEAVE,
      e.exports.Tween24.func(() => {
        n.skip(), r.play();
      })
    );
});
