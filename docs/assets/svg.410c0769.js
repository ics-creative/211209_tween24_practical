import "./modulepreload-polyfill.b7f2da20.js";
/* empty css              */ import { t as e } from "./vendor.864692c0.js";
const t = document.querySelector("svg path"),
  s = t.getTotalLength();
t.setAttribute("stroke-dasharray", String(s));
const r = { progress: { value: 0 } },
  n = () => {
    const a = s * (r.progress.value / 100);
    t.setAttribute("stroke-dashoffset", String(a));
  },
  o = e.exports.Tween24.serial(
    e.exports.Tween24.prop(r.progress, { value: 100 }),
    e.exports.Tween24.tween(
      r.progress,
      1,
      e.exports.Ease24._1_SineIn,
      r.progress
    ).onUpdate(n)
  );
o.play();
document.querySelector(".js-replay").addEventListener("click", () => {
  t.setAttribute("stroke-dasharray", String(s)), o.play();
});
