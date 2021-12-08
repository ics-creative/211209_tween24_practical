import "./style.7f2dd081.js";
import { t as e } from "./vendor.864692c0.js";
const t = document.querySelector("svg path"),
  r = t.getTotalLength();
t.setAttribute("stroke-dasharray", String(r));
const s = { progress: { value: 0 } },
  n = () => {
    const a = r * (s.progress.value / 100);
    t.setAttribute("stroke-dashoffset", String(a));
  },
  o = e.exports.Tween24.serial(
    e.exports.Tween24.prop(s.progress, { value: 100 }),
    e.exports.Tween24.tween(
      s.progress,
      1,
      e.exports.Ease24._1_SineIn,
      s.progress
    ).onUpdate(n)
  );
o.play();
document.querySelector(".js-replay").addEventListener("click", () => {
  t.setAttribute("stroke-dasharray", String(r)), o.play();
});
