import "./modulepreload-polyfill.b7f2da20.js";
/* empty css              */ import { t as r } from "./vendor.864692c0.js";
const n = (e) => {
    e.forEach((t, o) => {
      if (t.isIntersecting) {
        const s = t.target.dataset.tweenId;
        setTimeout(() => {
          r.exports.Tween24.playById(s);
        }, 200 * o);
      }
    });
  },
  a = new IntersectionObserver(n, { rootMargin: "0px 0px -15%" }),
  c = document.querySelectorAll(".card");
c.forEach((e, t) => {
  const o = e.querySelectorAll("*");
  r.exports.Tween24.prop(Array.from(o)).opacity(0).y(40).play();
  const s = r.exports.Tween24.tween(
    Array.from(o),
    1,
    r.exports.Ease24._4_QuartOut
  )
    .opacity(1)
    .y(0);
  r.exports.Tween24.lag(0.1, s).id(`${t}`),
    (e.dataset.tweenId = `${t}`),
    a.observe(e);
});
