var it = { exports: {} };
(function (J, rt) {
  (function (q, x) {
    J.exports = x();
  })(self, function () {
    return (() => {
      var q = {
          286: (E, m, b) => {
            b.r(m),
              b.d(m, {
                Button24: () => nt,
                ButtonTween24: () => L,
                Ease24: () => v,
                Event24: () => T,
                Sort24: () => C,
                Tween24: () => l,
              });
            var A = (function () {
                function e() {}
                return (
                  (e.removeItemFromArray = function (t, n) {
                    if (t)
                      for (var i = 0; i < t.length; i++)
                        n == t[i] && t.splice(i, 1);
                  }),
                  e
                );
              })(),
              R = (function () {
                function e() {
                  (this._fps = 0),
                    (this._timer = 0),
                    (this._beforeTime = 0),
                    (this._running = !1),
                    (this._allTweens = []);
                }
                return (
                  (e.prototype.start = function () {
                    this._running = !0;
                    var t = this;
                    this._timer = window.requestAnimationFrame(function () {
                      t.update();
                    });
                  }),
                  (e.prototype.stop = function () {
                    (this._running = !1),
                      window.cancelAnimationFrame(this._timer);
                  }),
                  (e.prototype.add = function (t) {
                    this._allTweens.push(t), this._running || this.start();
                  }),
                  (e.prototype.remove = function (t) {
                    A.removeItemFromArray(this._allTweens, t),
                      this._allTweens.length == 0 && this.stop();
                  }),
                  (e.prototype.update = function () {
                    for (
                      var t = e.getTime(),
                        n =
                          !this._fps ||
                          this._checkInterval(this._fps, this._beforeTime, t),
                        i = 0,
                        r = this._allTweens;
                      i < r.length;
                      i++
                    ) {
                      var s = r[i];
                      s.__fps
                        ? this._checkInterval(s.__fps, s.__beforeTime, t) &&
                          (s.__update(t), (s.__beforeTime = t))
                        : n && s.__update(t);
                    }
                    if ((n && (this._beforeTime = t), this._running)) {
                      var o = this;
                      this._timer = window.requestAnimationFrame(function () {
                        o.update();
                      });
                    }
                  }),
                  Object.defineProperty(e.prototype, "fps", {
                    set: function (t) {
                      this._fps = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype._checkInterval = function (t, n, i) {
                    return i - n >= 1e3 / t;
                  }),
                  (e.getTime = function () {
                    return Date.now() || new Date().getTime();
                  }),
                  e
                );
              })(),
              v = (function () {
                function e() {}
                return (
                  (e._Linear = function (t, n, i, r) {
                    return (i * t) / r + n;
                  }),
                  (e._1_SineIn = function (t, n, i, r) {
                    return -i * Math.cos((t / r) * (Math.PI / 2)) + i + n;
                  }),
                  (e._1_SineOut = function (t, n, i, r) {
                    return i * Math.sin((t / r) * (Math.PI / 2)) + n;
                  }),
                  (e._1_SineInOut = function (t, n, i, r) {
                    return (-i / 2) * (Math.cos((Math.PI * t) / r) - 1) + n;
                  }),
                  (e._1_SineOutIn = function (t, n, i, r) {
                    return t < r / 2
                      ? (i / 2) * Math.sin(((2 * t) / r) * (Math.PI / 2)) + n
                      : (-i / 2) * Math.cos(((2 * t - r) / r) * (Math.PI / 2)) +
                          i / 2 +
                          (n + i / 2);
                  }),
                  (e._2_QuadIn = function (t, n, i, r) {
                    return i * (t /= r) * t + n;
                  }),
                  (e._2_QuadOut = function (t, n, i, r) {
                    return -i * (t /= r) * (t - 2) + n;
                  }),
                  (e._2_QuadInOut = function (t, n, i, r) {
                    return (t /= r / 2) < 1
                      ? (i / 2) * t * t + n
                      : (-i / 2) * (--t * (t - 2) - 1) + n;
                  }),
                  (e._2_QuadOutIn = function (t, n, i, r) {
                    return t < r / 2
                      ? (-i / 2) * (t = (2 * t) / r) * (t - 2) + n
                      : (i / 2) * (t = (2 * t - r) / r) * t + (n + i / 2);
                  }),
                  (e._3_CubicIn = function (t, n, i, r) {
                    return i * (t /= r) * t * t + n;
                  }),
                  (e._3_CubicOut = function (t, n, i, r) {
                    return i * ((t = t / r - 1) * t * t + 1) + n;
                  }),
                  (e._3_CubicInOut = function (t, n, i, r) {
                    return (t /= r / 2) < 1
                      ? (i / 2) * t * t * t + n
                      : (i / 2) * ((t -= 2) * t * t + 2) + n;
                  }),
                  (e._3_CubicOutIn = function (t, n, i, r) {
                    return t < r / 2
                      ? (i / 2) * ((t = (2 * t) / r - 1) * t * t + 1) + n
                      : (i / 2) * (t = (2 * t - r) / r) * t * t + n + i / 2;
                  }),
                  (e._4_QuartIn = function (t, n, i, r) {
                    return i * (t /= r) * t * t * t + n;
                  }),
                  (e._4_QuartOut = function (t, n, i, r) {
                    return -i * ((t = t / r - 1) * t * t * t - 1) + n;
                  }),
                  (e._4_QuartInOut = function (t, n, i, r) {
                    return (t /= r / 2) < 1
                      ? (i / 2) * t * t * t * t + n
                      : (-i / 2) * ((t -= 2) * t * t * t - 2) + n;
                  }),
                  (e._4_QuartOutIn = function (t, n, i, r) {
                    return t < r / 2
                      ? (-i / 2) * ((t = (2 * t) / r - 1) * t * t * t - 1) + n
                      : (i / 2) * (t = (2 * t - r) / r) * t * t * t +
                          (n + i / 2);
                  }),
                  (e._5_QuintIn = function (t, n, i, r) {
                    return i * (t /= r) * t * t * t * t + n;
                  }),
                  (e._5_QuintOut = function (t, n, i, r) {
                    return i * ((t = t / r - 1) * t * t * t * t + 1) + n;
                  }),
                  (e._5_QuintInOut = function (t, n, i, r) {
                    return (t /= r / 2) < 1
                      ? (i / 2) * t * t * t * t * t + n
                      : (i / 2) * ((t -= 2) * t * t * t * t + 2) + n;
                  }),
                  (e._5_QuintOutIn = function (t, n, i, r) {
                    return t < r / 2
                      ? (i / 2) * ((t = (2 * t) / r - 1) * t * t * t * t + 1) +
                          n
                      : (i / 2) * (t = (2 * t - r) / r) * t * t * t * t +
                          (n + i / 2);
                  }),
                  (e._6_ExpoIn = function (t, n, i, r) {
                    return t == 0 ? n : i * Math.pow(2, 10 * (t / r - 1)) + n;
                  }),
                  (e._6_ExpoOut = function (t, n, i, r) {
                    return t == r
                      ? n + i
                      : i * (1 - Math.pow(2, (-10 * t) / r)) + n;
                  }),
                  (e._6_ExpoInOut = function (t, n, i, r) {
                    return t == 0
                      ? n
                      : t == r
                      ? n + i
                      : (t /= r / 2) < 1
                      ? (i / 2) * Math.pow(2, 10 * (t - 1)) + n
                      : (i / 2) * (2 - Math.pow(2, -10 * --t)) + n;
                  }),
                  (e._6_ExpoOutIn = function (t, n, i, r) {
                    return t < r / 2
                      ? 2 * t == r
                        ? n + i / 2
                        : (i / 2) * (1 - Math.pow(2, (-10 * t * 2) / r)) + n
                      : 2 * t - r == 0
                      ? n + i / 2
                      : (i / 2) * Math.pow(2, 10 * ((2 * t - r) / r - 1)) +
                        n +
                        i / 2;
                  }),
                  (e._7_CircIn = function (t, n, i, r) {
                    return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n;
                  }),
                  (e._7_CircOut = function (t, n, i, r) {
                    return i * Math.sqrt(1 - (t = t / r - 1) * t) + n;
                  }),
                  (e._7_CircInOut = function (t, n, i, r) {
                    return (t /= r / 2) < 1
                      ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + n
                      : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + n;
                  }),
                  (e._7_CircOutIn = function (t, n, i, r) {
                    return t < r / 2
                      ? (i / 2) * Math.sqrt(1 - (t = (2 * t) / r - 1) * t) + n
                      : (-i / 2) *
                          (Math.sqrt(1 - (t = (2 * t - r) / r) * t) - 1) +
                          (n + i / 2);
                  }),
                  (e._BackInWith = function (t) {
                    return (
                      t === void 0 && (t = 1.70158),
                      function (n, i, r, s) {
                        return r * (n /= s) * n * ((t + 1) * n - t) + i;
                      }
                    );
                  }),
                  (e._BackOutWith = function (t) {
                    return (
                      t === void 0 && (t = 1.70158),
                      function (n, i, r, s) {
                        return (
                          r * ((n = n / s - 1) * n * ((t + 1) * n + t) + 1) + i
                        );
                      }
                    );
                  }),
                  (e._BackInOutWith = function (t) {
                    return (
                      t === void 0 && (t = 1.70158),
                      function (n, i, r, s) {
                        return (n /= s / 2) < 1
                          ? (r / 2) *
                              (n * n * ((1.525 * t + 1) * n - 1.525 * t)) +
                              i
                          : (r / 2) *
                              ((n -= 2) *
                                n *
                                ((1.525 * t + 1) * n + 1.525 * t) +
                                2) +
                              i;
                      }
                    );
                  }),
                  (e._BackOutInWith = function (t) {
                    return (
                      t === void 0 && (t = 1.70158),
                      function (n, i, r, s) {
                        return n < s / 2
                          ? (r / 2) *
                              ((n = (2 * n) / s - 1) * n * ((t + 1) * n + t) +
                                1) +
                              i
                          : (r / 2) *
                              (n = (2 * n - s) / s) *
                              n *
                              ((t + 1) * n - t) +
                              (i + r / 2);
                      }
                    );
                  }),
                  (e._BounceIn = function (t, n, i, r) {
                    return (t = (r - t) / r) < 1 / 2.75
                      ? i - i * (7.5625 * t * t) + n
                      : t < 2 / 2.75
                      ? i - i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + n
                      : t < 2.5 / 2.75
                      ? i - i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + n
                      : i -
                        i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) +
                        n;
                  }),
                  (e._BounceOut = function (t, n, i, r) {
                    return (t /= r) < 1 / 2.75
                      ? i * (7.5625 * t * t) + n
                      : t < 2 / 2.75
                      ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + n
                      : t < 2.5 / 2.75
                      ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + n
                      : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + n;
                  }),
                  (e._BounceInOut = function (t, n, i, r) {
                    return t < r / 2
                      ? (t = (r - 2 * t) / r) < 1 / 2.75
                        ? 0.5 * (i - i * (7.5625 * t * t)) + n
                        : t < 2 / 2.75
                        ? 0.5 *
                            (i - i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)) +
                          n
                        : t < 2.5 / 2.75
                        ? 0.5 *
                            (i -
                              i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)) +
                          n
                        : 0.5 *
                            (i -
                              i *
                                (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)) +
                          n
                      : (t = (2 * t - r) / r) < 1 / 2.75
                      ? i * (7.5625 * t * t) * 0.5 + 0.5 * i + n
                      : t < 2 / 2.75
                      ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) * 0.5 +
                        0.5 * i +
                        n
                      : t < 2.5 / 2.75
                      ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) * 0.5 +
                        0.5 * i +
                        n
                      : i *
                          (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) *
                          0.5 +
                        0.5 * i +
                        n;
                  }),
                  (e._BounceOutIn = function (t, n, i, r) {
                    return t < r / 2
                      ? (t = (2 * t) / r) < 1 / 2.75
                        ? (i / 2) * (7.5625 * t * t) + n
                        : t < 2 / 2.75
                        ? (i / 2) * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + n
                        : t < 2.5 / 2.75
                        ? (i / 2) * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) +
                          n
                        : (i / 2) *
                            (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) +
                          n
                      : (t = (r - (2 * t - r)) / r) < 1 / 2.75
                      ? i / 2 - (i / 2) * (7.5625 * t * t) + (n + i / 2)
                      : t < 2 / 2.75
                      ? i / 2 -
                        (i / 2) * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) +
                        (n + i / 2)
                      : t < 2.5 / 2.75
                      ? i / 2 -
                        (i / 2) * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) +
                        (n + i / 2)
                      : i / 2 -
                        (i / 2) *
                          (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) +
                        (n + i / 2);
                  }),
                  (e._ElasticInWith = function (t, n) {
                    return (
                      t === void 0 && (t = 0),
                      n === void 0 && (n = 0),
                      function (i, r, s, o) {
                        return (i /= 1e3) == 0
                          ? r
                          : (i /= o /= 1e3) == 1
                          ? r + s
                          : (n || (n = 0.3 * o),
                            !t || t < Math.abs(s)
                              ? ((t = s), (a = n / 4))
                              : (a = (n / (2 * Math.PI)) * Math.asin(s / t)),
                            -t *
                              Math.pow(2, 10 * (i -= 1)) *
                              Math.sin(((i * o - a) * (2 * Math.PI)) / n) +
                              r);
                        var a;
                      }
                    );
                  }),
                  (e._ElasticOutWith = function (t, n) {
                    return (
                      t === void 0 && (t = 0),
                      n === void 0 && (n = 0),
                      function (i, r, s, o) {
                        return (i /= 1e3) == 0
                          ? r
                          : (i /= o /= 1e3) == 1
                          ? r + s
                          : (n || (n = 0.3 * o),
                            !t || t < Math.abs(s)
                              ? ((t = s), (a = n / 4))
                              : (a = (n / (2 * Math.PI)) * Math.asin(s / t)),
                            t *
                              Math.pow(2, -10 * i) *
                              Math.sin(((i * o - a) * (2 * Math.PI)) / n) +
                              s +
                              r);
                        var a;
                      }
                    );
                  }),
                  (e._ElasticInOutWith = function (t, n) {
                    return (
                      t === void 0 && (t = 0),
                      n === void 0 && (n = 0),
                      function (i, r, s, o) {
                        return (i /= 1e3) == 0
                          ? r
                          : (i /= (o /= 1e3) / 2) == 2
                          ? r + s
                          : (n || (n = o * (0.3 * 1.5)),
                            !t || t < Math.abs(s)
                              ? ((t = s), (a = n / 4))
                              : (a = (n / (2 * Math.PI)) * Math.asin(s / t)),
                            i < 1
                              ? t *
                                  Math.pow(2, 10 * (i -= 1)) *
                                  Math.sin(((i * o - a) * (2 * Math.PI)) / n) *
                                  -0.5 +
                                r
                              : t *
                                  Math.pow(2, -10 * (i -= 1)) *
                                  Math.sin(((i * o - a) * (2 * Math.PI)) / n) *
                                  0.5 +
                                s +
                                r);
                        var a;
                      }
                    );
                  }),
                  (e._ElasticOutInWith = function (t, n) {
                    return (
                      t === void 0 && (t = 0),
                      n === void 0 && (n = 0),
                      function (i, r, s, o) {
                        var a;
                        return (
                          (s /= 2),
                          (i /= 1e3) < (o /= 1e3) / 2
                            ? (i *= 2) == 0
                              ? r
                              : (i /= o) == 1
                              ? r + s
                              : (n || (n = 0.3 * o),
                                !t || t < Math.abs(s)
                                  ? ((t = s), (a = n / 4))
                                  : (a =
                                      (n / (2 * Math.PI)) * Math.asin(s / t)),
                                t *
                                  Math.pow(2, -10 * i) *
                                  Math.sin(((i * o - a) * (2 * Math.PI)) / n) +
                                  s +
                                  r)
                            : (i = 2 * i - o) == 0
                            ? r + s
                            : (i /= o) == 1
                            ? r + s + s
                            : (n || (n = 0.3 * o),
                              !t || t < Math.abs(s)
                                ? ((t = s), (a = n / 4))
                                : (a = (n / (2 * Math.PI)) * Math.asin(s / t)),
                              -t *
                                Math.pow(2, 10 * (i -= 1)) *
                                Math.sin(((i * o - a) * (2 * Math.PI)) / n) +
                                (r + s))
                        );
                      }
                    );
                  }),
                  (e._Blend = function (t, n, i, r, s) {
                    return (
                      r === void 0 && (r = 0),
                      s === void 0 && (s = 1),
                      function (o, a, _, h) {
                        var u = t(o, a, _, h);
                        return (
                          u +
                          (n(o, a, _, h) - u) * (i(o, a, _, h) * (s - r) + r)
                        );
                      }
                    );
                  }),
                  (e._BackIn = e._BackInWith()),
                  (e._BackOut = e._BackOutWith()),
                  (e._BackInOut = e._BackInOutWith()),
                  (e._BackOutIn = e._BackOutInWith()),
                  (e._ElasticIn = e._ElasticInWith()),
                  (e._ElasticOut = e._ElasticOutWith()),
                  (e._ElasticInOut = e._ElasticInOutWith()),
                  (e._ElasticOutIn = e._ElasticOutInWith()),
                  e
                );
              })(),
              g = (function () {
                function e() {}
                return (
                  (e.PLAY = "play"),
                  (e.MANUAL_PLAY = "manual_play"),
                  (e.INIT = "init"),
                  (e.UPDATE = "update"),
                  (e.COMPLATE = "complate"),
                  (e.PAUSE = "pause"),
                  (e.RESUME = "resume"),
                  (e.SKIP = "skip"),
                  (e.STOP = "stop"),
                  e
                );
              })(),
              H = function () {
                return (H =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          (e[r] = t[r]);
                    return e;
                  }).apply(this, arguments);
              },
              X = (function () {
                function e(t) {
                  (this._target = t),
                    (this._key = []),
                    (this._tweenKey = null),
                    (this._param = {}),
                    (this._startParam = {}),
                    (this._deltaParam = {});
                }
                return (
                  (e.prototype.addProp = function (t, n) {
                    (this._param[t] = n), this._key.push(t);
                  }),
                  (e.prototype.addPropStr = function (t, n) {}),
                  (e.prototype.init = function (t) {
                    this._tweenKey = this._key.concat();
                    for (var n = 0, i = this._tweenKey; n < i.length; n++) {
                      var r = i[n];
                      (this._startParam[r] = this._target[r]),
                        (this._deltaParam[r] =
                          this._param[r] - this._target[r]);
                    }
                  }),
                  (e.prototype.update = function (t) {
                    if (this._tweenKey)
                      for (var n = 0, i = this._tweenKey; n < i.length; n++) {
                        var r = i[n];
                        this._target[r] =
                          this._startParam[r] + this._deltaParam[r] * t;
                      }
                  }),
                  (e.prototype.overwrite = function (t) {
                    if (this._target == t._target) {
                      var n = t._tweenKey;
                      if (this._tweenKey && n)
                        for (var i = 0, r = n; i < r.length; i++) {
                          var s = r[i],
                            o = this._tweenKey.indexOf(s);
                          o > -1 && this._tweenKey.splice(o, 1);
                        }
                    }
                  }),
                  (e.prototype.getMaxAbsDelta = function () {
                    var t = [],
                      n = 0,
                      i = 0;
                    for (var r in this._deltaParam)
                      r == "x"
                        ? (n = this._param[r])
                        : r == "y"
                        ? (i = this._param[r])
                        : t.push(Math.abs(this._param[r]));
                    return (
                      t.push(Math.sqrt(n * n + i * i)), Math.max.apply(Math, t)
                    );
                  }),
                  (e.prototype.clone = function (t) {
                    t === void 0 && (t = this._target);
                    var n = new e(t);
                    return (
                      (n._param = H({}, this._param)),
                      (n._key = (function () {
                        for (var i = 0, r = 0, s = arguments.length; r < s; r++)
                          i += arguments[r].length;
                        var o = Array(i),
                          a = 0;
                        for (r = 0; r < s; r++)
                          for (
                            var _ = arguments[r], h = 0, u = _.length;
                            h < u;
                            h++, a++
                          )
                            o[a] = _[h];
                        return o;
                      })(this._key)),
                      n
                    );
                  }),
                  (e.prototype.toString = function () {
                    for (var t = "", n = 0, i = this._key; n < i.length; n++) {
                      var r = i[n];
                      t += r + ":" + this._param[r] + " ";
                    }
                    return t.trim();
                  }),
                  (e.prototype.complete = function () {}),
                  (e.className = "ObjectUpdater"),
                  e
                );
              })(),
              W = (function () {
                function e() {
                  (this._skewX = 0),
                    (this._skewY = 0),
                    (this._scaleX = 0),
                    (this._scaleY = 0),
                    (this._rotation = 0),
                    (this.a = 1),
                    (this.b = 0),
                    (this.c = 0),
                    (this.d = 1),
                    (this.tx = 0),
                    (this.ty = 0);
                }
                return (
                  (e.prototype.setMatrixByCSSTransform = function (t) {
                    var n = t.match(/matrix\((.*)\)/);
                    if (n) {
                      var i = n[1].replace(/ /g, "").split(",");
                      (this.a = parseFloat(i[0])),
                        (this.b = parseFloat(i[1])),
                        (this.c = parseFloat(i[2])),
                        (this.d = parseFloat(i[3])),
                        (this.tx = parseFloat(i[4])),
                        (this.ty = parseFloat(i[5])),
                        (this._scaleX = Math.sqrt(
                          this.a * this.a + this.b * this.b
                        )),
                        (this._scaleY = Math.sqrt(
                          this.d * this.d + this.c * this.c
                        )),
                        (this._rotation =
                          this.a || this.b ? Math.atan2(this.b, this.a) : 0),
                        (this._skewX =
                          this.c || this.d
                            ? Math.atan2(this.c, this.d) + this._rotation
                            : 0),
                        (this._skewY = 0),
                        this._skewX && (this._scaleY *= Math.cos(this._skewX));
                    }
                  }),
                  (e.prototype.updateMatrix = function () {
                    var t,
                      n = this._skewY,
                      i = this._skewX + n,
                      r = this._rotation + n;
                    (this.a = Math.cos(r) * this._scaleX),
                      (this.b = Math.sin(r) * this._scaleX),
                      (this.c = Math.sin(r - i) * -this._scaleY),
                      (this.d = Math.cos(r - i) * this._scaleY),
                      i &&
                        ((t = Math.tan(i - n)),
                        (t = Math.sqrt(1 + t * t)),
                        (this.c *= t),
                        (this.d *= t),
                        n &&
                          ((t = Math.tan(n)),
                          (t = Math.sqrt(1 + t * t)),
                          (this.a *= t),
                          (this.b *= t)));
                  }),
                  (e.prototype.toString = function () {
                    return (
                      "matrix(" +
                      this.a +
                      ", " +
                      this.b +
                      ", " +
                      this.c +
                      ", " +
                      this.d +
                      ", " +
                      this.tx +
                      ", " +
                      this.ty +
                      ")"
                    );
                  }),
                  Object.defineProperty(e.prototype, "x", {
                    get: function () {
                      return this.tx;
                    },
                    set: function (t) {
                      this.tx = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "y", {
                    get: function () {
                      return this.ty;
                    },
                    set: function (t) {
                      this.ty = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "skewX", {
                    get: function () {
                      return this._skewX * e._RAD_TO_DEG;
                    },
                    set: function (t) {
                      this._skewX = t * e._DEG_TO_RAD;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "skewY", {
                    get: function () {
                      return this._skewY * e._RAD_TO_DEG;
                    },
                    set: function (t) {
                      this._skewY = t * e._DEG_TO_RAD;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "rotation", {
                    get: function () {
                      return this._rotation * e._RAD_TO_DEG;
                    },
                    set: function (t) {
                      this._rotation = t * e._DEG_TO_RAD;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "scaleX", {
                    get: function () {
                      return this._scaleX;
                    },
                    set: function (t) {
                      this._scaleX = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "scaleY", {
                    get: function () {
                      return this._scaleY;
                    },
                    set: function (t) {
                      this._scaleY = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.copy = function (t, n) {
                    return (
                      (t._skewX = n._skewX),
                      (t._skewY = n._skewY),
                      (t._scaleX = n._scaleX),
                      (t._scaleY = n._scaleY),
                      (t._rotation = n._rotation),
                      (t.a = n.a),
                      (t.b = n.b),
                      (t.c = n.c),
                      (t.d = n.d),
                      (t.tx = n.tx),
                      (t.ty = n.ty),
                      t
                    );
                  }),
                  (e._PI = Math.PI),
                  (e._RAD_TO_DEG = 180 / Math.PI),
                  (e._DEG_TO_RAD = Math.PI / 180),
                  e
                );
              })(),
              w = (function () {
                function e(t, n) {
                  (this._key = t),
                    (this._target = n),
                    (this._start = 0),
                    (this._delta = 0),
                    (this._value = 0);
                }
                return (
                  (e.prototype.init = function (t) {
                    (this._start = t),
                      (this._delta = this._target - t),
                      (this._value = this._start);
                  }),
                  (e.prototype.update = function (t) {
                    return (
                      (this._value = this._start + this._delta * t), this._value
                    );
                  }),
                  (e.prototype.getDelta = function () {
                    return this._delta;
                  }),
                  (e.prototype.clone = function () {
                    return new e(this._key, this._target);
                  }),
                  (e.prototype.toString = function () {
                    return this._key + ":" + this._target;
                  }),
                  e
                );
              })(),
              y = (function () {
                function e() {}
                return (
                  (e.getHTMLElement = function (t) {
                    var n = [];
                    switch (t.charAt(0)) {
                      case "#":
                        var i = document.getElementById(t.substring(1));
                        i && n.push(i);
                        break;
                      case ".":
                        Array.prototype.forEach.call(
                          document.getElementsByClassName(t.substring(1)),
                          function (r) {
                            n.push(r);
                          }
                        );
                        break;
                      default:
                        Array.prototype.forEach.call(
                          document.getElementsByName(t),
                          function (r) {
                            n.push(r);
                          }
                        );
                    }
                    return n;
                  }),
                  (e.querySelectorAll = function (t) {
                    return Array.from(
                      document.querySelectorAll(t.split("::")[0])
                    );
                  }),
                  (e.querySelectorAllWithBase = function (t, n) {
                    return Array.from(t.querySelectorAll(n.split("::")[0]));
                  }),
                  (e.isPseudoQuery = function (t) {
                    return !!t.match(/::/);
                  }),
                  (e.getPseudoQuery = function (t) {
                    var n = t.match(/::.*/g);
                    return n ? n[0] : null;
                  }),
                  (e.setStyleProp = function (t, n, i) {
                    t.style.setProperty(n, i);
                  }),
                  (e.addWillChange = function (t, n) {
                    t.willChange.length
                      ? (t.willChange = t.willChange
                          .split(",")
                          .concat(n)
                          .join(","))
                      : (t.willChange = n.join(","));
                  }),
                  (e.removeWillChange = function (t, n) {
                    for (
                      var i = t.willChange.split(","), r = 0;
                      r < i.length;
                      r++
                    )
                      i[r] = i[r].trim();
                    for (var s = 0, o = n; s < o.length; s++) {
                      var a = o[s];
                      A.removeItemFromArray(i, a);
                    }
                    t.willChange = i.join(",");
                  }),
                  (e.getComputedStyle = function (t, n) {
                    return (
                      n === void 0 && (n = null), window.getComputedStyle(t, n)
                    );
                  }),
                  (e.getTransformMatrix = function (t, n) {
                    var i;
                    return (
                      n === void 0 && (n = null),
                      (i = n
                        ? e.getComputedStyle(t, n).transform
                        : e.getComputedStyle(t).transform) != "none"
                        ? i
                        : "matrix(1, 0, 0, 1, 0, 0)"
                    );
                  }),
                  (e.setTweenElementQuery = function (t, n) {
                    var i = n.split("::"),
                      r = i[1] ? "::" + i[1] : "";
                    if (Array.isArray(t))
                      for (var s = 0, o = t; s < o.length; s++) a(o[s]);
                    else a(t);
                    function a(_) {
                      var h = _.getAttribute(e._ATTR);
                      if (
                        (h ||
                          (e._numTweenElement++,
                          _.setAttribute(
                            e._ATTR,
                            e._numTweenElement.toString()
                          )),
                        !e.getAddedStyleByElement(_, r))
                      ) {
                        var u = e.getTweenElementQuery(
                            h || e._numTweenElement,
                            r
                          ),
                          p = document.styleSheets[0],
                          d = p.insertRule(u + "{}", p.rules.length);
                        e._tweenStyle.set(u, p.cssRules[d].style);
                      }
                    }
                  }),
                  (e.getAddedStyleByElement = function (t, n) {
                    var i = t.getAttribute(e._ATTR);
                    return i
                      ? e._tweenStyle.get(e.getTweenElementQuery(i, n))
                      : void 0;
                  }),
                  (e.getTweenElementQuery = function (t, n) {
                    var i = null;
                    return t instanceof HTMLElement
                      ? (i = t.getAttribute(e._ATTR))
                        ? "[" + e._ATTR + '="' + i + '"]' + n
                        : ""
                      : "[" + e._ATTR + '="' + t + '"]' + n;
                  }),
                  (e._ATTR = "data-tween24"),
                  (e._numTweenElement = 0),
                  (e._tweenStyle = new Map()),
                  e
                );
              })(),
              k = (function () {
                function e(t, n) {
                  (this._target = t),
                    (this._query = n),
                    (this._matrix = new W()),
                    (this._x = null),
                    (this._y = null),
                    (this._scaleX = null),
                    (this._scaleY = null),
                    (this._skewX = null),
                    (this._skewY = null),
                    (this._rotation = null),
                    (this._updateX = !1),
                    (this._updateY = !1),
                    (this._updateScaleX = !1),
                    (this._updateScaleY = !1),
                    (this._updateSkewX = !1),
                    (this._updateSkewY = !1),
                    (this._updateRotation = !1),
                    (this._percentX = null),
                    (this._percentY = null),
                    (this._pseudo = this._query
                      ? y.getPseudoQuery(this._query)
                      : null),
                    (this._tweenQuery = null),
                    (this._useWillChange = !0);
                }
                return (
                  (e.prototype.init = function (t) {
                    var n, i, r, s, o, a, _;
                    (this._useWillChange = t),
                      this._style ||
                        (this._pseudo && this._query
                          ? ((this._style = y.getAddedStyleByElement(
                              this._target,
                              this._pseudo
                            )),
                            this._style &&
                              y.getComputedStyle(this._target, this._pseudo)
                                .display == "inline" &&
                              this._style.setProperty(
                                "display",
                                "inline-block"
                              ),
                            (this._tweenQuery = y.getTweenElementQuery(
                              this._target,
                              this._pseudo
                            )))
                          : (this._style = this._target.style));
                    var h = this._getChache();
                    if (
                      (h
                        ? (this._matrix = W.copy(this._matrix, h))
                        : this._matrix.setMatrixByCSSTransform(
                            y.getTransformMatrix(this._target, this._pseudo)
                          ),
                      this._style &&
                        this._useWillChange &&
                        y.addWillChange(this._style, ["transform"]),
                      this._percentX || this._percentY)
                    )
                      if (this._pseudo) {
                        var u = y.getComputedStyle(this._target, this._pseudo);
                        this._percentX &&
                          (this._style &&
                            !this._style.width &&
                            this._style.setProperty("width", "auto"),
                          (this._x = new w(
                            "x",
                            (parseFloat(u.width) * parseFloat(this._percentX)) /
                              100
                          ))),
                          this._percentY &&
                            (this._style &&
                              !this._style.height &&
                              this._style.setProperty("height", "auto"),
                            (this._y = new w(
                              "y",
                              (parseFloat(u.height) *
                                parseFloat(this._percentY)) /
                                100
                            )));
                      } else
                        this._percentX &&
                          (this._x = new w(
                            "x",
                            (this._target.offsetWidth *
                              parseFloat(this._percentX)) /
                              100
                          )),
                          this._percentY &&
                            (this._y = new w(
                              "y",
                              (this._target.offsetHeight *
                                parseFloat(this._percentY)) /
                                100
                            ));
                    (this._updateX = !!this._x),
                      (this._updateY = !!this._y),
                      (this._updateScaleX = !!this._scaleX),
                      (this._updateScaleY = !!this._scaleY),
                      (this._updateSkewX = !!this._skewX),
                      (this._updateSkewY = !!this._skewY),
                      (this._updateRotation = !!this._rotation),
                      (n = this._x) === null ||
                        n === void 0 ||
                        n.init(this._matrix.x),
                      (i = this._y) === null ||
                        i === void 0 ||
                        i.init(this._matrix.y),
                      (r = this._scaleX) === null ||
                        r === void 0 ||
                        r.init(this._matrix.scaleX),
                      (s = this._scaleY) === null ||
                        s === void 0 ||
                        s.init(this._matrix.scaleY),
                      (o = this._skewX) === null ||
                        o === void 0 ||
                        o.init(this._matrix.skewX),
                      (a = this._skewY) === null ||
                        a === void 0 ||
                        a.init(this._matrix.skewY),
                      (_ = this._rotation) === null ||
                        _ === void 0 ||
                        _.init(this._matrix.rotation);
                  }),
                  (e.prototype.addProp = function (t, n) {
                    switch (t) {
                      case "x":
                        this._x = new w(t, n);
                        break;
                      case "y":
                        this._y = new w(t, n);
                        break;
                      case "scaleX":
                        this._scaleX = new w(t, n);
                        break;
                      case "scaleY":
                        this._scaleY = new w(t, n);
                        break;
                      case "skewX":
                        this._skewX = new w(t, n);
                        break;
                      case "skewY":
                        this._skewY = new w(t, n);
                        break;
                      case "rotation":
                        this._rotation = new w(t, n);
                    }
                  }),
                  (e.prototype.addPropStr = function (t, n) {
                    switch (t) {
                      case "x":
                        n.slice(-1) == "%" && (this._percentX = n);
                        break;
                      case "y":
                        n.slice(-1) == "%" && (this._percentY = n);
                    }
                  }),
                  (e.prototype.update = function (t) {
                    var n,
                      i = this._getChache();
                    i &&
                      i != this._matrix &&
                      (this._matrix = W.copy(this._matrix, i)),
                      this._updateX &&
                        this._x &&
                        (this._matrix.x = this._x.update(t)),
                      this._updateY &&
                        this._y &&
                        (this._matrix.y = this._y.update(t)),
                      this._updateScaleX &&
                        this._scaleX &&
                        (this._matrix.scaleX = this._scaleX.update(t)),
                      this._updateScaleY &&
                        this._scaleY &&
                        (this._matrix.scaleY = this._scaleY.update(t)),
                      this._updateSkewX &&
                        this._skewX &&
                        (this._matrix.skewX = this._skewX.update(t)),
                      this._updateSkewY &&
                        this._skewY &&
                        (this._matrix.skewY = this._skewY.update(t)),
                      this._updateRotation &&
                        this._rotation &&
                        (this._matrix.rotation = this._rotation.update(t)),
                      this._matrix.updateMatrix(),
                      (n = this._style) === null ||
                        n === void 0 ||
                        n.setProperty("transform", this._matrix.toString()),
                      this._setChache(this._matrix),
                      t == 1 && this.complete();
                  }),
                  (e.prototype._getChache = function () {
                    return this._pseudo
                      ? this._tweenQuery
                        ? e._pseudoChache.get(this._tweenQuery)
                        : void 0
                      : e._chache.get(this._target);
                  }),
                  (e.prototype._setChache = function (t) {
                    this._pseudo
                      ? this._tweenQuery &&
                        e._pseudoChache.set(this._tweenQuery, t)
                      : e._chache.set(this._target, t);
                  }),
                  (e.prototype._deleteChache = function () {
                    this._pseudo
                      ? this._tweenQuery &&
                        e._pseudoChache.delete(this._tweenQuery)
                      : e._chache.delete(this._target);
                  }),
                  (e.prototype.overwrite = function (t) {
                    this._target == t._target &&
                      (t._updateX && (this._updateX = !1),
                      t._updateY && (this._updateY = !1),
                      t._updateScaleX && (this._updateScaleX = !1),
                      t._updateScaleY && (this._updateScaleY = !1),
                      t._updateSkewX && (this._updateSkewX = !1),
                      t._updateSkewY && (this._updateSkewY = !1),
                      t._updateRotation && (this._updateRotation = !1));
                  }),
                  (e.prototype.complete = function () {
                    this._deleteChache(),
                      this._style &&
                        this._useWillChange &&
                        y.removeWillChange(this._style, ["transform"]);
                  }),
                  (e.prototype.getMaxAbsDelta = function () {
                    var t = [],
                      n = this._x ? this._x.getDelta() : 0,
                      i = this._y ? this._y.getDelta() : 0;
                    return (
                      t.push(Math.sqrt(n * n + i * i)),
                      this._scaleX && t.push(Math.abs(this._scaleX.getDelta())),
                      this._scaleY && t.push(Math.abs(this._scaleY.getDelta())),
                      this._skewX && t.push(Math.abs(this._skewX.getDelta())),
                      this._skewY && t.push(Math.abs(this._skewY.getDelta())),
                      this._rotation &&
                        t.push(Math.abs(this._rotation.getDelta())),
                      Math.max.apply(Math, t)
                    );
                  }),
                  (e.prototype.clone = function (t, n) {
                    t === void 0 && (t = this._target),
                      n === void 0 && (n = this._query);
                    var i = new e(t, n);
                    return (
                      this._percentX
                        ? i.addPropStr("x", this._percentX)
                        : this._x && (i._x = this._x.clone()),
                      this._percentY
                        ? i.addPropStr("y", this._percentY)
                        : this._y && (i._y = this._y.clone()),
                      this._scaleX && (i._scaleX = this._scaleX.clone()),
                      this._scaleY && (i._scaleY = this._scaleY.clone()),
                      this._skewX && (i._skewX = this._skewX.clone()),
                      this._skewY && (i._skewY = this._skewY.clone()),
                      this._rotation && (i._rotation = this._rotation.clone()),
                      i
                    );
                  }),
                  (e.prototype.toString = function () {
                    var t = "";
                    return (
                      this._x && (t += this._x.toString() + " "),
                      this._y && (t += this._y.toString() + " "),
                      this._scaleX && (t += this._scaleX.toString() + " "),
                      this._scaleY && (t += this._scaleY.toString() + " "),
                      this._skewX && (t += this._skewX.toString() + " "),
                      this._skewY && (t += this._skewY.toString() + " "),
                      this._rotation && (t += this._rotation.toString() + " "),
                      t.trim()
                    );
                  }),
                  (e.className = "TransformUpdater"),
                  (e._chache = new Map()),
                  (e._pseudoChache = new Map()),
                  e
                );
              })(),
              $ = (function () {
                function e(t, n, i) {
                  (this._func = n), (this._args = i), (this._scope = t);
                }
                return (
                  (e.prototype.execute = function () {
                    this._func.apply(this._scope, this._args);
                  }),
                  (e.prototype.clone = function () {
                    return new e(this._scope, this._func, this._args);
                  }),
                  e
                );
              })(),
              D = (function () {
                function e() {}
                return (
                  (e.getRGBList = function (t) {
                    if (t.substr(0, 1) == "#") {
                      (t = t.substring(1)).length === 3 &&
                        (t =
                          t.substr(0, 1).repeat(2) +
                          t.substr(1, 1).repeat(2) +
                          t.substr(2, 1).repeat(2));
                      var n = parseInt(t, 16);
                      return [(n >> 16) & 255, (n >> 8) & 255, 255 & n];
                    }
                    if (t.substr(0, 4) == "rgb(") {
                      var i = t.match(/\d+/g);
                      return i && i.length >= 3
                        ? [Number(i[0]), Number(i[1]), Number(i[2])]
                        : [0, 0, 0];
                    }
                    return [0, 0, 0];
                  }),
                  (e.isColorCode = function (t) {
                    return e._regColor.test(t) || e._regRGB.test(t);
                  }),
                  (e._regColor = new RegExp(/^#/)),
                  (e._regRGB = new RegExp(/^rgb\(/)),
                  e
                );
              })(),
              tt = (function () {
                function e(t, n) {
                  (this._key = t), (this._color = n);
                  var i = D.getRGBList(n);
                  (this._r = new w("r", i[0])),
                    (this._g = new w("g", i[1])),
                    (this._b = new w("b", i[2]));
                }
                return (
                  (e.prototype.init = function (t) {
                    var n = D.getRGBList(t);
                    this._r.init(Number(n[0])),
                      this._g.init(Number(n[1])),
                      this._b.init(Number(n[2]));
                  }),
                  (e.prototype.update = function (t) {
                    return (
                      "rgb(" +
                      this._r.update(t) +
                      "," +
                      this._g.update(t) +
                      "," +
                      this._b.update(t) +
                      ")"
                    );
                  }),
                  (e.prototype.getDelta = function () {
                    var t = this._r.getDelta(),
                      n = this._g.getDelta(),
                      i = this._b.getDelta();
                    return Math.max(Math.sqrt(t * t + n * n + i * i));
                  }),
                  (e.prototype.clone = function () {
                    return new e(this._key, this._color);
                  }),
                  (e.prototype.toString = function () {
                    return this._key + ":" + this._color;
                  }),
                  e
                );
              })(),
              G = function () {
                return (G =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          (e[r] = t[r]);
                    return e;
                  }).apply(this, arguments);
              },
              B = (function () {
                function e(t, n) {
                  (this._target = t),
                    (this._query = n),
                    this._param || (this._param = {}),
                    this._key || (this._key = []),
                    this._unit || (this._unit = {}),
                    (this._tweenKey = null),
                    (this._onceParam = null),
                    (this._isUpdatedOnce = !1),
                    (this._pseudo = this._query
                      ? y.getPseudoQuery(this._query)
                      : null),
                    (this._useWillChange = !1);
                }
                return (
                  (e.prototype.addPropStr = function (t, n) {
                    var i = String(n).match(e.PARAM_REG);
                    if ((String(n).match(e.UNIT_REG), D.isColorCode(n)))
                      (this._param[t] = new tt(t, n)), this._key.push(t);
                    else if (i) {
                      var r = this._target.style.getPropertyValue(t);
                      this._target.style.setProperty(t, n);
                      var s = y
                        .getComputedStyle(this._target)
                        .getPropertyValue(t);
                      this._target.style.setProperty(t, r);
                      var o = s.match(e.UNIT_REG);
                      (this._param[t] = new w(t, parseInt(s))),
                        (this._unit[t] = o ? o[0] : ""),
                        this._key.push(t);
                    } else
                      this._onceParam || (this._onceParam = {}),
                        (this._onceParam[t] = n);
                  }),
                  (e.prototype.init = function (t) {
                    var n, i;
                    (this._useWillChange = t),
                      !this._style &&
                        this._pseudo &&
                        this._query &&
                        (this._style = y.getAddedStyleByElement(
                          this._target,
                          this._pseudo
                        )),
                      (this._isUpdatedOnce = !1),
                      (this._tweenKey = this._key.concat());
                    for (var r = 0, s = this._tweenKey; r < s.length; r++) {
                      var o = s[r],
                        a = y
                          .getComputedStyle(this._target, this._pseudo)
                          .getPropertyValue(o);
                      if (D.isColorCode(a))
                        this._param[o].init(a),
                          (n = this._unit)[o] || (n[o] = "");
                      else {
                        var _ = a.match(e.PARAM_REG),
                          h = a.match(e.UNIT_REG);
                        (i = this._unit)[o] ||
                          (i[o] = h && _ && _[0].length ? h[0] : ""),
                          this._param[o].init(Number(_ || 0));
                      }
                    }
                    this._useWillChange &&
                      y.addWillChange(
                        this._style || this._target.style,
                        this._key
                      );
                  }),
                  (e.prototype.update = function (t) {
                    if (!this._isUpdatedOnce) {
                      for (var n in this._onceParam) {
                        var i = this._onceParam[n];
                        this._style
                          ? this._style.setProperty(n, i)
                          : y.setStyleProp(this._target, n, i);
                      }
                      this._isUpdatedOnce = !0;
                    }
                    if (this._tweenKey)
                      for (var r = 0, s = this._tweenKey; r < s.length; r++)
                        (n = s[r]),
                          (i = this._param[n].update(t) + this._unit[n]),
                          this._style
                            ? this._style.setProperty(n, i)
                            : y.setStyleProp(this._target, n, i);
                    t == 1 && this.complete();
                  }),
                  (e.prototype.overwrite = function (t) {
                    if (this._target == t._target) {
                      var n = t._tweenKey;
                      if (this._tweenKey && n)
                        for (var i = 0, r = n; i < r.length; i++) {
                          var s = r[i],
                            o = this._tweenKey.indexOf(s);
                          o > -1 && this._tweenKey.splice(o, 1);
                        }
                    }
                  }),
                  (e.prototype.getMaxAbsDelta = function () {
                    var t = [];
                    if (this._param)
                      for (var n in this._param)
                        t.push(Math.abs(this._param[n].getDelta()));
                    return Math.max.apply(Math, t);
                  }),
                  (e.prototype.clone = function (t, n) {
                    t === void 0 && (t = this._target),
                      n === void 0 && (n = this._query);
                    var i = new e(t, n);
                    if (this._param)
                      for (var r in ((i._param = {}), this._param))
                        i._param[r] = this._param[r].clone();
                    return (
                      this._key &&
                        (i._key = (function () {
                          for (
                            var s = 0, o = 0, a = arguments.length;
                            o < a;
                            o++
                          )
                            s += arguments[o].length;
                          var _ = Array(s),
                            h = 0;
                          for (o = 0; o < a; o++)
                            for (
                              var u = arguments[o], p = 0, d = u.length;
                              p < d;
                              p++, h++
                            )
                              _[h] = u[p];
                          return _;
                        })(this._key)),
                      this._unit && (i._unit = G({}, this._unit)),
                      this._onceParam &&
                        (i._onceParam = G({}, this._onceParam)),
                      i
                    );
                  }),
                  (e.prototype.toString = function () {
                    var t = "";
                    if (this._param && this._key)
                      for (var n = 0, i = this._key; n < i.length; n++) {
                        var r = i[n];
                        t += this._param[r].toString() + " ";
                      }
                    for (var r in this._onceParam)
                      t += r + ":" + this._onceParam[r].toString() + " ";
                    return t.trim();
                  }),
                  (e.prototype.addProp = function (t, n) {}),
                  (e.prototype.complete = function () {
                    this._useWillChange &&
                      y.removeWillChange(
                        this._style || this._target.style,
                        this._key
                      );
                  }),
                  (e.className = "StyleUpdater"),
                  (e.PARAM_REG = new RegExp(/^[0-9.]*/)),
                  (e.UNIT_REG = new RegExp(/[^0-9.].*/)),
                  e
                );
              })(),
              F = (function () {
                function e(t, n) {
                  (this._targets = t),
                    (this._query = n),
                    (this._updaterType = null),
                    (this._updaters = []);
                }
                return (
                  (e.prototype.setupByType = function (t) {
                    this._updaterType = t;
                    for (var n = 0, i = this._targets; n < i.length; n++) {
                      var r = i[n];
                      this._updaters.push(
                        this._getUpdaterInstance(r, this._updaterType)
                      );
                    }
                    return this;
                  }),
                  (e.prototype.setupByUpdater = function (t) {
                    for (var n = 0, i = this._targets; n < i.length; n++) {
                      var r = i[n];
                      this._updaters.push(t.clone(r, this._query));
                    }
                    return this;
                  }),
                  (e.prototype._getUpdaterInstance = function (t, n) {
                    var i;
                    switch (n) {
                      case k.className:
                        i = new k(t, this._query);
                        break;
                      case B.className:
                        i = new B(t, this._query);
                        break;
                      default:
                        i = new X(t);
                    }
                    return i;
                  }),
                  (e.prototype.addProp = function (t, n) {
                    for (var i = 0, r = this._updaters; i < r.length; i++)
                      r[i].addProp(t, n);
                  }),
                  (e.prototype.addPropStr = function (t, n) {
                    for (var i = 0, r = this._updaters; i < r.length; i++)
                      r[i].addPropStr(t, n);
                  }),
                  (e.prototype.init = function (t) {
                    for (var n = 0, i = this._updaters; n < i.length; n++)
                      i[n].init(t);
                  }),
                  (e.prototype.update = function (t) {
                    for (var n = 0, i = this._updaters; n < i.length; n++)
                      i[n].update(t);
                  }),
                  (e.prototype.overwrite = function (t) {
                    for (var n = 0, i = this._updaters; n < i.length; n++)
                      i[n].overwrite(t);
                  }),
                  (e.prototype.overwriteTo = function (t) {
                    for (var n = 0, i = this._updaters; n < i.length; n++) {
                      var r = i[n];
                      t.overwrite(r);
                    }
                  }),
                  (e.prototype.overwriteMultiTo = function (t) {
                    for (var n = 0, i = t._updaters; n < i.length; n++) {
                      var r = i[n];
                      this.overwriteTo(r);
                    }
                  }),
                  (e.prototype.complete = function () {
                    for (var t = 0, n = this._updaters; t < n.length; t++)
                      n[t].complete();
                  }),
                  (e.prototype.getMaxAbsDelta = function () {
                    for (
                      var t = [], n = 0, i = this._updaters;
                      n < i.length;
                      n++
                    ) {
                      var r = i[n];
                      t.push(r.getMaxAbsDelta());
                    }
                    return Math.max.apply(Math, t);
                  }),
                  (e.prototype.clone = function (t, n) {
                    t === void 0 && (t = this._targets),
                      n === void 0 && (n = this._query);
                    var i = this._updaters[0];
                    if (Array.isArray(t)) {
                      var r = new e(t, n);
                      r._updaterType = this._updaterType;
                      for (var s = 0, o = r._targets; s < o.length; s++) {
                        var a = o[s];
                        r._updaters.push(i.clone(a, n));
                      }
                      return r;
                    }
                    return i.clone(t, n);
                  }),
                  (e.prototype.toString = function () {
                    var t = this._updaters[0];
                    return t ? t.toString() : "";
                  }),
                  (e.type = "MultiUpdater"),
                  e
                );
              })(),
              I = (function () {
                function e() {}
                return (
                  (e.isString = function (t) {
                    return typeof t == "string";
                  }),
                  (e.isNumber = function (t) {
                    return Number.isFinite(t);
                  }),
                  e
                );
              })(),
              S = (function () {
                function e() {}
                return (
                  (e.toCamel = function (t) {
                    return (t = t.charAt(0).toLowerCase() + t.slice(1)).replace(
                      /[-_](.)/g,
                      function (n, i) {
                        return i.toUpperCase();
                      }
                    );
                  }),
                  (e.toSnake = function (t) {
                    return e.toCamel(t).replace(/[A-Z]/g, function (n) {
                      return "_" + n.charAt(0).toLowerCase();
                    });
                  }),
                  (e.toKebab = function (t) {
                    return e.toCamel(t).replace(/[A-Z]/g, function (n) {
                      return "-" + n.charAt(0).toLowerCase();
                    });
                  }),
                  (e.addUnit = function (t, n) {
                    return (
                      n === void 0 && (n = "px"),
                      I.isString(t) ? String(t) : t + n
                    );
                  }),
                  e
                );
              })(),
              P = (function () {
                function e(t, n, i, r) {
                  (this._target = t),
                    (this._text = n),
                    (this._spacing = NaN),
                    (this._originalOverflow = t.style.overflow);
                  var s = t.style.lineHeight;
                  (this._height = parseFloat(
                    window.getComputedStyle(t).height
                  )),
                    (t.style.height = this._height + "px"),
                    (t.innerText = "");
                  var o = (this._spans = []);
                  n.split("").map(function (a) {
                    a = a === " " ? "&nbsp;" : a;
                    var _ = document.createElement("span");
                    (_.style.display = "inline-block"),
                      (_.style.lineHeight = s),
                      (_.style.letterSpacing = t.style.letterSpacing),
                      (_.innerHTML = a),
                      o.push(_),
                      t.appendChild(_);
                  }),
                    (this.overflowHidden = i),
                    (this.double = r),
                    e._allTexts.set(t, this);
                }
                return (
                  (e.prototype.reset = function () {
                    (this._target.innerHTML = ""),
                      (this._target.innerText = this._text),
                      (this._target.style.width = "auto"),
                      (this._target.style.height = "auto"),
                      e._allTexts.delete(this._target);
                  }),
                  Object.defineProperty(e.prototype, "spacing", {
                    set: function (t) {
                      this._spacing = t;
                      for (var n = 0, i = this._spans; n < i.length; n++) {
                        var r = i[n];
                        (r.style.width = "auto"),
                          (r.style.width =
                            r.clientWidth + this._spacing + "px");
                      }
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "overflowHidden", {
                    set: function (t) {
                      this._target.style.overflow = t
                        ? "hidden"
                        : this._originalOverflow;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "double", {
                    set: function (t) {
                      for (var n = 0, i = this._spans; n < i.length; n++)
                        i[n].style.textShadow = t
                          ? "0 -" + this._height + "px"
                          : "none";
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "targets", {
                    get: function () {
                      return this._spans;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "height", {
                    get: function () {
                      return this._height;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e._allTexts = new Map()),
                  (e.getInstance = function (t) {
                    return e._allTexts.get(t);
                  }),
                  (e.removeByTarget = function (t) {
                    for (
                      var n, i = 0, r = y.querySelectorAll(t);
                      i < r.length;
                      i++
                    ) {
                      var s = r[i];
                      (n = e._allTexts.get(s)) === null ||
                        n === void 0 ||
                        n.reset();
                    }
                  }),
                  (e.removeAll = function () {
                    e._allTexts.forEach(function (t) {
                      t.reset();
                    });
                  }),
                  e
                );
              })(),
              et = (function () {
                function e(t, n, i, r, s) {
                  var o = this;
                  (this._playHandler = function (a) {
                    var _;
                    o._callback && o._callback(),
                      (_ = o._tween) === null || _ === void 0 || _.play();
                  }),
                    (this._stopHandler = function (a) {
                      var _;
                      (_ = o._tween) === null || _ === void 0 || _.stop();
                    }),
                    (this._target = t),
                    (this._playEventType = i),
                    (this._stopEventType = null),
                    (this._tween = null),
                    (this._callback = s),
                    r &&
                      (this._tween =
                        t instanceof HTMLElement ? r.__clone(t, n) : r);
                }
                return (
                  (e.prototype.setEventListener = function () {
                    if (this._stopEventType)
                      for (
                        var t = 0, n = this._stopEventType;
                        t < n.length;
                        t++
                      ) {
                        var i = n[t];
                        this._target.addEventListener(i, this._stopHandler, !1);
                      }
                    this._target.addEventListener(
                      this._playEventType,
                      this._playHandler,
                      !1
                    );
                  }),
                  (e.prototype.removeEventListener = function () {
                    if (this._stopEventType)
                      for (
                        var t = 0, n = this._stopEventType;
                        t < n.length;
                        t++
                      ) {
                        var i = n[t];
                        this._target.removeEventListener(
                          i,
                          this._stopHandler,
                          !1
                        );
                      }
                    this._target.removeEventListener(
                      this._playEventType,
                      this._playHandler,
                      !1
                    );
                  }),
                  (e.prototype.addStopEvent = function (t) {
                    if (
                      ((this._stopEventType = Array.isArray(t) ? t : [t]),
                      this._stopEventType)
                    )
                      for (
                        var n = 0, i = this._stopEventType;
                        n < i.length;
                        n++
                      ) {
                        var r = i[n];
                        this._target.addEventListener(r, this._stopHandler, !1);
                      }
                  }),
                  (e.prototype.willChange = function (t) {
                    var n;
                    return (
                      (n = this._tween) === null ||
                        n === void 0 ||
                        n.willChange(t),
                      this
                    );
                  }),
                  e
                );
              })(),
              T = (function () {
                function e() {
                  this._eventCores = [];
                }
                return (
                  (e.prototype._addEventCore = function (t) {
                    this._eventCores.push(t);
                  }),
                  (e.prototype.setEventListener = function () {
                    for (var t = 0, n = this._eventCores; t < n.length; t++)
                      n[t].setEventListener();
                  }),
                  (e.prototype.removeEventListener = function () {
                    for (var t = 0, n = this._eventCores; t < n.length; t++)
                      n[t].removeEventListener();
                  }),
                  (e.prototype.addStopEvent = function (t) {
                    for (var n = 0, i = this._eventCores; n < i.length; n++)
                      i[n].addStopEvent(t);
                    return this;
                  }),
                  (e.prototype.willChange = function (t) {
                    for (var n = 0, i = this._eventCores; n < i.length; n++)
                      i[n].willChange(t);
                    return this;
                  }),
                  (e.add = function (t, n, i) {
                    return e._add(t, n, i, null);
                  }),
                  (e.__addCallback = function (t, n, i) {
                    return e._add(t, n, null, i);
                  }),
                  (e._add = function (t, n, i, r) {
                    var s = new e(),
                      o = Array.isArray(n) ? n : [n];
                    I.isString(t) && (t = String(t).split(","));
                    for (var a = 0, _ = o; a < _.length; a++) {
                      var h = _[a];
                      if (Array.isArray(t))
                        if (I.isString(t[0]))
                          for (var u = 0, p = t; u < p.length; u++)
                            for (
                              var d = p[u], f = 0, c = y.querySelectorAll(d);
                              f < c.length;
                              f++
                            ) {
                              var N = c[f];
                              s._addEventCore(e._create(N, d, h, i, r));
                            }
                        else
                          for (var U = 0, Y = t; U < Y.length; U++)
                            (N = Y[U]),
                              s._addEventCore(e._create(N, null, h, i, r));
                      else s._addEventCore(e._create(t, null, h, i, r));
                    }
                    return s;
                  }),
                  (e._create = function (t, n, i, r, s) {
                    var o,
                      a = e._allEvents.get(t);
                    a ||
                      ((a = {}),
                      (o = e._allEvents) === null ||
                        o === void 0 ||
                        o.set(t, a));
                    var _ = new et(t, n, i, r, s);
                    _.setEventListener();
                    var h = a[i];
                    return h || (h = a[i] = []), h.push(_), _;
                  }),
                  (e.remove = function (t, n) {
                    for (
                      var i = Array.isArray(n) ? n : [n],
                        r = 0,
                        s = e._getEventTarget(t);
                      r < s.length;
                      r++
                    ) {
                      var o = s[r],
                        a = e._allEvents.get(o);
                      if (a)
                        for (var _ = 0, h = i; _ < h.length; _++) {
                          var u = h[_],
                            p = a[u];
                          if (p) {
                            for (var d = 0, f = p; d < f.length; d++)
                              f[d].removeEventListener();
                            delete a[u];
                          }
                        }
                    }
                  }),
                  (e.removeAllByTarget = function (t) {
                    for (
                      var n = 0, i = e._getEventTarget(t);
                      n < i.length;
                      n++
                    ) {
                      var r = i[n],
                        s = e._allEvents.get(r);
                      if (s)
                        for (var o in s) {
                          for (var a = 0, _ = s[o]; a < _.length; a++)
                            _[a].removeEventListener();
                          delete s[o];
                        }
                      e._allEvents.delete(r);
                    }
                  }),
                  (e.removeAll = function () {
                    e._allEvents.forEach(function (t, n) {
                      for (var i in t) {
                        for (var r = 0, s = t[i]; r < s.length; r++)
                          s[r].removeEventListener();
                        delete t[i];
                      }
                      e._allEvents.delete(n);
                    });
                  }),
                  (e._getEventTarget = function (t) {
                    var n = [];
                    if (
                      (I.isString(t) && (t = String(t).split(",")),
                      Array.isArray(t))
                    )
                      if (I.isString(t[0]))
                        for (var i = 0, r = t; i < r.length; i++) {
                          var s = r[i];
                          n = n.concat(y.querySelectorAll(s));
                        }
                      else n = t;
                    else n.push(t);
                    return n;
                  }),
                  (e.CANCEL = "cancel"),
                  (e.ERROR = "error"),
                  (e.SCROLL = "scroll"),
                  (e.SELECT = "select"),
                  (e.SHOW = "show"),
                  (e.WHEEL = "wheel"),
                  (e.OFFLINE = "offline"),
                  (e.ONLINE = "online"),
                  (e.KEY_DOWN = "keydown"),
                  (e.KEY_UP = "keyup"),
                  (e.FOCUS_BLUR = "blur"),
                  (e.FOCUS = "focus"),
                  (e.FOCUS_IN = "focusin"),
                  (e.FOCUS_OUT = "focusout"),
                  (e.DRAG = "drag"),
                  (e.DRAG_END = "dragend"),
                  (e.DRAG_EXIT = "dragexit"),
                  (e.DRAG_LEAVE = "dragleave"),
                  (e.DRAG_OVER = "dragover"),
                  (e.DRAG_START = "dragstart"),
                  (e.DROP = "drop"),
                  (e.HASH_CHANGE = "hashchange"),
                  (e.PAGE_HIDE = "pagehide"),
                  (e.PAGE_SHOW = "pageshow"),
                  (e.POP_STATE = "popstate"),
                  (e.MOUSE_OVER = "mouseover"),
                  (e.MOUSE_OUT = "mouseout"),
                  (e.MOUSE_ENTER = "mouseenter"),
                  (e.MOUSE_LEAVE = "mouseleave"),
                  (e.MOUSE_MOVE = "mousemove"),
                  (e.MOUSE_UP = "mouseleave"),
                  (e.MOUSE_DOWN = "mouseleave"),
                  (e.CLICK = "click"),
                  (e.AUX_CLICK = "auxclick"),
                  (e.DOUBLE_CLICK = "dblclick"),
                  (e.TOUCH_START = "touchstart"),
                  (e.TOUCH_END = "touchend"),
                  (e.TOUCH_MOVE = "touchmove"),
                  (e.TOUCH_CANCEL = "touchcancel"),
                  (e.AFTER_PRINT = "afterprint"),
                  (e.BEFORE_PRINT = "beforeprint"),
                  (e.MESSAGE = "message"),
                  (e.MESSAGE_ERROR = "messageerror"),
                  (e.CLIPBOARD_COPY = "copy"),
                  (e.CLIPBOARD_CUT = "cut"),
                  (e.CLIPBOARD_PASTE = "paste"),
                  (e.FULLSCREEN_CHANGE = "fullscreenchange"),
                  (e.FULLSCREEN_ERROR = "fullscreenerror"),
                  (e.BEFOREUN_LOAD = "beforeunload"),
                  (e.DOM_CONTENT_LOADED = "DOMContentLoaded"),
                  (e.LOAD = "load"),
                  (e.UNLOAD = "unload"),
                  (e.LANGUAGE_CHANGE = "languagechange"),
                  (e.ORIENTATION_CHANGE = "orientationchange"),
                  (e.DEVICE_MOTION = "devicemotion"),
                  (e.DEVICE_ORIENTATION = "deviceorientation"),
                  (e.RESIZE = "resize"),
                  (e.STORAGE = "storage"),
                  (e.POINTER_OVER = "pointerover"),
                  (e.POINTER_ENTER = "pointerenter"),
                  (e.POINTER_DOWN = "pointerdown"),
                  (e.POINTER_MOVE = "pointermove"),
                  (e.POINTER_UP = "pointerup"),
                  (e.POINTER_CANCEL = "pointercancel"),
                  (e.POINTER_OUT = "pointerout"),
                  (e.POINTER_LEAVE = "pointerleave"),
                  (e.GOT_POINTERCAPTURE = "gotpointercapture"),
                  (e.LOST_POINTERCAPTURE = "lostpointercapture"),
                  (e.ANIMATION_CANCEL = "animationcancel"),
                  (e.ANIMATION_END = "animationend"),
                  (e.ANIMATION_ITERATION = "animationiteration"),
                  (e.ANIMATION_START = "animationstart"),
                  (e.TRANSITION_CANCEL = "transitioncancel"),
                  (e.TRANSITION_END = "transitionend"),
                  (e.TRANSITION_RUN = "transitionrun"),
                  (e.TRANSITION_START = "transitionstart"),
                  (e.REJECTION_HANDLED = "rejectionhandled"),
                  (e.UNHANDLED_REJECTION = "unhandledrejection"),
                  (e.GAMEPAD_CONNECTED = "gamepadconnected"),
                  (e.GAMEPAD_DISCONNECTED = "gamepaddisconnected"),
                  (e.APP_INSTALLED = "appinstalled"),
                  (e.BEFORE_INSTALL_PROMPT = "beforeinstallprompt"),
                  (e.WEBKIT_MOUSE_FORCE_CHANGED = "webkitmouseforcechanged"),
                  (e.WEBKIT_MOUSE_FORCE_DOWN = "webkitmouseforcedown"),
                  (e.WEBKIT_MOUSE_FORCE_WILLBEGIN =
                    "webkitmouseforcewillbegin"),
                  (e.WEBKIT_MOUSE_FORCE_UP = "webkitmouseforceup"),
                  (e.VR_DISPLAY_ACTIVATE = "vrdisplayactivate"),
                  (e.VR_DISPLAY_BLUR = "vrdisplayblur"),
                  (e.VR_DISPLAY_CONNECT = "vrdisplayconnect"),
                  (e.VR_DISPLAY_DEACTIVATE = "vrdisplaydeactivate"),
                  (e.VR_DISPLAY_DISCONNECT = "vrdisplaydisconnect"),
                  (e.VR_DISPLAY_FOCUS = "vrdisplayfocus"),
                  (e.VR_DISPLAY_PRESENT_CHANGE = "vrdisplaypresentchange"),
                  (e.VR_DISPLAY_POINTER_RESTRICTED =
                    "vrdisplaypointerrestricted"),
                  (e.VR_DISPLAY_POINTER_UNRESTRICTED =
                    "vrdisplaypointerunrestricted"),
                  (e._allEvents = new Map()),
                  e
                );
              })(),
              M = function () {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                  e += arguments[t].length;
                var i = Array(e),
                  r = 0;
                for (t = 0; t < n; t++)
                  for (
                    var s = arguments[t], o = 0, a = s.length;
                    o < a;
                    o++, r++
                  )
                    i[r] = s[o];
                return i;
              },
              l = (function () {
                function e() {
                  var t = this;
                  (this._singleTarget = null),
                    (this._multiTarget = null),
                    (this._easing = null),
                    (this._type = ""),
                    (this._time = NaN),
                    (this._velocity = NaN),
                    (this._delayTime = NaN),
                    (this._startTime = NaN),
                    (this._progress = 0),
                    (this._debugMode = !1),
                    (this._numLayers = 0),
                    (this._serialNumber = 0),
                    (this._tweenId = ""),
                    (this._tweenGroupId = ""),
                    (this._targetString = ""),
                    (this._targetQuery = null),
                    (this._useWillChange = !1),
                    (this._objectUpdater = null),
                    (this._objectMultiUpdater = null),
                    (this._transformUpdater = null),
                    (this._transformMultiUpdater = null),
                    (this._styleUpdater = null),
                    (this._styleMultiUpdater = null),
                    (this._allUpdaters = null),
                    (this._root = null),
                    (this._parent = null),
                    (this._next = null),
                    (this._isDOM = !1),
                    (this._isRoot = !1),
                    (this._isManual = !1),
                    (this._isTrigger = !1),
                    (this._inited = !1),
                    (this._played = !1),
                    (this._paused = !1),
                    (this._skiped = !1),
                    (this._eventWaiting = !1),
                    (this._firstUpdated = !1),
                    (this._isContainerTween = !1),
                    (this._createdBasicUpdater = !1),
                    (this._functionExecuters = null),
                    (this._firstTween = null),
                    (this._childTween = null),
                    (this._playingChildTween = null),
                    (this._originalChildTween = null),
                    (this._numChildren = 0),
                    (this._numCompleteChildren = 0),
                    (this._lagTime = NaN),
                    (this._totalLagTime = NaN),
                    (this._lagSort = null),
                    (this._lagEasing = null),
                    (this._numLoops = NaN),
                    (this._currentLoops = NaN),
                    (this._ifFunc = null),
                    (this._trueTween = null),
                    (this._falseTween = null),
                    (this._dispatchEventType = null),
                    (this._triggered = !1),
                    (this._jumped = !1),
                    (this._jumpProg = NaN),
                    (this.__fps = 0),
                    (this.__beforeTime = 0),
                    (this.play = function () {
                      t._commonRootPlay();
                    }),
                    (this.manualPlay = function () {
                      e._manualPlayingTweens || (e._manualPlayingTweens = []),
                        (t._isManual = !0),
                        t._commonRootPlay();
                    }),
                    (this.pause = function () {
                      t._isRoot &&
                        ((t._played = !1),
                        (t._paused = !0),
                        t._isManual
                          ? A.removeItemFromArray(e._manualPlayingTweens, t)
                          : e.ticker.remove(t),
                        A.removeItemFromArray(e._playingTweens, t),
                        t._functionExecute(g.PAUSE));
                    }),
                    (this.skip = function () {
                      t._skip();
                    }),
                    (this.stop = function () {
                      t._stop(), t._functionExecute(g.STOP);
                    }),
                    (this.manualUpdate = function () {
                      t.__update(R.getTime());
                    }),
                    e.ease || (e.ease = new v()),
                    e.ticker || (e.ticker = new R()),
                    e._playingTweens || (e._playingTweens = []),
                    e._playingTweensByTarget ||
                      (e._playingTweensByTarget = new Map());
                }
                return (
                  (e.prototype._commonRootPlay = function () {
                    this._paused
                      ? (this._resume(),
                        (this._paused = !1),
                        this._isManual
                          ? e._manualPlayingTweens.push(this)
                          : e.ticker.add(this),
                        this._functionExecute(g.RESUME))
                      : this._played ||
                        ((this._root = this),
                        (this._isRoot = !0),
                        (this._inited = !1),
                        (this._firstUpdated = !1),
                        this._play(),
                        this._isManual
                          ? e._manualPlayingTweens.push(this)
                          : e.ticker.add(this),
                        this._functionExecute(g.PLAY));
                  }),
                  (e.prototype._play = function () {
                    var t, n, i, r;
                    if (
                      (this._isRoot
                        ? (this._numLayers = 0)
                        : ((this._root =
                            ((t = this._parent) === null || t === void 0
                              ? void 0
                              : t._root) || this._parent),
                          (this._numLayers = this._parent
                            ? this._parent._numLayers + 1
                            : 1)),
                      (this._played = !0),
                      (this._startTime = R.getTime() + 1e3 * this._delayTime),
                      this._type == e._TYPE_TWEEN_VELOCITY ||
                        this._type == e._TYPE_TWEEN_TEXT_VELOCITY)
                    ) {
                      var s = [0];
                      if (
                        (n = this._allUpdaters) === null || n === void 0
                          ? void 0
                          : n.length
                      )
                        for (
                          var o = 0, a = this._allUpdaters;
                          o < a.length;
                          o++
                        ) {
                          var _ = a[o];
                          _.init(!1), s.push(_.getMaxAbsDelta());
                        }
                      this._time = Math.max.apply(Math, s) / this._velocity;
                    }
                    e._playingTweens.push(this),
                      (((i = this._root) === null || i === void 0
                        ? void 0
                        : i._skiped) ||
                        ((r = this._parent) === null || r === void 0
                          ? void 0
                          : r._skiped)) &&
                        this._skip(),
                      this._debugLog("play");
                  }),
                  (e.prototype._resume = function () {
                    this._played = !0;
                    var t = R.getTime();
                    if (
                      ((this._startTime =
                        t - 1e3 * this._time * this._progress),
                      this._playingChildTween)
                    )
                      for (
                        var n = 0, i = this._playingChildTween;
                        n < i.length;
                        n++
                      ) {
                        var r = i[n];
                        r._playingChildTween
                          ? r._resume()
                          : (r._startTime = t - 1e3 * r._time * r._progress);
                      }
                    e._playingTweens.push(this);
                  }),
                  (e.prototype._skip = function () {
                    if (((this._skiped = !0), this._playingChildTween))
                      for (
                        var t = 0, n = this._playingChildTween.concat();
                        t < n.length;
                        t++
                      )
                        n[t]._skip();
                    this.__update(0);
                  }),
                  (e.prototype._stop = function () {
                    if ((this._tweenStop(), this._childTween))
                      for (var t = 0, n = this._childTween; t < n.length; t++) {
                        var i = n[t];
                        i._childTween ? i._stop() : i._tweenStop();
                      }
                  }),
                  (e.prototype._initParam = function () {
                    var t, n, i;
                    if (
                      (this._isDOM &&
                        this._targetQuery &&
                        y.isPseudoQuery(this._targetQuery) &&
                        y.setTweenElementQuery(
                          this._singleTarget || this._multiTarget,
                          this._targetQuery
                        ),
                      (t = this._allUpdaters) === null || t === void 0
                        ? void 0
                        : t.length)
                    )
                      for (var r = 0, s = this._allUpdaters; r < s.length; r++)
                        s[r].init(
                          ((n = this._root) === null || n === void 0
                            ? void 0
                            : n._useWillChange) ||
                            ((i = this._parent) === null || i === void 0
                              ? void 0
                              : i._useWillChange) ||
                            this._useWillChange
                        );
                    if (this._singleTarget) this._overwrite(this._singleTarget);
                    else if (this._multiTarget)
                      for (
                        var o = 0, a = this._multiTarget;
                        o < a.length;
                        o++
                      ) {
                        var _ = a[o];
                        this._overwrite(_);
                      }
                  }),
                  (e.prototype._overwrite = function (t) {
                    var n,
                      i,
                      r,
                      s,
                      o,
                      a,
                      _,
                      h,
                      u,
                      p = e._playingTweensByTarget.get(t);
                    if (p) {
                      for (var d = 0, f = p; d < f.length; d++) {
                        var c = f[d];
                        this !== c &&
                          (this._singleTarget
                            ? (this._objectUpdater &&
                                ((n =
                                  c._objectMultiUpdater || c._objectUpdater) ===
                                  null ||
                                  n === void 0 ||
                                  n.overwrite(this._objectUpdater)),
                              this._transformUpdater &&
                                ((i =
                                  c._transformMultiUpdater ||
                                  c._transformUpdater) === null ||
                                  i === void 0 ||
                                  i.overwrite(this._transformUpdater)),
                              this._styleUpdater &&
                                ((r =
                                  c._styleMultiUpdater || c._styleUpdater) ===
                                  null ||
                                  r === void 0 ||
                                  r.overwrite(this._styleUpdater)))
                            : this._multiTarget &&
                              (c._objectMultiUpdater
                                ? (s = this._objectMultiUpdater) === null ||
                                  s === void 0 ||
                                  s.overwriteMultiTo(c._objectMultiUpdater)
                                : c._objectUpdater &&
                                  ((o = this._objectMultiUpdater) === null ||
                                    o === void 0 ||
                                    o.overwriteTo(c._objectUpdater)),
                              c._transformMultiUpdater
                                ? (a = this._transformMultiUpdater) === null ||
                                  a === void 0 ||
                                  a.overwriteMultiTo(c._transformMultiUpdater)
                                : c._transformUpdater &&
                                  ((_ = this._transformMultiUpdater) === null ||
                                    _ === void 0 ||
                                    _.overwriteTo(c._transformUpdater)),
                              c._styleMultiUpdater
                                ? (h = this._styleMultiUpdater) === null ||
                                  h === void 0 ||
                                  h.overwriteMultiTo(c._styleMultiUpdater)
                                : c._styleUpdater &&
                                  ((u = this._styleMultiUpdater) === null ||
                                    u === void 0 ||
                                    u.overwriteTo(c._styleUpdater))));
                      }
                      p.push(this);
                    } else e._playingTweensByTarget.set(t, [this]);
                  }),
                  (e.prototype._setIfCaseTween = function (t) {
                    this._childTween
                      ? (this._childTween.length = 0)
                      : (this._childTween = []),
                      t && this._trueTween
                        ? (this._childTween = [this._trueTween])
                        : this._falseTween
                        ? (this._childTween = [this._falseTween])
                        : (this._childTween = []),
                      (this._numChildren = this._childTween.length);
                  }),
                  (e.prototype.__update = function (t) {
                    var n,
                      i,
                      r,
                      s,
                      o = this;
                    if (
                      (this._updateProgress(this._time, this._startTime, t),
                      !(this._progress < 0))
                    )
                      if (
                        (this._inited ||
                          ((this._inited = !0),
                          this._initParam(),
                          this._functionExecute(g.INIT)),
                        this._isContainerTween)
                      ) {
                        if (this._firstUpdated == 0)
                          switch (
                            ((this._firstUpdated = !0),
                            this._type == e._TYPE_IF_CASE_BY_FUNC &&
                              this._setIfCaseTween(
                                !!this._ifFunc && Boolean(this._ifFunc())
                              ),
                            this._type)
                          ) {
                            case e._TYPE_SERIAL:
                              this._firstTween &&
                                ((n = this._playingChildTween) === null ||
                                  n === void 0 ||
                                  n.push(this._firstTween),
                                this._firstTween._play());
                              break;
                            case e._TYPE_PARALLEL:
                            case e._TYPE_LAG:
                            case e._TYPE_LOOP:
                            case e._TYPE_IF_CASE:
                            case e._TYPE_IF_CASE_BY_FUNC:
                              if (this._childTween)
                                for (
                                  var a = 0, _ = this._childTween;
                                  a < _.length;
                                  a++
                                ) {
                                  var h = _[a];
                                  (i = this._playingChildTween) === null ||
                                    i === void 0 ||
                                    i.push(h),
                                    h._play();
                                }
                          }
                        if (this._playingChildTween)
                          for (
                            var u = 0, p = this._playingChildTween;
                            u < p.length;
                            u++
                          )
                            (h = p[u]).__update(t);
                        this._functionExecute(g.UPDATE),
                          this._numChildren == this._numCompleteChildren &&
                            this._complete();
                      } else {
                        if (
                          ((this._firstUpdated = !0),
                          this._singleTarget || this._multiTarget)
                        ) {
                          var d = this._easing
                            ? this._easing(this._progress, 0, 1, 1)
                            : this._progress;
                          if (
                            (r = this._allUpdaters) === null || r === void 0
                              ? void 0
                              : r.length
                          )
                            for (
                              var f = 0, c = this._allUpdaters;
                              f < c.length;
                              f++
                            )
                              c[f].update(d);
                          this._functionExecute(g.UPDATE);
                        } else this._functionExecute(g.UPDATE);
                        !Number.isNaN(this._jumpProg) &&
                          !this._jumped &&
                          this._progress >= this._jumpProg &&
                          ((this._jumped = !0),
                          (s = this._parent) === null ||
                            s === void 0 ||
                            s._playNextTween(this)),
                          this._progress >= 1 &&
                            ((this._type == e._TYPE_WAIT_EVENT ||
                              this._type == e._TYPE_WAIT_EVENT_AND_FUNC) &&
                            this._dispatchEventTarget &&
                            this._dispatchEventType
                              ? this._eventWaiting == 0 &&
                                ((this._eventWaiting = !0),
                                T.__addCallback(
                                  this._dispatchEventTarget,
                                  this._dispatchEventType,
                                  function () {
                                    (o._eventWaiting = !1),
                                      o._dispatchEventType &&
                                        T.remove(
                                          o._dispatchEventTarget,
                                          o._dispatchEventType
                                        ),
                                      o._complete();
                                  }
                                ),
                                this._type == e._TYPE_WAIT_EVENT_AND_FUNC &&
                                  this._functionExecute(
                                    e._TYPE_WAIT_EVENT_AND_FUNC
                                  ))
                              : (this._type == e._TYPE_FUNC &&
                                  this._functionExecute(e._TYPE_FUNC),
                                this._complete()));
                      }
                  }),
                  (e.prototype._complete = function () {
                    if (
                      (this._debugLog("complete"),
                      this._type == e._TYPE_LOOP &&
                        (this._currentLoops++,
                        this._numLoops == 0 ||
                          this._numLoops > this._currentLoops))
                    )
                      return (this._numCompleteChildren = 0), void this._play();
                    this._parent && this._parent._completeChildTween(this),
                      this._functionExecute(g.COMPLATE),
                      this._tweenStop();
                  }),
                  (e.prototype._tweenStop = function () {
                    this._isRoot && e.ticker.remove(this),
                      this._playingChildTween &&
                        (this._playingChildTween.length = 0),
                      (this._numCompleteChildren = 0),
                      (this._played = !1),
                      (this._inited = !1),
                      (this._jumped = !1),
                      (this._skiped = !1),
                      (this._triggered = !1),
                      (this._firstUpdated = !1),
                      A.removeItemFromArray(
                        e._playingTweensByTarget.get(this._singleTarget),
                        this
                      ),
                      A.removeItemFromArray(e._playingTweens, this),
                      this._isManual &&
                        A.removeItemFromArray(e._manualPlayingTweens, this);
                  }),
                  (e.prototype._completeChildTween = function (t) {
                    this._numCompleteChildren++,
                      !this._triggered &&
                        t._isTrigger &&
                        this._parent &&
                        ((this._triggered = !0),
                        this._parent._playNextTween(this)),
                      this._numChildren == this._numCompleteChildren
                        ? this._complete()
                        : this._playingChildTween &&
                          (A.removeItemFromArray(this._playingChildTween, t),
                          t._triggered || t._jumped || this._playNextTween(t));
                  }),
                  (e.prototype._playNextTween = function (t) {
                    var n = t._next;
                    this._playingChildTween &&
                      n &&
                      (this._playingChildTween.push(n), n._play());
                  }),
                  (e.prototype._updateProgress = function (t, n, i) {
                    return (
                      this._skiped
                        ? (this._progress = 1)
                        : i < n
                        ? (this._progress = -1)
                        : t == 0
                        ? (this._progress = 1)
                        : ((this._progress = (i - n) / (1e3 * t)),
                          (this._progress =
                            this._progress > 1 ? 1 : this._progress)),
                      this._progress
                    );
                  }),
                  (e.prototype.x = function (t) {
                    return I.isNumber(t)
                      ? this._setPropety("x", parseFloat(t))
                      : this._setPropetyStr("x", t);
                  }),
                  (e.prototype.y = function (t) {
                    return I.isNumber(t)
                      ? this._setPropety("y", parseFloat(t))
                      : this._setPropetyStr("y", t);
                  }),
                  (e.prototype.xy = function (t, n) {
                    return this.x(t).y(n);
                  }),
                  (e.prototype.alpha = function (t) {
                    return this._isDOM
                      ? this._setStyle("opacity", t)
                      : this._setPropety("alpha", t);
                  }),
                  (e.prototype.opacity = function (t) {
                    return this._isDOM
                      ? this._setStyle("opacity", t)
                      : this._setPropety("opacity", t);
                  }),
                  (e.prototype.scaleX = function (t) {
                    return this._setPropety("scaleX", t);
                  }),
                  (e.prototype.scaleY = function (t) {
                    return this._setPropety("scaleY", t);
                  }),
                  (e.prototype.scale = function (t) {
                    return this._setPropety("scaleX", t)._setPropety(
                      "scaleY",
                      t
                    );
                  }),
                  (e.prototype.scaleXY = function (t, n) {
                    return this._setPropety("scaleX", t)._setPropety(
                      "scaleY",
                      n
                    );
                  }),
                  (e.prototype.skewX = function (t) {
                    return this._setPropety("skewX", t);
                  }),
                  (e.prototype.skewY = function (t) {
                    return this._setPropety("skewY", t);
                  }),
                  (e.prototype.skew = function (t) {
                    return this._setPropety("skewX", t)._setPropety("skewY", t);
                  }),
                  (e.prototype.skewXY = function (t, n) {
                    return this._setPropety("skewX", t)._setPropety("skewY", n);
                  }),
                  (e.prototype.rotation = function (t) {
                    return this._setPropety("rotation", t);
                  }),
                  (e.prototype.angle = function (t) {
                    return this._isDOM
                      ? this._setStyle("rotation", t)
                      : this._setPropety("angle", t);
                  }),
                  (e.prototype.top = function (t) {
                    return this._setStyle("top", S.addUnit(t));
                  }),
                  (e.prototype.right = function (t) {
                    return this._setStyle("right", S.addUnit(t));
                  }),
                  (e.prototype.bottom = function (t) {
                    return this._setStyle("bottom", S.addUnit(t));
                  }),
                  (e.prototype.left = function (t) {
                    return this._setStyle("left", S.addUnit(t));
                  }),
                  (e.prototype.width = function (t) {
                    return this._isDOM
                      ? this._setStyle("width", S.addUnit(t))
                      : this._setPropety("width", parseInt(t));
                  }),
                  (e.prototype.height = function (t) {
                    return this._isDOM
                      ? this._setStyle("height", S.addUnit(t))
                      : this._setPropety("height", parseInt(t));
                  }),
                  (e.prototype.color = function (t) {
                    return this._setStyle("color", t);
                  }),
                  (e.prototype.backgroundColor = function (t) {
                    return this._setStyle("background-color", t);
                  }),
                  (e.prototype.borderWidth = function (t) {
                    return this._setStyle("border-width", S.addUnit(t));
                  }),
                  (e.prototype.borderColor = function (t) {
                    return this._setStyle("border-color", t);
                  }),
                  (e.prototype.borderRadius = function (t) {
                    return this._setStyle("border-radius", S.addUnit(t));
                  }),
                  (e.prototype.letterSpacing = function (t) {
                    return this._setStyle("letter-spacing", S.addUnit(t));
                  }),
                  (e.prototype.delay = function (t) {
                    return (this._delayTime += t), this;
                  }),
                  (e.prototype.style = function (t, n) {
                    return this._setStyle(t, n);
                  }),
                  (e.prototype.willChange = function (t) {
                    return (
                      t === void 0 && (t = !0), (this._useWillChange = t), this
                    );
                  }),
                  (e.prototype.trigger = function () {
                    return (this._isTrigger = !0), this;
                  }),
                  (e.prototype.jump = function (t) {
                    return (this._jumpProg = t), this;
                  }),
                  (e.prototype.fps = function (t) {
                    return (this.__fps = t), this;
                  }),
                  (e.prototype.debug = function (t) {
                    return (
                      t === void 0 && (t = !0), (this._debugMode = t), this
                    );
                  }),
                  (e.prototype._setPropety = function (t, n) {
                    return (
                      this.createBasicUpdater(),
                      this._singleTarget
                        ? this._objectUpdater
                          ? this._objectUpdater.addProp(t, n)
                          : this._transformUpdater &&
                            this._transformUpdater.addProp(t, n)
                        : this._multiTarget &&
                          (this._objectMultiUpdater
                            ? this._objectMultiUpdater.addProp(t, n)
                            : this._transformMultiUpdater &&
                              this._transformMultiUpdater.addProp(t, n)),
                      this
                    );
                  }),
                  (e.prototype._setPropetyStr = function (t, n) {
                    return (
                      this.createBasicUpdater(),
                      this._singleTarget
                        ? this._transformUpdater &&
                          this._transformUpdater.addPropStr(t, n)
                        : this._multiTarget &&
                          this._transformMultiUpdater &&
                          this._transformMultiUpdater.addPropStr(t, n),
                      this
                    );
                  }),
                  (e.prototype._setStyle = function (t, n) {
                    var i, r;
                    return (
                      (t = S.toKebab(t)),
                      this._singleTarget
                        ? (this._styleUpdater ||
                            ((this._styleUpdater = new B(
                              this._singleTarget,
                              this._targetQuery
                            )),
                            (i = this._allUpdaters) === null ||
                              i === void 0 ||
                              i.push(this._styleUpdater)),
                          this._styleUpdater.addPropStr(t, n))
                        : this._multiTarget &&
                          (this._styleMultiUpdater ||
                            ((this._styleMultiUpdater = new F(
                              this._multiTarget,
                              this._targetQuery
                            ).setupByType(B.className)),
                            (r = this._allUpdaters) === null ||
                              r === void 0 ||
                              r.push(this._styleMultiUpdater)),
                          this._styleMultiUpdater.addPropStr(t, n)),
                      this
                    );
                  }),
                  (e.prototype.createBasicUpdater = function () {
                    var t;
                    if (!this._createdBasicUpdater) {
                      this._createdBasicUpdater = !0;
                      var n = null;
                      this._isDOM
                        ? this._singleTarget
                          ? (n =
                              this._transformUpdater ||
                              (this._transformUpdater = new k(
                                this._singleTarget,
                                this._targetQuery
                              )))
                          : this._multiTarget &&
                            (n =
                              this._transformMultiUpdater ||
                              (this._transformMultiUpdater = new F(
                                this._multiTarget,
                                this._targetQuery
                              ).setupByType(k.className)))
                        : this._singleTarget
                        ? (n =
                            this._objectUpdater ||
                            (this._objectUpdater = new X(this._singleTarget)))
                        : this._multiTarget &&
                          (n =
                            this._objectMultiUpdater ||
                            (this._objectMultiUpdater = new F(
                              this._multiTarget,
                              this._targetQuery
                            ).setupByType(X.className))),
                        n &&
                          ((t = this._allUpdaters) === null ||
                            t === void 0 ||
                            t.push(n));
                    }
                  }),
                  (e.prototype.onPlay = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return this._setFunctionExecute(g.PLAY, t, t, n);
                  }),
                  (e.prototype.onInit = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return this._setFunctionExecute(g.INIT, t, t, n);
                  }),
                  (e.prototype.onUpdate = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return this._setFunctionExecute(g.UPDATE, t, t, n);
                  }),
                  (e.prototype.onPause = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return this._setFunctionExecute(g.PAUSE, t, t, n);
                  }),
                  (e.prototype.onResume = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return this._setFunctionExecute(g.RESUME, t, t, n);
                  }),
                  (e.prototype.onStop = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return this._setFunctionExecute(g.STOP, t, t, n);
                  }),
                  (e.prototype.onComplete = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return this._setFunctionExecute(g.COMPLATE, t, t, n);
                  }),
                  (e.prototype._setFunctionExecute = function (t, n, i, r) {
                    return (
                      this._functionExecuters || (this._functionExecuters = {}),
                      (this._functionExecuters[t] = new $(n, i, r)),
                      this
                    );
                  }),
                  (e.prototype._functionExecute = function (t) {
                    var n;
                    this._functionExecuters &&
                      ((n = this._functionExecuters[t]) === null ||
                        n === void 0 ||
                        n.execute());
                  }),
                  (e.tween = function (t, n, i, r) {
                    return (
                      i === void 0 && (i = null),
                      r === void 0 && (r = null),
                      new e()._createChildTween(e._TYPE_TWEEN, t, n, i, r)
                    );
                  }),
                  (e.tweenVelocity = function (t, n, i, r) {
                    return (
                      i === void 0 && (i = null),
                      r === void 0 && (r = null),
                      new e()._createChildTween(
                        e._TYPE_TWEEN_VELOCITY,
                        t,
                        n,
                        i,
                        r
                      )
                    );
                  }),
                  (e.prop = function (t, n) {
                    return (
                      n === void 0 && (n = null),
                      new e()._createChildTween(e._TYPE_PROP, t, 0, null, n)
                    );
                  }),
                  (e.propText = function (t) {
                    return e._tweenText(e._TYPE_PROP_TEXT, t, 0, null);
                  }),
                  (e.tweenText = function (t, n, i) {
                    return (
                      i === void 0 && (i = null),
                      e._tweenText(e._TYPE_TWEEN_TEXT, t, n, i)
                    );
                  }),
                  (e.resetText = function (t) {
                    return e.func(P.removeByTarget, t);
                  }),
                  (e.tweenTextVelocity = function (t, n, i) {
                    return (
                      i === void 0 && (i = null),
                      e._tweenText(e._TYPE_TWEEN_VELOCITY, t, n, i)
                    );
                  }),
                  (e._tweenText = function (t, n, i, r) {
                    var s;
                    r === void 0 && (r = null);
                    for (
                      var o = [], a = 0, _ = y.querySelectorAll(n);
                      a < _.length;
                      a++
                    ) {
                      var h = _[a],
                        u = P.getInstance(h);
                      if (u) o.push.apply(o, u.targets);
                      else {
                        var p = new P(
                          h,
                          ((s = h.textContent) === null || s === void 0
                            ? void 0
                            : s.trim()) || "",
                          !1,
                          !1
                        );
                        o.push.apply(o, p.targets);
                      }
                    }
                    var d = new e()._createChildTween(t, o, i, r, null);
                    return (d._targetQuery = n + " span"), d;
                  }),
                  (e.wait = function (t) {
                    return new e()._createChildTween(
                      e._TYPE_WAIT,
                      null,
                      t,
                      null,
                      null
                    );
                  }),
                  (e.func = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return new e()
                      ._createActionTween(e._TYPE_FUNC)
                      ._setFunctionExecute(e._TYPE_FUNC, t, t, n);
                  }),
                  (e.waitEvent = function (t, n) {
                    return new e()
                      ._createActionTween(e._TYPE_WAIT_EVENT)
                      ._setWaitEvent(t, n);
                  }),
                  (e.waitEventAndFunc = function (t, n, i) {
                    for (var r = [], s = 3; s < arguments.length; s++)
                      r[s - 3] = arguments[s];
                    return new e()
                      ._createActionTween(e._TYPE_WAIT_EVENT_AND_FUNC)
                      ._setWaitEvent(t, n)
                      ._setFunctionExecute(
                        e._TYPE_WAIT_EVENT_AND_FUNC,
                        i,
                        i,
                        r
                      );
                  }),
                  (e.prototype._setWaitEvent = function (t, n) {
                    return (
                      (this._dispatchEventTarget = t),
                      (this._dispatchEventType = n),
                      this
                    );
                  }),
                  (e.log = function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return new e()
                      ._createActionTween(e._TYPE_FUNC)
                      ._setFunctionExecute(
                        e._TYPE_FUNC,
                        window,
                        window.console.log,
                        t
                      );
                  }),
                  (e.serial = function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return new e()._createContainerTween(e._TYPE_SERIAL, t);
                  }),
                  (e.parallel = function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return new e()._createContainerTween(e._TYPE_PARALLEL, t);
                  }),
                  (e.lag = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return e.lagSort.apply(e, M([t, C._Normal], n));
                  }),
                  (e.lagSort = function (t, n) {
                    for (var i = [], r = 2; r < arguments.length; r++)
                      i[r - 2] = arguments[r];
                    for (var s = [], o = 0, a = i; o < a.length; o++) {
                      var _ = a[o];
                      if (_._multiTarget)
                        for (
                          var h =
                              n == C._Normal
                                ? _._multiTarget
                                : n(_._multiTarget),
                            u = 0;
                          u < h.length;
                          u++
                        ) {
                          var p = h[u];
                          s.push(_.__clone(p, _._targetQuery).delay(t * u));
                        }
                      else s.push(_);
                    }
                    var d = new e()._createContainerTween(e._TYPE_LAG, s);
                    return (
                      (d._lagTime = t),
                      (d._lagSort = n),
                      (d._originalChildTween = i),
                      d
                    );
                  }),
                  (e.lagTotal = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    return e.lagTotalSortEase.apply(
                      e,
                      M([t, C._Normal, v._Linear], n)
                    );
                  }),
                  (e.lagTotalEase = function (t, n) {
                    for (var i = [], r = 2; r < arguments.length; r++)
                      i[r - 2] = arguments[r];
                    return e.lagTotalSortEase.apply(e, M([t, C._Normal, n], i));
                  }),
                  (e.lagTotalSort = function (t, n) {
                    for (var i = [], r = 2; r < arguments.length; r++)
                      i[r - 2] = arguments[r];
                    return e.lagTotalSortEase.apply(e, M([t, n, v._Linear], i));
                  }),
                  (e.lagTotalSortEase = function (t, n, i) {
                    for (var r = [], s = 3; s < arguments.length; s++)
                      r[s - 3] = arguments[s];
                    for (var o = [], a = 0, _ = r; a < _.length; a++) {
                      var h = _[a];
                      if (h._multiTarget)
                        for (
                          var u =
                              n == C._Normal
                                ? h._multiTarget
                                : n(h._multiTarget),
                            p = u.length,
                            d = 0;
                          d < p;
                          d++
                        ) {
                          var f = i((d + 1) / p, 0, t, 1);
                          o.push(h.__clone(u[d], h._targetQuery).delay(f));
                        }
                      else o.push(h);
                    }
                    var c = new e()._createContainerTween(e._TYPE_LAG, o);
                    return (
                      (c._totalLagTime = t),
                      (c._lagSort = n),
                      (c._lagEasing = i),
                      (c._originalChildTween = r),
                      c
                    );
                  }),
                  (e.loop = function (t, n) {
                    var i = new e()._createContainerTween(e._TYPE_LOOP, [n]);
                    return (i._numLoops = t), (i._currentLoops = 0), i;
                  }),
                  (e.ifCase = function (t, n, i) {
                    var r;
                    return (
                      i === void 0 && (i = null),
                      typeof t == "function"
                        ? ((r = new e()._createContainerTween(
                            e._TYPE_IF_CASE_BY_FUNC,
                            i ? [n, i] : [n]
                          ))._ifFunc = t)
                        : (r = new e()._createContainerTween(
                            e._TYPE_IF_CASE,
                            t ? [n] : i ? [i] : []
                          )),
                      (r._trueTween = n),
                      (r._falseTween = i),
                      r
                    );
                  }),
                  (e.prototype._createChildTween = function (t, n, i, r, s) {
                    if (
                      ((this._type = t),
                      (this._easing = r || e._defaultEasing),
                      (this._delayTime = 0),
                      (this._startTime = 0),
                      (this._allUpdaters = []),
                      (this._isContainerTween = !1),
                      t == e._TYPE_TWEEN_VELOCITY ||
                      t == e._TYPE_TWEEN_TEXT_VELOCITY
                        ? ((this._time = 0), (this._velocity = i))
                        : (this._time = i),
                      this._commonProcess(),
                      Array.isArray(n))
                    )
                      I.isString(n[0])
                        ? ((this._targetString = "[" + n.toString() + "]"),
                          this._warningLog(
                            "Does not support array type queries."
                          ))
                        : n[0] instanceof HTMLElement
                        ? ((this._isDOM = !0),
                          (this._targetString = "[HTMLElements]"),
                          (this._multiTarget = n))
                        : (this._multiTarget = n);
                    else if (I.isString(n)) {
                      (this._isDOM = !0),
                        (this._targetString = "" + n),
                        (this._targetQuery = n);
                      var o = y.querySelectorAll(n);
                      o.length <= 1
                        ? (this._singleTarget = o[0])
                        : (this._multiTarget = o);
                    } else
                      n instanceof HTMLElement
                        ? ((this._isDOM = !0), (this._singleTarget = n))
                        : (this._singleTarget = n);
                    if (s) for (var a in s) this._setPropety(a, s[a]);
                    return this;
                  }),
                  (e.prototype._createContainerTween = function (t, n) {
                    (this._type = t),
                      (this._time = 0),
                      (this._delayTime = 0),
                      (this._childTween = n),
                      (this._firstTween = this._childTween[0]),
                      (this._playingChildTween = []),
                      (this._numChildren = n.length),
                      (this._numCompleteChildren = 0),
                      (this._isContainerTween = !0),
                      this._commonProcess();
                    var i,
                      r = this._firstTween;
                    if (t == e._TYPE_SERIAL)
                      for (var s = 0; s < this._numChildren; s++)
                        (i = this._childTween[s + 1]),
                          (r._next = i),
                          (r._parent = this),
                          (r = i);
                    else
                      for (var o = 0, a = this._childTween; o < a.length; o++)
                        a[o]._parent = this;
                    return this;
                  }),
                  (e.prototype._createActionTween = function (t) {
                    return (
                      (this._type = t),
                      (this._time = 0),
                      (this._delayTime = 0),
                      (this._startTime = 0),
                      (this._isContainerTween = !1),
                      this._commonProcess(),
                      this
                    );
                  }),
                  (e.prototype._commonProcess = function () {
                    this._serialNumber = ++e._numCreateTween;
                  }),
                  (e.prototype.id = function (t) {
                    return this._setTweenId(t);
                  }),
                  (e.prototype.groupId = function (t) {
                    return this._setTweenGroupId(t);
                  }),
                  (e.prototype._setTweenId = function (t) {
                    return (
                      (this._tweenId = t),
                      e._tweensById || (e._tweensById = new Map()),
                      e._tweensById.set(t, this),
                      this
                    );
                  }),
                  (e.prototype._setTweenGroupId = function (t) {
                    (this._tweenGroupId = t),
                      e._tweensByGroupId || (e._tweensByGroupId = new Map());
                    var n = e._tweensByGroupId.get(t) || [];
                    return n.push(this), e._tweensByGroupId.set(t, n), this;
                  }),
                  (e._getTweensById = function (t) {
                    var n,
                      i =
                        (n = e._tweensById) === null || n === void 0
                          ? void 0
                          : n.get(t);
                    return i ? [i] : void 0;
                  }),
                  (e._getTweensByGroupId = function (t) {
                    var n;
                    return (n = e._tweensByGroupId) === null || n === void 0
                      ? void 0
                      : n.get(t);
                  }),
                  (e._controlTweens = function (t, n) {
                    if (t)
                      switch (n) {
                        case g.PLAY:
                          t.forEach(function (i) {
                            i.play();
                          });
                          break;
                        case g.MANUAL_PLAY:
                          t.forEach(function (i) {
                            i.manualPlay();
                          });
                          break;
                        case g.PAUSE:
                          t.forEach(function (i) {
                            i.pause();
                          });
                          break;
                        case g.SKIP:
                          t.forEach(function (i) {
                            i.skip();
                          });
                          break;
                        case g.STOP:
                          t.forEach(function (i) {
                            i.stop();
                          });
                      }
                  }),
                  (e.prototype.__clone = function (t, n) {
                    var i,
                      r,
                      s,
                      o,
                      a = new e();
                    if (this._targetQuery && n)
                      for (
                        var _ = 0, h = this._targetQuery.split(",");
                        _ < h.length;
                        _++
                      )
                        if (h[_] == n) o = t;
                        else {
                          var u = new RegExp("^" + n + " ");
                          o = u.test(this._targetQuery)
                            ? y.querySelectorAllWithBase(
                                t,
                                this._targetQuery.replace(u, "")
                              )
                            : this._singleTarget || this._multiTarget;
                        }
                    else o = t;
                    switch (this._type) {
                      case e._TYPE_TWEEN:
                      case e._TYPE_TWEEN_VELOCITY:
                      case e._TYPE_TWEEN_TEXT:
                      case e._TYPE_TWEEN_TEXT_VELOCITY:
                      case e._TYPE_PROP:
                      case e._TYPE_PROP_TEXT:
                        if (
                          (a._createChildTween(
                            this._type,
                            o,
                            this._velocity || this._time,
                            this._easing,
                            null
                          ),
                          (a._targetQuery = this._targetQuery),
                          (i = this._allUpdaters) === null || i === void 0
                            ? void 0
                            : i.length)
                        )
                          if (this._singleTarget && a._multiTarget)
                            for (
                              var p = 0, d = this._allUpdaters;
                              p < d.length;
                              p++
                            ) {
                              var f = d[p];
                              (r = a._allUpdaters) === null ||
                                r === void 0 ||
                                r.push(
                                  new F(
                                    a._multiTarget,
                                    this._targetQuery
                                  ).setupByUpdater(f)
                                );
                            }
                          else
                            for (
                              var c = 0, N = this._allUpdaters;
                              c < N.length;
                              c++
                            )
                              (f = N[c]),
                                (s = a._allUpdaters) === null ||
                                  s === void 0 ||
                                  s.push(
                                    f.clone(
                                      a._singleTarget || a._multiTarget,
                                      this._targetQuery
                                    )
                                  );
                        break;
                      case e._TYPE_WAIT:
                        a._createChildTween(
                          this._type,
                          o,
                          this._time,
                          this._easing,
                          null
                        );
                        break;
                      case e._TYPE_SERIAL:
                      case e._TYPE_PARALLEL:
                      case e._TYPE_LOOP:
                        var U = [];
                        if (this._childTween)
                          for (
                            var Y = 0, z = this._childTween;
                            Y < z.length;
                            Y++
                          ) {
                            var j = z[Y];
                            U.push(j.__clone(t, n));
                          }
                        a._createContainerTween(this._type, U),
                          (a._numLoops = this._numLoops);
                        break;
                      case e._TYPE_LAG:
                        var Q = [];
                        if (this._originalChildTween)
                          for (
                            var V = 0, K = this._originalChildTween;
                            V < K.length;
                            V++
                          )
                            (j = K[V]), Q.push(j.__clone(t, n));
                        a = isNaN(this._lagTime)
                          ? e.lagTotalSortEase.apply(
                              e,
                              M(
                                [
                                  this._totalLagTime,
                                  this._lagSort || C._Normal,
                                  this._lagEasing || v._Linear,
                                ],
                                Q
                              )
                            )
                          : e.lagSort.apply(
                              e,
                              M([this._lagTime, this._lagSort || C._Normal], Q)
                            );
                        break;
                      case e._TYPE_FUNC:
                        (a._type = this._type),
                          (a._time = a._delayTime = a._startTime = 0),
                          (a._isContainerTween = !1);
                    }
                    if (this._functionExecuters)
                      for (var Z in ((a._functionExecuters = {}),
                      this._functionExecuters))
                        a._functionExecuters[Z] =
                          this._functionExecuters[Z].clone();
                    return (
                      a.willChange(this._useWillChange),
                      a
                        .delay(this._delayTime)
                        .fps(this.__fps)
                        .debug(this._debugMode),
                      a
                    );
                  }),
                  (e.prototype.toString = function () {
                    return (
                      "Tween24 " +
                      this.getTweenTypeString() +
                      " " +
                      this.getTweenParamString()
                    );
                  }),
                  (e.prototype._debugLog = function (t) {
                    var n, i;
                    if (
                      e._debugMode ||
                      this._debugMode ||
                      ((n = this._root) === null || n === void 0
                        ? void 0
                        : n._debugMode) ||
                      ((i = this._parent) === null || i === void 0
                        ? void 0
                        : i._debugMode)
                    ) {
                      var r = "  ".repeat(this._numLayers);
                      console.log(
                        "" +
                          r +
                          this.getTweenTypeString() +
                          " " +
                          t +
                          " " +
                          this.getTweenParamString()
                      );
                    }
                  }),
                  (e.prototype._warningLog = function (t) {
                    console.log(
                      "Tween24 Warning: " +
                        t +
                        `
 - ` +
                        this.toString()
                    );
                  }),
                  (e.prototype.getTweenTypeString = function () {
                    var t = "";
                    return (
                      (t += this._parent ? this._parent._type + "/" : ""),
                      "[" + (t += this._type) + "]"
                    );
                  }),
                  (e.prototype.getTweenParamString = function () {
                    var t = "";
                    switch (
                      ((t += this._targetString
                        ? "target:" + this._targetString
                        : "id:" + (this._tweenId || this._serialNumber)),
                      this._type)
                    ) {
                      case e._TYPE_TWEEN:
                      case e._TYPE_WAIT:
                      case e._TYPE_TWEEN_TEXT:
                        t += " time:" + this._time + " ";
                        break;
                      case e._TYPE_TWEEN_VELOCITY:
                      case e._TYPE_TWEEN_TEXT_VELOCITY:
                        t += " velocity:" + this._velocity + " ";
                    }
                    if (
                      (this._delayTime &&
                        (t += " delay:" + this._delayTime + " "),
                      this._allUpdaters)
                    )
                      for (var n = 0, i = this._allUpdaters; n < i.length; n++)
                        t += i[n].toString() + " ";
                    return "{" + t.replace(/\s+/g, " ").trim() + "}";
                  }),
                  (e.VERSION = "0.9.11"),
                  (e._TYPE_TWEEN = "tween"),
                  (e._TYPE_TWEEN_VELOCITY = "tween_velocity"),
                  (e._TYPE_TWEEN_TEXT = "tween_text"),
                  (e._TYPE_TWEEN_TEXT_VELOCITY = "tween_text_velocity"),
                  (e._TYPE_PROP = "prop"),
                  (e._TYPE_PROP_TEXT = "prop_text"),
                  (e._TYPE_WAIT = "wait"),
                  (e._TYPE_WAIT_EVENT = "wait_event"),
                  (e._TYPE_WAIT_EVENT_AND_FUNC = "wait_event_and_func"),
                  (e._TYPE_SERIAL = "serial"),
                  (e._TYPE_PARALLEL = "parallel"),
                  (e._TYPE_LAG = "lag"),
                  (e._TYPE_LOOP = "loop"),
                  (e._TYPE_FUNC = "func"),
                  (e._TYPE_IF_CASE = "if_case"),
                  (e._TYPE_IF_CASE_BY_FUNC = "if_case_by_func"),
                  (e._defaultEasing = v._Linear),
                  (e._debugMode = !1),
                  (e._numCreateTween = 0),
                  (e.playById = function (t) {
                    e._controlTweens(e._getTweensById(t), g.PLAY);
                  }),
                  (e.manualPlayById = function (t) {
                    e._controlTweens(e._getTweensById(t), g.MANUAL_PLAY);
                  }),
                  (e.pauseById = function (t) {
                    e._controlTweens(e._getTweensById(t), g.PAUSE);
                  }),
                  (e.skipById = function (t) {
                    e._controlTweens(e._getTweensById(t), g.SKIP);
                  }),
                  (e.stopById = function (t) {
                    e._controlTweens(e._getTweensById(t), g.STOP);
                  }),
                  (e.playByGroupId = function (t) {
                    e._controlTweens(e._getTweensByGroupId(t), g.PLAY);
                  }),
                  (e.manualPlayByGroupId = function (t) {
                    e._controlTweens(e._getTweensByGroupId(t), g.MANUAL_PLAY);
                  }),
                  (e.pauseByGroupId = function (t) {
                    e._controlTweens(e._getTweensByGroupId(t), g.PAUSE);
                  }),
                  (e.skipByGroupId = function (t) {
                    e._controlTweens(e._getTweensByGroupId(t), g.SKIP);
                  }),
                  (e.stopByGroupId = function (t) {
                    e._controlTweens(e._getTweensByGroupId(t), g.STOP);
                  }),
                  (e.setFPS = function (t) {
                    t === void 0 && (t = 0), (e.ticker.fps = t);
                  }),
                  (e.setDefaultEasing = function (t) {
                    t === void 0 && (t = v._Linear), (e._defaultEasing = t);
                  }),
                  (e.debugMode = function (t) {
                    e._debugMode = t;
                  }),
                  (e.manualAllUpdate = function () {
                    for (
                      var t = R.getTime(), n = 0, i = e._manualPlayingTweens;
                      n < i.length;
                      n++
                    )
                      i[n].__update(t);
                  }),
                  e
                );
              })(),
              C = (function () {
                function e() {}
                return (
                  (e._Normal = function (t) {
                    return t.concat();
                  }),
                  (e._Reverse = function (t) {
                    return t.concat().reverse();
                  }),
                  (e._Valley = function (t) {
                    for (var n = [], i = t.concat(); i.length; )
                      i.length >= 2
                        ? n.push([i.shift(), i.pop()])
                        : n.push([i.shift()]);
                    return n;
                  }),
                  (e._Mountain = function (t) {
                    var n = [],
                      i = Math.round(t.length / 2),
                      r = t.slice(0, i),
                      s = t.slice(i);
                    for (r.length != s.length && n.push(r.pop()); r.length; )
                      n.push([r.pop(), s.shift()]);
                    return n;
                  }),
                  (e._Shuffle = function (t) {
                    for (var n, i = t.concat(), r = i.length - 1; r >= 0; r--) {
                      var s = Math.floor(Math.random() * (r + 1));
                      (n = [i[s], i[r]]), (i[r] = n[0]), (i[s] = n[1]);
                    }
                    return i;
                  }),
                  (e._EvenAndOdd = function (t) {
                    for (var n = [], i = [], r = 0; r < t.length; r++)
                      r % 2 ? i.push(t[r]) : n.push(t[r]);
                    return [n, i];
                  }),
                  e
                );
              })(),
              L = (function () {
                function e() {
                  (this._inTween = null),
                    (this._stopInTween = null),
                    (this._outTween = null),
                    (this._stopOutTween = null),
                    (this._resizeFunc = null),
                    (this._resizeArgs = null),
                    (this._needResize = !1);
                }
                return (
                  (e.prototype.setInTween = function (t) {
                    this._inTween = t;
                  }),
                  (e.prototype.setStopInTween = function (t) {
                    this._stopInTween = t;
                  }),
                  (e.prototype.setOutTween = function (t) {
                    this._outTween = t;
                  }),
                  (e.prototype.setStopOutTween = function (t) {
                    this._stopOutTween = t;
                  }),
                  (e.prototype.setResizeFunc = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    (this._resizeFunc = t), (this._resizeArgs = n);
                  }),
                  (e.prototype.onResize = function () {
                    var t;
                    (t = this._resizeFunc) === null ||
                      t === void 0 ||
                      t.apply(this._resizeFunc, this._resizeArgs);
                  }),
                  (e.prototype.delay = function (t, n) {
                    var i, r, s, o;
                    return (
                      n === void 0 && (n = 0),
                      (i = this._inTween) === null ||
                        i === void 0 ||
                        i.delay(t),
                      (r = this._stopInTween) === null ||
                        r === void 0 ||
                        r.delay(t),
                      (s = this._outTween) === null ||
                        s === void 0 ||
                        s.delay(n),
                      (o = this._stopOutTween) === null ||
                        o === void 0 ||
                        o.delay(n),
                      this
                    );
                  }),
                  Object.defineProperty(e.prototype, "inTween", {
                    get: function () {
                      return this._inTween;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "outTween", {
                    get: function () {
                      return this._outTween;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "stopInTween", {
                    get: function () {
                      return this._stopInTween;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "stopOutTween", {
                    get: function () {
                      return this._stopOutTween;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "needResize", {
                    get: function () {
                      return this._needResize;
                    },
                    set: function (t) {
                      this._needResize = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  e
                );
              })(),
              nt = (function () {
                function e(t, n, i, r) {
                  (this._targetQuery = t),
                    (this._templates = r),
                    (this._inEventType = n),
                    (this._outEventType = i),
                    (this._inTweens = []),
                    (this._outTweens = []),
                    (this._stopInTweens = []),
                    (this._stopOutTweens = []),
                    (this._inEvent = null),
                    (this._outEvent = null),
                    (this._stopInEvent = null),
                    (this._stopOutEvent = null),
                    (this._onResizeBinded = this._onResize.bind(this));
                  for (var s = !1, o = 0, a = r; o < a.length; o++) {
                    var _ = a[o];
                    _.inTween && this._inTweens.push(_.inTween),
                      _.outTween && this._outTweens.push(_.outTween),
                      _.stopInTween && this._stopInTweens.push(_.stopInTween),
                      _.stopOutTween &&
                        this._stopOutTweens.push(_.stopOutTween),
                      s || (s = _.needResize);
                  }
                  s && this.resizeAndReset(), this._addEvent();
                }
                return (
                  (e.prototype._addEvent = function () {
                    this._inTweens.length &&
                      (this._inEvent = T.add(
                        this._targetQuery,
                        this._inEventType,
                        l.parallel.apply(l, this._inTweens)
                      )),
                      this._outTweens.length &&
                        (this._outEvent = T.add(
                          this._targetQuery,
                          this._outEventType,
                          l.parallel.apply(l, this._outTweens)
                        )),
                      this._stopInTweens.length &&
                        (this._stopInEvent = T.add(
                          this._targetQuery,
                          this._inEventType,
                          l.parallel.apply(l, this._stopInTweens)
                        ).addStopEvent(this._outEventType)),
                      this._stopOutTweens.length &&
                        (this._stopOutEvent = T.add(
                          this._targetQuery,
                          this._outEventType,
                          l.parallel.apply(l, this._stopOutTweens)
                        ).addStopEvent(this._inEventType));
                  }),
                  (e.prototype._onResize = function (t) {
                    this.reset();
                  }),
                  (e.prototype._onResizeTemplate = function () {
                    for (var t = 0, n = this._templates; t < n.length; t++)
                      n[t].onResize();
                  }),
                  (e.prototype.reset = function () {
                    l.serial(
                      l.func(T.removeAllByTarget, this._targetQuery),
                      l.func(this._onResizeTemplate.bind(this)),
                      l.wait(0.01),
                      l.func(this._addEvent.bind(this))
                    ).play();
                  }),
                  (e.prototype.resizeAndReset = function () {
                    return (
                      window.addEventListener(
                        "resize",
                        this._onResizeBinded,
                        !1
                      ),
                      this
                    );
                  }),
                  (e.prototype.removeResize = function () {
                    return (
                      window.removeEventListener(
                        "resize",
                        this._onResizeBinded,
                        !1
                      ),
                      this
                    );
                  }),
                  (e.prototype.willChange = function (t) {
                    var n, i, r, s;
                    return (
                      t === void 0 && (t = !0),
                      (n = this._inEvent) === null ||
                        n === void 0 ||
                        n.willChange(t),
                      (i = this._outEvent) === null ||
                        i === void 0 ||
                        i.willChange(t),
                      (r = this._stopInEvent) === null ||
                        r === void 0 ||
                        r.willChange(t),
                      (s = this._stopOutEvent) === null ||
                        s === void 0 ||
                        s.willChange(t),
                      this
                    );
                  }),
                  (e.set = function (t) {
                    for (var n = [], i = 1; i < arguments.length; i++)
                      n[i - 1] = arguments[i];
                    var r = new e(
                      t,
                      e._DEFAULT_IN_EVENT,
                      e._DEFAULT_OUT_EVENT,
                      n
                    );
                    return r;
                  }),
                  (e._ColorChange = function (t, n) {
                    var i = new L(),
                      r = y.querySelectorAll(t);
                    return (
                      i.setStopInTween(l.tween(t, 0.3, v._4_QuartOut).color(n)),
                      i.setStopOutTween(
                        l.serial(
                          l.prop(t).color(n),
                          l
                            .tween(t, 0.6, v._4_QuartOut)
                            .color(window.getComputedStyle(r[0]).color)
                        )
                      ),
                      i
                    );
                  }),
                  (e._TextRollUp = function (t, n, i, r) {
                    n === void 0 && (n = 40),
                      i === void 0 && (i = C._Normal),
                      r === void 0 && (r = 0);
                    var s = new L(),
                      o = y.querySelectorAll(t),
                      a = function () {
                        for (var _, h = 0, u = o; h < u.length; h++) {
                          var p = u[h];
                          (
                            P.getInstance(p) ||
                            new P(
                              p,
                              ((_ = p.textContent) === null || _ === void 0
                                ? void 0
                                : _.trim()) || "",
                              !0,
                              !0
                            )
                          ).spacing = r;
                        }
                      };
                    return (
                      a(),
                      s.setInTween(
                        l.serial(
                          l.propText(t).y("100%"),
                          l.lagTotalSort(
                            0.2,
                            i,
                            l.tweenTextVelocity(t, n, v._6_ExpoOut).y(0)
                          )
                        )
                      ),
                      s.setResizeFunc(function () {
                        P.removeByTarget(t), a();
                      }),
                      (s.needResize = !0),
                      s
                    );
                  }),
                  (e._TextRollUpDown = function (t, n, i) {
                    n === void 0 && (n = C._Normal), i === void 0 && (i = 0);
                    var r = new L(),
                      s = y.querySelectorAll(t),
                      o = function () {
                        for (var a, _ = 0, h = s; _ < h.length; _++) {
                          var u = h[_];
                          (
                            P.getInstance(u) ||
                            new P(
                              u,
                              ((a = u.textContent) === null || a === void 0
                                ? void 0
                                : a.trim()) || "",
                              !0,
                              !0
                            )
                          ).spacing = i;
                        }
                      };
                    return (
                      o(),
                      r.setStopInTween(
                        l.serial(
                          l.propText(t).y("100%"),
                          l.lagTotalSort(
                            0.2,
                            n,
                            l.tweenTextVelocity(t, 40, v._6_ExpoOut).y(0)
                          )
                        )
                      ),
                      r.setStopOutTween(
                        l.serial(
                          l.propText(t).y(0),
                          l.lagTotalSort(
                            0.2,
                            n,
                            l.tweenTextVelocity(t, 40, v._6_ExpoOut).y("100%")
                          ),
                          l.propText(t).y(0)
                        )
                      ),
                      r.setResizeFunc(function () {
                        P.removeByTarget(t), o();
                      }),
                      (r.needResize = !0),
                      r
                    );
                  }),
                  (e._FadeInOutArrow = function (t, n) {
                    n === void 0 && (n = "-80%");
                    var i = new L();
                    return (
                      i.setStopInTween(
                        l.serial(
                          l.prop(t).x(n).opacity(0),
                          l.tween(t, 0.4, v._4_QuartOut).x(0).opacity(1)
                        )
                      ),
                      i.setStopOutTween(
                        l.parallel(
                          l.tween(t, 0.12, v._Linear).opacity(0),
                          l.tween(t, 0.6, v._4_QuartOut).x(n)
                        )
                      ),
                      l.prop(t).x(n).opacity(0).play(),
                      (i.needResize = !0),
                      i
                    );
                  }),
                  (e.setRollUpTextCharacterAnimation = function (
                    t,
                    n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    _,
                    h
                  ) {
                    h === void 0 && (h = !1);
                    var u = function () {
                      for (
                        var p, d = 0, f = y.querySelectorAll(n);
                        d < f.length;
                        d++
                      ) {
                        var c = f[d];
                        new P(
                          c,
                          ((p = c.textContent) === null || p === void 0
                            ? void 0
                            : p.trim()) || "",
                          !0,
                          !0
                        ).spacing = _;
                      }
                      T.add(
                        t,
                        T.MOUSE_ENTER,
                        l.lagTotalSort(
                          r,
                          a,
                          l.tweenTextVelocity(n, i, o).y("-100%")
                        )
                      ).addStopEvent(T.MOUSE_LEAVE),
                        T.add(
                          t,
                          T.MOUSE_LEAVE,
                          l.lagTotalSort(
                            s,
                            a,
                            l.tweenTextVelocity(n, i, o).y(0)
                          )
                        ).addStopEvent(T.MOUSE_ENTER);
                    };
                    h &&
                      T.add(
                        window,
                        "resize",
                        l.serial(
                          l.func(T.removeAllByTarget, t),
                          l.func(P.removeByTarget, n),
                          l.wait(0.01),
                          l.func(u)
                        )
                      ),
                      u();
                  }),
                  (e._DEFAULT_IN_EVENT = T.MOUSE_ENTER),
                  (e._DEFAULT_OUT_EVENT = T.MOUSE_LEAVE),
                  e
                );
              })();
          },
        },
        x = {};
      function O(E) {
        if (x[E]) return x[E].exports;
        var m = (x[E] = { exports: {} });
        return q[E](m, m.exports, O), m.exports;
      }
      return (
        (O.d = (E, m) => {
          for (var b in m)
            O.o(m, b) &&
              !O.o(E, b) &&
              Object.defineProperty(E, b, { enumerable: !0, get: m[b] });
        }),
        (O.o = (E, m) => Object.prototype.hasOwnProperty.call(E, m)),
        (O.r = (E) => {
          typeof Symbol != "undefined" &&
            Symbol.toStringTag &&
            Object.defineProperty(E, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(E, "__esModule", { value: !0 });
        }),
        O(286)
      );
    })();
  });
})(it);
export { it as t };
