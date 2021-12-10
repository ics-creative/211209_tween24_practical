import "./modulepreload-polyfill.b7f2da20.js";
/* empty css              */ import { t as e } from "./vendor.864692c0.js";
const n = 10;
document.querySelectorAll(".creative_nav li").forEach((t) => {
  const o = t.querySelector(".creative_underline"),
    r = e.exports.Tween24.tween(o, 0.5, e.exports.Ease24._2_QuadOut).width(
      "100%"
    ),
    s = e.exports.Tween24.tween(o, 0.5, e.exports.Ease24._2_QuadOut).width(
      "0%"
    );
  e.exports.Event24.add(
    t,
    e.exports.Event24.MOUSE_ENTER,
    e.exports.Tween24.func(() => {
      s.skip(), r.play();
    })
  ),
    e.exports.Event24.add(
      t,
      e.exports.Event24.MOUSE_LEAVE,
      e.exports.Tween24.func(() => {
        r.skip(), s.play();
      })
    );
});
const i = e.exports.Tween24.serial(
    e.exports.Tween24.propText(".creative_mainText_title").x(-20).opacity(0),
    e.exports.Tween24.propText(".creative_mainText_paragraph").x(-5).opacity(0),
    e.exports.Tween24.prop(".creative_contents").scaleY(0),
    e.exports.Tween24.prop(".creative_nav_title").opacity(0),
    e.exports.Tween24.prop(".creative_nav li").opacity(0).y(-80),
    e.exports.Tween24.prop(".creative_bar").height(0).width(1),
    e.exports.Tween24.prop(".creative_bar__upper").y(240),
    e.exports.Tween24.prop(".creative_bar__lower").y(-240),
    e.exports.Tween24.prop(".creative_image_star").opacity(0),
    e.exports.Tween24.prop(".creative_image_picture").opacity(0).scale(0.85)
  ),
  T = e.exports.Tween24.tween(
    ".creative_contents",
    0.5,
    e.exports.Ease24._3_CubicOut
  )
    .scaleY(1)
    .delay(0.5),
  w = e.exports.Tween24.serial(
    e.exports.Tween24.tween(".creative_bar", 0.5, e.exports.Ease24._3_CubicOut)
      .width("100%")
      .jump(0.8),
    e.exports.Tween24.parallel(
      e.exports.Tween24.tween(
        ".creative_bar__upper",
        0.5,
        e.exports.Ease24._3_CubicOut
      ).y(0),
      e.exports.Tween24.tween(
        ".creative_bar__lower",
        0.5,
        e.exports.Ease24._3_CubicOut
      ).y(0),
      e.exports.Tween24.tween(
        ".creative_bar",
        0.5,
        e.exports.Ease24._3_CubicOut
      ).height(10)
    )
  ),
  _ = e.exports.Tween24.serial(
    e.exports.Tween24.lag(
      0.03,
      e.exports.Tween24.tweenText(
        ".creative_mainText_title",
        0.4,
        e.exports.Ease24._3_CubicOut
      )
        .x(0)
        .opacity(1)
    )
  ),
  u = e.exports.Tween24.serial(
    e.exports.Tween24.lagTotal(
      1,
      e.exports.Tween24.tweenText(
        ".creative_mainText_paragraph",
        0.4,
        e.exports.Ease24._3_CubicOut
      )
        .x(0)
        .opacity(1)
    )
  ),
  y = e.exports.Tween24.parallel(
    e.exports.Tween24.tween(
      ".creative_nav_title",
      0.8,
      e.exports.Ease24._3_CubicOut
    ).opacity(1),
    e.exports.Tween24.lagTotal(
      0.3,
      e.exports.Tween24.tween(
        ".creative_nav li",
        0.2,
        e.exports.Ease24._3_CubicOut
      ).y(0)
    ),
    e.exports.Tween24.lagTotal(
      0.3,
      e.exports.Tween24.tween(
        ".creative_nav li",
        1,
        e.exports.Ease24._3_CubicOut
      ).opacity(1)
    )
  ),
  v = e.exports.Tween24.lagTotalEase(
    0.8,
    e.exports.Ease24._Linear,
    e.exports.Tween24.tween(
      ".creative_image_star",
      0.5,
      e.exports.Ease24._3_CubicOut
    ).opacity(1)
  ),
  c = Array.from(document.querySelectorAll("svg path")).map((t) => {
    const o = t.getTotalLength(),
      r = { progress: { value: 0 } },
      s = () => {
        const x = o * (r.progress.value / 100);
        t.setAttribute("stroke-dashoffset", String(x));
      };
    return e.exports.Tween24.serial(
      e.exports.Tween24.prop(r.progress, { value: 100 }),
      e.exports.Tween24.tween(
        r.progress,
        1,
        e.exports.Ease24._3_CubicOut,
        r.progress
      )
        .onUpdate(s)
        .onComplete(() => {
          r.progress.value = 100;
        })
    );
  }),
  d = e.exports.Tween24.serial(
    e.exports.Tween24.parallel(c[0], c[1]),
    e.exports.Tween24.parallel(
      e.exports.Tween24.tween(
        ".creative_image_picture",
        0.2,
        e.exports.Ease24._3_CubicOut
      ).scale(1),
      e.exports.Tween24.tween(
        ".creative_image_picture",
        0.8,
        e.exports.Ease24._3_CubicOut
      ).opacity(1)
    )
  ),
  l = Array.from(document.querySelectorAll(".creative_bgText")).map((t) => {
    const o = t.querySelector(".firstText"),
      r = t.querySelector(".secondText"),
      s = e.exports.Tween24.serial(
        e.exports.Tween24.prop(o).y(0),
        e.exports.Tween24.tweenVelocity(o, n).y("-100%")
      ),
      p = e.exports.Tween24.serial(
        e.exports.Tween24.prop(r).y("100%"),
        e.exports.Tween24.tweenVelocity(r, n).y(0)
      );
    return e.exports.Tween24.loop(0, e.exports.Tween24.parallel(s, p));
  }),
  a = e.exports.Tween24.serial(
    e.exports.Tween24.func(() => {
      document.querySelectorAll("svg path").forEach((t) => {
        const o = t.getTotalLength();
        t.setAttribute("stroke-dasharray", String(o)),
          t.setAttribute("stroke-dashoffset", String(o));
      });
    }),
    i,
    e.exports.Tween24.parallel(
      T,
      w,
      e.exports.Tween24.parallel(
        e.exports.Tween24.serial(
          e.exports.Tween24.parallel(v, d),
          e.exports.Tween24.parallel(_, u, l[0], l[1], y.delay(0.8))
        )
      ).delay(0.8)
    )
  );
a.play();
document.querySelector(".js-replay").addEventListener("click", () => {
  a.stop(),
    document.querySelectorAll(".creative_bgText").forEach((t) => {
      const o = t.querySelector(".firstText"),
        r = t.querySelector(".secondText");
      e.exports.Tween24.prop(o).y(0).play(),
        e.exports.Tween24.prop(r).y("100%").play();
    }),
    i.play(),
    a.play();
});
