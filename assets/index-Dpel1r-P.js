(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);

    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function o(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = n(r);
        fetch(r.href, i)
    }
})();
var zt = {};

(function e(t, n, o, r) {
        var i = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL),
            s = typeof Path2D == "function" && typeof DOMMatrix == "function",
            l = function() {
                if (!t.OffscreenCanvas) return !1;
                try {
                    var u = new OffscreenCanvas(1, 1),
                        a = u.getContext("2d");
                    a.fillRect(0, 0, 1, 1);
                    var g = u.transferToImageBitmap();
                    a.createPattern(g, "no-repeat")
                } catch {
                    return !1
                }
                return !0
            }();

        function c() {}

        function f(u) {
            var a = n.exports.Promise,
                g = a !== void 0 ? a : t.Promise;
            return typeof g == "function" ? new g(u) : (u(c, c), null)
        }
        var w = function(u, a) {
                return {
                    transform: function(g) {
                        if (u) return g;
                        if (a.has(g)) return a.get(g);
                        var C = new OffscreenCanvas(g.width, g.height),
                            B = C.getContext("2d");
                        return B.drawImage(g, 0, 0), a.set(g, C), C
                    },
                    clear: function() {
                        a.clear()
                    }
                }
            }(l, new Map),
            L = function() {
                var u = Math.floor(16.666666666666668),
                    a, g, C = {},
                    B = 0;
                return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (a = function(A) {
                    var M = Math.random();
                    return C[M] = requestAnimationFrame(function v(I) {
                        B === I || B + u - 1 < I ? (B = I, delete C[M], A()) : C[M] = requestAnimationFrame(v)
                    }), M
                }, g = function(A) {
                    C[A] && cancelAnimationFrame(C[A])
                }) : (a = function(A) {
                    return setTimeout(A, u)
                }, g = function(A) {
                    return clearTimeout(A)
                }), {
                    frame: a,
                    cancel: g
                }
            }(),
            m = function() {
                var u, a, g = {};

                function C(B) {
                    function A(M, v) {
                        B.postMessage({
                            options: M || {},
                            callback: v
                        })
                    }
                    B.init = function(v) {
                        var I = v.transferControlToOffscreen();
                        B.postMessage({
                            canvas: I
                        }, [I])
                    }, B.fire = function(v, I, _) {
                        if (a) return A(v, null), a;
                        var j = Math.random().toString(36).slice(2);
                        return a = f(function(H) {
                            function $(K) {
                                K.data.callback === j && (delete g[j], B.removeEventListener("message", $), a = null, w.clear(), _(), H())
                            }
                            B.addEventListener("message", $), A(v, j), g[j] = $.bind(null, {
                                data: {
                                    callback: j
                                }
                            })
                        }), a
                    }, B.reset = function() {
                        B.postMessage({
                            reset: !0
                        });
                        for (var v in g) g[v](), delete g[v]
                    }
                }
                return function() {
                    if (u) return u;
                    if (!o && i) {
                        var B = ["var CONFETTI, SIZE = {}, module = {};", "(" + e.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
                        try {
                            u = new Worker(URL.createObjectURL(new Blob([B])))
                        } catch (A) {
                            return typeof console < "u" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", A), null
                        }
                        C(u)
                    }
                    return u
                }
            }(),
            p = {
                particleCount: 50,
                angle: 90,
                spread: 45,
                startVelocity: 45,
                decay: .9,
                gravity: 1,
                drift: 0,
                ticks: 200,
                x: .5,
                y: .5,
                shapes: ["square", "circle"],
                zIndex: 100,
                colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
                disableForReducedMotion: !1,
                scalar: 1
            };

        function k(u, a) {
            return a ? a(u) : u
        }

        function P(u) {
            return u != null
        }

        function x(u, a, g) {
            return k(u && P(u[a]) ? u[a] : p[a], g)
        }

        function E(u) {
            return u < 0 ? 0 : Math.floor(u)
        }

        function T(u, a) {
            return Math.floor(Math.random() * (a - u)) + u
        }

        function b(u) {
            return parseInt(u, 16)
        }

        function y(u) {
            return u.map(F)
        }

        function F(u) {
            var a = String(u).replace(/[^0-9a-f]/gi, "");
            return a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), {
                r: b(a.substring(0, 2)),
                g: b(a.substring(2, 4)),
                b: b(a.substring(4, 6))
            }
        }

        function z(u) {
            var a = x(u, "origin", Object);
            return a.x = x(a, "x", Number), a.y = x(a, "y", Number), a
        }

        function q(u) {
            u.width = document.documentElement.clientWidth, u.height = document.documentElement.clientHeight
        }

        function Q(u) {
            var a = u.getBoundingClientRect();
            u.width = a.width, u.height = a.height
        }

        function ce(u) {
            var a = document.createElement("canvas");
            return a.style.position = "fixed", a.style.top = "0px", a.style.left = "0px", a.style.pointerEvents = "none", a.style.zIndex = u, a
        }

        function re(u, a, g, C, B, A, M, v, I) {
            u.save(), u.translate(a, g), u.rotate(A), u.scale(C, B), u.arc(0, 0, 1, M, v, I), u.restore()
        }

        function Ce(u) {
            var a = u.angle * (Math.PI / 180),
                g = u.spread * (Math.PI / 180);
            return {
                x: u.x,
                y: u.y,
                wobble: Math.random() * 10,
                wobbleSpeed: Math.min(.11, Math.random() * .1 + .05),
                velocity: u.startVelocity * .5 + Math.random() * u.startVelocity,
                angle2D: -a + (.5 * g - Math.random() * g),
                tiltAngle: (Math.random() * (.75 - .25) + .25) * Math.PI,
                color: u.color,
                shape: u.shape,
                tick: 0,
                totalTicks: u.ticks,
                decay: u.decay,
                drift: u.drift,
                random: Math.random() + 2,
                tiltSin: 0,
                tiltCos: 0,
                wobbleX: 0,
                wobbleY: 0,
                gravity: u.gravity * 3,
                ovalScalar: .6,
                scalar: u.scalar,
                flat: u.flat
            }
        }

        function je(u, a) {
            a.x += Math.cos(a.angle2D) * a.velocity + a.drift, a.y += Math.sin(a.angle2D) * a.velocity + a.gravity, a.velocity *= a.decay, a.flat ? (a.wobble = 0, a.wobbleX = a.x + 10 * a.scalar, a.wobbleY = a.y + 10 * a.scalar, a.tiltSin = 0, a.tiltCos = 0, a.random = 1) : (a.wobble += a.wobbleSpeed, a.wobbleX = a.x + 10 * a.scalar * Math.cos(a.wobble), a.wobbleY = a.y + 10 * a.scalar * Math.sin(a.wobble), a.tiltAngle += .1, a.tiltSin = Math.sin(a.tiltAngle), a.tiltCos = Math.cos(a.tiltAngle), a.random = Math.random() + 2);
            var g = a.tick++/a.totalTicks,C=a.x+a.random*a.tiltCos,B=a.y+a.random*a.tiltSin,A=a.wobbleX+a.random*a.tiltCos,M=a.wobbleY+a.random*a.tiltSin;if(u.fillStyle="rgba("+a.color.r+", "+a.color.g+", "+a.color.b+", "+(1-g)+")",u.beginPath(),s&&a.shape.type==="path"&&typeof a.shape.path=="string"&&Array.isArray(a.shape.matrix))u.fill(Uo(a.shape.path,a.shape.matrix,a.x,a.y,Math.abs(A-C)*.1,Math.abs(M-B)*.1,Math.PI/
            10 * a.wobble));
    else if (a.shape.type === "bitmap") {
        var v = Math.PI / 10 * a.wobble,
            I = Math.abs(A - C) * .1,
            _ = Math.abs(M - B) * .1,
            j = a.shape.bitmap.width * a.scalar,
            H = a.shape.bitmap.height * a.scalar,
            $ = new DOMMatrix([Math.cos(v) * I, Math.sin(v) * I, -Math.sin(v) * _, Math.cos(v) * _, a.x, a.y]);
        $.multiplySelf(new DOMMatrix(a.shape.matrix));
        var K = u.createPattern(w.transform(a.shape.bitmap), "no-repeat");
        K.setTransform($), u.globalAlpha = 1 - g, u.fillStyle = K, u.fillRect(a.x - j / 2, a.y - H / 2, j, H), u.globalAlpha = 1
    } else if (a.shape === "circle") u.ellipse ? u.ellipse(a.x, a.y, Math.abs(A - C) * a.ovalScalar, Math.abs(M - B) * a.ovalScalar, Math.PI / 10 * a.wobble, 0, 2 * Math.PI) : re(u, a.x, a.y, Math.abs(A - C) * a.ovalScalar, Math.abs(M - B) * a.ovalScalar, Math.PI / 10 * a.wobble, 0, 2 * Math.PI);
    else if (a.shape === "star")
        for (var S = Math.PI / 2 * 3, G = 4 * a.scalar, ae = 8 * a.scalar, le = a.x, he = a.y, Ee = 5, ue = Math.PI / Ee; Ee--;) le = a.x + Math.cos(S) * ae, he = a.y + Math.sin(S) * ae, u.lineTo(le, he), S += ue, le = a.x + Math.cos(S) * G, he = a.y + Math.sin(S) * G, u.lineTo(le, he), S += ue;
    else u.moveTo(Math.floor(a.x), Math.floor(a.y)), u.lineTo(Math.floor(a.wobbleX), Math.floor(B)), u.lineTo(Math.floor(A), Math.floor(M)), u.lineTo(Math.floor(C), Math.floor(a.wobbleY));
    return u.closePath(), u.fill(), a.tick < a.totalTicks
}

function se(u, a, g, C, B) {
    var A = a.slice(),
        M = u.getContext("2d"),
        v, I, _ = f(function(j) {
            function H() {
                v = I = null, M.clearRect(0, 0, C.width, C.height), w.clear(), B(), j()
            }

            function $() {
                o && !(C.width === r.width && C.height === r.height) && (C.width = u.width = r.width, C.height = u.height = r.height), !C.width && !C.height && (g(u), C.width = u.width, C.height = u.height), M.clearRect(0, 0, C.width, C.height), A = A.filter(function(K) {
                    return je(M, K)
                }), A.length ? v = L.frame($) : H()
            }
            v = L.frame($), I = H
        });
    return {
        addFettis: function(j) {
            return A = A.concat(j), _
        },
        canvas: u,
        promise: _,
        reset: function() {
            v && L.cancel(v), I && I()
        }
    }
}

function cn(u, a) {
    var g = !u,
        C = !!x(a || {}, "resize"),
        B = !1,
        A = x(a, "disableForReducedMotion", Boolean),
        M = i && !!x(a || {}, "useWorker"),
        v = M ? m() : null,
        I = g ? q : Q,
        _ = u && v ? !!u.__confetti_initialized : !1,
        j = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches,
        H;

    function $(S, G, ae) {
        for (var le = x(S, "particleCount", E), he = x(S, "angle", Number), Ee = x(S, "spread", Number), ue = x(S, "startVelocity", Number), Ko = x(S, "decay", Number), Yo = x(S, "gravity", Number), Jo = x(S, "drift", Number), dn = x(S, "colors", y), Zo = x(S, "ticks", Number), fn = x(S, "shapes"), Go = x(S, "scalar"), Xo = !!x(S, "flat"), wn = z(S), hn = le, kt = [], Qo = u.width * wn.x, er = u.height * wn.y; hn--;) kt.push(Ce({
            x: Qo,
            y: er,
            angle: he,
            spread: Ee,
            startVelocity: ue,
            color: dn[hn % dn.length],
            shape: fn[T(0, fn.length)],
            ticks: Zo,
            decay: Ko,
            gravity: Yo,
            drift: Jo,
            scalar: Go,
            flat: Xo
        }));
        return H ? H.addFettis(kt) : (H = se(u, kt, I, G, ae), H.promise)
    }

    function K(S) {
        var G = A || x(S, "disableForReducedMotion", Boolean),
            ae = x(S, "zIndex", Number);
        if (G && j) return f(function(ue) {
            ue()
        });
        g && H ? u = H.canvas : g && !u && (u = ce(ae), document.body.appendChild(u)), C && !_ && I(u);
        var le = {
            width: u.width,
            height: u.height
        };
        v && !_ && v.init(u), _ = !0, v && (u.__confetti_initialized = !0);

        function he() {
            if (v) {
                var ue = {
                    getBoundingClientRect: function() {
                        if (!g) return u.getBoundingClientRect()
                    }
                };
                I(ue), v.postMessage({
                    resize: {
                        width: ue.width,
                        height: ue.height
                    }
                });
                return
            }
            le.width = le.height = null
        }

        function Ee() {
            H = null, C && (B = !1, t.removeEventListener("resize", he)), g && u && (document.body.contains(u) && document.body.removeChild(u), u = null, _ = !1)
        }
        return C && !B && (B = !0, t.addEventListener("resize", he, !1)), v ? v.fire(S, le, Ee) : $(S, le, Ee)
    }
    return K.reset = function() {
        v && v.reset(), H && H.reset()
    }, K
}
var Et;

function un() {
    return Et || (Et = cn(null, {
        useWorker: !0,
        resize: !0
    })), Et
}

function Uo(u, a, g, C, B, A, M) {
    var v = new Path2D(u),
        I = new Path2D;
    I.addPath(v, new DOMMatrix(a));
    var _ = new Path2D;
    return _.addPath(I, new DOMMatrix([Math.cos(M) * B, Math.sin(M) * B, -Math.sin(M) * A, Math.cos(M) * A, g, C])), _
}

function qo(u) {
    if (!s) throw new Error("path confetti are not supported in this browser");
    var a, g;
    typeof u == "string" ? a = u : (a = u.path, g = u.matrix);
    var C = new Path2D(a),
        B = document.createElement("canvas"),
        A = B.getContext("2d");
    if (!g) {
        for (var M = 1e3, v = M, I = M, _ = 0, j = 0, H, $, K = 0; K < M; K += 2)
            for (var S = 0; S < M; S += 2) A.isPointInPath(C, K, S, "nonzero") && (v = Math.min(v, K), I = Math.min(I, S), _ = Math.max(_, K), j = Math.max(j, S));
        H = _ - v, $ = j - I;
        var G = 10,
            ae = Math.min(G / H, G / $);
        g = [ae, 0, 0, ae, -Math.round(H / 2 + v) * ae, -Math.round($ / 2 + I) * ae]
    }
    return {
        type: "path",
        path: a,
        matrix: g
    }
}

function Wo(u) {
    var a, g = 1,
        C = "#000000",
        B = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof u == "string" ? a = u : (a = u.text, g = "scalar" in u ? u.scalar : g, B = "fontFamily" in u ? u.fontFamily : B, C = "color" in u ? u.color : C);
    var A = 10 * g,
        M = "" + A + "px " + B,
        v = new OffscreenCanvas(A, A),
        I = v.getContext("2d");
    I.font = M;
    var _ = I.measureText(a),
        j = Math.ceil(_.actualBoundingBoxRight + _.actualBoundingBoxLeft),
        H = Math.ceil(_.actualBoundingBoxAscent + _.actualBoundingBoxDescent),
        $ = 2,
        K = _.actualBoundingBoxLeft + $,
        S = _.actualBoundingBoxAscent + $;
    j += $ + $, H += $ + $, v = new OffscreenCanvas(j, H), I = v.getContext("2d"), I.font = M, I.fillStyle = C, I.fillText(a, K, S);
    var G = 1 / g;
    return {
        type: "bitmap",
        bitmap: v.transferToImageBitmap(),
        matrix: [G, 0, 0, G, -j * G / 2, -H * G / 2]
    }
}
n.exports = function() {
return un().apply(this, arguments)
}, n.exports.reset = function() {
un().reset()
}, n.exports.create = cn, n.exports.shapeFromPath = qo, n.exports.shapeFromText = Wo
})(function() {
    return typeof window < "u" ? window : typeof self < "u" ? self : this || {}
}(), zt, !1);
const gn = zt.exports;
zt.exports.create;
/*!
 * sweetalert2 v11.26.24
 * Released under the MIT License.
 */
function Ln(e, t, n) {
    if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object")
}

function tr(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
}

function mn(e, t) {
    return e.get(Ln(e, t))
}

function nr(e, t, n) {
    tr(e, t), t.set(e, n)
}

function or(e, t, n) {
    return e.set(Ln(e, t), n), n
}
const rr = 100,
    h = {},
    ir = () => {
        h.previousActiveElement instanceof HTMLElement ? (h.previousActiveElement.focus(), h.previousActiveElement = null) : document.body && document.body.focus()
    },
    sr = e => new Promise(t => {
        if (!e) return t();
        const n = window.scrollX,
            o = window.scrollY;
        h.restoreFocusTimeout = setTimeout(() => {
            ir(), t()
        }, rr), window.scrollTo(n, o)
    }),
    Rn = "swal2-",
    ar = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "draggable", "dragging"],
    d = ar.reduce((e, t) => (e[t] = Rn + t, e), {}),
    lr = ["success", "warning", "info", "question", "error"],
    ot = lr.reduce((e, t) => (e[t] = Rn + t, e), {}),
    On = "SweetAlert2:",
    jt = e => e.charAt(0).toUpperCase() + e.slice(1),
    J = e => {
        console.warn(`${On} ${typeof e=="object"?e.join(" "):e}`)
    },
    Pe = e => {
        console.error(`${On} ${e}`)
    },
    pn = [],
    cr = e => {
        pn.includes(e) || (pn.push(e), J(e))
    },
    Nn = (e, t = null) => {
        cr(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)
    },
    wt = e => typeof e == "function" ? e() : e,
    $t = e => e && typeof e.toPromise == "function",
    We = e => $t(e) ? e.toPromise() : Promise.resolve(e),
    Vt = e => e && Promise.resolve(e) === e,
    ur = () => navigator.userAgent.includes("Firefox"),
    Z = () => document.body.querySelector(`.${d.container}`),
    Ke = e => {
        const t = Z();
        return t ? t.querySelector(e) : null
    },
    te = e => Ke(`.${e}`),
    D = () => te(d.popup),
    Fe = () => te(d.icon),
    dr = () => te(d["icon-content"]),
    Dn = () => te(d.title),
    Ut = () => te(d["html-container"]),
    Fn = () => te(d.image),
    qt = () => te(d["progress-steps"]),
    ht = () => te(d["validation-message"]),
    fe = () => Ke(`.${d.actions} .${d.confirm}`),
    _e = () => Ke(`.${d.actions} .${d.cancel}`),
    Te = () => Ke(`.${d.actions} .${d.deny}`),
    fr = () => te(d["input-label"]),
    He = () => Ke(`.${d.loader}`),
    Ye = () => te(d.actions),
    _n = () => te(d.footer),
    gt = () => te(d["timer-progress-bar"]),
    Wt = () => te(d.close),
    wr = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
    Kt = () => {
        const e = D();
        if (!e) return [];
        const t = e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),
            n = Array.from(t).sort((i, s) => {
                const l = parseInt(i.getAttribute("tabindex") || "0"),
                    c = parseInt(s.getAttribute("tabindex") || "0");
                return l > c ? 1 : l < c ? -1 : 0
            }),
            o = e.querySelectorAll(wr),
            r = Array.from(o).filter(i => i.getAttribute("tabindex") !== "-1");
        return [...new Set(n.concat(r))].filter(i => X(i))
    },
    Yt = () => ge(document.body, d.shown) && !ge(document.body, d["toast-shown"]) && !ge(document.body, d["no-backdrop"]),
    mt = () => {
        const e = D();
        return e ? ge(e, d.toast) : !1
    },
    hr = () => {
        const e = D();
        return e ? e.hasAttribute("data-loading") : !1
    },
    ne = (e, t) => {
        if (e.textContent = "", t) {
            const o = new DOMParser().parseFromString(t, "text/html"),
                r = o.querySelector("head");
            r && Array.from(r.childNodes).forEach(s => {
                e.appendChild(s)
            });
            const i = o.querySelector("body");
            i && Array.from(i.childNodes).forEach(s => {
                s instanceof HTMLVideoElement || s instanceof HTMLAudioElement ? e.appendChild(s.cloneNode(!0)) : e.appendChild(s)
            })
        }
    },
    ge = (e, t) => {
        if (!t) return !1;
        const n = t.split(/\s+/);
        for (let o = 0; o < n.length; o++)
            if (!e.classList.contains(n[o])) return !1;
        return !0
    },
    gr = (e, t) => {
        Array.from(e.classList).forEach(n => {
            !Object.values(d).includes(n) && !Object.values(ot).includes(n) && !Object.values(t.showClass || {}).includes(n) && e.classList.remove(n)
        })
    },
    ee = (e, t, n) => {
        if (gr(e, t), !t.customClass) return;
        const o = t.customClass[n];
        if (o) {
            if (typeof o != "string" && !o.forEach) {
                J(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof o}"`);
                return
            }
            O(e, o)
        }
    },
    pt = (e, t) => {
        if (!t) return null;
        switch (t) {
            case "select":
            case "textarea":
            case "file":
                return e.querySelector(`.${d.popup} > .${d[t]}`);
            case "checkbox":
                return e.querySelector(`.${d.popup} > .${d.checkbox} input`);
            case "radio":
                return e.querySelector(`.${d.popup} > .${d.radio} input:checked`) || e.querySelector(`.${d.popup} > .${d.radio} input:first-child`);
            case "range":
                return e.querySelector(`.${d.popup} > .${d.range} input`);
            default:
                return e.querySelector(`.${d.popup} > .${d.input}`)
        }
    },
    Hn = e => {
        if (e.focus(), e.type !== "file") {
            const t = e.value;
            e.value = "", e.value = t
        }
    },
    zn = (e, t, n) => {
        if (!e || !t) return;
        const o = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : t;
        (Array.isArray(e) ? e : [e]).forEach(i => {
            o.forEach(s => {
                n ? i.classList.add(s) : i.classList.remove(s)
            })
        })
    },
    O = (e, t) => {
        zn(e, t, !0)
    },
    ie = (e, t) => {
        zn(e, t, !1)
    },
    me = (e, t) => {
        const n = Array.from(e.children);
        for (let o = 0; o < n.length; o++) {
            const r = n[o];
            if (r instanceof HTMLElement && ge(r, t)) return r
        }
    },
    xe = (e, t, n) => {
        n === `${parseInt(`${n}`)}` && (n = parseInt(n)), n || n === 0 ? e.style.setProperty(t, typeof n == "number" ? `${n}px` : n) : e.style.removeProperty(t)
    },
    W = (e, t = "flex") => {
        e && (e.style.display = t)
    },
    Y = e => {
        e && (e.style.display = "none")
    },
    Jt = (e, t = "block") => {
        e && new MutationObserver(() => {
            Je(e, e.innerHTML, t)
        }).observe(e, {
            childList: !0,
            subtree: !0
        })
    },
    bn = (e, t, n, o) => {
        const r = e.querySelector(t);
        r && r.style.setProperty(n, o)
    },
    Je = (e, t, n = "flex") => {
        t ? W(e, n) : Y(e)
    },
    X = e => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    mr = () => !X(fe()) && !X(Te()) && !X(_e()),
    Lt = e => e.scrollHeight > e.clientHeight,
    pr = (e, t) => {
        let n = e;
        for (; n && n !== t;) {
            if (Lt(n)) return !0;
            n = n.parentElement
        }
        return !1
    },
    jn = e => {
        const t = window.getComputedStyle(e),
            n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(t.getPropertyValue("transition-duration") || "0");
        return n > 0 || o > 0
    },
    Zt = (e, t = !1) => {
        const n = gt();
        n && X(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => {
            n.style.transition = `width ${e/1e3}s linear`, n.style.width = "0%"
        }, 10))
    },
    br = () => {
        const e = gt();
        if (!e) return;
        const t = parseInt(window.getComputedStyle(e).width);
        e.style.removeProperty("transition"), e.style.width = "100%";
        const n = parseInt(window.getComputedStyle(e).width),
            o = t / n * 100;
        e.style.width = `${o}%`
    },
    yr = () => typeof window > "u" || typeof document > "u",
    vr = `
 <div aria-labelledby="${d.title}" aria-describedby="${d["html-container"]}" class="${d.popup}" tabindex="-1">
   <button type="button" class="${d.close}"></button>
   <ul class="${d["progress-steps"]}"></ul>
   <div class="${d.icon}"></div>
   <img class="${d.image}" />
   <h2 class="${d.title}" id="${d.title}"></h2>
   <div class="${d["html-container"]}" id="${d["html-container"]}"></div>
   <input class="${d.input}" id="${d.input}" />
   <input type="file" class="${d.file}" />
   <div class="${d.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${d.select}" id="${d.select}"></select>
   <div class="${d.radio}"></div>
   <label class="${d.checkbox}">
     <input type="checkbox" id="${d.checkbox}" />
     <span class="${d.label}"></span>
   </label>
   <textarea class="${d.textarea}" id="${d.textarea}"></textarea>
   <div class="${d["validation-message"]}" id="${d["validation-message"]}"></div>
   <div class="${d.actions}">
     <div class="${d.loader}"></div>
     <button type="button" class="${d.confirm}"></button>
     <button type="button" class="${d.deny}"></button>
     <button type="button" class="${d.cancel}"></button>
   </div>
   <div class="${d.footer}"></div>
   <div class="${d["timer-progress-bar-container"]}">
     <div class="${d["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
    Cr = () => {
        const e = Z();
        return e ? (e.remove(), ie([document.documentElement, document.body], [d["no-backdrop"], d["toast-shown"], d["has-column"]]), !0) : !1
    },
    ke = () => {
        h.currentInstance && h.currentInstance.resetValidationMessage()
    },
    Er = () => {
        const e = D();
        if (!e) return;
        const t = me(e, d.input),
            n = me(e, d.file),
            o = e.querySelector(`.${d.range} input`),
            r = e.querySelector(`.${d.range} output`),
            i = me(e, d.select),
            s = e.querySelector(`.${d.checkbox} input`),
            l = me(e, d.textarea);
        t && (t.oninput = ke), n && (n.onchange = ke), i && (i.onchange = ke), s && (s.onchange = ke), l && (l.oninput = ke), o && r && (o.oninput = () => {
            ke(), r.value = o.value
        }, o.onchange = () => {
            ke(), r.value = o.value
        })
    },
    kr = e => {
        if (typeof e == "string") {
            const t = document.querySelector(e);
            if (!t) throw new Error(`Target element "${e}" not found`);
            return t
        }
        return e
    },
    Br = e => {
        const t = D();
        t && (t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true"))
    },
    xr = e => {
        window.getComputedStyle(e).direction === "rtl" && (O(Z(), d.rtl), h.isRTL = !0)
    },
    Ar = e => {
        const t = Cr();
        if (yr()) {
            Pe("SweetAlert2 requires document to initialize");
            return
        }
        const n = document.createElement("div");
        n.className = d.container, t && O(n, d["no-transition"]), ne(n, vr), n.dataset.swal2Theme = e.theme;
        const o = kr(e.target || "body");
        o.appendChild(n), e.topLayer && (n.setAttribute("popover", ""), n.showPopover()), Br(e), xr(o), Er()
    },
    Gt = (e, t) => {
        e instanceof HTMLElement ? t.appendChild(e) : typeof e == "object" ? Pr(e, t) : e && ne(t, e)
    },
    Pr = (e, t) => {
        "jquery" in e ? Tr(t, e) : ne(t, e.toString())
    },
    Tr = (e, t) => {
        if (e.textContent = "", 0 in t)
            for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
        else e.appendChild(t.cloneNode(!0))
    },
    Mr = (e, t) => {
        const n = Ye(),
            o = He();
        !n || !o || (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton ? Y(n) : W(n), ee(n, t, "actions"), Ir(n, o, t), ne(o, t.loaderHtml || ""), ee(o, t, "loader"))
    };

function Ir(e, t, n) {
    const o = fe(),
        r = Te(),
        i = _e();
    !o || !r || !i || (Bt(o, "confirm", n), Bt(r, "deny", n), Bt(i, "cancel", n), Sr(o, r, i, n), n.reverseButtons && (n.toast ? (e.insertBefore(i, o), e.insertBefore(r, o)) : (e.insertBefore(i, t), e.insertBefore(r, t), e.insertBefore(o, t))))
}

function Sr(e, t, n, o) {
    if (!o.buttonsStyling) {
        ie([e, t, n], d.styled);
        return
    }
    O([e, t, n], d.styled), [
        [e, "confirm", o.confirmButtonColor],
        [t, "deny", o.denyButtonColor],
        [n, "cancel", o.cancelButtonColor]
    ].forEach(([i, s, l]) => {
        l && i.style.setProperty(`--swal2-${s}-button-background-color`, l), Lr(i)
    })
}

function Lr(e) {
    const t = window.getComputedStyle(e);
    if (t.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
    const n = t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, "rgba($1, $2, $3, 0.5)");
    e.style.setProperty("--swal2-action-button-focus-box-shadow", t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${n}`))
}

function Bt(e, t, n) {
    const o = jt(t);
    Je(e, n[`show${o}Button`], "inline-block"), ne(e, n[`${t}ButtonText`] || ""), e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""), e.className = d[t], ee(e, n, `${t}Button`)
}
const Rr = (e, t) => {
        const n = Wt();
        n && (ne(n, t.closeButtonHtml || ""), ee(n, t, "closeButton"), Je(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel || ""))
    },
    Or = (e, t) => {
        const n = Z();
        n && (Nr(n, t.backdrop), Dr(n, t.position), Fr(n, t.grow), ee(n, t, "container"))
    };

function Nr(e, t) {
    typeof t == "string" ? e.style.background = t : t || O([document.documentElement, document.body], d["no-backdrop"])
}

function Dr(e, t) {
    t && (t in d ? O(e, d[t]) : (J('The "position" parameter is not valid, defaulting to "center"'), O(e, d.center)))
}

function Fr(e, t) {
    t && O(e, d[`grow-${t}`])
}
var N = {
    innerParams: new WeakMap,
    domCache: new WeakMap,
    focusedElement: new WeakMap
};
const _r = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
    Hr = (e, t) => {
        const n = D();
        if (!n) return;
        const o = N.innerParams.get(e),
            r = !o || t.input !== o.input;
        _r.forEach(i => {
            const s = me(n, d[i]);
            s && ($r(i, t.inputAttributes), s.className = d[i], r && Y(s))
        }), t.input && (r && zr(t), Vr(t))
    },
    zr = e => {
        if (!e.input) return;
        if (!V[e.input]) {
            Pe(`Unexpected type of input! Expected ${Object.keys(V).join(" | ")}, got "${e.input}"`);
            return
        }
        const t = $n(e.input);
        if (!t) return;
        const n = V[e.input](t, e);
        W(t), e.inputAutoFocus && setTimeout(() => {
            Hn(n)
        })
    },
    jr = e => {
        for (let t = 0; t < e.attributes.length; t++) {
            const n = e.attributes[t].name;
            ["id", "type", "value", "style"].includes(n) || e.removeAttribute(n)
        }
    },
    $r = (e, t) => {
        const n = D();
        if (!n) return;
        const o = pt(n, e);
        if (o) {
            jr(o);
            for (const r in t) o.setAttribute(r, t[r])
        }
    },
    Vr = e => {
        if (!e.input) return;
        const t = $n(e.input);
        t && ee(t, e, "input")
    },
    Xt = (e, t) => {
        !e.placeholder && t.inputPlaceholder && (e.placeholder = t.inputPlaceholder)
    },
    Ze = (e, t, n) => {
        if (n.inputLabel) {
            const o = document.createElement("label"),
                r = d["input-label"];
            o.setAttribute("for", e.id), o.className = r, typeof n.customClass == "object" && O(o, n.customClass.inputLabel), o.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", o)
        }
    },
    $n = e => {
        const t = D();
        if (t) return me(t, d[e] || d.input)
    },
    rt = (e, t) => {
        ["string", "number"].includes(typeof t) ? e.value = `${t}` : Vt(t) || J(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)
    },
    V = {};
V.text = V.email = V.password = V.number = V.tel = V.url = V.search = V.date = V["datetime-local"] = V.time = V.week = V.month = (e, t) => {
    const n = e;
    return rt(n, t.inputValue), Ze(n, n, t), Xt(n, t), n.type = t.input, n
};
V.file = (e, t) => {
    const n = e;
    return Ze(n, n, t), Xt(n, t), n
};
V.range = (e, t) => {
    const n = e,
        o = n.querySelector("input"),
        r = n.querySelector("output");
    return o && (rt(o, t.inputValue), o.type = t.input, Ze(o, e, t)), r && rt(r, t.inputValue), e
};
V.select = (e, t) => {
    const n = e;
    if (n.textContent = "", t.inputPlaceholder) {
        const o = document.createElement("option");
        ne(o, t.inputPlaceholder), o.value = "", o.disabled = !0, o.selected = !0, n.appendChild(o)
    }
    return Ze(n, n, t), n
};
V.radio = e => {
    const t = e;
    return t.textContent = "", e
};
V.checkbox = (e, t) => {
    const n = D();
    if (!n) throw new Error("Popup not found");
    const o = pt(n, "checkbox");
    if (!o) throw new Error("Checkbox input not found");
    o.value = "1", o.checked = !!t.inputValue;
    const i = e.querySelector("span");
    if (i) {
        const s = t.inputPlaceholder || t.inputLabel;
        s && ne(i, s)
    }
    return o
};
V.textarea = (e, t) => {
    const n = e;
    rt(n, t.inputValue), Xt(n, t), Ze(n, n, t);
    const o = r => parseInt(window.getComputedStyle(r).marginLeft) + parseInt(window.getComputedStyle(r).marginRight);
    return setTimeout(() => {
        if ("MutationObserver" in window) {
            const r = D();
            if (!r) return;
            const i = parseInt(window.getComputedStyle(r).width),
                s = () => {
                    if (!document.body.contains(n)) return;
                    const l = n.offsetWidth + o(n),
                        c = D();
                    c && (l > i ? c.style.width = `${l}px` : xe(c, "width", t.width))
                };
            new MutationObserver(s).observe(n, {
                attributes: !0,
                attributeFilter: ["style"]
            })
        }
    }), n
};
const Ur = (e, t) => {
        const n = Ut();
        n && (Jt(n), ee(n, t, "htmlContainer"), t.html ? (Gt(t.html, n), W(n, "block")) : t.text ? (n.textContent = t.text, W(n, "block")) : Y(n), Hr(e, t))
    },
    qr = (e, t) => {
        const n = _n();
        n && (Jt(n), Je(n, !!t.footer, "block"), t.footer && Gt(t.footer, n), ee(n, t, "footer"))
    },
    Wr = (e, t) => {
        const n = N.innerParams.get(e),
            o = Fe();
        if (!o) return;
        if (n && t.icon === n.icon) {
            vn(o, t), yn(o, t);
            return
        }
        if (!t.icon && !t.iconHtml) {
            Y(o);
            return
        }
        if (t.icon && Object.keys(ot).indexOf(t.icon) === -1) {
            Pe(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`), Y(o);
            return
        }
        W(o), vn(o, t), yn(o, t), O(o, t.showClass && t.showClass.icon), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", Vn)
    },
    yn = (e, t) => {
        for (const [n, o] of Object.entries(ot)) t.icon !== n && ie(e, o);
        O(e, t.icon && ot[t.icon]), Jr(e, t), Vn(), ee(e, t, "icon")
    },
    Vn = () => {
        const e = D();
        if (!e) return;
        const t = window.getComputedStyle(e).getPropertyValue("background-color"),
            n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for (let o = 0; o < n.length; o++) n[o].style.backgroundColor = t
    },
    Kr = e => `
  ${e.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation?'<div class="swal2-success-fix"></div>':""}
  ${e.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,
    Yr = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
    vn = (e, t) => {
        if (!t.icon && !t.iconHtml) return;
        let n = e.innerHTML,
            o = "";
        t.iconHtml ? o = Cn(t.iconHtml) : t.icon === "success" ? (o = Kr(t), n = n.replace(/ style=".*?"/g, "")) : t.icon === "error" ? o = Yr : t.icon && (o = Cn({
            question: "?",
            warning: "!",
            info: "i"
        } [t.icon])), n.trim() !== o.trim() && ne(e, o)
    },
    Jr = (e, t) => {
        if (t.iconColor) {
            e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
            for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) bn(e, n, "background-color", t.iconColor);
            bn(e, ".swal2-success-ring", "border-color", t.iconColor)
        }
    },
    Cn = e => `<div class="${d["icon-content"]}">${e}</div>`,
    Zr = (e, t) => {
        const n = Fn();
        if (n) {
            if (!t.imageUrl) {
                Y(n);
                return
            }
            W(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt || ""), xe(n, "width", t.imageWidth), xe(n, "height", t.imageHeight), n.className = d.image, ee(n, t, "image")
        }
    };
let Qt = !1,
    Un = 0,
    qn = 0,
    Wn = 0,
    Kn = 0;
const Gr = e => {
        e.addEventListener("mousedown", it), document.body.addEventListener("mousemove", st), e.addEventListener("mouseup", at), e.addEventListener("touchstart", it), document.body.addEventListener("touchmove", st), e.addEventListener("touchend", at)
    },
    Xr = e => {
        e.removeEventListener("mousedown", it), document.body.removeEventListener("mousemove", st), e.removeEventListener("mouseup", at), e.removeEventListener("touchstart", it), document.body.removeEventListener("touchmove", st), e.removeEventListener("touchend", at)
    },
    it = e => {
        const t = D();
        if (!t) return;
        const n = Fe();
        if (e.target === t || n && n.contains(e.target)) {
            Qt = !0;
            const o = Yn(e);
            Un = o.clientX, qn = o.clientY, Wn = parseInt(t.style.insetInlineStart) || 0, Kn = parseInt(t.style.insetBlockStart) || 0, O(t, "swal2-dragging")
        }
    },
    st = e => {
        const t = D();
        if (t && Qt) {
            let {
                clientX: n,
                clientY: o
            } = Yn(e);
            const r = n - Un;
            t.style.insetInlineStart = `${Wn+(h.isRTL?-r:r)}px`, t.style.insetBlockStart = `${Kn+(o-qn)}px`
        }
    },
    at = () => {
        const e = D();
        Qt = !1, ie(e, "swal2-dragging")
    },
    Yn = e => {
        const t = e.type.startsWith("touch") ? e.touches[0] : e;
        return {
            clientX: t.clientX,
            clientY: t.clientY
        }
    },
    Qr = (e, t) => {
        const n = Z(),
            o = D();
        if (!(!n || !o)) {
            if (t.toast) {
                xe(n, "width", t.width), o.style.width = "100%";
                const r = He();
                r && o.insertBefore(r, Fe())
            } else xe(o, "width", t.width);
            xe(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), Y(ht()), ei(o, t), t.draggable && !t.toast ? (O(o, d.draggable), Gr(o)) : (ie(o, d.draggable), Xr(o))
        }
    },
    ei = (e, t) => {
        const n = t.showClass || {};
        e.className = `${d.popup} ${X(e)?n.popup:""}`, t.toast ? (O([document.documentElement, document.body], d["toast-shown"]), O(e, d.toast)) : O(e, d.modal), ee(e, t, "popup"), typeof t.customClass == "string" && O(e, t.customClass), t.icon && O(e, d[`icon-${t.icon}`])
    },
    ti = (e, t) => {
        const n = qt();
        if (!n) return;
        const {
            progressSteps: o,
            currentProgressStep: r
        } = t;
        if (!o || o.length === 0 || r === void 0) {
            Y(n);
            return
        }
        W(n), n.textContent = "", r >= o.length && J("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.forEach((i, s) => {
            const l = ni(i);
            if (n.appendChild(l), s === r && O(l, d["active-progress-step"]), s !== o.length - 1) {
                const c = oi(t);
                n.appendChild(c)
            }
        })
    },
    ni = e => {
        const t = document.createElement("li");
        return O(t, d["progress-step"]), ne(t, e), t
    },
    oi = e => {
        const t = document.createElement("li");
        return O(t, d["progress-step-line"]), e.progressStepsDistance && xe(t, "width", e.progressStepsDistance), t
    },
    ri = (e, t) => {
        const n = Dn();
        n && (Jt(n), Je(n, !!(t.title || t.titleText), "block"), t.title && Gt(t.title, n), t.titleText && (n.innerText = t.titleText), ee(n, t, "title"))
    },
    Jn = (e, t) => {
        var n;
        Qr(e, t), Or(e, t), ti(e, t), Wr(e, t), Zr(e, t), ri(e, t), Rr(e, t), Ur(e, t), Mr(e, t), qr(e, t);
        const o = D();
        typeof t.didRender == "function" && o && t.didRender(o), (n = h.eventEmitter) === null || n === void 0 || n.emit("didRender", o)
    },
    ii = () => X(D()),
    Zn = () => {
        var e;
        return (e = fe()) === null || e === void 0 ? void 0 : e.click()
    },
    si = () => {
        var e;
        return (e = Te()) === null || e === void 0 ? void 0 : e.click()
    },
    ai = () => {
        var e;
        return (e = _e()) === null || e === void 0 ? void 0 : e.click()
    },
    ze = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    }),
    Gn = e => {
        if (e.keydownTarget && e.keydownHandlerAdded && e.keydownHandler) {
            const t = e.keydownHandler;
            e.keydownTarget.removeEventListener("keydown", t, {
                capture: e.keydownListenerCapture
            }), e.keydownHandlerAdded = !1
        }
    },
    li = (e, t, n) => {
        if (Gn(e), !t.toast) {
            const o = i => ui(t, i, n);
            e.keydownHandler = o;
            const r = t.keydownListenerCapture ? window : D();
            if (r) {
                e.keydownTarget = r, e.keydownListenerCapture = t.keydownListenerCapture;
                const i = o;
                e.keydownTarget.addEventListener("keydown", i, {
                    capture: e.keydownListenerCapture
                }), e.keydownHandlerAdded = !0
            }
        }
    },
    Rt = (e, t) => {
        var n;
        const o = Kt();
        return o.length ? (e = e + t, e === -2 && (e = o.length - 1), e === o.length ? e = 0 : e === -1 && (e = o.length - 1), o[e].focus(), !(ur() && o[e] instanceof HTMLIFrameElement)) : ((n = D()) === null || n === void 0 || n.focus(), !0)
    },
    Xn = ["ArrowRight", "ArrowDown"],
    ci = ["ArrowLeft", "ArrowUp"],
    ui = (e, t, n) => {
        e && (t.isComposing || t.keyCode === 229 || (e.stopKeydownPropagation && t.stopPropagation(), t.key === "Enter" ? di(t, e) : t.key === "Tab" ? fi(t) : [...Xn, ...ci].includes(t.key) ? wi(t.key) : t.key === "Escape" && hi(t, e, n)))
    },
    di = (e, t) => {
        if (!wt(t.allowEnterKey)) return;
        const n = D();
        if (!n || !t.input) return;
        const o = pt(n, t.input);
        if (e.target && o && e.target instanceof HTMLElement && e.target.outerHTML === o.outerHTML) {
            if (["textarea", "file"].includes(t.input)) return;
            Zn(), e.preventDefault()
        }
    },
    fi = e => {
        const t = e.target,
            n = Kt();
        let o = -1;
        for (let i = 0; i < n.length; i++)
            if (t === n[i]) {
                o = i;
                break
            } let r = !0;
        e.shiftKey ? r = Rt(o, -1) : r = Rt(o, 1), e.stopPropagation(), r && e.preventDefault()
    },
    wi = e => {
        const t = Ye(),
            n = fe(),
            o = Te(),
            r = _e();
        if (!t || !n || !o || !r) return;
        const i = [n, o, r];
        if (document.activeElement instanceof HTMLElement && !i.includes(document.activeElement)) return;
        const s = Xn.includes(e) ? "nextElementSibling" : "previousElementSibling";
        let l = document.activeElement;
        if (l) {
            for (let c = 0; c < t.children.length; c++) {
                if (l = l[s], !l) return;
                if (l instanceof HTMLButtonElement && X(l)) break
            }
            l instanceof HTMLButtonElement && l.focus()
        }
    },
    hi = (e, t, n) => {
        e.preventDefault(), wt(t.allowEscapeKey) && n(ze.esc)
    };
var Se = {
    swalPromiseResolve: new WeakMap,
    swalPromiseReject: new WeakMap
};
const gi = () => {
        const e = Z();
        Array.from(document.body.children).forEach(n => {
            n.contains(e) || (n.hasAttribute("aria-hidden") && n.setAttribute("data-previous-aria-hidden", n.getAttribute("aria-hidden") || ""), n.setAttribute("aria-hidden", "true"))
        })
    },
    Qn = () => {
        Array.from(document.body.children).forEach(t => {
            t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden") || ""), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
        })
    },
    en = typeof window < "u" && !!window.GestureEvent,
    mi = en && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    pi = () => {
        if (en && !ge(document.body, d.iosfix)) {
            const e = document.body.scrollTop;
            document.body.style.top = `${e*-1}px`, O(document.body, d.iosfix), bi()
        }
    },
    bi = () => {
        const e = Z();
        if (!e) return;
        let t;
        e.ontouchstart = n => {
            t = yi(n)
        }, e.ontouchmove = n => {
            t && (n.preventDefault(), n.stopPropagation())
        }
    },
    yi = e => {
        const t = e.target,
            n = Z(),
            o = Ut();
        return !n || !o || vi(e) || Ci(e) ? !1 : t === n || !Lt(n) && t instanceof HTMLElement && !pr(t, o) && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" && !(Lt(o) && o.contains(t))
    },
    vi = e => !!(e.touches && e.touches.length && e.touches[0].touchType === "stylus"),
    Ci = e => e.touches && e.touches.length > 1,
    Ei = () => {
        if (ge(document.body, d.iosfix)) {
            const e = parseInt(document.body.style.top, 10);
            ie(document.body, d.iosfix), document.body.style.top = "", document.body.scrollTop = e * -1
        }
    },
    ki = () => {
        const e = document.createElement("div");
        e.className = d["scrollbar-measure"], document.body.appendChild(e);
        const t = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e), t
    };
let Ie = null;
const Bi = e => {
        Ie === null && (document.body.scrollHeight > window.innerHeight || e === "scroll") && (Ie = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = `${Ie+ki()}px`)
    },
    xi = () => {
        Ie !== null && (document.body.style.paddingRight = `${Ie}px`, Ie = null)
    };

function eo(e, t, n, o) {
    mt() ? En(e, o) : (sr(n).then(() => En(e, o)), Gn(h)), en ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), Yt() && (xi(), Ei(), Qn()), Ai()
}

function Ai() {
    ie([document.documentElement, document.body], [d.shown, d["height-auto"], d["no-backdrop"], d["toast-shown"]])
}

function pe(e) {
    e = Ti(e);
    const t = Se.swalPromiseResolve.get(this),
        n = Pi(this);
    this.isAwaitingPromise ? e.isDismissed || (Ge(this), t(e)) : n && t(e)
}
const Pi = e => {
    const t = D();
    if (!t) return !1;
    const n = N.innerParams.get(e);
    if (!n || ge(t, n.hideClass.popup)) return !1;
    ie(t, n.showClass.popup), O(t, n.hideClass.popup);
    const o = Z();
    return ie(o, n.showClass.backdrop), O(o, n.hideClass.backdrop), Mi(e, t, n), !0
};

function to(e) {
    const t = Se.swalPromiseReject.get(this);
    Ge(this), t && t(e)
}
const Ge = e => {
        e.isAwaitingPromise && (delete e.isAwaitingPromise, N.innerParams.get(e) || e._destroy())
    },
    Ti = e => typeof e > "u" ? {
        isConfirmed: !1,
        isDenied: !1,
        isDismissed: !0
    } : Object.assign({
        isConfirmed: !1,
        isDenied: !1,
        isDismissed: !1
    }, e),
    Mi = (e, t, n) => {
        var o;
        const r = Z(),
            i = jn(t);
        typeof n.willClose == "function" && n.willClose(t), (o = h.eventEmitter) === null || o === void 0 || o.emit("willClose", t), i && r ? Ii(e, t, r, !!n.returnFocus, n.didClose) : r && eo(e, r, !!n.returnFocus, n.didClose)
    },
    Ii = (e, t, n, o, r) => {
        h.swalCloseEventFinishedCallback = eo.bind(null, e, n, o, r);
        const i = function(s) {
            if (s.target === t) {
                var l;
                (l = h.swalCloseEventFinishedCallback) === null || l === void 0 || l.call(h), delete h.swalCloseEventFinishedCallback, t.removeEventListener("animationend", i), t.removeEventListener("transitionend", i)
            }
        };
        t.addEventListener("animationend", i), t.addEventListener("transitionend", i)
    },
    En = (e, t) => {
        setTimeout(() => {
            var n;
            typeof t == "function" && t.bind(e.params)(), (n = h.eventEmitter) === null || n === void 0 || n.emit("didClose"), e._destroy && e._destroy()
        })
    },
    Le = e => {
        let t = D();
        if (t || new Ue, t = D(), !t) return;
        const n = He();
        mt() ? Y(Fe()) : Si(t, e), W(n), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus()
    },
    Si = (e, t) => {
        const n = Ye(),
            o = He();
        !n || !o || (!t && X(fe()) && (t = fe()), W(n), t && (Y(t), o.setAttribute("data-button-to-replace", t.className), n.insertBefore(o, t)), O([e, n], d.loading))
    },
    Li = (e, t) => {
        t.input === "select" || t.input === "radio" ? Fi(e, t) : ["text", "email", "number", "tel", "textarea"].some(n => n === t.input) && ($t(t.inputValue) || Vt(t.inputValue)) && (Le(fe()), _i(e, t))
    },
    Ri = (e, t) => {
        const n = e.getInput();
        if (!n) return null;
        switch (t.input) {
            case "checkbox":
                return Oi(n);
            case "radio":
                return Ni(n);
            case "file":
                return Di(n);
            default:
                return t.inputAutoTrim ? n.value.trim() : n.value
        }
    },
    Oi = e => e.checked ? 1 : 0,
    Ni = e => e.checked ? e.value : null,
    Di = e => e.files && e.files.length ? e.getAttribute("multiple") !== null ? e.files : e.files[0] : null,
    Fi = (e, t) => {
        const n = D();
        if (!n) return;
        const o = r => {
            t.input === "select" ? Hi(n, Ot(r), t) : t.input === "radio" && zi(n, Ot(r), t)
        };
        $t(t.inputOptions) || Vt(t.inputOptions) ? (Le(fe()), We(t.inputOptions).then(r => {
            e.hideLoading(), o(r)
        })) : typeof t.inputOptions == "object" ? o(t.inputOptions) : Pe(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)
    },
    _i = (e, t) => {
        const n = e.getInput();
        n && (Y(n), We(t.inputValue).then(o => {
            n.value = t.input === "number" ? `${parseFloat(o)||0}` : `${o}`, W(n), n.focus(), e.hideLoading()
        }).catch(o => {
            Pe(`Error in inputValue promise: ${o}`), n.value = "", W(n), n.focus(), e.hideLoading()
        }))
    };

function Hi(e, t, n) {
    const o = me(e, d.select);
    if (!o) return;
    const r = (i, s, l) => {
        const c = document.createElement("option");
        c.value = l, ne(c, s), c.selected = no(l, n.inputValue), i.appendChild(c)
    };
    t.forEach(i => {
        const s = i[0],
            l = i[1];
        if (Array.isArray(l)) {
            const c = document.createElement("optgroup");
            c.label = s, c.disabled = !1, o.appendChild(c), l.forEach(f => r(c, f[1], f[0]))
        } else r(o, l, s)
    }), o.focus()
}

function zi(e, t, n) {
    const o = me(e, d.radio);
    if (!o) return;
    t.forEach(i => {
        const s = i[0],
            l = i[1],
            c = document.createElement("input"),
            f = document.createElement("label");
        c.type = "radio", c.name = d.radio, c.value = s, no(s, n.inputValue) && (c.checked = !0);
        const w = document.createElement("span");
        ne(w, l), w.className = d.label, f.appendChild(c), f.appendChild(w), o.appendChild(f)
    });
    const r = o.querySelectorAll("input");
    r.length && r[0].focus()
}
const Ot = e => (e instanceof Map ? Array.from(e) : Object.entries(e)).map(([n, o]) => [n, typeof o == "object" ? Ot(o) : o]),
    no = (e, t) => !!t && t !== null && t !== void 0 && t.toString() === e.toString(),
    ji = e => {
        const t = N.innerParams.get(e);
        e.disableButtons(), t.input ? oo(e, "confirm") : nn(e, !0)
    },
    $i = e => {
        const t = N.innerParams.get(e);
        e.disableButtons(), t.returnInputValueOnDeny ? oo(e, "deny") : tn(e, !1)
    },
    Vi = (e, t) => {
        e.disableButtons(), t(ze.cancel)
    },
    oo = (e, t) => {
        const n = N.innerParams.get(e);
        if (!n.input) {
            Pe(`The "input" parameter is needed to be set when using returnInputValueOn${jt(t)}`);
            return
        }
        const o = e.getInput(),
            r = Ri(e, n);
        n.inputValidator ? Ui(e, r, t) : o && !o.checkValidity() ? (e.enableButtons(), e.showValidationMessage(n.validationMessage || o.validationMessage)) : t === "deny" ? tn(e, r) : nn(e, r)
    },
    Ui = (e, t, n) => {
        const o = N.innerParams.get(e);
        e.disableInput(), Promise.resolve().then(() => We(o.inputValidator(t, o.validationMessage))).then(i => {
            e.enableButtons(), e.enableInput(), i ? e.showValidationMessage(i) : n === "deny" ? tn(e, t) : nn(e, t)
        })
    },
    tn = (e, t) => {
        const n = N.innerParams.get(e);
        n.showLoaderOnDeny && Le(Te()), n.preDeny ? (e.isAwaitingPromise = !0, Promise.resolve().then(() => We(n.preDeny(t, n.validationMessage))).then(r => {
            r === !1 ? (e.hideLoading(), Ge(e)) : e.close({
                isDenied: !0,
                value: typeof r > "u" ? t : r
            })
        }).catch(r => ro(e, r))) : e.close({
            isDenied: !0,
            value: t
        })
    },
    kn = (e, t) => {
        e.close({
            isConfirmed: !0,
            value: t
        })
    },
    ro = (e, t) => {
        e.rejectPromise(t)
    },
    nn = (e, t) => {
        const n = N.innerParams.get(e);
        n.showLoaderOnConfirm && Le(), n.preConfirm ? (e.resetValidationMessage(), e.isAwaitingPromise = !0, Promise.resolve().then(() => We(n.preConfirm(t, n.validationMessage))).then(r => {
            X(ht()) || r === !1 ? (e.hideLoading(), Ge(e)) : kn(e, typeof r > "u" ? t : r)
        }).catch(r => ro(e, r))) : kn(e, t)
    };

function lt() {
    const e = N.innerParams.get(this);
    if (!e) return;
    const t = N.domCache.get(this);
    Y(t.loader), mt() ? e.icon && W(Fe()) : qi(t), ie([t.popup, t.actions], d.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1;
    const n = N.focusedElement.get(this);
    n instanceof HTMLElement && document.activeElement === document.body && n.focus(), N.focusedElement.delete(this)
}
const qi = e => {
    const t = e.loader.getAttribute("data-button-to-replace"),
        n = t ? e.popup.getElementsByClassName(t) : [];
    n.length ? W(n[0], "inline-block") : mr() && Y(e.actions)
};

function io() {
    const e = N.innerParams.get(this),
        t = N.domCache.get(this);
    return t ? pt(t.popup, e.input) : null
}

function so(e, t, n) {
    const o = N.domCache.get(e);
    t.forEach(r => {
        o[r].disabled = n
    })
}

function ao(e, t) {
    const n = D();
    if (!(!n || !e))
        if (e.type === "radio") {
            const o = n.querySelectorAll(`[name="${d.radio}"]`);
            for (let r = 0; r < o.length; r++) o[r].disabled = t
        } else e.disabled = t
}

function lo() {
    so(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    const e = N.focusedElement.get(this);
    e instanceof HTMLElement && document.activeElement === document.body && e.focus(), N.focusedElement.delete(this)
}

function co() {
    N.focusedElement.set(this, document.activeElement), so(this, ["confirmButton", "denyButton", "cancelButton"], !0)
}

function uo() {
    ao(this.getInput(), !1)
}

function fo() {
    ao(this.getInput(), !0)
}

function wo(e) {
    const t = N.domCache.get(this),
        n = N.innerParams.get(this);
    ne(t.validationMessage, e), t.validationMessage.className = d["validation-message"], n.customClass && n.customClass.validationMessage && O(t.validationMessage, n.customClass.validationMessage), W(t.validationMessage);
    const o = this.getInput();
    o && (o.setAttribute("aria-invalid", "true"), o.setAttribute("aria-describedby", d["validation-message"]), Hn(o), O(o, d.inputerror))
}

function ho() {
    const e = N.domCache.get(this);
    e.validationMessage && Y(e.validationMessage);
    const t = this.getInput();
    t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), ie(t, d.inputerror))
}
const be = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        draggable: !1,
        animation: !0,
        theme: "light",
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoFocus: !0,
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0,
        topLayer: !1
    },
    Wi = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "draggable", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "theme", "willClose"],
    Ki = {
        allowEnterKey: void 0
    },
    Yi = ["allowOutsideClick", "allowEnterKey", "backdrop", "draggable", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
    go = e => Object.prototype.hasOwnProperty.call(be, e),
    mo = e => Wi.indexOf(e) !== -1,
    po = e => Ki[e],
    Ji = e => {
        go(e) || J(`Unknown parameter "${e}"`)
    },
    Zi = e => {
        Yi.includes(e) && J(`The parameter "${e}" is incompatible with toasts`)
    },
    Gi = e => {
        const t = po(e);
        t && Nn(e, t)
    },
    bo = e => {
        e.backdrop === !1 && e.allowOutsideClick && J('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), e.theme && !["light", "dark", "auto", "minimal", "borderless", "bootstrap-4", "bootstrap-4-light", "bootstrap-4-dark", "bootstrap-5", "bootstrap-5-light", "bootstrap-5-dark", "material-ui", "material-ui-light", "material-ui-dark", "embed-iframe", "bulma", "bulma-light", "bulma-dark"].includes(e.theme) && J(`Invalid theme "${e.theme}"`);
        for (const t in e) Ji(t), e.toast && Zi(t), Gi(t)
    };

function yo(e) {
    const t = Z(),
        n = D(),
        o = N.innerParams.get(this);
    if (!n || ge(n, o.hideClass.popup)) {
        J("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        return
    }
    const r = Xi(e),
        i = Object.assign({}, o, r);
    bo(i), t && (t.dataset.swal2Theme = i.theme), Jn(this, i), N.innerParams.set(this, i), Object.defineProperties(this, {
        params: {
            value: Object.assign({}, this.params, e),
            writable: !1,
            enumerable: !0
        }
    })
}
const Xi = e => {
    const t = {};
    return Object.keys(e).forEach(n => {
        if (mo(n)) {
            const o = e;
            t[n] = o[n]
        } else J(`Invalid parameter to update: ${n}`)
    }), t
};

function vo() {
    var e;
    const t = N.domCache.get(this),
        n = N.innerParams.get(this);
    if (!n) {
        Co(this);
        return
    }
    t.popup && h.swalCloseEventFinishedCallback && (h.swalCloseEventFinishedCallback(), delete h.swalCloseEventFinishedCallback), typeof n.didDestroy == "function" && n.didDestroy(), (e = h.eventEmitter) === null || e === void 0 || e.emit("didDestroy"), Qi(this)
}
const Qi = e => {
        Co(e), delete e.params, delete h.keydownHandler, delete h.keydownTarget, delete h.currentInstance
    },
    Co = e => {
        e.isAwaitingPromise ? (xt(N, e), e.isAwaitingPromise = !0) : (xt(Se, e), xt(N, e), delete e.isAwaitingPromise, delete e.disableButtons, delete e.enableButtons, delete e.getInput, delete e.disableInput, delete e.enableInput, delete e.hideLoading, delete e.disableLoading, delete e.showValidationMessage, delete e.resetValidationMessage, delete e.close, delete e.closePopup, delete e.closeModal, delete e.closeToast, delete e.rejectPromise, delete e.update, delete e._destroy)
    },
    xt = (e, t) => {
        for (const n in e) e[n].delete(t)
    };
var es = Object.freeze({
    __proto__: null,
    _destroy: vo,
    close: pe,
    closeModal: pe,
    closePopup: pe,
    closeToast: pe,
    disableButtons: co,
    disableInput: fo,
    disableLoading: lt,
    enableButtons: lo,
    enableInput: uo,
    getInput: io,
    handleAwaitingPromise: Ge,
    hideLoading: lt,
    rejectPromise: to,
    resetValidationMessage: ho,
    showValidationMessage: wo,
    update: yo
});
const ts = (e, t, n) => {
        e.toast ? ns(e, t, n) : (rs(t), is(t), ss(e, t, n))
    },
    ns = (e, t, n) => {
        t.popup.onclick = () => {
            e && (os(e) || e.timer || e.input) || n(ze.close)
        }
    },
    os = e => !!(e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton);
let ct = !1;
const rs = e => {
        e.popup.onmousedown = () => {
            e.container.onmouseup = function(t) {
                e.container.onmouseup = () => {}, t.target === e.container && (ct = !0)
            }
        }
    },
    is = e => {
        e.container.onmousedown = t => {
            t.target === e.container && t.preventDefault(), e.popup.onmouseup = function(n) {
                e.popup.onmouseup = () => {}, (n.target === e.popup || n.target instanceof HTMLElement && e.popup.contains(n.target)) && (ct = !0)
            }
        }
    },
    ss = (e, t, n) => {
        t.container.onclick = o => {
            if (ct) {
                ct = !1;
                return
            }
            o.target === t.container && wt(e.allowOutsideClick) && n(ze.backdrop)
        }
    },
    as = e => typeof e == "object" && e !== null && "jquery" in e,
    Bn = e => e instanceof Element || as(e),
    ls = e => {
        const t = {};
        return typeof e[0] == "object" && !Bn(e[0]) ? Object.assign(t, e[0]) : ["title", "html", "icon"].forEach((n, o) => {
            const r = e[o];
            typeof r == "string" || Bn(r) ? t[n] = r : r !== void 0 && Pe(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof r}`)
        }), t
    };

function cs(...e) {
    return new this(...e)
}

function us(e) {
    class t extends this {
        _main(o, r) {
            return super._main(o, Object.assign({}, e, r))
        }
    }
    return t
}
const ds = () => h.timeout && h.timeout.getTimerLeft(),
    Eo = () => {
        if (h.timeout) return br(), h.timeout.stop()
    },
    ko = () => {
        if (h.timeout) {
            const e = h.timeout.start();
            return Zt(e), e
        }
    },
    fs = () => {
        const e = h.timeout;
        return e && (e.running ? Eo() : ko())
    },
    ws = e => {
        if (h.timeout) {
            const t = h.timeout.increase(e);
            return Zt(t, !0), t
        }
    },
    hs = () => !!(h.timeout && h.timeout.isRunning());
let xn = !1;
const Nt = {};

function gs(e = "data-swal-template") {
    Nt[e] = this, xn || (document.body.addEventListener("click", ms), xn = !0)
}
const ms = e => {
    for (let t = e.target; t && t !== document; t = t.parentNode)
        for (const n in Nt) {
            const o = t.getAttribute && t.getAttribute(n);
            if (o) {
                Nt[n].fire({
                    template: o
                });
                return
            }
        }
};
class ps {
    constructor() {
        this.events = {}
    }
    _getHandlersByEventName(t) {
        return typeof this.events[t] > "u" && (this.events[t] = []), this.events[t]
    }
    on(t, n) {
        const o = this._getHandlersByEventName(t);
        o.includes(n) || o.push(n)
    }
    once(t, n) {
        const o = (...r) => {
            this.removeListener(t, o), n.apply(this, r)
        };
        this.on(t, o)
    }
    emit(t, ...n) {
        this._getHandlersByEventName(t).forEach(o => {
            try {
                o.apply(this, n)
            } catch (r) {
                console.error(r)
            }
        })
    }
    removeListener(t, n) {
        const o = this._getHandlersByEventName(t),
            r = o.indexOf(n);
        r > -1 && o.splice(r, 1)
    }
    removeAllListeners(t) {
        this.events[t] !== void 0 && (this.events[t].length = 0)
    }
    reset() {
        this.events = {}
    }
}
h.eventEmitter = new ps;
const bs = (e, t) => {
        h.eventEmitter && h.eventEmitter.on(e, t)
    },
    ys = (e, t) => {
        h.eventEmitter && h.eventEmitter.once(e, t)
    },
    vs = (e, t) => {
        if (h.eventEmitter) {
            if (!e) {
                h.eventEmitter.reset();
                return
            }
            t ? h.eventEmitter.removeListener(e, t) : h.eventEmitter.removeAllListeners(e)
        }
    };
var Cs = Object.freeze({
    __proto__: null,
    argsToParams: ls,
    bindClickHandler: gs,
    clickCancel: ai,
    clickConfirm: Zn,
    clickDeny: si,
    enableLoading: Le,
    fire: cs,
    getActions: Ye,
    getCancelButton: _e,
    getCloseButton: Wt,
    getConfirmButton: fe,
    getContainer: Z,
    getDenyButton: Te,
    getFocusableElements: Kt,
    getFooter: _n,
    getHtmlContainer: Ut,
    getIcon: Fe,
    getIconContent: dr,
    getImage: Fn,
    getInputLabel: fr,
    getLoader: He,
    getPopup: D,
    getProgressSteps: qt,
    getTimerLeft: ds,
    getTimerProgressBar: gt,
    getTitle: Dn,
    getValidationMessage: ht,
    increaseTimer: ws,
    isDeprecatedParameter: po,
    isLoading: hr,
    isTimerRunning: hs,
    isUpdatableParameter: mo,
    isValidParameter: go,
    isVisible: ii,
    mixin: us,
    off: vs,
    on: bs,
    once: ys,
    resumeTimer: ko,
    showLoading: Le,
    stopTimer: Eo,
    toggleTimer: fs
});
class Es {
    constructor(t, n) {
        this.callback = t, this.remaining = n, this.running = !1, this.start()
    }
    start() {
        return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
    }
    stop() {
        return this.started && this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
    }
    increase(t) {
        const n = this.running;
        return n && this.stop(), this.remaining += t, n && this.start(), this.remaining
    }
    getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining
    }
    isRunning() {
        return this.running
    }
}
const Bo = ["swal-title", "swal-html", "swal-footer"],
    ks = e => {
        const t = typeof e.template == "string" ? document.querySelector(e.template) : e.template;
        if (!t) return {};
        const n = t.content;
        return Ss(n), Object.assign(Bs(n), xs(n), As(n), Ps(n), Ts(n), Ms(n), Is(n, Bo))
    },
    Bs = e => {
        const t = {};
        return Array.from(e.querySelectorAll("swal-param")).forEach(o => {
            Ae(o, ["name", "value"]);
            const r = o.getAttribute("name"),
                i = o.getAttribute("value");
            !r || !i || (r in be && typeof be[r] == "boolean" ? t[r] = i !== "false" : r in be && typeof be[r] == "object" ? t[r] = JSON.parse(i) : t[r] = i)
        }), t
    },
    xs = e => {
        const t = {};
        return Array.from(e.querySelectorAll("swal-function-param")).forEach(o => {
            const r = o.getAttribute("name"),
                i = o.getAttribute("value");
            !r || !i || (t[r] = new Function(`return ${i}`)())
        }), t
    },
    As = e => {
        const t = {};
        return Array.from(e.querySelectorAll("swal-button")).forEach(o => {
            Ae(o, ["type", "color", "aria-label"]);
            const r = o.getAttribute("type");
            if (!r || !["confirm", "cancel", "deny"].includes(r)) return;
            t[`${r}ButtonText`] = o.innerHTML, t[`show${jt(r)}Button`] = !0;
            const i = o.getAttribute("color");
            i !== null && (t[`${r}ButtonColor`] = i);
            const s = o.getAttribute("aria-label");
            s !== null && (t[`${r}ButtonAriaLabel`] = s)
        }), t
    },
    Ps = e => {
        const t = {},
            n = e.querySelector("swal-image");
        if (n) {
            Ae(n, ["src", "width", "height", "alt"]);
            const o = n.getAttribute("src");
            o !== null && (t.imageUrl = o || void 0);
            const r = n.getAttribute("width");
            r !== null && (t.imageWidth = r || void 0);
            const i = n.getAttribute("height");
            i !== null && (t.imageHeight = i || void 0);
            const s = n.getAttribute("alt");
            s !== null && (t.imageAlt = s || void 0)
        }
        return t
    },
    Ts = e => {
        const t = {},
            n = e.querySelector("swal-icon");
        return n && (Ae(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t
    },
    Ms = e => {
        const t = {},
            n = e.querySelector("swal-input");
        n && (Ae(n, ["type", "label", "placeholder", "value"]), t.input = n.getAttribute("type") || "text", n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")), n.hasAttribute("placeholder") && (t.inputPlaceholder = n.getAttribute("placeholder")), n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
        const o = Array.from(e.querySelectorAll("swal-input-option"));
        return o.length && (t.inputOptions = {}, o.forEach(r => {
            Ae(r, ["value"]);
            const i = r.getAttribute("value");
            if (!i) return;
            const s = r.innerHTML;
            t.inputOptions[i] = s
        })), t
    },
    Is = (e, t) => {
        const n = {};
        for (const o in t) {
            const r = t[o],
                i = e.querySelector(r);
            i && (Ae(i, []), n[r.replace(/^swal-/, "")] = i.innerHTML.trim())
        }
        return n
    },
    Ss = e => {
        const t = Bo.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
        Array.from(e.children).forEach(n => {
            const o = n.tagName.toLowerCase();
            t.includes(o) || J(`Unrecognized element <${o}>`)
        })
    },
    Ae = (e, t) => {
        Array.from(e.attributes).forEach(n => {
            t.indexOf(n.name) === -1 && J([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`, `${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])
        })
    },
    xo = 10,
    Ls = e => {
        var t, n;
        const o = Z(),
            r = D();
        if (!o || !r) return;
        typeof e.willOpen == "function" && e.willOpen(r), (t = h.eventEmitter) === null || t === void 0 || t.emit("willOpen", r);
        const s = window.getComputedStyle(document.body).overflowY;
        if (Ns(o, r, e), setTimeout(() => {
                Rs(o, r)
            }, xo), Yt() && (Os(o, e.scrollbarPadding !== void 0 ? e.scrollbarPadding : !1, s), gi()), mi && e.backdrop === !1 && r.scrollHeight > o.clientHeight && (o.style.pointerEvents = "auto"), !mt() && !h.previousActiveElement && (h.previousActiveElement = document.activeElement), typeof e.didOpen == "function") {
            const l = e.didOpen;
            setTimeout(() => l(r))
        }(n = h.eventEmitter) === null || n === void 0 || n.emit("didOpen", r)
    },
    ut = e => {
        const t = D();
        if (!t || e.target !== t) return;
        const n = Z();
        n && (t.removeEventListener("animationend", ut), t.removeEventListener("transitionend", ut), n.style.overflowY = "auto", ie(n, d["no-transition"]))
    },
    Rs = (e, t) => {
        jn(t) ? (e.style.overflowY = "hidden", t.addEventListener("animationend", ut), t.addEventListener("transitionend", ut)) : e.style.overflowY = "auto"
    },
    Os = (e, t, n) => {
        pi(), t && n !== "hidden" && Bi(n), setTimeout(() => {
            e.scrollTop = 0
        })
    },
    Ns = (e, t, n) => {
        var o;
        (o = n.showClass) !== null && o !== void 0 && o.backdrop && O(e, n.showClass.backdrop), n.animation ? (t.style.setProperty("opacity", "0", "important"), W(t, "grid"), setTimeout(() => {
            var r;
            (r = n.showClass) !== null && r !== void 0 && r.popup && O(t, n.showClass.popup), t.style.removeProperty("opacity")
        }, xo)) : W(t, "grid"), O([document.documentElement, document.body], d.shown), n.heightAuto && n.backdrop && !n.toast && O([document.documentElement, document.body], d["height-auto"])
    };
var An = {
    email: (e, t) => /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
    url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
};

function Ds(e) {
    e.inputValidator || (e.input === "email" && (e.inputValidator = An.email), e.input === "url" && (e.inputValidator = An.url))
}

function Fs(e) {
    (!e.target || typeof e.target == "string" && !document.querySelector(e.target) || typeof e.target != "string" && !e.target.appendChild) && (J('Target parameter is not valid, defaulting to "body"'), e.target = "body")
}

function _s(e) {
    Ds(e), e.showLoaderOnConfirm && !e.preConfirm && J(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Fs(e), typeof e.title == "string" && (e.title = e.title.split(`
`).join("<br />")), Ar(e)
}
let de;
var et = new WeakMap;
class U {
    constructor(...t) {
        if (nr(this, et, Promise.resolve({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            })), typeof window > "u") return;
        de = this;
        const n = Object.freeze(this.constructor.argsToParams(t));
        this.params = n, this.isAwaitingPromise = !1, or(et, this, this._main(de.params))
    }
    _main(t, n = {}) {
        if (bo(Object.assign({}, n, t)), h.currentInstance) {
            const i = Se.swalPromiseResolve.get(h.currentInstance),
                {
                    isAwaitingPromise: s
                } = h.currentInstance;
            h.currentInstance._destroy(), s || i({
                isDismissed: !0
            }), Yt() && Qn()
        }
        h.currentInstance = de;
        const o = zs(t, n);
        _s(o), Object.freeze(o), h.timeout && (h.timeout.stop(), delete h.timeout), clearTimeout(h.restoreFocusTimeout);
        const r = js(de);
        return Jn(de, o), N.innerParams.set(de, o), Hs(de, r, o)
    }
    then(t) {
        return mn(et, this).then(t)
    } finally(t) {
        return mn(et, this).finally(t)
    }
}
const Hs = (e, t, n) => new Promise((o, r) => {
        const i = s => {
            e.close({
                isDismissed: !0,
                dismiss: s,
                isConfirmed: !1,
                isDenied: !1
            })
        };
        Se.swalPromiseResolve.set(e, o), Se.swalPromiseReject.set(e, r), t.confirmButton.onclick = () => {
            ji(e)
        }, t.denyButton.onclick = () => {
            $i(e)
        }, t.cancelButton.onclick = () => {
            Vi(e, i)
        }, t.closeButton.onclick = () => {
            i(ze.close)
        }, ts(n, t, i), li(h, n, i), Li(e, n), Ls(n), $s(h, n, i), Vs(t, n), setTimeout(() => {
            t.container.scrollTop = 0
        })
    }),
    zs = (e, t) => {
        const n = ks(e),
            o = Object.assign({}, be, t, n, e);
        return o.showClass = Object.assign({}, be.showClass, o.showClass), o.hideClass = Object.assign({}, be.hideClass, o.hideClass), o.animation === !1 && (o.showClass = {
            backdrop: "swal2-noanimation"
        }, o.hideClass = {}), o
    },
    js = e => {
        const t = {
            popup: D(),
            container: Z(),
            actions: Ye(),
            confirmButton: fe(),
            denyButton: Te(),
            cancelButton: _e(),
            loader: He(),
            closeButton: Wt(),
            validationMessage: ht(),
            progressSteps: qt()
        };
        return N.domCache.set(e, t), t
    },
    $s = (e, t, n) => {
        const o = gt();
        Y(o), t.timer && (e.timeout = new Es(() => {
            n("timer"), delete e.timeout
        }, t.timer), t.timerProgressBar && o && (W(o), ee(o, t, "timerProgressBar"), setTimeout(() => {
            e.timeout && e.timeout.running && Zt(t.timer)
        })))
    },
    Vs = (e, t) => {
        if (!t.toast) {
            if (!wt(t.allowEnterKey)) {
                Nn("allowEnterKey", "preConfirm: () => false"), e.popup.focus();
                return
            }
            Us(e) || qs(e, t) || Rt(-1, 1)
        }
    },
    Us = e => {
        const t = Array.from(e.popup.querySelectorAll("[autofocus]"));
        for (const n of t)
            if (n instanceof HTMLElement && X(n)) return n.focus(), !0;
        return !1
    },
    qs = (e, t) => t.focusDeny && X(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && X(e.cancelButton) ? (e.cancelButton.focus(), !0) : t.focusConfirm && X(e.confirmButton) ? (e.confirmButton.focus(), !0) : !1;
U.prototype.disableButtons = co;
U.prototype.enableButtons = lo;
U.prototype.getInput = io;
U.prototype.disableInput = fo;
U.prototype.enableInput = uo;
U.prototype.hideLoading = lt;
U.prototype.disableLoading = lt;
U.prototype.showValidationMessage = wo;
U.prototype.resetValidationMessage = ho;
U.prototype.close = pe;
U.prototype.closePopup = pe;
U.prototype.closeModal = pe;
U.prototype.closeToast = pe;
U.prototype.rejectPromise = to;
U.prototype.update = yo;
U.prototype._destroy = vo;
Object.assign(U, Cs);
Object.keys(es).forEach(e => {
    U[e] = function(...t) {
        if (de && de[e]) return de[e](...t)
    }
});
U.DismissReason = ze;
U.version = "11.26.24";
const Ue = U;
Ue.default = Ue;
typeof document < "u" && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t
    } catch {
        n.innerText = t
    }
}(document, ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');
var Xe = {},
    Ws = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    },
    Ao = {},
    oe = {};
let on;
const Ks = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
oe.getSymbolSize = function(t) {
    if (!t) throw new Error('"version" cannot be null or undefined');
    if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
    return t * 4 + 17
};
oe.getSymbolTotalCodewords = function(t) {
    return Ks[t]
};
oe.getBCHDigit = function(e) {
    let t = 0;
    for (; e !== 0;) t++, e >>>= 1;
    return t
};
oe.setToSJISFunction = function(t) {
    if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
    on = t
};
oe.isKanjiModeEnabled = function() {
    return typeof on < "u"
};
oe.toSJIS = function(t) {
    return on(t)
};
var bt = {};
(function(e) {
    e.L = {
        bit: 1
    }, e.M = {
        bit: 0
    }, e.Q = {
        bit: 3
    }, e.H = {
        bit: 2
    };

    function t(n) {
        if (typeof n != "string") throw new Error("Param is not a string");
        switch (n.toLowerCase()) {
            case "l":
            case "low":
                return e.L;
            case "m":
            case "medium":
                return e.M;
            case "q":
            case "quartile":
                return e.Q;
            case "h":
            case "high":
                return e.H;
            default:
                throw new Error("Unknown EC Level: " + n)
        }
    }
    e.isValid = function(o) {
        return o && typeof o.bit < "u" && o.bit >= 0 && o.bit < 4
    }, e.from = function(o, r) {
        if (e.isValid(o)) return o;
        try {
            return t(o)
        } catch {
            return r
        }
    }
})(bt);

function Po() {
    this.buffer = [], this.length = 0
}
Po.prototype = {
    get: function(e) {
        const t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
    },
    put: function(e, t) {
        for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) === 1)
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(e) {
        const t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
    }
};
var Ys = Po;

function Qe(e) {
    if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
}
Qe.prototype.set = function(e, t, n, o) {
    const r = e * this.size + t;
    this.data[r] = n, o && (this.reservedBit[r] = !0)
};
Qe.prototype.get = function(e, t) {
    return this.data[e * this.size + t]
};
Qe.prototype.xor = function(e, t, n) {
    this.data[e * this.size + t] ^= n
};
Qe.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t]
};
var Js = Qe,
    To = {};
(function(e) {
    const t = oe.getSymbolSize;
    e.getRowColCoords = function(o) {
        if (o === 1) return [];
        const r = Math.floor(o / 7) + 2,
            i = t(o),
            s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * r - 2)) * 2,
            l = [i - 7];
        for (let c = 1; c < r - 1; c++) l[c] = l[c - 1] - s;
        return l.push(6), l.reverse()
    }, e.getPositions = function(o) {
        const r = [],
            i = e.getRowColCoords(o),
            s = i.length;
        for (let l = 0; l < s; l++)
            for (let c = 0; c < s; c++) l === 0 && c === 0 || l === 0 && c === s - 1 || l === s - 1 && c === 0 || r.push([i[l], i[c]]);
        return r
    }
})(To);
var Mo = {};
const Zs = oe.getSymbolSize,
    Pn = 7;
Mo.getPositions = function(t) {
    const n = Zs(t);
    return [
        [0, 0],
        [n - Pn, 0],
        [0, n - Pn]
    ]
};
var Io = {};
(function(e) {
    e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    const t = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    e.isValid = function(r) {
        return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7
    }, e.from = function(r) {
        return e.isValid(r) ? parseInt(r, 10) : void 0
    }, e.getPenaltyN1 = function(r) {
        const i = r.size;
        let s = 0,
            l = 0,
            c = 0,
            f = null,
            w = null;
        for (let L = 0; L < i; L++) {
            l = c = 0, f = w = null;
            for (let m = 0; m < i; m++) {
                let p = r.get(L, m);
                p === f ? l++ : (l >= 5 && (s += t.N1 + (l - 5)), f = p, l = 1), p = r.get(m, L), p === w ? c++ : (c >= 5 && (s += t.N1 + (c - 5)), w = p, c = 1)
            }
            l >= 5 && (s += t.N1 + (l - 5)), c >= 5 && (s += t.N1 + (c - 5))
        }
        return s
    }, e.getPenaltyN2 = function(r) {
        const i = r.size;
        let s = 0;
        for (let l = 0; l < i - 1; l++)
            for (let c = 0; c < i - 1; c++) {
                const f = r.get(l, c) + r.get(l, c + 1) + r.get(l + 1, c) + r.get(l + 1, c + 1);
                (f === 4 || f === 0) && s++
            }
        return s * t.N2
    }, e.getPenaltyN3 = function(r) {
        const i = r.size;
        let s = 0,
            l = 0,
            c = 0;
        for (let f = 0; f < i; f++) {
            l = c = 0;
            for (let w = 0; w < i; w++) l = l << 1 & 2047 | r.get(f, w), w >= 10 && (l === 1488 || l === 93) && s++, c = c << 1 & 2047 | r.get(w, f), w >= 10 && (c === 1488 || c === 93) && s++
        }
        return s * t.N3
    }, e.getPenaltyN4 = function(r) {
        let i = 0;
        const s = r.data.length;
        for (let c = 0; c < s; c++) i += r.data[c];
        return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * t.N4
    };

    function n(o, r, i) {
        switch (o) {
            case e.Patterns.PATTERN000:
                return (r + i) % 2 === 0;
            case e.Patterns.PATTERN001:
                return r % 2 === 0;
            case e.Patterns.PATTERN010:
                return i % 3 === 0;
            case e.Patterns.PATTERN011:
                return (r + i) % 3 === 0;
            case e.Patterns.PATTERN100:
                return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 === 0;
            case e.Patterns.PATTERN101:
                return r * i % 2 + r * i % 3 === 0;
            case e.Patterns.PATTERN110:
                return (r * i % 2 + r * i % 3) % 2 === 0;
            case e.Patterns.PATTERN111:
                return (r * i % 3 + (r + i) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + o)
        }
    }
    e.applyMask = function(r, i) {
        const s = i.size;
        for (let l = 0; l < s; l++)
            for (let c = 0; c < s; c++) i.isReserved(c, l) || i.xor(c, l, n(r, c, l))
    }, e.getBestMask = function(r, i) {
        const s = Object.keys(e.Patterns).length;
        let l = 0,
            c = 1 / 0;
        for (let f = 0; f < s; f++) {
            i(f), e.applyMask(f, r);
            const w = e.getPenaltyN1(r) + e.getPenaltyN2(r) + e.getPenaltyN3(r) + e.getPenaltyN4(r);
            e.applyMask(f, r), w < c && (c = w, l = f)
        }
        return l
    }
})(Io);
var yt = {};
const ye = bt,
    tt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
    nt = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
yt.getBlocksCount = function(t, n) {
    switch (n) {
        case ye.L:
            return tt[(t - 1) * 4 + 0];
        case ye.M:
            return tt[(t - 1) * 4 + 1];
        case ye.Q:
            return tt[(t - 1) * 4 + 2];
        case ye.H:
            return tt[(t - 1) * 4 + 3];
        default:
            return
    }
};
yt.getTotalCodewordsCount = function(t, n) {
    switch (n) {
        case ye.L:
            return nt[(t - 1) * 4 + 0];
        case ye.M:
            return nt[(t - 1) * 4 + 1];
        case ye.Q:
            return nt[(t - 1) * 4 + 2];
        case ye.H:
            return nt[(t - 1) * 4 + 3];
        default:
            return
    }
};
var So = {},
    vt = {};
const $e = new Uint8Array(512),
    dt = new Uint8Array(256);
(function() {
    let t = 1;
    for (let n = 0; n < 255; n++) $e[n] = t, dt[t] = n, t <<= 1, t & 256 && (t ^= 285);
    for (let n = 255; n < 512; n++) $e[n] = $e[n - 255]
})();
vt.log = function(t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return dt[t]
};
vt.exp = function(t) {
    return $e[t]
};
vt.mul = function(t, n) {
    return t === 0 || n === 0 ? 0 : $e[dt[t] + dt[n]]
};
(function(e) {
    const t = vt;
    e.mul = function(o, r) {
        const i = new Uint8Array(o.length + r.length - 1);
        for (let s = 0; s < o.length; s++)
            for (let l = 0; l < r.length; l++) i[s + l] ^= t.mul(o[s], r[l]);
        return i
    }, e.mod = function(o, r) {
        let i = new Uint8Array(o);
        for (; i.length - r.length >= 0;) {
            const s = i[0];
            for (let c = 0; c < r.length; c++) i[c] ^= t.mul(r[c], s);
            let l = 0;
            for (; l < i.length && i[l] === 0;) l++;
            i = i.slice(l)
        }
        return i
    }, e.generateECPolynomial = function(o) {
        let r = new Uint8Array([1]);
        for (let i = 0; i < o; i++) r = e.mul(r, new Uint8Array([1, t.exp(i)]));
        return r
    }
})(So);
const Lo = So;

function rn(e) {
    this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
}
rn.prototype.initialize = function(t) {
    this.degree = t, this.genPoly = Lo.generateECPolynomial(this.degree)
};
rn.prototype.encode = function(t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const n = new Uint8Array(t.length + this.degree);
    n.set(t);
    const o = Lo.mod(n, this.genPoly),
        r = this.degree - o.length;
    if (r > 0) {
        const i = new Uint8Array(this.degree);
        return i.set(o, r), i
    }
    return o
};
var Gs = rn,
    Ro = {},
    ve = {},
    sn = {};
sn.isValid = function(t) {
    return !isNaN(t) && t >= 1 && t <= 40
};
var we = {};
const Oo = "[0-9]+",
    Xs = "[A-Z $%*+\\-./:]+";
let qe = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
qe = qe.replace(/u/g, "\\u");
const Qs = "(?:(?![A-Z0-9 $%*+\\-./:]|" + qe + `)(?:.|[\r
]))+`;
we.KANJI = new RegExp(qe, "g");
we.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
we.BYTE = new RegExp(Qs, "g");
we.NUMERIC = new RegExp(Oo, "g");
we.ALPHANUMERIC = new RegExp(Xs, "g");
const ea = new RegExp("^" + qe + "$"),
    ta = new RegExp("^" + Oo + "$"),
    na = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
we.testKanji = function(t) {
    return ea.test(t)
};
we.testNumeric = function(t) {
    return ta.test(t)
};
we.testAlphanumeric = function(t) {
    return na.test(t)
};
(function(e) {
    const t = sn,
        n = we;
    e.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [10, 12, 14]
    }, e.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, e.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [8, 16, 16]
    }, e.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, e.MIXED = {
        bit: -1
    }, e.getCharCountIndicator = function(i, s) {
        if (!i.ccBits) throw new Error("Invalid mode: " + i);
        if (!t.isValid(s)) throw new Error("Invalid version: " + s);
        return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2]
    }, e.getBestModeForData = function(i) {
        return n.testNumeric(i) ? e.NUMERIC : n.testAlphanumeric(i) ? e.ALPHANUMERIC : n.testKanji(i) ? e.KANJI : e.BYTE
    }, e.toString = function(i) {
        if (i && i.id) return i.id;
        throw new Error("Invalid mode")
    }, e.isValid = function(i) {
        return i && i.bit && i.ccBits
    };

    function o(r) {
        if (typeof r != "string") throw new Error("Param is not a string");
        switch (r.toLowerCase()) {
            case "numeric":
                return e.NUMERIC;
            case "alphanumeric":
                return e.ALPHANUMERIC;
            case "kanji":
                return e.KANJI;
            case "byte":
                return e.BYTE;
            default:
                throw new Error("Unknown mode: " + r)
        }
    }
    e.from = function(i, s) {
        if (e.isValid(i)) return i;
        try {
            return o(i)
        } catch {
            return s
        }
    }
})(ve);
(function(e) {
    const t = oe,
        n = yt,
        o = bt,
        r = ve,
        i = sn,
        s = 7973,
        l = t.getBCHDigit(s);

    function c(m, p, k) {
        for (let P = 1; P <= 40; P++)
            if (p <= e.getCapacity(P, k, m)) return P
    }

    function f(m, p) {
        return r.getCharCountIndicator(m, p) + 4
    }

    function w(m, p) {
        let k = 0;
        return m.forEach(function(P) {
            const x = f(P.mode, p);
            k += x + P.getBitsLength()
        }), k
    }

    function L(m, p) {
        for (let k = 1; k <= 40; k++)
            if (w(m, k) <= e.getCapacity(k, p, r.MIXED)) return k
    }
    e.from = function(p, k) {
        return i.isValid(p) ? parseInt(p, 10) : k
    }, e.getCapacity = function(p, k, P) {
        if (!i.isValid(p)) throw new Error("Invalid QR Code version");
        typeof P > "u" && (P = r.BYTE);
        const x = t.getSymbolTotalCodewords(p),
            E = n.getTotalCodewordsCount(p, k),
            T = (x - E) * 8;
        if (P === r.MIXED) return T;
        const b = T - f(P, p);
        switch (P) {
            case r.NUMERIC:
                return Math.floor(b / 10 * 3);
            case r.ALPHANUMERIC:
                return Math.floor(b / 11 * 2);
            case r.KANJI:
                return Math.floor(b / 13);
            case r.BYTE:
            default:
                return Math.floor(b / 8)
        }
    }, e.getBestVersionForData = function(p, k) {
        let P;
        const x = o.from(k, o.M);
        if (Array.isArray(p)) {
            if (p.length > 1) return L(p, x);
            if (p.length === 0) return 1;
            P = p[0]
        } else P = p;
        return c(P.mode, P.getLength(), x)
    }, e.getEncodedBits = function(p) {
        if (!i.isValid(p) || p < 7) throw new Error("Invalid QR Code version");
        let k = p << 12;
        for (; t.getBCHDigit(k) - l >= 0;) k ^= s << t.getBCHDigit(k) - l;
        return p << 12 | k
    }
})(Ro);
var No = {};
const Dt = oe,
    Do = 1335,
    oa = 21522,
    Tn = Dt.getBCHDigit(Do);
No.getEncodedBits = function(t, n) {
    const o = t.bit << 3 | n;
    let r = o << 10;
    for (; Dt.getBCHDigit(r) - Tn >= 0;) r ^= Do << Dt.getBCHDigit(r) - Tn;
    return (o << 10 | r) ^ oa
};
var Fo = {};
const ra = ve;

function Re(e) {
    this.mode = ra.NUMERIC, this.data = e.toString()
}
Re.getBitsLength = function(t) {
    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
};
Re.prototype.getLength = function() {
    return this.data.length
};
Re.prototype.getBitsLength = function() {
    return Re.getBitsLength(this.data.length)
};
Re.prototype.write = function(t) {
    let n, o, r;
    for (n = 0; n + 3 <= this.data.length; n += 3) o = this.data.substr(n, 3), r = parseInt(o, 10), t.put(r, 10);
    const i = this.data.length - n;
    i > 0 && (o = this.data.substr(n), r = parseInt(o, 10), t.put(r, i * 3 + 1))
};
var ia = Re;
const sa = ve,
    At = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function Oe(e) {
    this.mode = sa.ALPHANUMERIC, this.data = e
}
Oe.getBitsLength = function(t) {
    return 11 * Math.floor(t / 2) + 6 * (t % 2)
};
Oe.prototype.getLength = function() {
    return this.data.length
};
Oe.prototype.getBitsLength = function() {
    return Oe.getBitsLength(this.data.length)
};
Oe.prototype.write = function(t) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
        let o = At.indexOf(this.data[n]) * 45;
        o += At.indexOf(this.data[n + 1]), t.put(o, 11)
    }
    this.data.length % 2 && t.put(At.indexOf(this.data[n]), 6)
};
var aa = Oe;
const la = ve;

function Ne(e) {
    this.mode = la.BYTE, typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e)
}
Ne.getBitsLength = function(t) {
    return t * 8
};
Ne.prototype.getLength = function() {
    return this.data.length
};
Ne.prototype.getBitsLength = function() {
    return Ne.getBitsLength(this.data.length)
};
Ne.prototype.write = function(e) {
    for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
};
var ca = Ne;
const ua = ve,
    da = oe;

function De(e) {
    this.mode = ua.KANJI, this.data = e
}
De.getBitsLength = function(t) {
    return t * 13
};
De.prototype.getLength = function() {
    return this.data.length
};
De.prototype.getBitsLength = function() {
    return De.getBitsLength(this.data.length)
};
De.prototype.write = function(e) {
    let t;
    for (t = 0; t < this.data.length; t++) {
        let n = da.toSJIS(this.data[t]);
        if (n >= 33088 && n <= 40956) n -= 33088;
        else if (n >= 57408 && n <= 60351) n -= 49472;
        else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
        n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13)
    }
};
var fa = De,
    _o = {
        exports: {}
    };
(function(e) {
    var t = {
        single_source_shortest_paths: function(n, o, r) {
            var i = {},
                s = {};
            s[o] = 0;
            var l = t.PriorityQueue.make();
            l.push(o, 0);
            for (var c, f, w, L, m, p, k, P, x; !l.empty();) {
                c = l.pop(), f = c.value, L = c.cost, m = n[f] || {};
                for (w in m) m.hasOwnProperty(w) && (p = m[w], k = L + p, P = s[w], x = typeof s[w] > "u", (x || P > k) && (s[w] = k, l.push(w, k), i[w] = f))
            }
            if (typeof r < "u" && typeof s[r] > "u") {
                var E = ["Could not find a path from ", o, " to ", r, "."].join("");
                throw new Error(E)
            }
            return i
        },
        extract_shortest_path_from_predecessor_list: function(n, o) {
            for (var r = [], i = o; i;) r.push(i), n[i], i = n[i];
            return r.reverse(), r
        },
        find_path: function(n, o, r) {
            var i = t.single_source_shortest_paths(n, o, r);
            return t.extract_shortest_path_from_predecessor_list(i, r)
        },
        PriorityQueue: {
            make: function(n) {
                var o = t.PriorityQueue,
                    r = {},
                    i;
                n = n || {};
                for (i in o) o.hasOwnProperty(i) && (r[i] = o[i]);
                return r.queue = [], r.sorter = n.sorter || o.default_sorter, r
            },
            default_sorter: function(n, o) {
                return n.cost - o.cost
            },
            push: function(n, o) {
                var r = {
                    value: n,
                    cost: o
                };
                this.queue.push(r), this.queue.sort(this.sorter)
            },
            pop: function() {
                return this.queue.shift()
            },
            empty: function() {
                return this.queue.length === 0
            }
        }
    };
    e.exports = t
})(_o);
var wa = _o.exports;
(function(e) {
    const t = ve,
        n = ia,
        o = aa,
        r = ca,
        i = fa,
        s = we,
        l = oe,
        c = wa;

    function f(E) {
        return unescape(encodeURIComponent(E)).length
    }

    function w(E, T, b) {
        const y = [];
        let F;
        for (;
            (F = E.exec(b)) !== null;) y.push({
            data: F[0],
            index: F.index,
            mode: T,
            length: F[0].length
        });
        return y
    }

    function L(E) {
        const T = w(s.NUMERIC, t.NUMERIC, E),
            b = w(s.ALPHANUMERIC, t.ALPHANUMERIC, E);
        let y, F;
        return l.isKanjiModeEnabled() ? (y = w(s.BYTE, t.BYTE, E), F = w(s.KANJI, t.KANJI, E)) : (y = w(s.BYTE_KANJI, t.BYTE, E), F = []), T.concat(b, y, F).sort(function(q, Q) {
            return q.index - Q.index
        }).map(function(q) {
            return {
                data: q.data,
                mode: q.mode,
                length: q.length
            }
        })
    }

    function m(E, T) {
        switch (T) {
            case t.NUMERIC:
                return n.getBitsLength(E);
            case t.ALPHANUMERIC:
                return o.getBitsLength(E);
            case t.KANJI:
                return i.getBitsLength(E);
            case t.BYTE:
                return r.getBitsLength(E)
        }
    }

    function p(E) {
        return E.reduce(function(T, b) {
            const y = T.length - 1 >= 0 ? T[T.length - 1] : null;
            return y && y.mode === b.mode ? (T[T.length - 1].data += b.data, T) : (T.push(b), T)
        }, [])
    }

    function k(E) {
        const T = [];
        for (let b = 0; b < E.length; b++) {
            const y = E[b];
            switch (y.mode) {
                case t.NUMERIC:
                    T.push([y, {
                        data: y.data,
                        mode: t.ALPHANUMERIC,
                        length: y.length
                    }, {
                        data: y.data,
                        mode: t.BYTE,
                        length: y.length
                    }]);
                    break;
                case t.ALPHANUMERIC:
                    T.push([y, {
                        data: y.data,
                        mode: t.BYTE,
                        length: y.length
                    }]);
                    break;
                case t.KANJI:
                    T.push([y, {
                        data: y.data,
                        mode: t.BYTE,
                        length: f(y.data)
                    }]);
                    break;
                case t.BYTE:
                    T.push([{
                        data: y.data,
                        mode: t.BYTE,
                        length: f(y.data)
                    }])
            }
        }
        return T
    }

    function P(E, T) {
        const b = {},
            y = {
                start: {}
            };
        let F = ["start"];
        for (let z = 0; z < E.length; z++) {
            const q = E[z],
                Q = [];
            for (let ce = 0; ce < q.length; ce++) {
                const re = q[ce],
                    Ce = "" + z + ce;
                Q.push(Ce), b[Ce] = {
                    node: re,
                    lastCount: 0
                }, y[Ce] = {};
                for (let je = 0; je < F.length; je++) {
                    const se = F[je];
                    b[se] && b[se].node.mode === re.mode ? (y[se][Ce] = m(b[se].lastCount + re.length, re.mode) - m(b[se].lastCount, re.mode), b[se].lastCount += re.length) : (b[se] && (b[se].lastCount = re.length), y[se][Ce] = m(re.length, re.mode) + 4 + t.getCharCountIndicator(re.mode, T))
                }
            }
            F = Q
        }
        for (let z = 0; z < F.length; z++) y[F[z]].end = 0;
        return {
            map: y,
            table: b
        }
    }

    function x(E, T) {
        let b;
        const y = t.getBestModeForData(E);
        if (b = t.from(T, y), b !== t.BYTE && b.bit < y.bit) throw new Error('"' + E + '" cannot be encoded with mode ' + t.toString(b) + `.
 Suggested mode is: ` + t.toString(y));
        switch (b === t.KANJI && !l.isKanjiModeEnabled() && (b = t.BYTE), b) {
            case t.NUMERIC:
                return new n(E);
            case t.ALPHANUMERIC:
                return new o(E);
            case t.KANJI:
                return new i(E);
            case t.BYTE:
                return new r(E)
        }
    }
    e.fromArray = function(T) {
        return T.reduce(function(b, y) {
            return typeof y == "string" ? b.push(x(y, null)) : y.data && b.push(x(y.data, y.mode)), b
        }, [])
    }, e.fromString = function(T, b) {
        const y = L(T, l.isKanjiModeEnabled()),
            F = k(y),
            z = P(F, b),
            q = c.find_path(z.map, "start", "end"),
            Q = [];
        for (let ce = 1; ce < q.length - 1; ce++) Q.push(z.table[q[ce]].node);
        return e.fromArray(p(Q))
    }, e.rawSplit = function(T) {
        return e.fromArray(L(T, l.isKanjiModeEnabled()))
    }
})(Fo);
const Ct = oe,
    Pt = bt,
    ha = Ys,
    ga = Js,
    ma = To,
    pa = Mo,
    Ft = Io,
    _t = yt,
    ba = Gs,
    ft = Ro,
    ya = No,
    va = ve,
    Tt = Fo;

function Ca(e, t) {
    const n = e.size,
        o = pa.getPositions(t);
    for (let r = 0; r < o.length; r++) {
        const i = o[r][0],
            s = o[r][1];
        for (let l = -1; l <= 7; l++)
            if (!(i + l <= -1 || n <= i + l))
                for (let c = -1; c <= 7; c++) s + c <= -1 || n <= s + c || (l >= 0 && l <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && c >= 2 && c <= 4 ? e.set(i + l, s + c, !0, !0) : e.set(i + l, s + c, !1, !0))
    }
}

function Ea(e) {
    const t = e.size;
    for (let n = 8; n < t - 8; n++) {
        const o = n % 2 === 0;
        e.set(n, 6, o, !0), e.set(6, n, o, !0)
    }
}

function ka(e, t) {
    const n = ma.getPositions(t);
    for (let o = 0; o < n.length; o++) {
        const r = n[o][0],
            i = n[o][1];
        for (let s = -2; s <= 2; s++)
            for (let l = -2; l <= 2; l++) s === -2 || s === 2 || l === -2 || l === 2 || s === 0 && l === 0 ? e.set(r + s, i + l, !0, !0) : e.set(r + s, i + l, !1, !0)
    }
}

function Ba(e, t) {
    const n = e.size,
        o = ft.getEncodedBits(t);
    let r, i, s;
    for (let l = 0; l < 18; l++) r = Math.floor(l / 3), i = l % 3 + n - 8 - 3, s = (o >> l & 1) === 1, e.set(r, i, s, !0), e.set(i, r, s, !0)
}

function Mt(e, t, n) {
    const o = e.size,
        r = ya.getEncodedBits(t, n);
    let i, s;
    for (i = 0; i < 15; i++) s = (r >> i & 1) === 1, i < 6 ? e.set(i, 8, s, !0) : i < 8 ? e.set(i + 1, 8, s, !0) : e.set(o - 15 + i, 8, s, !0), i < 8 ? e.set(8, o - i - 1, s, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, s, !0) : e.set(8, 15 - i - 1, s, !0);
    e.set(o - 8, 8, 1, !0)
}

function xa(e, t) {
    const n = e.size;
    let o = -1,
        r = n - 1,
        i = 7,
        s = 0;
    for (let l = n - 1; l > 0; l -= 2)
        for (l === 6 && l--;;) {
            for (let c = 0; c < 2; c++)
                if (!e.isReserved(r, l - c)) {
                    let f = !1;
                    s < t.length && (f = (t[s] >>> i & 1) === 1), e.set(r, l - c, f), i--, i === -1 && (s++, i = 7)
                } if (r += o, r < 0 || n <= r) {
                r -= o, o = -o;
                break
            }
        }
}

function Aa(e, t, n) {
    const o = new ha;
    n.forEach(function(c) {
        o.put(c.mode.bit, 4), o.put(c.getLength(), va.getCharCountIndicator(c.mode, e)), c.write(o)
    });
    const r = Ct.getSymbolTotalCodewords(e),
        i = _t.getTotalCodewordsCount(e, t),
        s = (r - i) * 8;
    for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 !== 0;) o.putBit(0);
    const l = (s - o.getLengthInBits()) / 8;
    for (let c = 0; c < l; c++) o.put(c % 2 ? 17 : 236, 8);
    return Pa(o, e, t)
}

function Pa(e, t, n) {
    const o = Ct.getSymbolTotalCodewords(t),
        r = _t.getTotalCodewordsCount(t, n),
        i = o - r,
        s = _t.getBlocksCount(t, n),
        l = o % s,
        c = s - l,
        f = Math.floor(o / s),
        w = Math.floor(i / s),
        L = w + 1,
        m = f - w,
        p = new ba(m);
    let k = 0;
    const P = new Array(s),
        x = new Array(s);
    let E = 0;
    const T = new Uint8Array(e.buffer);
    for (let q = 0; q < s; q++) {
        const Q = q < c ? w : L;
        P[q] = T.slice(k, k + Q), x[q] = p.encode(P[q]), k += Q, E = Math.max(E, Q)
    }
    const b = new Uint8Array(o);
    let y = 0,
        F, z;
    for (F = 0; F < E; F++)
        for (z = 0; z < s; z++) F < P[z].length && (b[y++] = P[z][F]);
    for (F = 0; F < m; F++)
        for (z = 0; z < s; z++) b[y++] = x[z][F];
    return b
}

function Ta(e, t, n, o) {
    let r;
    if (Array.isArray(e)) r = Tt.fromArray(e);
    else if (typeof e == "string") {
        let f = t;
        if (!f) {
            const w = Tt.rawSplit(e);
            f = ft.getBestVersionForData(w, n)
        }
        r = Tt.fromString(e, f || 40)
    } else throw new Error("Invalid data");
    const i = ft.getBestVersionForData(r, n);
    if (!i) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!t) t = i;
    else if (t < i) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`);
    const s = Aa(t, n, r),
        l = Ct.getSymbolSize(t),
        c = new ga(l);
    return Ca(c, t), Ea(c), ka(c, t), Mt(c, n, 0), t >= 7 && Ba(c, t), xa(c, s), isNaN(o) && (o = Ft.getBestMask(c, Mt.bind(null, c, n))), Ft.applyMask(o, c), Mt(c, n, o), {
        modules: c,
        version: t,
        errorCorrectionLevel: n,
        maskPattern: o,
        segments: r
    }
}
Ao.create = function(t, n) {
    if (typeof t > "u" || t === "") throw new Error("No input text");
    let o = Pt.M,
        r, i;
    return typeof n < "u" && (o = Pt.from(n.errorCorrectionLevel, Pt.M), r = ft.from(n.version), i = Ft.from(n.maskPattern), n.toSJISFunc && Ct.setToSJISFunction(n.toSJISFunc)), Ta(t, r, o, i)
};
var Ho = {},
    an = {};
(function(e) {
    function t(n) {
        if (typeof n == "number" && (n = n.toString()), typeof n != "string") throw new Error("Color should be defined as hex string");
        let o = n.slice().replace("#", "").split("");
        if (o.length < 3 || o.length === 5 || o.length > 8) throw new Error("Invalid hex color: " + n);
        (o.length === 3 || o.length === 4) && (o = Array.prototype.concat.apply([], o.map(function(i) {
            return [i, i]
        }))), o.length === 6 && o.push("F", "F");
        const r = parseInt(o.join(""), 16);
        return {
            r: r >> 24 & 255,
            g: r >> 16 & 255,
            b: r >> 8 & 255,
            a: r & 255,
            hex: "#" + o.slice(0, 6).join("")
        }
    }
    e.getOptions = function(o) {
        o || (o = {}), o.color || (o.color = {});
        const r = typeof o.margin > "u" || o.margin === null || o.margin < 0 ? 4 : o.margin,
            i = o.width && o.width >= 21 ? o.width : void 0,
            s = o.scale || 4;
        return {
            width: i,
            scale: i ? 4 : s,
            margin: r,
            color: {
                dark: t(o.color.dark || "#000000ff"),
                light: t(o.color.light || "#ffffffff")
            },
            type: o.type,
            rendererOpts: o.rendererOpts || {}
        }
    }, e.getScale = function(o, r) {
        return r.width && r.width >= o + r.margin * 2 ? r.width / (o + r.margin * 2) : r.scale
    }, e.getImageWidth = function(o, r) {
        const i = e.getScale(o, r);
        return Math.floor((o + r.margin * 2) * i)
    }, e.qrToImageData = function(o, r, i) {
        const s = r.modules.size,
            l = r.modules.data,
            c = e.getScale(s, i),
            f = Math.floor((s + i.margin * 2) * c),
            w = i.margin * c,
            L = [i.color.light, i.color.dark];
        for (let m = 0; m < f; m++)
            for (let p = 0; p < f; p++) {
                let k = (m * f + p) * 4,
                    P = i.color.light;
                if (m >= w && p >= w && m < f - w && p < f - w) {
                    const x = Math.floor((m - w) / c),
                        E = Math.floor((p - w) / c);
                    P = L[l[x * s + E] ? 1 : 0]
                }
                o[k++] = P.r, o[k++] = P.g, o[k++] = P.b, o[k] = P.a
            }
    }
})(an);
(function(e) {
    const t = an;

    function n(r, i, s) {
        r.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px"
    }

    function o() {
        try {
            return document.createElement("canvas")
        } catch {
            throw new Error("You need to specify a canvas element")
        }
    }
    e.render = function(i, s, l) {
        let c = l,
            f = s;
        typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), s || (f = o()), c = t.getOptions(c);
        const w = t.getImageWidth(i.modules.size, c),
            L = f.getContext("2d"),
            m = L.createImageData(w, w);
        return t.qrToImageData(m.data, i, c), n(L, f, w), L.putImageData(m, 0, 0), f
    }, e.renderToDataURL = function(i, s, l) {
        let c = l;
        typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), c || (c = {});
        const f = e.render(i, s, c),
            w = c.type || "image/png",
            L = c.rendererOpts || {};
        return f.toDataURL(w, L.quality)
    }
})(Ho);
var zo = {};
const Ma = an;

function Mn(e, t) {
    const n = e.a / 255,
        o = t + '="' + e.hex + '"';
    return n < 1 ? o + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : o
}

function It(e, t, n) {
    let o = e + t;
    return typeof n < "u" && (o += " " + n), o
}

function Ia(e, t, n) {
    let o = "",
        r = 0,
        i = !1,
        s = 0;
    for (let l = 0; l < e.length; l++) {
        const c = Math.floor(l % t),
            f = Math.floor(l / t);
        !c && !i && (i = !0), e[l] ? (s++, l > 0 && c > 0 && e[l - 1] || (o += i ? It("M", c + n, .5 + f + n) : It("m", r, 0), r = 0, i = !1), c + 1 < t && e[l + 1] || (o += It("h", s), s = 0)) : r++
    }
    return o
}
zo.render = function(t, n, o) {
    const r = Ma.getOptions(n),
        i = t.modules.size,
        s = t.modules.data,
        l = i + r.margin * 2,
        c = r.color.light.a ? "<path " + Mn(r.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
        f = "<path " + Mn(r.color.dark, "stroke") + ' d="' + Ia(s, i, r.margin) + '"/>',
        w = 'viewBox="0 0 ' + l + " " + l + '"',
        m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + w + ' shape-rendering="crispEdges">' + c + f + `</svg>
`;
    return typeof o == "function" && o(null, m), m
};
const Sa = Ws,
    Ht = Ao,
    jo = Ho,
    La = zo;

function ln(e, t, n, o, r) {
    const i = [].slice.call(arguments, 1),
        s = i.length,
        l = typeof i[s - 1] == "function";
    if (!l && !Sa()) throw new Error("Callback required as last argument");
    if (l) {
        if (s < 2) throw new Error("Too few arguments provided");
        s === 2 ? (r = n, n = t, t = o = void 0) : s === 3 && (t.getContext && typeof r > "u" ? (r = o, o = void 0) : (r = o, o = n, n = t, t = void 0))
    } else {
        if (s < 1) throw new Error("Too few arguments provided");
        return s === 1 ? (n = t, t = o = void 0) : s === 2 && !t.getContext && (o = n, n = t, t = void 0), new Promise(function(c, f) {
            try {
                const w = Ht.create(n, o);
                c(e(w, t, o))
            } catch (w) {
                f(w)
            }
        })
    }
    try {
        const c = Ht.create(n, o);
        r(null, e(c, t, o))
    } catch (c) {
        r(c)
    }
}
Xe.create = Ht.create;
Xe.toCanvas = ln.bind(null, jo.render);
Xe.toDataURL = ln.bind(null, jo.renderToDataURL);
Xe.toString = ln.bind(null, function(e, t, n) {
    return La.render(e, n)
});

const R = new(window.AudioContext || window.webkitAudioContext)();

function Be(e, t, n, o = .1) {
    R.state === "suspended" && R.resume();
    const r = R.createOscillator(),
        i = R.createGain();
    r.type = t, r.frequency.setValueAtTime(e, R.currentTime), i.gain.setValueAtTime(o, R.currentTime), i.gain.exponentialRampToValueAtTime(.01, R.currentTime + n), r.connect(i), i.connect(R.destination), r.start(), r.stop(R.currentTime + n)
}

function Ra() {
    Be(440, "triangle", .2, .2), setTimeout(() => Be(554.37, "triangle", .2, .2), 150), setTimeout(() => Be(659.25, "triangle", .4, .2), 300), setTimeout(() => Be(880, "triangle", .6, .2), 450)
}

function Oa() {
    Be(300, "sawtooth", .4, .2), setTimeout(() => Be(250, "sawtooth", .4, .2), 300), setTimeout(() => Be(200, "sawtooth", .8, .2), 600)
}

function Bg() {
    Be(880, "square", .2, .1), setTimeout(() => Be(659.25, "square", .2, .1), 100), setTimeout(() => Be(554.37, "square", .4, .1), 200), setTimeout(() => Be(440, "square", .6, .1), 300)
}

function Na() {
    R.state === "suspended" && R.resume();
    const e = R.sampleRate * .1,
        t = R.createBuffer(1, e, R.sampleRate),
        n = t.getChannelData(0);
    for (let s = 0; s < e; s++) n[s] = Math.random() * 2 - 1;
    const o = R.createBufferSource();
    o.buffer = t;
    const r = R.createBiquadFilter();
    r.type = "bandpass", r.frequency.value = 1e3;
    const i = R.createGain();
    i.gain.setValueAtTime(.1, R.currentTime), i.gain.exponentialRampToValueAtTime(.01, R.currentTime + .1), o.connect(r), r.connect(i), i.connect(R.destination), o.start()
}
let In = !1;

function Da() {
    if (In) return;
    In = !0, R.state === "suspended" && R.resume();

    const e = R.createOscillator(),
        t = R.createGain();
    e.type = "sine", e.frequency.setValueAtTime(25, R.currentTime), e.frequency.setTargetAtTime(20, R.currentTime + 10, 5), t.gain.setValueAtTime(0, R.currentTime), t.gain.linearRampToValueAtTime(.03, R.currentTime + 2);
    
    const n = R.createOscillator();
    n.type = "sine", n.frequency.setValueAtTime(329.63, R.currentTime);
    
    const o = R.createGain();
    o.gain.value = .02, e.connect(t), n.connect(o), o.connect(t), t.connect(R.destination), e.start(), n.start()
}

const options = {
    headers: new Headers({ 'content-type': 'audio/ogg' }),
    mode: 'no-cors',
    cache: 'default',
};

function PlayAudio(url, options) {
    try {
        if (R.state === "suspended") R.resume();
        fetch(url, options)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.arrayBuffer();
            })
            .then(arrayBuffer => {
                console.log('Buffer size:', arrayBuffer.byteLength);
                return R.decodeAudioData(arrayBuffer);
            })
            .then(audioBuffer => {
                const source = R.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(R.destination);
                source.start();
            })
            .catch(error => {
                console.error('Web Audio decode error:', error);
            });
    } catch (error) {
        console.error('Audio playback error:', error);
    }
}

function BgAudio() {
    PlayAudio('../raspaygana/audio/bg-audio.ogg');
}


const St = [{
        id: "facial",
        name: "Limpieza Facial Nutritiva",
        image: "images/uploaded_media_1_1774511201584.jpg"
    }, {
        id: "manos",
        name: "Spa de Manos",
        image: "images/uploaded_media_2_1774511201584.jpg"
    }, {
        id: "capilar",
        name: "Tratamiento Capilar Orgánico",
        image: "images/uploaded_media_3_1774511201584.jpg"
    }],

    $o = 3,
    Fa = .5,
    Vo = Math.random() < Fa,
    Me = [];
let Ve = null;
if (Vo) {
    Ve = St[Math.floor(Math.random() * St.length)];
    for (let e = 0; e < $o; e++) Me.push(Ve)
} else {
    const e = [...St].sort(() => .5 - Math.random());
    Me.push(e[0]), Me.push(e[0]), Me.push(e[1]), Me.sort(() => .5 - Math.random())
}
let Sn = 0;

function renderScratchGrid() {
    const e = document.getElementById("scratch-grid");
    e.innerHTML = "";
    Me.forEach((t, n) => {
        const o = document.createElement("div");
        o.className = "scratch-card";
        const r = document.createElement("img");
        r.src = t.image, o.appendChild(r);
        const i = document.createElement("canvas");
        i.width = 110, i.height = 110, o.appendChild(i), e.appendChild(o), Ha(i)
    })
}

function createStartButton() {
    const g = document.getElementById("title-container");
    g.innerHTML = "<h1>¡Raspadito Ganador!</h1><br><p>Raspa y descubre tres figuras iguales para obtener un fabuloso premio</p>";

    const f = document.getElementById("button-container");
    f.innerHTML = "";
    const s = document.createElement("div");
    s.className = "button-play";
    const u = document.createElement("button");
    u.type = "button";
    u.textContent = "Play";
    u.addEventListener("click", () => {
        BgAudio();
        renderScratchGrid();
        f.style.display = "none";
        g.style.display = "none";
    });
    s.appendChild(u);
    f.appendChild(s);
}

function Ha(e, t) {
    const n = e.getContext("2d", {
        willReadFrequently: true
    });
    n.fillStyle = "#b39ddb", n.fillRect(0, 0, e.width, e.height), n.fillStyle = "#fff", n.font = "bold 16px sans-serif", n.textAlign = "center", n.fillText("RASPA", e.width / 2, e.height / 2 + 6);
    let o = !1,
        r = !1;
    const i = f => {
            Da(), o = !0, Na(), l(f)
        },
        s = () => {
            o = !1, c()
        },
        l = f => {
            if (!o || r) return;
            f.preventDefault();
            const w = e.getBoundingClientRect();
            let L, m;
            f.touches && f.touches.length > 0 ? (L = f.touches[0].clientX - w.left, m = f.touches[0].clientY - w.top) : (L = f.clientX - w.left, m = f.clientY - w.top), n.globalCompositeOperation = "destination-out", n.beginPath(), n.arc(L, m, 15, 0, Math.PI * 2), n.fill()
        };
    e.addEventListener("mousedown", i), e.addEventListener("mousemove", l), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("touchstart", i, {
        passive: !1
    }), e.addEventListener("touchmove", l, {
        passive: !1
    }), e.addEventListener("touchend", s);

    function c() {
        if (r) return;
        const f = n.getImageData(0, 0, e.width, e.height);
        let w = 0;
        for (let m = 3; m < f.data.length; m += 4) f.data[m] === 0 && w++;
        w / (e.width * e.height) * 100 > 50 && (n.clearRect(0, 0, e.width, e.height), r = !0, za())
    }
}

function za(e) {
    Sn++, Sn === $o && ja()
}

function ja() {
    if (Vo && Ve) {
        Ra(), $a();
        const e = encodeURIComponent(`Hola soy ______ y me gané el premio de: ${Ve.name} en el Raspadito.`);
        Xe.toDataURL(`https://wa.me/529223686182?text=${e}`, {
            width: 200,
            margin: 2
        })
        .then(t => {
            setTimeout(() => {
                const whatsappUrl = `https://wa.me/529223686182?text=${e}`;
                Ue.fire({
                    title: "¡Felicidades!",
                    html: `<p>Has ganado:
                    <br> <b><p>${Ve.name}</b></p>
                    <img src="${Ve.image}" alt="${Ve.name}" style="margin-top:10px; border-radius:10px; width: 200px; height: auto; box-shadow:0 2px 10px rgba(0,0,0,0.1);"/>`,
                    confirmButtonText: "¡Reclama tu premio!"
                }).then(() => {
                    window.open(whatsappUrl, "_blank");
                    location.reload()
                })
            }, 1e3)
        })
        .catch(t => console.error("Error generating QR", t))
    } else Oa(), Ue.fire({
        title: "¡Suerte para la próxima!",
        text: "Sigue participando",
        icon: "info",
        confirmButtonText: "Intentar de nuevo"
    }).then(() => {
        location.reload()
    })
}

function $a() {
    const t = Date.now() + 3e3,
        n = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 1e4
        };

    function o(i, s) {
        return Math.random() * (s - i) + i
    }
    const r = setInterval(function() {
        const i = t - Date.now();
        if (i <= 0) return clearInterval(r);
        const s = 50 * (i / 3e3);
        gn({
            ...n,
            particleCount: s,
            origin: {
                x: o(.1, .3),
                y: Math.random() - .2
            }
        }), gn({
            ...n,
            particleCount: s,
            origin: {
                x: o(.7, .9),
                y: Math.random() - .2
            }
        })
    }, 250)
}
createStartButton();


//<img src="${t}" alt="WhatsApp QR" style="margin-top:10px; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1);"/>`,

