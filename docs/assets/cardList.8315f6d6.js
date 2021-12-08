import "./style.7f2dd081.js";
import { t as r } from "./vendor.864692c0.js";
const n = document.querySelectorAll(".card"),
  a = (e) => {
    e.forEach((t, o) => {
      if (t.isIntersecting) {
        const s = t.target.dataset.tweenId;
        setTimeout(() => {
          r.exports.Tween24.playById(s);
        }, 200 * o);
      }
    });
  },
  c = new IntersectionObserver(a, { rootMargin: "0px 0px -15%" });
n.forEach((e, t) => {
  const o = e.querySelectorAll("*");
  r.exports.Tween24.prop(Array.from(o)).opacity(0).y(40).play();
  const s = r.exports.Tween24.tween(
    Array.from(o),
    0.8,
    r.exports.Ease24._3_CubicOut
  )
    .opacity(1)
    .y(0);
  r.exports.Tween24.lag(0.1, s).id(`${t}`),
    (e.dataset.tweenId = `${t}`),
    c.observe(e);
});
