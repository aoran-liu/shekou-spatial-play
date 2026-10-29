import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, at as k, b as A, c as j, ct as M, d as N, dt as P, et as F, f as I, ft as L, g as R, gt as z, h as B, ht as V, i as ee, it as te, j as ne, l as re, lt as ie, m as ae, mt as oe, n as se, o as ce, ot as H, p as le, pt as ue, q as de, r as fe, rt as pe, st as me, t as he, tt as ge, u as _e, ut as ve, v as ye, w as be, x as xe, y as Se, z as Ce } from "./GLTFLoader-DkEyfoyr.js";
//#region src/harborDetails.js
function we(e, n, { textureFactory: r, anisotropy: i = 4, looseCargo: a = [
	[-22, 13],
	[-22, -13],
	[-22, -58]
] } = {}) {
	let o = new t();
	o.name = "Detailed_Harbor";
	let s = [], u = [], d = [], f = [], p = [], h = new re(1, 1, 1), g = new Se(1, 1, 1, 8), _ = new Se(1, 1, 1, 16), y = /* @__PURE__ */ new Map();
	function b(e, t, n = 0) {
		let a;
		if (e) {
			if (!y.has(e)) {
				let t = r ? r(e) : new M().load(fe("/images/harbor/" + e + ".jpg"));
				t && (t.colorSpace = ge, t.anisotropy = i), y.set(e, t);
			}
			a = y.get(e);
		}
		return new c({
			name: e || t,
			color: t,
			...a ? { map: a } : {},
			roughness: .88,
			metalness: n
		});
	}
	let x = [
		"steel-blue",
		"steel-red",
		"steel-olive"
	].map((e) => b(e, "#ffffff", .22)), S = b(null, "#444a48", .38), C = b(null, "#aea58c", .55), w = b(null, "#825035", .12), T = b("timber", "#ffffff"), E = b("cardboard", "#ffffff"), D = b("carton-label", "#ffffff"), O = b(null, "#c6ab78"), k = b(null, "#b3a079"), A = b(null, "#303530");
	function N(e, t, n, r, i, a, o, s, c = "") {
		let l = new v(h, s);
		return l.name = c, l.position.set(i, a, o), l.scale.set(t, n, r), l.castShadow = l.receiveShadow = !0, e.add(l), l;
	}
	function F(e, t, n, r, i = S) {
		let a = new V(...t), o = new V(...n), s = o.clone().sub(a), c = new v(g, i);
		return c.scale.set(r, s.length(), r), c.position.copy(a.add(o).multiplyScalar(.5)), c.quaternion.setFromUnitVectors(new V(0, 1, 0), s.normalize()), c.castShadow = !0, e.add(c), c;
	}
	function I(e, t, n = .014) {
		let r = new v(new P(new ae(t.map((e) => new V(...e))), Math.max(16, t.length * 3), n, 5, !1), k);
		return r.name = "BraidedDockRope", r.castShadow = !0, e.add(r), r;
	}
	function L(e, t = d) {
		e.updateWorldMatrix(!0, !1), t.push(new j().setFromObject(e));
	}
	function R(e, n, r, i, a = 1.25, o = 1.05) {
		let s = new t();
		s.name = "TimberPallet", s.position.set(n, r, i), e.add(s);
		for (let e of [
			-a * .38,
			0,
			a * .38
		]) {
			N(s, .12, .09, o, e, .045, 0, T);
			for (let t of [
				-o * .37,
				0,
				o * .37
			]) N(s, .15, .12, .18, e, .14, t, T);
		}
		for (let e = 0; e < 6; e++) N(s, a, .06, o / 7, 0, .23, (e - 2.5) * o / 6, T);
		return s;
	}
	function z(e, n, r, i, a = .65, o = .58, s = .56, c = !1) {
		let l = new t();
		if (l.name = c ? "OpenCardboardCarton" : "TiedCardboardCarton", l.position.set(n, r, i), e.add(l), c) {
			N(l, a, .025, s, 0, .015, 0, E);
			for (let e of [-1, 1]) {
				N(l, a, o, .025, 0, o / 2, e * s / 2, E), N(l, .025, o, s, e * a / 2, o / 2, 0, E);
				let n = new t();
				n.position.set(0, o, e * s / 2), n.rotation.x = e * .63, l.add(n), N(n, a, .02, s * .4, 0, 0, e * s * .2, E, "FoldedCartonFlap");
				let r = new t();
				r.position.set(e * a / 2, o, 0), r.rotation.z = -e * .72, l.add(r), N(r, a * .36, .02, s, e * a * .18, 0, 0, E, "FoldedCartonFlap");
			}
			for (let e = 0; e < 7; e++) {
				let t = new v(new m(.1, 0), O);
				t.position.set(Math.sin(e * 3) * a * .26, o * .65 + e % 2 * .07, Math.cos(e * 2) * s * .25), t.scale.y = .65, l.add(t);
			}
		} else {
			N(l, a, o, s, 0, o / 2, 0, E), N(l, .085, .007, s + .008, 0, o + .004, 0, O);
			for (let e of [-1, 1]) N(l, .085, o * .22, .007, 0, o * .89, e * (s / 2 + .004), O);
			I(l, [
				[
					-a / 2 - .01,
					o * .5,
					-s / 2
				],
				[
					a / 2 + .01,
					o * .5,
					-s / 2
				],
				[
					a / 2 + .01,
					o * .5,
					s / 2
				],
				[
					-a / 2 - .01,
					o * .5,
					s / 2
				],
				[
					-a / 2 - .01,
					o * .5,
					-s / 2
				]
			], .009), I(l, [
				[
					0,
					.01,
					-s / 2 - .01
				],
				[
					0,
					o,
					-s / 2 - .01
				],
				[
					0,
					o + .015,
					s / 2 + .01
				],
				[
					0,
					.01,
					s / 2 + .01
				]
			], .009);
		}
		return N(l, a * .72, o * .72, .006, 0, o * .5, s / 2 + .017, D, "ShippingLabel"), l.updateWorldMatrix(!0, !0), d.push(new j(new V(n - a / 2, r, i - s / 2), new V(n + a / 2, r + o, i + s / 2)).applyMatrix4(e.matrixWorld)), l;
	}
	function B(e, t, n, r) {
		let i = [];
		for (let e = 0; e <= 210; e++) {
			let a = e / 210 * Math.PI * 10, o = .22 + e / 210 * .28;
			i.push([
				t + Math.cos(a) * o,
				n + .025 + Math.sin(a * 3) * .006,
				r + Math.sin(a) * o
			]);
		}
		I(e, i, .027), I(e, [
			[
				t + .5,
				n + .035,
				r
			],
			[
				t + .85,
				n + .03,
				r + .2
			],
			[
				t + 1.15,
				n + .025,
				r + .13
			]
		], .027);
	}
	function ee(e, n, r, i, a = !1) {
		let o = new t();
		if (o.name = a ? "DockFlatbedTrailer" : "SackBarrow", o.position.set(n, r, i), e.add(o), a) {
			N(o, 1.1, .12, 1.8, 0, .43, 0, w);
			for (let e = 0; e < 7; e++) N(o, 1.05, .045, .23, 0, .51, (e - 3) * .25, T);
			for (let e of [-.57, .57]) for (let t of [-.6, .6]) {
				let n = new v(_, A);
				n.scale.set(.21, .13, .21), n.rotation.z = Math.PI / 2, n.position.set(e, .24, t), o.add(n), F(o, [
					e,
					.24,
					t
				], [
					e + Math.sign(e) * .08,
					.24,
					t
				], .1, w);
			}
			F(o, [
				0,
				.4,
				-.9
			], [
				0,
				.75,
				-1.65
			], .035, w), F(o, [
				-.25,
				.75,
				-1.65
			], [
				.25,
				.75,
				-1.65
			], .035, S), z(o, -.12, .54, -.25, .65, .62, .65);
		} else {
			N(o, .62, .035, .44, 0, .13, .1, w);
			for (let e of [-.24, .24]) {
				F(o, [
					e,
					.14,
					0
				], [
					e,
					1.3,
					-.14
				], .032, w), F(o, [
					e,
					1.3,
					-.14
				], [
					e,
					1.37,
					-.35
				], .036, A);
				let t = new v(_, A);
				t.scale.set(.17, .1, .17), t.rotation.z = Math.PI / 2, t.position.set(e * 1.4, .19, -.03), o.add(t), F(o, [
					e * 1.4,
					.19,
					-.03
				], [
					e * 1.4 + Math.sign(e) * .06,
					.19,
					-.03
				], .08, w);
			}
			for (let e of [
				.35,
				.68,
				1.01
			]) F(o, [
				-.24,
				e,
				-.07
			], [
				.24,
				e,
				-.07
			], .023, w);
		}
		return o.updateWorldMatrix(!0, !0), d.push(new j().setFromObject(o)), o;
	}
	function te(e, n, r) {
		let i = e.getSize(new V()), a = e.getCenter(new V()), c = new t();
		c.name = "CorrugatedContainer_" + n, c.position.set(a.x, e.min.y, a.z), o.add(c), c.updateWorldMatrix(!0, !1);
		let l = i.x, f = i.y, m = i.z, h = x[n % 3], g = [];
		g.push(N(c, l, .1, m, 0, .05, 0, T, "ContainerFloor")), g.push(N(c, l, .065, m, 0, f - .032, 0, h)), g.push(N(c, .055, f, m, -l / 2, f / 2, 0, h));
		for (let e of [-m / 2, m / 2]) {
			g.push(N(c, l, f, .055, 0, f / 2, e, h));
			let t = Math.max(12, Math.round(l / .21));
			for (let n = 0; n < t; n++) N(c, .065, f - .22, .065, -l / 2 + .13 + n * (l - .26) / (t - 1), f / 2, e + Math.sign(e) * .027, h, "PressedSteelRib");
			for (let t of [.08, f - .08]) N(c, l + .1, .13, .13, 0, t, e, h);
		}
		for (let e of [-l / 2, l / 2]) for (let t of [-m / 2, m / 2]) {
			N(c, .13, f, .13, e, f / 2, t, h);
			for (let n of [.1, f - .1]) N(c, .2, .2, .2, e, n, t, w, "CornerCasting"), N(c, .007, .075, .09, e + .104, n, t, S, "CornerCastingSocket");
		}
		let _ = [];
		for (let e of [-1, 1]) {
			let n = new t();
			n.name = "HingedCargoDoor", n.position.set(l / 2 + .045, 0, e * m / 2), c.add(n);
			let i = -e * m / 4;
			N(n, .07, f - .12, m / 2 - .035, 0, f / 2, i, h);
			for (let e of [
				.1,
				f / 2,
				f - .1
			]) N(n, .055, .065, m / 2 - .06, .06, e, i, h);
			for (let e of [-m * .13, m * .13]) {
				F(n, [
					.11,
					.17,
					i + e
				], [
					.11,
					f - .17,
					i + e
				], .021, C), N(n, .065, .055, .22, .13, f * .35, i + e, C);
				for (let t of [
					.19,
					f * .48,
					f - .19
				]) N(n, .08, .1, .09, .1, t, i + e, w);
			}
			for (let e of [
				.23,
				f / 2,
				f - .23
			]) N(n, .12, .11, .13, .035, e, 0, w, "DoorHinge");
			N(n, .008, .4, .43, .088, f * .74, i, D, "ContainerManifest"), _.push({
				pivot: n,
				sign: -e
			}), s.push(n), r || (n.rotation.y = 0);
		}
		if (c.updateWorldMatrix(!0, !0), r) {
			p.push({
				name: c.name + "_floor",
				min: [
					e.min.x + .06,
					e.min.y,
					e.min.z + .06
				],
				max: [
					e.max.x - .06,
					e.min.y + .1,
					e.max.z - .06
				]
			});
			for (let e of g.slice(2)) L(e);
			let t = {
				root: c,
				hinges: _,
				doorBoxes: _.map(({ pivot: e }) => {
					let t = new j().setFromObject(e);
					return d.push(t), t;
				}),
				angle: 1.65,
				target: 1.65,
				width: m,
				point: new V(a.x + l / 2 + .9, e.min.y, a.z)
			};
			u.push(t);
			for (let e of [-1, 1]) R(c, -l * .25, .11, e * m * .21, 1.1, .9), z(c, -l * .25, .38, e * m * .21, .7, .68, .65);
		} else d.push(e.clone());
		return c;
	}
	let ne = [];
	e.traverse((e) => {
		e.isMesh && e.name.startsWith("BoxGeometry_02990") && ne.push(e);
	}), ne.sort((e, t) => Math.abs(new j().setFromObject(e).getCenter(new V()).z - 9) - Math.abs(new j().setFromObject(t).getCenter(new V()).z - 9));
	let ie = ne.map((e) => new j().setFromObject(e));
	ne.forEach((e, t) => {
		let r = new j().setFromObject(e), i = r.getSize(new V()), a = r.getCenter(new V()), s = Math.max(.05, ...n.walkAreas.filter((e) => a.x > e.min[0] && a.x < e.max[0] && a.z > e.min[2] && a.z < e.max[2] && e.max[1] < 1).map((e) => e.max[1])), c = Math.min(r.min.y, ...ie.filter((e) => e.min.x < r.max.x && e.max.x > r.min.x && e.min.z < r.max.z && e.max.z > r.min.z).map((e) => e.min.y));
		r.translate(new V(0, Math.max(0, s - c), 0)), f.push(e.name), e.removeFromParent(), i.x > 3 ? te(r, t, u.length < 3 && r.min.y < .8 && a.z > -40) : (R(o, a.x, s, a.z, 1.45, 1.2), z(o, a.x, s + .26, a.z, .95, .85, .85), z(o, a.x + .16, s + 1.11, a.z, .62, .55, .6));
	});
	for (let [e, t] of a) {
		let r = Math.max(.05, ...n.walkAreas.filter((n) => e > n.min[0] && e < n.max[0] && t > n.min[2] && t < n.max[2] && n.max[1] < 1).map((e) => e.max[1]));
		n.walkAreas.some((n) => e > n.min[0] + 1 && e < n.max[0] - 1 && t > n.min[2] + 2 && t < n.max[2] - 2) && (R(o, e, r, t, 1.5, 1.15), z(o, e - .35, r + .26, t, .65, .7, .8), z(o, e + .37, r + .26, t, .65, .52, .7, !0), z(o, e - .35, r + .96, t, .57, .42, .55), ee(o, e + .1, r, t + 2.3, t < 0), B(o, e - 1.2, r, t + 1.3));
	}
	e.add(o), e.updateMatrixWorld(!0);
	function oe(e) {
		for (let t of u) t.angle = l.lerp(t.angle, t.target, 1 - Math.exp(-e * 6)), t.hinges.forEach(({ pivot: e, sign: n }, r) => {
			e.rotation.y = n * t.angle, e.updateWorldMatrix(!0, !0), t.doorBoxes[r].setFromObject(e);
		});
	}
	return oe(1), {
		group: o,
		moving: s,
		colliders: d,
		gates: u,
		replacements: f,
		walkAreas: p,
		update: oe,
		nearest(e) {
			return u.find((t) => Math.hypot(e.x - t.point.x, e.z - t.point.z) < 2.6 && Math.abs(e.y - t.point.y) < 1.6);
		},
		toggle(e) {
			e && (e.target = e.target > .5 ? 0 : 1.85);
		}
	};
}
//#endregion
//#region src/harborBoats.js
function Te({ textureFactory: e, anisotropy: n = 4 } = {}) {
	let r = /* @__PURE__ */ new Map(), i = new re(1, 1, 1), o = new Se(1, 1, 1, 10);
	function s(t, i, a = 0) {
		let o;
		if (t) {
			if (!r.has(t)) {
				let i = e ? e(t) : new M().load(fe("/images/harbor/" + t + ".jpg"));
				i && (i.colorSpace = ge, i.anisotropy = n), r.set(t, i);
			}
			o = r.get(t);
		}
		return new c({
			name: t || i,
			color: i,
			roughness: .84,
			metalness: a,
			...o ? { map: o } : {}
		});
	}
	let l = {
		blue: s("steel-blue", "#a6bbc5", .18),
		woodBlue: s("steel-blue", "#bec7c6"),
		red: s("steel-red", "#b5937b"),
		wood: s("timber", "#d4b68a"),
		darkWood: s("timber", "#8c7860"),
		cream: s(null, "#d0cdb1"),
		iron: s(null, "#404949", .35),
		glass: s(null, "#243f49", .28),
		rubber: s(null, "#272f31"),
		rope: s(null, "#c6b58d"),
		orange: s(null, "#bb573c"),
		white: s(null, "#ebe2c6"),
		crate: s("cardboard", "#ffffff"),
		label: s("carton-label", "#ffffff"),
		net: s(null, "#5c6850"),
		sack: s("cardboard", "#c0ad83")
	};
	function u(e, t, n, r = 0, i = 0, a = 0, o = "") {
		let s = new v(t, n);
		return s.name = o, s.position.set(r, i, a), s.castShadow = s.receiveShadow = !0, e.add(s), s;
	}
	function d(e, t, n, r, a, o, s, c, l = "") {
		let d = u(e, i, c, a, o, s, l);
		return d.scale.set(t, n, r), d;
	}
	function f(e, t, n, r, i = l.iron) {
		let a = new V(...t), s = new V(...n), c = s.clone().sub(a), d = u(e, o, i);
		return d.scale.set(r, c.length(), r), d.position.copy(a.add(s).multiplyScalar(.5)), d.quaternion.setFromUnitVectors(new V(0, 1, 0), c.normalize()), d;
	}
	function p(e, t, n = .018, r = l.rope) {
		return u(e, new P(new ae(t.map((e) => new V(...e))), Math.max(12, t.length * 4), n, 5, !1), r, 0, 0, 0, "MarineRope");
	}
	function m(e, t, n, r, i, a, o = l.rubber) {
		return u(e, new ve(t, n, 7, 18), o, r, i, a);
	}
	function h(e, t, n, r, i = .75, a = .65, o = .65) {
		d(e, i, a, o, t, n + a / 2, r, l.crate, "CargoCrate"), d(e, .06, .009, o + .01, t, n + a + .007, r, l.rope), d(e, i * .72, a * .75, .008, t, n + a * .5, r + o / 2 + .008, l.label);
		for (let s of [-1, 1]) d(e, .045, a + .02, o + .02, t + s * i * .43, n + a / 2, r, l.darkWood);
	}
	function g(e, t, n, r) {
		f(e, [
			t,
			n,
			r
		], [
			t,
			n + .19,
			r
		], .065), f(e, [
			t - .13,
			n + .15,
			r
		], [
			t + .13,
			n + .15,
			r
		], .04);
	}
	function _(e) {
		e.updateMatrixWorld(!0);
		let t = /* @__PURE__ */ new Map(), n = [];
		e.traverse((e) => {
			if (!e.isMesh) return;
			let r = e.geometry.clone();
			if (r.index) {
				let e = r;
				r = r.toNonIndexed(), e.dispose();
			}
			r.attributes.uv || r.setAttribute("uv", new a(new Float32Array(r.attributes.position.count * 2), 2)), r.applyMatrix4(e.matrixWorld), t.has(e.material) || t.set(e.material, []), t.get(e.material).push(r), n.push(e);
		}), n.forEach((e) => {
			e.removeFromParent(), e.geometry !== i && e.geometry !== o && e.geometry.dispose();
		});
		for (let [n, r] of t) {
			let t = se(r, !1);
			r.forEach((e) => e.dispose()), u(e, t, n);
		}
	}
	function y(e = "fishing", n = !0, { merge: r = !0 } = {}) {
		let i = new t();
		i.name = (e === "fishing" ? "WoodFishingBoat" : "HarborTransport") + (n ? "_Loaded" : "_Empty");
		let o = e === "fishing", s = o ? [
			[
				-4.5,
				.98,
				1.04
			],
			[
				-3.9,
				1.28,
				1.02
			],
			[
				-2.6,
				1.45,
				1.04
			],
			[
				1.7,
				1.42,
				1.16
			],
			[
				3.5,
				.93,
				1.52
			],
			[
				4.5,
				.06,
				1.83
			]
		] : [
			[
				-4.5,
				1.12,
				.95
			],
			[
				-4.1,
				1.47,
				.93
			],
			[
				2.9,
				1.47,
				.93
			],
			[
				4.1,
				1.17,
				1.12
			],
			[
				4.5,
				.86,
				1.3
			]
		], c = [
			[.38, -.72],
			[.83, -.38],
			[1, .12],
			[1, null]
		], v = /* @__PURE__ */ new Map();
		function y(e) {
			if (!v.has(e)) {
				let t = e.clone();
				t.side = 2, v.set(e, t);
			}
			return v.get(e);
		}
		function b(e, t, n) {
			let r = [], o = [], l = [];
			for (let n of [-1, 1]) {
				let i = r.length / 3;
				s.forEach(([i, a, s]) => {
					for (let l of [e, t]) {
						let [e, t] = c[l];
						r.push(i, t === null ? s : t, n * a * e), o.push((i + 4.5) / 3, l / 3);
					}
				});
				for (let e = 0; e < s.length - 1; e++) {
					let t = i + e * 2;
					l.push(t, t + 1, t + 3, t, t + 3, t + 2);
				}
			}
			let d = new N();
			d.setAttribute("position", new a(r, 3)), d.setAttribute("uv", new a(o, 2)), d.setIndex(l), d.computeVertexNormals(), u(i, d, y(n), 0, 0, 0, "ShapedHull");
		}
		b(0, 1, l.red), b(1, 2, o ? l.woodBlue : l.blue), b(2, 3, o ? l.woodBlue : l.blue);
		let x = new k();
		s.forEach(([e, t], n) => n ? x.lineTo(e, t) : x.moveTo(e, t)), [...s].reverse().forEach(([e, t]) => x.lineTo(e, -t)), x.closePath();
		let S = u(i, new H(x), l.wood, 0, .79, 0, "PlankedDeck");
		S.rotation.x = -Math.PI / 2;
		for (let [e, t, n] of [s[0], s.at(-1)]) {
			let r = [
				[-.72, -t * .38],
				[-.38, -t * .83],
				[.12, -t],
				[n, -t],
				[n, t],
				[.12, t],
				[-.38, t * .83],
				[-.72, t * .38]
			], s = [
				e,
				.3,
				0
			], c = [.5, .5], d = [];
			r.forEach(([r, i]) => {
				s.push(e, r, i), c.push((i / t + 1) / 2, (r + .72) / (n + .72));
			});
			for (let e = 0; e < r.length; e++) d.push(0, e + 1, (e + 1) % r.length + 1);
			let f = new N();
			f.setAttribute("position", new a(s, 3)), f.setAttribute("uv", new a(c, 2)), f.setIndex(d), f.computeVertexNormals(), u(i, f, y(o ? l.woodBlue : l.blue), 0, 0, 0, "ShapedTransom");
		}
		for (let e of [-1, 1]) {
			p(i, s.map(([t, n, r]) => [
				t,
				r,
				e * n
			]), .055, o ? l.darkWood : l.iron);
			for (let t of o ? [
				.12,
				.3,
				.5,
				.72
			] : [.12, .72]) p(i, s.map(([n, r, i]) => [
				n,
				.13 + (i - .13) * t,
				e * (r + .009)
			]), o ? .016 : .012, o ? l.darkWood : l.iron);
			if (!o) for (let t = -3.7; t < 3.3; t += .85) f(i, [
				t,
				.95,
				e * 1.47
			], [
				t,
				1.19,
				e * 1.47
			], .022);
			o || f(i, [
				-3.7,
				1.19,
				e * 1.47
			], [
				3.1,
				1.19,
				e * 1.47
			], .024);
			for (let t of [
				-3.4,
				-.5,
				2.6
			]) {
				let n = t > 2 ? .98 : 1.46, r = m(i, .27, .095, t, .55, e * (n + .09));
				r.rotation.y = e * .06, p(i, [
					[
						t - .08,
						1.07,
						e * n
					],
					[
						t - .05,
						.79,
						e * (n + .15)
					],
					[
						t + .08,
						.74,
						e * (n + .13)
					]
				], .017, l.iron);
			}
		}
		let C = -2.65, w = .82, T = o ? 1.65 : 1.85, E = o ? 1.68 : 1.98, D = o ? 1.7 : 1.95;
		d(i, E, T, D, C, w + T / 2, 0, l.cream, "Wheelhouse"), d(i, E + .28, .12, D + .28, C, w + T + .08, 0, l.cream, "WheelhouseRoof"), d(i, E + .38, .045, D + .38, C, w + T + .15, 0, l.iron);
		for (let e of [-1, 1]) {
			let t = e * (D / 2 + .025);
			for (let n of [C - .46, C + .46]) {
				d(i, .55, .65, .03, n, w + T * .68, t, l.glass, "GlazedCabinWindow");
				for (let e of [-.3, .3]) d(i, .045, .73, .055, n + e, w + T * .68, t, l.iron);
				for (let e of [-.35, .35]) d(i, .64, .045, .055, n, w + T * .68 + e, t, l.iron);
				f(i, [
					n - .22,
					w + T * .68 - .22,
					t + e * .02
				], [
					n + .13,
					w + T * .68 + .22,
					t + e * .02
				], .012, l.cream);
			}
			d(i, .54, 1.22, .04, C + .42, w + .61, t + e * .04, o ? l.red : l.blue, "CabinDoor"), d(i, .38, .47, .02, C + .42, w + .95, t + e * .07, l.glass), d(i, .06, .1, .04, C + .63, w + .5, t + e * .08, l.iron);
			let n = C - .48, r = w + .77, a = t + e * .13;
			m(i, .26, .07, n, r, a, l.white);
			for (let e = 0; e < 4; e++) {
				let t = u(i, new ve(.26, .075, 6, 6, Math.PI * .23), l.orange, n, r, a);
				t.rotation.z = e * Math.PI / 2;
			}
			p(i, [
				[
					n - .31,
					r + .25,
					a
				],
				[
					n,
					r + .37,
					a
				],
				[
					n + .31,
					r + .25,
					a
				]
			], .012);
		}
		for (let e of [-.45, .45]) d(i, .03, .66, .64, C + E / 2 + .025, w + T * .68, e, l.iron), d(i, .036, .56, .52, C + E / 2 + .046, w + T * .68, e, l.glass);
		f(i, [
			C,
			w + T + .16,
			0
		], [
			C,
			w + T + .47,
			0
		], .1, l.red), d(i, .28, .07, .28, C, w + T + .49, 0, l.iron), f(i, [
			C + .45,
			w + T + .17,
			0
		], [
			C + .45,
			w + T + 1.1,
			0
		], .028), f(i, [
			C + .22,
			w + T + .74,
			0
		], [
			C + .69,
			w + T + .74,
			0
		], .018), f(i, [
			C - .65,
			w + T * .8,
			-.4
		], [
			C - .65,
			w + T + .85,
			-.4
		], .065), f(i, [
			C - .65,
			w + T + .85,
			-.4
		], [
			C - .47,
			w + T + .95,
			-.4
		], .065), o || f(i, [
			C - .65,
			w + T + .15,
			-.4
		], [
			C - .65,
			w + T + .4,
			-.4
		], .075, l.red), u(i, new me(.11, 8, 6), l.orange, C + .7, w + T + .28, .57, "NavigationBeacon");
		for (let e of [-4, 3.5]) for (let t of [-.63, .63]) g(i, e, .82, t);
		f(i, [
			-1.3,
			1.2,
			-.25
		], [
			-1.3,
			1.2,
			.25
		], .25, l.darkWood);
		for (let e of [-.27, .27]) f(i, [
			-1.3,
			1.2,
			e - .025
		], [
			-1.3,
			1.2,
			e + .025
		], .3, l.iron);
		for (let e = 0; e < 6; e++) m(i, .25, .018, -1.3, 1.2, -.2 + e * .08, l.rope);
		f(i, [
			3.4,
			.95,
			-.5
		], [
			3.7,
			.65,
			-.5
		], .035), f(i, [
			3.7,
			.65,
			-.5
		], [
			3.94,
			.87,
			-.5
		], .035);
		let O = [];
		for (let e = 0; e < 100; e++) {
			let t = e / 100 * Math.PI * 8, n = .11 + e * .0021;
			O.push([
				2.9 + Math.cos(t) * n,
				.83,
				.1 + Math.sin(t) * n
			]);
		}
		if (p(i, O, .021), o) {
			f(i, [
				1.75,
				.8,
				0
			], [
				1.75,
				3.8,
				0
			], .065, l.darkWood), f(i, [
				1.4,
				3.47,
				0
			], [
				2.1,
				3.47,
				0
			], .045, l.darkWood), p(i, [
				[
					1.75,
					3.65,
					0
				],
				[
					2.7,
					2.7,
					.3
				],
				[
					4.2,
					1.63,
					.4
				]
			], .015, l.iron), p(i, [
				[
					1.75,
					3.7,
					0
				],
				[
					-.3,
					3.1,
					0
				],
				[
					C,
					w + T + .2,
					0
				]
			], .015, l.iron), p(i, [
				[
					1.75,
					3.5,
					0
				],
				[
					1.75,
					3.2,
					.35
				],
				[
					1.75,
					2.95,
					.35
				]
			], .012, l.iron), d(i, .17, .24, .17, 1.75, 2.86, .35, l.iron), d(i, .12, .14, .18, 1.75, 2.87, .35, l.cream);
			for (let e = 0; e < 7; e++) d(i, .012, .004, 1.6, -.6 + e * .38, .794, 0, l.darkWood, "DeckPlankSeam");
		} else {
			d(i, 3.5, .08, 2.25, .9, .84, 0, l.darkWood, "CargoWellRim"), d(i, 3.28, .07, 2, .9, .89, 0, l.wood);
			for (let e of [-.82, 2.62]) d(i, .06, .25, 2.25, e, .98, 0, l.blue);
			for (let e of [-1.12, 1.12]) d(i, 3.5, .25, .06, .9, .98, e, l.blue);
		}
		if (n) {
			let e = new t();
			e.name = "LoadedCargo", i.add(e);
			for (let t = 0; t < 6; t++) h(e, -.5 + t % 3 * .83, .9, Math.floor(t / 3) * .78 - .38, .74, .6, .66);
			h(e, .33, 1.5, -.38, .7, .55, .64), o || h(e, -.5, 1.5, -.38, .74, .55, .66);
			for (let t = 0; t < 4; t++) {
				let n = 2.1 + t % 2 * .52, r = -.35 + Math.floor(t / 2) * .66;
				u(e, new me(.34, 10, 7), o ? l.net : l.sack, n, 1.17, r, o ? "NetBundle" : "CargoSack").scale.set(1.1, .75, .85);
				for (let t of [
					-.5,
					0,
					.5
				]) p(e, [
					[
						n - .34,
						1.08,
						r + t * .36
					],
					[
						n,
						1.44,
						r + t * .5
					],
					[
						n + .34,
						1.08,
						r + t * .36
					]
				], .012, o ? l.rope : l.darkWood);
			}
			p(e, [
				[
					-.9,
					.93,
					-.9
				],
				[
					-.5,
					2.06,
					-.4
				],
				[
					.33,
					2.06,
					.05
				],
				[
					1.7,
					.93,
					.9
				]
			], .02);
		}
		return i.userData = {
			type: e,
			loaded: n,
			length: 9,
			width: 3,
			design: "shekou-harbor-20261029"
		}, r && _(i), i;
	}
	return {
		build: y,
		disposeSources() {
			i.dispose(), o.dispose();
		}
	};
}
function Ee(e, t = {}) {
	let n = [];
	e.traverse((e) => {
		e.isMesh && e.name.startsWith("ExtrudeGeometry") && e.geometry.attributes.position.count === 960 && new j().setFromObject(e.parent).max.x < -18 && n.push(e.parent);
	});
	let r = Te(t), i = [];
	return [...new Set(n)].forEach((t, n) => {
		let a = new j().setFromObject(t), o = a.getSize(new V()), s = a.getCenter(new V()), c = r.build(n % 2 ? "transport" : "fishing", n < 2);
		c.scale.set(o.x / 9, Math.min(o.x / 9, 1.55), o.z / 3.85), c.position.set(s.x, -.42, s.z);
		let l = t.getWorldQuaternion(new T());
		c.rotation.y = new be().setFromQuaternion(l).y < 0 ? Math.PI : 0, c.userData.original = t.name, c.userData.mooring = c.position.toArray(), t.removeFromParent(), e.add(c), i.push(c);
	}), r.disposeSources(), {
		vessels: i,
		update(e) {
			i.forEach((t, n) => {
				t.position.y = -.42 + Math.sin(e * .73 + n * 1.8) * .027, t.rotation.x = Math.sin(e * .48 + n) * .006, t.rotation.z = Math.sin(e * .62 + n) * .004;
			});
		}
	};
}
//#endregion
//#region src/residentialBuildings.js
var De = [
	"瓦顶平房",
	"双层阳台住宅",
	"三层封窗住宅",
	"杂货与修理铺",
	"带院平房",
	"侧棚阳台住宅"
];
function U({ textureFactory: e, anisotropy: n = 4 } = {}) {
	let r = /* @__PURE__ */ new Map(), i = new re(1, 1, 1), o = new Se(1, 1, 1, 10), s = new m(1, 0);
	function l(t, i, a = 0) {
		let o;
		if (t) {
			if (!r.has(t)) {
				let i = e ? e(t) : new M().load(fe("/images/residential/" + t + ".jpg"));
				i && (i.colorSpace = ge, i.anisotropy = n), r.set(t, i);
			}
			o = r.get(t);
		}
		return new c({
			name: t || i,
			color: i,
			roughness: .9,
			metalness: a,
			...o ? { map: o } : {}
		});
	}
	let u = {
		wall: l("wall", "#ffffff"),
		concrete: l("concrete", "#ffffff"),
		tile: l("tile", "#ffffff"),
		tin: l("tin", "#ffffff", .16),
		wood: l("door", "#ffffff"),
		woodDark: l("door", "#958a72"),
		iron: l(null, "#434e4b", .25),
		frame: l(null, "#74817b", .28),
		glass: l(null, "#324c57", .2),
		red: l(null, "#9e503a"),
		blue: l(null, "#617d83"),
		cream: l(null, "#e0d8ba"),
		green: l(null, "#4c6744"),
		plant: l(null, "#6d7c48"),
		terracotta: l(null, "#a37254"),
		soil: l(null, "#514b3a"),
		steel: l(null, "#a2aaa5", .45),
		dark: l(null, "#383d36"),
		paper: l(null, "#c9b88b"),
		grocery: l("grocery-sign", "#ffffff"),
		repair: l("repair-sign", "#ffffff"),
		cloth: l(null, "#d8cfb2"),
		clothBlue: l(null, "#829ba7"),
		clothDark: l(null, "#485b61")
	};
	for (let e of [
		u.cloth,
		u.clothBlue,
		u.clothDark
	]) e.side = 2;
	u.glass.roughness = .32, u.steel.roughness = .45, u.gable = u.wall.clone(), u.gable.side = 2;
	function d(e, t, n, r = 0, i = 0, a = 0, o = "") {
		let s = new v(t, n);
		return s.position.set(r, i, a), s.name = o, s.castShadow = s.receiveShadow = !0, e.add(s), s;
	}
	function f(e, t, n, r, a, o, s, c = u.wall, l = "") {
		let f = d(e, i, c, a, o, s, l);
		return f.scale.set(t, n, r), f;
	}
	function p(e, t, n, r = .025, i = u.iron) {
		let a = new V(...t), s = new V(...n), c = s.clone().sub(a), l = d(e, o, i);
		return l.scale.set(r, c.length(), r), l.position.copy(a.add(s).multiplyScalar(.5)), l.quaternion.setFromUnitVectors(new V(0, 1, 0), c.normalize()), l;
	}
	function h(e, t, n = .026, r = u.iron) {
		return d(e, new P(new ae(t.map((e) => new V(...e))), t.length * 6, n, 6, !1), r, 0, 0, 0, "UtilityPipe");
	}
	function g(e, t, n, r, i = 1.15, a = 1.5, o = !1) {
		f(e, i + .18, a + .18, .11, t, n, r, u.concrete, "WindowSurround"), f(e, i, a, .035, t, n, r + .075, u.glass, "WindowGlass");
		for (let o of [
			-i / 2,
			0,
			i / 2
		]) f(e, .045, a + .05, .07, t + o, n, r + .11, u.frame);
		for (let o of [
			-a / 2,
			a * .22,
			a / 2
		]) f(e, i + .07, .045, .07, t, n + o, r + .11, u.frame);
		if (f(e, i + .3, .1, .25, t, n - a / 2 - .12, r + .07, u.concrete, "WindowSill"), o) {
			for (let o = -i / 2; o <= i / 2 + .01; o += .18) f(e, .018, a + .05, .02, t + o, n, r + .23, u.iron, "WindowSecurityBar");
			for (let o = -a / 2; o <= a / 2 + .01; o += .28) f(e, i + .05, .018, .02, t, n + o, r + .24, u.iron);
		} else f(e, i * .18, a * .7, .012, t - i * .31, n - a * .08, r + .095, u.cream, "Curtain");
	}
	function _(e, t, n, r, i = 1.05, a = 2.25, o = !1) {
		f(e, i + .22, a + .18, .16, t, n + a / 2, r, u.concrete, "DoorSurround"), f(e, i, a, .065, t, n + a / 2, r + .11, u.wood, "TimberDoor");
		for (let o of [
			-i / 2 + .07,
			0,
			i / 2 - .07
		]) f(e, .045, a - .1, .04, t + o, n + a / 2, r + .16, u.woodDark);
		for (let o of [
			.3,
			a * .5,
			a - .22
		]) f(e, i - .06, .055, .04, t, n + o, r + .16, u.woodDark);
		if (o) {
			f(e, i * .76, a * .4, .015, t, n + a * .68, r + .148, u.glass);
			for (let o of [
				-i * .25,
				0,
				i * .25
			]) f(e, .025, a * .4, .02, t + o, n + a * .68, r + .17, u.woodDark);
		}
		f(e, .04, .16, .055, t + i * .3, n + 1, r + .2, u.iron), f(e, i, .28, .02, t, n + a + .05, r + .18, u.glass, "DoorTransom");
		for (let a = 0; a < 3; a++) f(e, i + .48 - a * .12, .09, .26 * (3 - a), t, n + .045 + a * .075, r + .3, u.concrete, "DoorStep");
		f(e, .18, .25, .08, t + i * .85, n + 1.45, r + .14, u.red, "LetterBox");
	}
	function y(e, t, n, r, i = .4) {
		let a = d(e, new Se(i * .4, i * .28, i * .65, 8), u.terracotta, t, n + i * .325, r, "PottedPlant");
		d(e, new Se(i * .35, i * .35, .02, 8), u.soil, t, n + i * .66, r), p(e, [
			t,
			n + i * .6,
			r
		], [
			t,
			n + i * 1.7,
			r
		], .018, u.woodDark);
		for (let a = 0; a < 11; a++) {
			let o = a * 2.399, c = i * (.22 + a % 3 * .13), l = d(e, s, a % 2 ? u.green : u.plant, t + Math.cos(o) * c, n + i * (.9 + a % 4 * .21), r + Math.sin(o) * c);
			l.scale.set(i * .29, i * .16, i * .22), l.rotation.z = o;
		}
		return a;
	}
	function b(e, t, n, r) {
		f(e, .76, .6, .3, t, n, r, u.cream, "AirConditioner");
		let i = d(e, new Se(.21, .21, .018, 16), u.iron, t - .11, n, r + .16);
		i.rotation.x = Math.PI / 2;
		for (let i of [
			-.27,
			-.16,
			-.05,
			.06
		]) f(e, .016, .4, .02, t + i, n, r + .18, u.frame);
		for (let i of [
			-.16,
			-.04,
			.08,
			.2
		]) f(e, .43, .014, .02, t - .1, n + i, r + .19, u.frame);
		for (let i of [
			-.18,
			-.1,
			-.02,
			.06,
			.14
		]) f(e, .18, .017, .02, t + .25, n + i, r + .18, u.frame);
		for (let i of [-.29, .29]) p(e, [
			t + i,
			n - .3,
			r - .13
		], [
			t + i,
			n - .38,
			r + .24
		], .025);
		h(e, [
			[
				t + .39,
				n - .12,
				r
			],
			[
				t + .5,
				n - .2,
				r - .12
			],
			[
				t + .5,
				n - .6,
				r - .12
			]
		], .015, u.cream);
	}
	function x(e, t, n, r) {
		for (let i = 0; i < 2; i++) f(e, .2, .3, .1, t + i * .23, n, r, u.cream, "ElectricMeter"), f(e, .12, .12, .015, t + i * .23, n + .05, r + .06, u.glass);
		h(e, [
			[
				t,
				n - .2,
				r
			],
			[
				t,
				n - 1,
				r - .02
			],
			[
				t + .5,
				n - 1,
				r - .02
			]
		], .012);
	}
	function S(e, t, n, r, i = 2.6) {
		p(e, [
			t - i / 2,
			n - .25,
			r
		], [
			t - i / 2,
			n + .12,
			r
		], .022), p(e, [
			t + i / 2,
			n - .25,
			r
		], [
			t + i / 2,
			n + .12,
			r
		], .022), h(e, [
			[
				t - i / 2,
				n,
				r
			],
			[
				t,
				n - .07,
				r
			],
			[
				t + i / 2,
				n,
				r
			]
		], .009, u.iron);
		for (let a = 0; a < 4; a++) {
			let o = new k();
			(a === 3 ? [
				[-.23, 0],
				[.23, 0],
				[.22, -.83],
				[.03, -.83],
				[0, -.38],
				[-.04, -.83],
				[-.24, -.83]
			] : [
				[-.16, 0],
				[-.29, -.06],
				[-.34, -.26],
				[-.21, -.3],
				[-.19, -.72],
				[.19, -.72],
				[.21, -.3],
				[.34, -.26],
				[.29, -.06],
				[.16, 0]
			]).forEach(([e, t], n) => n ? o.lineTo(e, t) : o.moveTo(e, t)), o.closePath();
			let s = new H(o, 2);
			for (let e = 0; e < s.attributes.position.count; e++) {
				let t = s.attributes.position.getX(e), n = s.attributes.position.getY(e);
				s.attributes.position.setZ(e, Math.sin(t * 18 + n * 5) * .035);
			}
			s.computeVertexNormals(), d(e, s, [
				u.cloth,
				u.clothBlue,
				u.cloth,
				u.clothDark
			][a], t + (a - 1.5) * i * .22, n - .03, r + .025, "HangingLaundry"), f(e, .025, .055, .025, t + (a - 1.5) * i * .22 - .12, n, r + .02, u.woodDark);
		}
	}
	function C(e, t, n, r) {
		for (let i of [-.37, .37]) for (let a of [-.37, .37]) p(e, [
			t + i,
			n,
			r + a
		], [
			t + i,
			n + .4,
			r + a
		], .03, u.woodDark);
		d(e, new Se(.52, .52, .87, 16), u.steel, t, n + .83, r, "RoofWaterTank");
		for (let i of [
			.42,
			.66,
			.98,
			1.25
		]) d(e, new ve(.525, .018, 5, 16), u.iron, t, n + i, r).rotation.x = Math.PI / 2;
		d(e, new Se(.55, .55, .07, 16), u.steel, t, n + 1.29, r), h(e, [
			[
				t + .51,
				n + .5,
				r
			],
			[
				t + .7,
				n + .5,
				r
			],
			[
				t + .7,
				n - .18,
				r
			]
		], .035, u.steel);
	}
	function w(e, t, n, r) {
		p(e, [
			t,
			n,
			r
		], [
			t,
			n + 1.4,
			r
		], .023), p(e, [
			t - .6,
			n + 1.02,
			r
		], [
			t + .6,
			n + 1.02,
			r
		], .018);
		for (let i of [
			-.46,
			-.23,
			0,
			.23,
			.46
		]) p(e, [
			t + i,
			n + .97,
			r - .18
		], [
			t + i,
			n + .97,
			r + .18
		], .011);
	}
	function T(e, t, n, r, i = 0, a = 0) {
		f(e, t + .3, .18, n + .3, i, r, a, u.concrete, "FlatRoofSlab");
		for (let o of [-n / 2, n / 2]) f(e, t + .12, .43, .13, i, r + .28, a + o, u.wall, "RoofParapet");
		for (let o of [-t / 2, t / 2]) f(e, .13, .43, n, i + o, r + .28, a, u.wall, "RoofParapet");
		C(e, i + t * .24, r + .1, a - n * .2), w(e, i - t * .26, r + .13, a - n * .22), p(e, [
			i - t * .4,
			r + .1,
			a - n * .25
		], [
			i - t * .4,
			r + .63,
			a - n * .25
		], .055, u.steel);
	}
	let E = (() => {
		let e = [], t = [], n = [];
		for (let n = 0; n <= 6; n++) {
			let r = -Math.PI / 2 + n * Math.PI / 6;
			for (let i of [-.23, .23]) e.push(Math.sin(r) * .12, Math.cos(r) * .065, i), t.push(n / 6, i < 0 ? 0 : 1);
		}
		for (let e = 0; e < 6; e++) {
			let t = e * 2;
			n.push(t, t + 1, t + 3, t, t + 3, t + 2);
		}
		let r = new N();
		return r.setAttribute("position", new a(e, 3)), r.setAttribute("uv", new a(t, 2)), r.setIndex(n), r.computeVertexNormals(), r;
	})();
	function D(e, n, r, i, o = 0, s = 0) {
		let c = .95, l = i + c, m = Math.hypot(r / 2 + .22, c), h = Math.atan2(c, r / 2 + .22);
		for (let r of [-1, 1]) {
			let i = new t();
			i.position.set(o, l, s), i.rotation.x = r * h, e.add(i), f(i, n + .4, .06, m, 0, -.015, r * m / 2, u.dark, "RoofUnderlay");
			let a = Math.ceil((n + .4) / .23), c = Math.ceil(m / .36);
			for (let e = 0; e < a; e++) for (let t = 0; t < c; t++) d(i, E, u.tile, -(n + .4) / 2 + .12 + e * .23, .035 + (c - t) * .009, r * (.18 + t * .36), "IndividualRoofTile");
		}
		p(e, [
			o - n / 2 - .25,
			l + .06,
			s
		], [
			o + n / 2 + .25,
			l + .06,
			s
		], .095, u.tile);
		for (let t of [-n / 2, n / 2]) {
			let n = new N();
			n.setAttribute("position", new a([
				t + o,
				i,
				s - r / 2,
				t + o,
				i,
				s + r / 2,
				t + o,
				l,
				s
			], 3)), n.setAttribute("uv", new a([
				0,
				0,
				1,
				0,
				.5,
				1
			], 2)), n.setIndex([
				0,
				1,
				2
			]), n.computeVertexNormals(), d(e, n, u.gable, 0, 0, 0, "GableWall");
			for (let n of [-1, 1]) p(e, [
				t + o,
				i,
				s + n * r / 2
			], [
				t + o,
				l,
				s
			], .05, u.concrete);
		}
	}
	function O(e, n, r, i, a = 2, o = .75, s = u.tin) {
		let c = new t();
		c.position.set(n, r, i), c.rotation.x = .12, e.add(c), f(c, a, .035, o, 0, 0, o / 2, s, "CorrugatedAwning");
		for (let e = -a / 2; e < a / 2; e += .12) f(c, .025, .036, o, e, .025, o / 2, s);
		for (let t of [-a / 2 + .08, a / 2 - .08]) p(e, [
			n + t,
			r - .35,
			i + .04
		], [
			n + t,
			r - .1,
			i + o * .85
		], .02, u.woodDark);
	}
	function A(e, t, n, r, i = 0) {
		f(e, t + .25, .18, 1.05, i, n, r - .44, u.concrete, "BalconySlab"), f(e, t + .1, .32, .13, i, n + .22, r, u.wall, "BalconyBase");
		for (let a = -t / 2; a <= t / 2 + .01; a += .24) f(e, .025, .65, .025, i + a, n + .68, r, u.iron, "BalconyRailing");
		f(e, t + .15, .045, .06, i, n + 1.02, r, u.iron);
		for (let a of [-1, 1]) {
			for (let o = 0; o < 1; o += .23) f(e, .025, .83, .025, i + a * t / 2, n + .59, r - o, u.iron);
			f(e, .045, .04, .98, i + a * t / 2, n + 1.02, r - .46, u.iron);
		}
		S(e, i, n + 1.4, r - .06, Math.min(2.6, t - .7));
		for (let a of [-1, 1]) y(e, i + a * (t / 2 - .35), n + .12, r - .3, .35);
	}
	function j(e, t, n, r) {
		h(e, [
			[
				t,
				n,
				r
			],
			[
				t,
				n - .3,
				r + .12
			],
			[
				t,
				n - 1,
				r + .12
			],
			[
				t,
				.4,
				r + .12
			],
			[
				t + .12,
				.2,
				r + .2
			]
		], .043, u.steel);
		for (let i = 1; i < n; i += 1.15) f(e, .16, .06, .16, t, i, r + .12, u.iron);
	}
	function F(e, n, r, i) {
		let a = new t();
		a.name = "ResidentBicycle", a.position.set(n, r, i), e.add(a);
		for (let e of [-.53, .53]) {
			d(a, new ve(.31, .025, 6, 18), u.dark, e, .34, 0), d(a, new ve(.28, .012, 5, 18), u.steel, e, .34, .002);
			for (let t = 0; t < 12; t++) {
				let n = t * Math.PI / 6;
				p(a, [
					e,
					.34,
					.01
				], [
					e + Math.cos(n) * .28,
					.34 + Math.sin(n) * .28,
					.01
				], .004, u.steel);
			}
		}
		for (let [e, t] of [
			[[
				-.53,
				.34,
				0
			], [
				-.18,
				.81,
				0
			]],
			[[
				-.18,
				.81,
				0
			], [
				.15,
				.34,
				0
			]],
			[[
				.15,
				.34,
				0
			], [
				-.53,
				.34,
				0
			]],
			[[
				-.18,
				.81,
				0
			], [
				.4,
				.86,
				0
			]],
			[[
				.4,
				.86,
				0
			], [
				.15,
				.34,
				0
			]],
			[[
				.4,
				.86,
				0
			], [
				.53,
				.34,
				0
			]],
			[[
				.15,
				.34,
				0
			], [
				.02,
				.23,
				0
			]]
		]) p(a, e, t, .018, u.iron);
		return f(a, .27, .045, .13, -.18, .86, 0, u.dark), p(a, [
			.4,
			.86,
			0
		], [
			.36,
			1.04,
			0
		], .018), p(a, [
			.36,
			1.04,
			-.15
		], [
			.36,
			1.04,
			.15
		], .016), f(a, .37, .035, .22, -.53, .72, 0, u.iron), a;
	}
	function I(e, t, n, r) {
		for (let i of [-.43, .43]) f(e, .13, .78, .48, t + i, n + .39, r, u.concrete);
		f(e, 1.1, .15, .65, t, n + .85, r, u.concrete, "OutdoorSink"), f(e, .72, .025, .38, t, n + .94, r, u.iron), f(e, .6, .025, .27, t, n + .96, r, u.steel), h(e, [
			[
				t + .35,
				n + .92,
				r - .2
			],
			[
				t + .35,
				n + 1.18,
				r - .2
			],
			[
				t + .15,
				n + 1.18,
				r - .2
			]
		], .023, u.steel), d(e, new Se(.18, .14, .28, 10), u.blue, t + .65, n + .14, r + .08, "WaterBucket"), h(e, [
			[
				t + .48,
				n + .3,
				r + .08
			],
			[
				t + .65,
				n + .52,
				r + .08
			],
			[
				t + .82,
				n + .3,
				r + .08
			]
		], .012, u.steel);
	}
	function L(e, n, r, i, a = 0) {
		for (let r of [-1, 1]) {
			let o = new t();
			o.position.set(a + r * n / 2, 0, -.3), o.rotation.y = r * Math.PI / 2, e.add(o);
			for (let e = 0; e < i; e++) g(o, 0, 1.65 + e * 3.05, 0, 1, 1.4, e === 0);
		}
		for (let n = 0; n < i; n++) {
			let i = new t();
			i.position.set(a, 0, -r / 2), i.rotation.y = Math.PI, e.add(i), g(i, 0, 1.65 + n * 3.05, 0, 1.15, 1.35, n === 0);
		}
	}
	function R(e, t, n, r = 0) {
		f(e, t + .45, .18, n + .5, r, .09, 0, u.concrete, "StonePlinth"), x(e, r - t * .32, 1.75, n / 2 + .1), y(e, r - t * .44, .18, n / 2 + .12, .48), y(e, r + t * .39, .18, n / 2 + .14, .4), I(e, r + t * .29, .18, n / 2 + .3), f(e, .36, .4, .3, r - t * .35, .38, n / 2 + .2, u.blue, "ResidentBucket"), f(e, .12, .25, .12, r, 2.8, n / 2 + .15, u.iron, "PorchLamp");
	}
	function z(e = 0) {
		let n = new t();
		if (n.name = "Residential_" + String.fromCharCode(65 + e), n.userData.variant = e, n.userData.reference = De[e], e === 0 || e === 4) {
			let t = e === 4, r = t ? 4.35 : 5.8, i = 3.6, a = 3.05, o = t ? -1.05 : 0, s = i / 2;
			f(n, r, a, i, o, a / 2 + .18, 0, u.wall, "ResidenceWalls"), D(n, r, i, a + .18, o), _(n, o, .2, s + .05, 1.02, 2.22, !1);
			for (let e of [-1, 1]) g(n, o + e * r * .31, 1.75, s + .05, 1, 1.4, !t);
			L(n, r, i, 1, o), R(n, r, i, o);
			for (let e of [-1, 1]) for (let t = 0; t < 3; t++) for (let i = 0; i < 4; i++) f(n, .22, .08, .02, o + r * .34 * e + i * .23 - .34 + t % 2 * .1, .32 + t * .09, s + .055, u.red, "ExposedBrick");
			if (!t) F(n, o + r * .47, .18, s + .6), O(n, o, 2.7, s + .08, 1.6, .45, u.concrete);
			else {
				let e = 2.2;
				O(n, e, 2.75, .2, 1.9, 2.8);
				for (let t of [e - .85, e + .85]) p(n, [
					t,
					.18,
					2.8
				], [
					t,
					2.45,
					2.8
				], .05, u.woodDark);
				for (let t = 0; t < 9; t++) f(n, 1.9, .16, .045, e, .5 + t * .23, .18, u.woodDark, "TimberSideScreen");
				I(n, e, .18, 1.6), y(n, e + .65, .18, 2.5, .33);
				for (let e of [-2.2, .7]) {
					f(n, 1.65, .65, .22, e, .5, 2.72, u.concrete, "CourtyardWall");
					for (let t = 0; t < 5; t++) f(n, .14, .23, .22, e - .66 + t * .33, .94, 2.72, u.concrete);
					f(n, 1.8, .1, .34, e, 1.12, 2.72, u.concrete);
				}
				S(n, -1.35, 1.65, 2.6, 2), y(n, -2.7, .18, 2.3, .5);
			}
		} else if (e === 3) {
			let e = 4.4, t = e / 2;
			f(n, 7.4, .18, e + .5, 0, .09, 0, u.concrete, "StonePlinth"), f(n, 7, 3, .18, 0, 3 / 2, -e / 2, u.wall);
			for (let t of [
				-7 / 2,
				0,
				7 / 2
			]) f(n, .24, 3, e, t, 3 / 2, 0, u.wall, "ShopPillar");
			f(n, 7, 2.95, e, 0, 4.55, 0, u.wall, "UpperResidence");
			for (let e of [-1.75, 1.75]) g(n, e, 4.65, t + .04, 2.2, 1.65), y(n, e + .65, 3.78, t + .15, .32);
			S(n, -1.75, 4.7, t + .33, 2.1), b(n, -3.05, 4.5, t + .23), T(n, 7, e, 6.13), j(n, 3.58, 6.4, t + .08), L(n, 7, e, 2);
			for (let e of [
				3.53,
				3.6,
				3.67
			]) h(n, [
				[
					-3.45,
					e,
					t + .1
				],
				[
					-1.75,
					e - .06,
					t + .15
				],
				[
					0,
					e,
					t + .11
				],
				[
					1.75,
					e - .045,
					t + .15
				],
				[
					3.45,
					e,
					t + .1
				]
			], .018, u.dark);
			f(n, 1.18, .78, 1.1, 2.25, 6.62, -1.22, u.tin, "RooftopUtilityShed"), O(n, 2.25, 7.05, -1.82, 1.35, 1.25, u.red), y(n, -2.55, 6.24, -1.25, .38);
			for (let [e, r] of [[-1.75, u.grocery], [1.75, u.repair]]) f(n, 3.25, .67, .14, e, 3.06, t + .15, r, "ShopSignboard"), O(n, e, 2.66, t + .18, 3.35, .76, e < 0 ? u.blue : u.red);
			f(n, 2.8, 2.2, .12, -1.75, 1.25, -.65, u.woodDark, "GroceryShelfBack");
			for (let e of [
				.38,
				.9,
				1.43,
				1.96
			]) {
				f(n, 2.8, .055, .45, -1.75, e, -.4, u.woodDark);
				for (let t = 0; t < 12; t++) {
					let r = -3 + t * .22;
					d(n, new Se(.065, .07, .22, 7), t % 3 ? u.green : u.red, r, e + .14, -.32, "ShopJar"), f(n, .08, .07, .008, r, e + .14, -.24, u.paper);
				}
			}
			f(n, 2.55, .8, .65, -1.75, .52, t - .55, u.woodDark, "GroceryCounter");
			for (let e = 0; e < 9; e++) f(n, .32, .22, .33, -2.78 + e % 6 * .4, .94 + Math.floor(e / 6) * .24, t - .58, e % 3 ? u.paper : u.red, "GroceryGoods");
			for (let e = 0; e < 5; e++) f(n, .57, .4, .5, -3 + e % 2 * .62, .32 + Math.floor(e / 2) * .4, t + .1, u.paper, "ShopCarton");
			for (let e = 0; e < 11; e++) f(n, 3.15, .065, .08, 1.75, 2.6 - e * .065, t + .05, u.blue, "RollerShutterSlat");
			f(n, 2.8, 1.05, .1, 1.75, 1.38, .28, u.woodDark, "WorkshopToolBoard");
			for (let e = 0; e < 7; e++) {
				let t = .64 + e * .35;
				p(n, [
					t,
					1.67,
					.36
				], [
					t,
					1.25,
					.36
				], .024, u.steel), d(n, new ve(.055, .017, 5, 9), u.steel, t, 1.7, .37);
			}
			f(n, 2.7, .1, .7, 1.75, .89, .86, u.woodDark, "RepairWorkbench");
			for (let e of [.58, 2.92]) f(n, .55, .75, .62, e, .45, .86, u.frame);
			f(n, .48, .06, .42, 1.65, .48, 1.55, u.woodDark);
			for (let e of [1.48, 1.82]) for (let t of [1.4, 1.7]) f(n, .045, .46, .045, e, .23, t, u.woodDark);
			F(n, 2.9, .18, t + .55), y(n, -3.65, .18, t + .2, .42);
		} else {
			let t = e === 2, r = e === 5, i = t ? 5.3 : 4.8, a = 4.25, o = r ? -.8 : 0, s = a / 2;
			if (f(n, i, 3.1, a, o, 1.73, 0, u.wall, "GroundResidence"), _(n, o + (r ? .72 : -.65), .2, s + .03, 1.05, 2.22, !0), g(n, o + (r ? -.62 : i * .24), 1.72, s + .03, r ? .8 : 1.2, 1.47, !0), r && _(n, o - i * .38, .2, s + .03, .64, 1.85, !1), R(n, i, a, o), L(n, i, a, t ? 3 : 2, o), f(n, i, 3.03, a - .92, o, 4.79, -.46, u.wall, "UpperResidence"), g(n, o + .62, 4.85, s - .92 + .05, 1.55, 1.64), _(n, o - 1.25, 3.3, s - .92 + .05, .82, 2.1, !0), A(n, i - .12, 3.3, s + .12, o), b(n, o + i / 2 - .46, 5.62, s - .7), t) {
				f(n, i, 2.8, a, o, 7.72, 0, u.wall, "ThirdStorey"), f(n, i - .32, 2.13, .03, o, 7.75, s + .04, u.glass, "EnclosedSunroom");
				for (let e = 0; e <= 6; e++) f(n, .055, 2.24, .1, o - i / 2 + .16 + e * (i - .32) / 6, 7.75, s + .1, u.frame, "SunroomMullion");
				for (let e of [
					6.65,
					8.4,
					8.88
				]) f(n, i - .26, .055, .1, o, e, s + .1, u.frame);
				f(n, .34, 1.75, .02, o - i * .37, 7.65, s + .08, u.cloth), y(n, o + i * .34, 6.78, s + .15, .42), T(n, i, a, 9.17, o), j(n, o + i / 2 + .1, 9.48, s + .03);
			} else if (T(n, i, a, 6.4, o), j(n, o + i / 2 + .1, 6.73, s + .03), r) {
				O(n, o, 2.94, s + .08, i + .22, .84), b(n, o - i * .32, 2.45, s + .25);
				let e = 2.65, t = 1.95;
				f(n, t, 2.35, a, e, 1.35, 0, u.tin, "SideSheetMetalShed"), O(n, e, 2.62, -a / 2, t + .3, a + .26), _(n, e, .2, s + .04, 1, 1.85, !1);
				for (let r = e - t / 2; r < e + t / 2; r += .11) f(n, .025, 2.23, .025, r, 1.35, s + .035, u.steel);
				F(n, o + .9, .18, s + .74);
				for (let e = 0; e < 4; e++) for (let t = 0; t < 4; t++) {
					let r = d(n, new Se(.07, .07, .45, 7), u.wood, o + 1.65 + t % 4 * .13, .27 + e * .13, s + .36);
					r.rotation.x = Math.PI / 2;
				}
				d(n, new Se(.27, .26, .78, 12), u.blue, o + 2.15, .59, s + .62, "WaterBarrel");
			} else O(n, o - .65, 2.74, s + .1, 1.6, .65), F(n, o + i * .3, .18, s + .75);
		}
		return n.updateMatrixWorld(!0), n;
	}
	let B = null;
	function ee(e = 0) {
		B ||= {
			grey: l("village-grey", "#ffffff"),
			red: l("village-red", "#ffffff"),
			stone: l("village-stone", "#ffffff"),
			peeling: l("village-peeling", "#ffffff")
		};
		let n = new t();
		n.name = "OldVillage_" + String.fromCharCode(65 + e), n.userData.variant = e;
		let r = e === 1 || e === 5, i = e === 4, a = [
			B.grey,
			B.red,
			B.stone,
			B.peeling,
			B.grey,
			B.grey
		][e], o = i ? 8 : 4.65, s = 3.8, c = s / 2;
		function m(e, t, r, i = 1, a = 1.25) {
			g(n, e, t, r, i, a, !1);
			for (let o of [-1, 1]) {
				f(n, i * .43, a + .06, .06, e + o * i * .3, t, r + .16, u.woodDark, "TimberShutter");
				for (let s = 0; s < 8; s++) f(n, i * .38, .026, .04, e + o * i * .3, t - a * .43 + s * a * .12, r + .2, u.wood, "ShutterSlat");
			}
		}
		function v(e, t, r) {
			f(n, .42, .06, .38, e, t + .45, r, u.woodDark, "TimberStool");
			for (let i of [-.15, .15]) for (let a of [-.13, .13]) p(n, [
				e + i,
				t,
				r + a
			], [
				e + i * .8,
				t + .43,
				r + a * .8
			], .028, u.woodDark);
		}
		function b(e, t, r, i = .22, a = .44) {
			d(n, new Se(i, i * .68, a, 12, 1, !0), u.woodDark, e, t + a / 2, r, "WovenBasket");
			for (let o = 0; o < 9; o++) {
				let s = (o + .5) * a / 9, c = i * (.68 + .32 * s / a);
				d(n, new ve(c, .009, 4, 14), u.paper, e, t + s, r).rotation.x = Math.PI / 2;
			}
			for (let o = 0; o < 16; o++) {
				let s = o * Math.PI / 8;
				p(n, [
					e + Math.cos(s) * i * .7,
					t,
					r + Math.sin(s) * i * .7
				], [
					e + Math.cos(s) * i,
					t + a,
					r + Math.sin(s) * i
				], .008, u.paper);
			}
		}
		function C(e, t, r) {
			let i = d(n, new Se(.39, .39, .025, 20), u.woodDark, e, t, r, "WinnowingTray");
			i.rotation.x = Math.PI / 2, d(n, new ve(.39, .025, 5, 20), u.paper, e, t, r + .025);
			for (let i = -4; i <= 4; i++) {
				let a = i * .075, o = Math.sqrt(.37 * .37 - a * a);
				p(n, [
					e - o,
					t + a,
					r + .025
				], [
					e + o,
					t + a,
					r + .025
				], .006, u.paper), p(n, [
					e + a,
					t - o,
					r + .028
				], [
					e + a,
					t + o,
					r + .028
				], .006, u.paper);
			}
		}
		function w() {
			if (e === 3) {
				y(n, -1.65, .18, 2.8, .36), y(n, 1.65, .18, 2.8, .36);
				return;
			}
			for (let e of [-1.65, 1.65]) {
				for (let t = 0; t < 3; t++) for (let r = 0; r < 4; r++) f(n, .35, .19, .3, e - .55 + r * .37 + t % 2 * .035, .28 + t * .21, 3.05, B.stone, "CourtyardStoneBlock");
				f(n, 1.65, .1, .42, e, .89, 3.05, u.concrete), y(n, e, .94, 3.05, .28);
			}
		}
		function T() {
			let t = o / 2 + .82;
			O(n, t, 2.7, -1.55, 1.85, 4.25, u.tin);
			for (let e of [t - .78, t + .78]) p(n, [
				e,
				.18,
				2.55
			], [
				e,
				2.23,
				2.55
			], .048, u.woodDark);
			if (e === 0 || e === 2) {
				for (let e = 0; e < 9; e++) f(n, 1.7, .17, .05, t, .49 + e * .22, -1.43, u.woodDark, "SideShedPlanks");
				for (let e = 0; e < 10; e++) f(n, .1, 2.14, 3.6 / 11, t + .85, 1.25, -1.5 + e * .37, u.woodDark);
			} else {
				for (let e = 0; e < 12; e++) p(n, [
					t + .85,
					.2,
					-1.55 + e * .35
				], [
					t + .85,
					2.24,
					-1.55 + e * .35
				], .019, u.woodDark);
				for (let e = 0; e < 9; e++) p(n, [
					t + .85,
					.3 + e * .22,
					-1.55
				], [
					t + .85,
					.3 + e * .22,
					2.65
				], .014, u.paper);
			}
			if (I(n, t, .18, 1.43), b(t + .55, .18, 2.35, .23, .6), v(t - .3, .18, 2.54), C(t, .98, -1.36), S(n, t, 2.15, .55, 1.3), e === 2) {
				h(n, [
					[
						t - .6,
						2.18,
						.1
					],
					[
						t - .75,
						1.4,
						.1
					],
					[
						t - .58,
						.85,
						.1
					],
					[
						t - .36,
						1.43,
						.1
					],
					[
						t - .6,
						2.18,
						.1
					]
				], .018, u.paper);
				for (let e = 0; e < 7; e++) h(n, [
					[
						t - .1 + e * .07,
						2.1,
						.2
					],
					[
						t - .27 + e * .07,
						1.1,
						.2
					],
					[
						t + .18 + e * .04,
						.65,
						.2
					]
				], .009, u.green);
			}
		}
		if (f(n, o, 3.1, s, 0, 1.73, 0, a, "RuralMasonry"), f(n, o + .4, .18, s + .55, 0, .09, 0, B.stone, "VillageStonePlinth"), i) {
			n.children.find((e) => e.name === "RuralMasonry").removeFromParent(), f(n, o, 3.1, .16, 0, 1.73, -s / 2, a);
			for (let e of [
				-o / 2,
				0,
				o / 2
			]) f(n, .25, 3.1, s, e, 1.73, 0, a);
			for (let e of [-2, 2]) {
				D(n, 3.95, s, 3.28, e), O(n, e, 2.76, c + .05, 4.06, .7, u.tin);
				for (let t of [-1.73, 1.73]) p(n, [
					e + t,
					.18,
					c + .73
				], [
					e + t,
					2.6,
					c + .73
				], .055, u.woodDark);
			}
			f(n, 2, .55, .1, -2, 2.86, c + .09, u.grocery, "OldGrocerySign"), f(n, 3.3, 2.2, .12, -2, 1.35, -.85, u.woodDark);
			for (let e of [
				.45,
				.95,
				1.45,
				1.95
			]) {
				f(n, 3.3, .06, .44, -2, e, -.65, u.woodDark);
				for (let t = 0; t < 11; t++) {
					let r = -3.4 + t * .27;
					d(n, new Se(.07, .075, .22, 7), t % 3 ? u.green : u.red, r, e + .14, -.52, "GroceryJar"), f(n, .075, .07, .008, r, e + .14, -.44, u.paper);
				}
			}
			for (let e of [-3.78, -.22]) for (let t = 0; t < 5; t++) f(n, .07, 2.02, .06, e + (e < -2 ? 1 : -1) * t * .1, 1.35, c + .09, u.wood, "FoldingShopShutter");
			_(n, 1.2, .18, c + .04, 1.22, 2.26, !1), m(2.8, 1.6, c + .06, 1.15, 1.1), f(n, 1.2, .1, .66, 2.65, .94, c + .5, u.woodDark, "VillageWorkbench");
			for (let e of [2.16, 3.14]) f(n, .06, .75, .44, e, .52, c + .5, u.woodDark);
			for (let e of [-3, -2.25]) b(e, .18, c + .62, .28, .62);
			b(-1.28, .18, c + .58, .2, .45), C(.35, 1.6, c + .18), v(2.8, .18, c + 1.05), F(n, 3.6, .18, c + .85);
		} else {
			_(n, 0, .2, c + .04, 1.08, 2.24, e === 1), m(-1.47, 1.72, c + .04, .9, 1.26), e === 1 || e === 5 ? g(n, 1.42, 1.72, c + .04, .92, 1.35, !0) : m(1.47, 1.72, c + .04, .9, 1.26);
			for (let e of [-1, 1]) {
				let i = new t();
				i.position.set(e * o / 2, 0, -.25), i.rotation.y = e * Math.PI / 2, n.add(i), g(i, 0, 1.65, 0, .9, 1.25, !1), r && g(i, 0, 4.8, 0, .95, 1.3);
			}
			if (r) {
				f(n, o, 3.02, s - .82, 0, 4.79, -.41, a, "RuralUpperStorey"), _(n, -1.1, 3.28, c - .8, .85, 2.1, !1), g(n, .8, 4.8, c - .78, 1.38, 1.54), f(n, o + .18, .17, 1.08, 0, 3.27, c - .36, u.concrete, "VillageBalcony");
				for (let e = -o / 2; e <= o / 2 + .01; e += .24) f(n, .035, .89, .035, e, 3.87, c + .15, u.woodDark, "TimberBalconyBaluster");
				p(n, [
					-o / 2,
					4.35,
					c + .15
				], [
					o / 2,
					4.35,
					c + .15
				], .045, u.woodDark);
				for (let e of [-o / 2, o / 2]) p(n, [
					e,
					3.3,
					c + .15
				], [
					e,
					6.3,
					c + .15
				], .055, u.woodDark);
				S(n, .35, 4.65, c + .1, 2.2), y(n, -1.9, 3.36, c - .15, .38), y(n, 1.88, 3.36, c - .15, .37), D(n, o, s, 6.32), j(n, o / 2 + .08, 6.3, c + .05);
			} else D(n, o, s, 3.28);
			if (w(), T(), I(n, -1.35, .18, c + .31), y(n, -2.15, .18, c + .28, .48), y(n, 1.85, .18, c + .32, .36), b(1.65, .18, c + .75, .2, .4), v(1.05, .18, c + .85), r || S(n, -1.25, 1.55, c + .64, 1.85), (e === 0 || e === 3) && C(1.65, .67, c + .6), e === 3) {
				n.traverse((e) => {
					e.name === "CourtyardStoneBlock" && (e.visible = !1);
				});
				for (let e of [-1.65, 1.65]) {
					for (let t = 0; t < 9; t++) p(n, [
						e - .7 + t * .18,
						.18,
						3.07
					], [
						e - .7 + t * .18,
						.87,
						3.07
					], .018, u.woodDark);
					for (let t of [.42, .72]) p(n, [
						e - .77,
						t,
						3.07
					], [
						e + .77,
						t,
						3.07
					], .02, u.paper);
				}
			}
		}
		n.traverse((e) => {
			if (e.name === "GableWall") {
				let t = a.clone();
				t.side = 2, e.material = t;
			}
		});
		let E = [];
		return n.traverse((e) => {
			e.visible || E.push(e);
		}), E.forEach((e) => e.removeFromParent()), x(n, -o / 2 + .3, 2, c + .09), h(n, [[
			-o / 2 + .3,
			2.2,
			c + .03
		], [
			-o / 2 + .3,
			3.15,
			c + .03
		]], .011, u.iron), n.updateMatrixWorld(!0), n;
	}
	return {
		build: z,
		buildRural: ee
	};
}
function Oe(e, t, n = {}) {
	let r = U(n), i = [], a = [], o = t.colliders.filter((e) => e.name.startsWith("Shop_")).sort((e, t) => t.min[2] + t.max[2] - (e.min[2] + e.max[2])), s = 0;
	for (let t of o) {
		let n = e.getObjectByName(t.name);
		if (!n) throw Error("Residential slot not found: " + t.name);
		let o = t.min[0] + t.max[0] > 0 ? -1 : 1, c = o < 0 ? s++ % 6 : 4, l = r.build(c), u = new j().setFromObject(l), d = u.getSize(new V()), f = u.getCenter(new V()), p = Math.min(1, (t.max[2] - t.min[2] - .12) / d.x, (t.max[0] - t.min[0] - .12) / d.z);
		l.scale.setScalar(p), l.rotation.y = o < 0 ? -Math.PI / 2 : Math.PI / 2;
		let m = new V(f.x * p, 0, f.z * p).applyAxisAngle(new V(0, 1, 0), l.rotation.y);
		l.position.set((t.min[0] + t.max[0]) / 2 - m.x, -u.min.y * p, (t.min[2] + t.max[2]) / 2 - m.z), l.userData.original = t.name, n.removeFromParent(), e.add(l), l.updateWorldMatrix(!0, !0);
		let h = new j().setFromObject(l);
		a.push(h), i.push(l);
	}
	return {
		instances: i,
		colliders: a,
		replacedNames: o.map((e) => e.name)
	};
}
//#endregion
//#region src/hillsideVillage.js
var ke = [
	{
		variant: 0,
		x: -82,
		z: -132,
		yaw: .045
	},
	{
		variant: 1,
		x: -68,
		z: -130,
		yaw: -.055
	},
	{
		variant: 2,
		x: -53,
		z: -122,
		yaw: .045
	},
	{
		variant: 3,
		x: -79,
		z: -115,
		yaw: -.045
	},
	{
		variant: 4,
		x: -64,
		z: -114,
		yaw: .025
	},
	{
		variant: 5,
		x: -46,
		z: -114,
		yaw: -.045
	}
];
function Ae(n, { textureFactory: r, anisotropy: i = 4, compact: a = !1 } = {}) {
	let o = U({
		textureFactory: r,
		anisotropy: i
	}), s = new t();
	s.name = "Northwest_Hillside_Village";
	let l = [], u = [], d = [], f = [], p = new re(1, 1, 1), m = new c({
		name: "VillageEarth",
		color: "#85846a",
		roughness: 1
	}), h = r ? r("village-stone") : new M().load(fe("/images/residential/village-stone.jpg"));
	h && (h.colorSpace = ge, h.anisotropy = i, h.wrapS = h.wrapT = e, h.repeat.set(15, 1));
	let g = new c({
		name: "VillageGravel",
		color: "#c5b89b",
		roughness: 1,
		...h ? { map: h } : {}
	});
	function _(e, t, n, r, i, a, o) {
		let c = new v(p, o);
		return c.name = e, c.position.set(t, a - .08, n), c.scale.set(r, .16, i), c.receiveShadow = !0, s.add(c), d.push({
			name: e,
			min: [
				t - r / 2,
				a - .16,
				n - i / 2
			],
			max: [
				t + r / 2,
				a,
				n + i / 2
			]
		}), c;
	}
	_("VillageEarthClearing", -64, -123, 50, 30, .025, m);
	function y(e, t, n, r) {
		let i = _("VillageFootpath", e, t, n, r, .055, g);
		return f.push({
			min: [e - n / 2, t - r / 2],
			max: [e + n / 2, t + r / 2]
		}), i;
	}
	a ? (y(-64, -109, 50, 2.7), y(-94, -109, 14, 2.7)) : (y(-42, -109, 86, 2.7), y(0, -104, 2.7, 11)), y(-72.8, -119.5, 2.1, 20), y(-57.7, -117, 2.1, 15), y(-40, -113, 2, 9);
	for (let e of ke) {
		let t = o.buildRural(e.variant);
		t.position.set(e.x, 0, e.z), t.rotation.y = e.yaw, t.userData.settlement = "northwest", s.add(t), t.updateWorldMatrix(!0, !0), u.push(new j().setFromObject(t)), l.push(t);
	}
	if (a) {
		s.position.set(126, 0, 107);
		for (let e of u) e.translate(s.position);
		for (let e of d) e.min[0] += 126, e.max[0] += 126, e.min[2] += 107, e.max[2] += 107;
		for (let e of f) e.min[0] += 126, e.max[0] += 126, e.min[1] += 107, e.max[1] += 107;
	}
	return n.add(s), n.updateMatrixWorld(!0), {
		group: s,
		houses: l,
		colliders: u,
		walkAreas: d,
		paths: f
	};
}
//#endregion
//#region src/sceneEnhancements.js
function je(e, t, n = {}) {
	let r = t.version.startsWith("compact-port"), i = t.colliders.map((e) => new j(new V(...e.min), new V(...e.max))), a, o;
	if (r) {
		let r = U(n), s = [];
		for (let n = 0; n < 2; n++) {
			let a = e.getObjectByName("Compact_Housing_" + n), o = t.colliders.findIndex((e) => e.name === "workers-housing" && Math.abs((e.min[2] + e.max[2]) / 2 - (-28 - n * 13)) < .1);
			if (!a || o < 0) throw Error("Missing compact housing parcel " + n);
			let c = i[o], l = r.build(n), u = new j().setFromObject(l), d = u.getSize(new V()), f = Math.min(1, (c.max.x - c.min.x - .2) / d.x, (c.max.z - c.min.z - .2) / d.z);
			l.scale.setScalar(f);
			let p = u.getCenter(new V()), m = c.getCenter(new V());
			l.position.set(m.x - p.x * f, -u.min.y * f, m.z - p.z * f), a.removeFromParent(), e.add(l), s.push(l), i[o] = new j().setFromObject(l);
		}
		a = { instances: s };
		for (let t of [...e.children]) /^(Fallback_Boat|REUSED_cargo_ship|REUSED_fishing_boat)/.test(t.name) && t.removeFromParent();
		let c = Te(n), l = [];
		for (let [t, [n, r]] of [
			[-39, 11],
			[-40, -18],
			[-49, 30],
			[-49, -9]
		].entries()) {
			let i = c.build(t % 2 ? "transport" : "fishing", t < 2);
			i.scale.setScalar(1.35), i.rotation.y = Math.PI / 2, i.position.set(n, -.42, r), e.add(i), l.push(i);
		}
		c.disposeSources(), o = {
			vessels: l,
			update(e) {
				l.forEach((t, n) => {
					t.position.y = -.42 + Math.sin(e * .73 + n * 1.8) * .027, t.rotation.z = Math.sin(e * .62 + n) * .004;
				});
			}
		};
		let u = new re(6, 2.4, 2.4), d = new Ce();
		for (let [t, n] of [
			-21,
			21,
			39
		].entries()) {
			let r = new v(u, d);
			r.name = "BoxGeometry_02990_compact_" + t, r.position.set(-30, 1.2, n), e.add(r);
		}
		e.updateMatrixWorld(!0), u.dispose(), d.dispose();
	} else {
		a = Oe(e, t, n);
		for (let [e, n] of a.replacedNames.entries()) {
			let r = t.colliders.findIndex((e) => e.name === n);
			i[r] = a.colliders[e];
		}
		o = Ee(e, n);
	}
	let s = we(e, t, {
		...n,
		...r ? { looseCargo: [[-22, 13]] } : {}
	}), c = Ae(e, {
		...n,
		compact: r
	});
	i.push(...s.colliders, ...c.colliders), t.walkAreas = [
		...t.walkAreas,
		...s.walkAreas,
		...c.walkAreas
	], t.colliders = i.map((e, t) => ({
		name: "integrated-" + t,
		min: e.min.toArray(),
		max: e.max.toArray()
	}));
	let l = s.gates.flatMap((e) => e.doorBoxes).map((e) => ({
		box: e,
		spec: t.colliders[i.indexOf(e)]
	}));
	return r && (t.places = [...t.places, {
		id: "village",
		name: "山麓村落",
		point: [
			53.2,
			0,
			-2
		]
	}]), {
		compact: r,
		harbor: s,
		fleet: o,
		village: c,
		residences: a,
		colliders: i,
		update: (e, t) => {
			s.update(e), o.update(t);
			for (let { box: e, spec: t } of l) e.min.toArray(t.min), e.max.toArray(t.max);
		}
	};
}
//#endregion
//#region src/harborWater.js
function Me() {
	return new te({
		uniforms: {
			time: { value: 0 },
			dark: { value: 0 },
			coast: { value: -34 }
		},
		vertexShader: "\n      uniform float time;\n      varying vec3 waterPosition;\n      float swell(vec2 p){\n        return .085*sin(dot(p,vec2(.24,.13))-time*.64)\n          +.045*sin(dot(p,vec2(-.17,.38))-time*.82)\n          +.023*sin(dot(p,vec2(.71,.42))-time*1.18);\n      }\n      void main(){\n        vec4 world=modelMatrix*vec4(position,1.0);\n        world.y+=swell(world.xz);waterPosition=world.xyz;\n        gl_Position=projectionMatrix*viewMatrix*world;\n      }",
		fragmentShader: "\n      uniform float time,dark,coast;\n      varying vec3 waterPosition;\n      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\n      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}\n      float water(vec2 p){\n        float t=time;\n        float h=.085*sin(dot(p,vec2(.24,.13))-t*.64)+.045*sin(dot(p,vec2(-.17,.38))-t*.82)+.023*sin(dot(p,vec2(.71,.42))-t*1.18);\n        h+=.022*noise(p*2.3+vec2(-t*.13,t*.09));\n        h+=.011*noise(p*5.1+vec2(t*.19,-t*.12));\n        return h;\n      }\n      void main(){\n        vec2 p=waterPosition.xz;float e=.045;\n        vec3 n=normalize(vec3((water(p-vec2(e,0))-water(p+vec2(e,0)))/(2.0*e),1.0,(water(p-vec2(0,e))-water(p+vec2(0,e)))/(2.0*e)));\n        vec3 v=normalize(cameraPosition-waterPosition);\n        float facing=max(dot(n,v),0.0),fresnel=.035+.65*pow(1.0-facing,4.0);\n        float depth=smoothstep(0.0,24.0,coast-p.x);\n        float drift=noise(p*.11+vec2(time*.025,-time*.014));\n        vec3 shallow=vec3(.075,.24,.22),deep=vec3(.025,.095,.125);\n        vec3 body=mix(shallow,deep,depth)*( .89+.19*drift );\n        vec3 reflected=reflect(-v,n);\n        vec3 sky=mix(vec3(.25,.34,.34),vec3(.53,.64,.67),smoothstep(-.15,.65,reflected.y));\n        vec3 sunDirection=normalize(vec3(-.45,.72,.38));\n        vec3 halfDirection=normalize(sunDirection+v);\n        float glint=pow(max(dot(n,halfDirection),0.0),150.0)*.8;\n        float broad=pow(max(dot(n,halfDirection),0.0),22.0)*.12;\n        float shore=(1.0-smoothstep(.0,1.6,abs(coast-p.x)))*smoothstep(.68,.88,noise(vec2(p.y*2.3+time*.35,p.x*.8-time*.3)));\n        vec3 color=mix(body,sky,fresnel)+(glint+broad)*vec3(.95,.86,.64);\n        color=mix(color,vec3(.50,.60,.53),shore*.32);\n        color=mix(color,color*vec3(.34,.43,.55),dark);\n        gl_FragColor=vec4(color,1.0);\n      }"
	});
}
//#endregion
//#region src/detailedBuildings.js
function Ne(e, { canvasFactory: n = () => document.createElement("canvas") } = {}) {
	let r = e.name === "Building_Office", i = e.name === "Building_Press_24m", a = r || i, [o, s, l] = e.min, [u, d, f] = e.max, p = u - o, m = f - l, h = d - s, g = r ? 1 : -1, _ = new t();
	_.name = e.name + "_Detailed", _.position.set((o + u) / 2, s, (l + f) / 2);
	let y = {
		wall: new c({
			color: a ? "#dedbd0" : "#eadfc8",
			roughness: .88
		}),
		trim: new c({
			color: "#f0e7d4",
			roughness: .8
		}),
		stone: new c({
			color: "#aaa99e",
			roughness: .9
		}),
		glass: new c({
			color: "#314e58",
			roughness: .35,
			metalness: .16
		}),
		iron: new c({
			color: "#3b4c48",
			roughness: .65
		}),
		roof: new c({
			color: "#656e68",
			roughness: .8
		}),
		door: new c({
			color: "#5b4534",
			roughness: .65
		})
	}, b = new re(1, 1, 1), x = 0;
	function S(e, t, n, r, i, a, o, s = "Detail") {
		let c = new v(b, o);
		return c.name = s + "_" + x++, c.position.set(r, i, a), c.scale.set(e, t, n), c.castShadow = c.receiveShadow = !0, _.add(c), c;
	}
	let C = p / 2 * g, w = C - g * 1.55, T = -g * (p / 2 - .4), E = Math.abs(w - T), D = (w + T) / 2, O = h - (i ? 1.5 : .5);
	S(E, O - .35, m - .6, D, (O + .35) / 2, 0, y.wall, "MainBlock"), S(p, .35, m, 0, .175, 0, y.stone, "Foundation"), S(E + .25, .22, m - .25, D, O, 0, y.trim, "Cornice"), S(E, .18, m - .6, D, O + .2, 0, y.roof, "RoofSlab");
	for (let e of [-m / 2 + .35, m / 2 - .35]) S(E, .32, .12, D, O + .34, e, y.trim, "Parapet");
	for (let e of [w, T]) S(.12, .32, m - .6, e, O + .34, 0, y.trim, "Parapet");
	let k = i ? 8 : r ? 6 : 2, A = (O - .6) / k, j = i ? 8 : r ? 7 : 8, M = (m - .6) / j;
	function N(e, t, n, r, i, a) {
		S(.09, i, r, e, t, n, y.glass, "WindowGlass");
		for (let o of [
			-r / 2,
			0,
			r / 2
		]) S(.17, i + .13, .065, e + a * .055, t, n + o, y.trim, "WindowMullion");
		for (let o of [
			-i / 2,
			0,
			i / 2
		]) S(.17, .065, r + .13, e + a * .055, t + o, n, y.trim, "WindowFrame");
		S(.32, .12, r + .25, e + a * .1, t - i / 2 - .1, n, y.stone, "WindowSill");
	}
	for (let e = 0; e < k; e++) {
		let t = .55 + A * (e + .5), n = a ? Math.min(1.65, A * .65) : A * .64;
		for (let r = 0; r < j; r++) {
			let i = (r - (j - 1) / 2) * M;
			e === 0 && Math.abs(i) < M * 1.4 || N(w + g * .045, t, i, M * .63, n, g), N(T - g * .05, t, i, M * .63, n, -g);
		}
		e > 0 && S(E + .12, .13, m - .4, D, .5 + e * A, 0, y.trim, "FloorBelt");
		let r = Math.max(3, Math.floor(E / 2.8));
		for (let e of [-1, 1]) for (let i = 0; i < r; i++) {
			let a = T + (w - T) * (i + .5) / r, o = e * (m / 2 - .27), s = E / r * .6;
			S(s, n, .1, a, t, o, y.glass, "SideWindow");
			for (let r of [
				-s / 2,
				0,
				s / 2
			]) S(.065, n + .13, .18, a + r, t, o + e * .04, y.trim, "SideFrame");
			for (let r of [-n / 2, n / 2]) S(s + .13, .065, .18, a, t + r, o + e * .04, y.trim, "SideFrame");
		}
	}
	let P = i ? 3.2 : r ? 2.65 : 3.15, F = i ? 3.8 : r ? 2.7 : 4;
	S(.15, P, F, w + g * .1, .35 + P / 2, 0, y.door, "DoubleDoor");
	for (let e of [-F * .25, F * .25]) S(.07, P * .6, F * .36, w + g * .19, P * .63, e, y.glass, "DoorGlazing"), S(.09, .45, .055, w + g * .25, 1.45, e * .35, y.iron, "DoorHandle");
	for (let e of [-F / 2 - .3, F / 2 + .3]) S(.45, P + .5, .4, w + g * .25, (P + .5) / 2, e, y.trim, "EntryColumn");
	S(1.25, .25, F + 1.7, w + g * .5, P + .6, 0, y.trim, "EntranceCanopy");
	for (let e = 0; e < 4; e++) S(.32, .09 * (e + 1), F + 1.4, C - g * (.2 + e * .32), .045 * (e + 1), 0, y.stone, "EntryStep");
	let L = n();
	L.width = 2048, L.height = 320;
	let R = L.getContext("2d");
	R && (R.fillStyle = a ? "#e8e1cc" : "#704a36", R.fillRect(0, 0, 2048, 320), R.strokeStyle = a ? "#71634e" : "#d9c28b", R.lineWidth = 12, R.strokeRect(18, 18, 2012, 284), R.fillStyle = a ? "#3c4b43" : "#f2deb0", R.font = "bold 190px \"KaiTi\", \"SimSun\", serif", R.textAlign = "center", R.textBaseline = "middle", R.fillText(i ? "蛇 口 通 讯 大 楼" : r ? "蛇口工业区 · 员工大楼" : "职 工 礼 堂", 1024, 170, 1900));
	let z = new I(L);
	z.colorSpace = ge, z.anisotropy = 8;
	let B = new v(new de(F + 3, .9), new c({
		map: z,
		roughness: .75
	}));
	B.name = "ReadablePlaque", B.rotation.y = g * Math.PI / 2, B.position.set(w + g * .22, P + 1.3, 0), _.add(B);
	for (let e of [-m / 2 + .5, m / 2 - .5]) S(.1, O, .1, w + g * .2, O / 2, e, y.iron, "Drainpipe");
	if (!r) for (let e = 0; e <= j; e++) S(.22, O - .5, .2, w + g * .13, (O + .5) / 2, (e - j / 2) * M, y.trim, "Pilaster");
	if (i) {
		S(3, 1.3, 3, D, h - .65, m * .25, y.wall, "RooftopServiceRoom");
		for (let e of [-m * .25, m * .25]) S(.28, O - .5, .32, w + g * .12, (O + .5) / 2, e, y.trim, "VerticalFacadePier");
	}
	return _.updateMatrixWorld(!0), _;
}
//#endregion
//#region src/campaignDialogue.js
var W = (e, t) => ({
	speaker: e,
	text: t
}), G = (e, t, n) => ({
	label: e,
	text: t,
	speaker: n
}), Pe = {
	letter: {
		speaker: "ahai",
		scene: "阿海认出了你手里的信，接过行李，把你领到报到棚前。",
		lines: [W("ahai", "总算等到你了！船上晃得厉害吧？先坐，水在桌上。"), W("ahai", "信里我只顾着说这里缺人，没来得及问你。大老远跑来，你最惦记的是什么？")],
		choices: {
			income: G("先问明白工钱，心里才踏实。", "走，我陪你去问周姐。每月怎么发，多干的怎么算，咱们一项项问清楚。"),
			skill: G("我想学门手艺，往后能靠自己。", "那你来对地方了。明早跟我去工地，先认工具，有不懂的就问。"),
			horizon: G("我想看看，这地方怎么变成一座城。", "现在还只看得见山和泥路。别急，往后咱们一起瞧。先去帮周姐一个忙。")
		}
	},
	handoff: {
		speaker: "zhou",
		scene: "周姐翻了两页交接本，又望向雨棚外。",
		lines: [W("zhou", "账上领了六捆木板，堆场里只剩三捆。下一班马上来了，这个数对不上，我没法交班。"), W("zhou", "你替我去看看另外三捆在哪儿。东西找齐了，这本账该怎么交出去？")],
		choices: {
			annotated: G("我把三处去向补上，借走的那捆另记。", "好，便道上的那捆还得收回来。我在这儿加一行，下一班就不会找错。"),
			waited: G("先把经手的人叫来，一起对一遍。", "行，我去找补雨棚的师傅。你守着这本账，等人齐了再签。"),
			guided: G("我带下一班走一圈，当面交清楚。", "那就劳你再跑一趟。我把名字签上，交到谁手里也记下来。")
		}
	},
	reply: {
		speaker: "ahai",
		scene: "工棚里亮起一盏灯。阿海把一支铅笔推到你面前。",
		lines: [W("ahai", "第一天就跑了这么多地方，腿酸了吧？给家里写封信，他们还等着呢。"), W("ahai", "有好消息就说好消息，有难处也能说。你想先写哪一句？")],
		choices: {
			reassure: G("“我平安到了，已经有地方住。”", "嗯，家里先盼这一句。写完我替你找个信封，明早一起寄。"),
			candid: G("“这里还简陋，好在有人照应。”", "就这么写吧。头几天谁都不习惯，慢慢来。"),
			hopeful: G("“明天我要跟师傅学一件新本事。”", "那可说定了。明早我来叫你，带你去山前看看。")
		}
	},
	survey: {
		speaker: "zhang",
		scene: "老张把草帽往后一推，指了指山坡，又指向海边。",
		lines: [W("zhang", "你看，石头在山上，码头要填在海边。中间这条路要是堵住，哪头都干不了。"), W("zhang", "先别忙着问什么时候开炮。跟我看看山坡、便道和岸边，三处都得接得上。")],
		response: "看出来了吧？山上干得再快，车过不去，岸边照样等着。来，跟几位师傅商量商量。"
	},
	planning: {
		speaker: "yuan",
		scene: "几个班组围在草图旁。袁庚听完运输队的情况，把图往中间推了推。",
		lines: [W("zhang", "山上说能开工，岸边说还没腾出地方。车队夹在中间，两头都催我。"), W("yuan", "港口、道路，哪一头都等不起。光催没用。你刚从现场回来，说说先把哪件事接上？")],
		choices: {
			route: G("先把路腾出来，定好车怎么进出。", "我这就叫运输队去看转弯那段。车能一趟趟接上，才不至于堵在山脚。"),
			shore: G("先去岸边问清楚，土石到底卸在哪儿。", "好，我让司机先等一等。卸料口定下来，再给车队画个记号。"),
			team: G("把几位带班的叫来，摊开这张图一起定。", "也好，别再托人传话了。我叫他们过来，当面把先后次序排清楚。")
		}
	},
	archive: {
		speaker: "zhang",
		scene: "山前的工人陆续退到警戒线外。老张也收起了手里的草图。",
		lines: [W("zhang", "人都退到线外了。你跟紧我，站这边。"), W("zhang", "往后船要靠进来，得从今天这一步开始。听——")],
		response: "响了。等尘土落下去，还得一车一车往外运。今晚去计工处，你就知道大伙忙了多少。"
	},
	count: {
		speaker: "zhou",
		scene: "周姐把沾着灰的计工单摊平，在“55”下面划了一道线。",
		lines: [W("zhou", "今天的运量都记在这儿。一天定额五十五车，定额内一车奖两分，超过的每车四分。"), W("zhou", "你来替我核一张。车数别漏，大家忙了一天，正等着看。")],
		response: "这张对上了。把计工单拿给老张，他正和工友们聊这个办法。"
	},
	policy: {
		speaker: "zhang",
		scene: "老张看着计工单，旁边的工友也围了过来。",
		lines: [W("zhang", "以前多跑少跑，拿的差不多。现在多运一车能多拿一点，谁不愿意多跑两趟？"), W("zhou", "可我也得把话说在前头：只盯着车数，装得够不够、路上安不安全，谁来管？你怎么看？")],
		choices: {
			piece: G("合格的运量照实记，多干的就该多拿。", "这话我认。少装一铲也算一车可不行，车数和验收得一起记。", "zhang"),
			fixed: G("先别急着加车，路和工具都得跟上。", "也是，昨天车轮陷在泥里，想多跑都跑不动。这事得一并提上去。", "zhang"),
			trial: G("先试一段，车数、质量和事故都记下来。", "那我另开一页。跑得快不快，究竟出了什么问题，过几天摊开来看。", "zhou")
		}
	},
	review: {
		speaker: "zhang",
		scene: "又一个傍晚，老张把旧计工单从口袋里掏出来。",
		lines: [W("zhang", "后来听说奖金要停，大伙又围在工棚里议论。我把这些计工单都留着，不能只凭谁一句话。"), W("zhou", "办法有争论，账更要记清。哪天有人来问，就把前后的单子拿出来。")],
		response: "你也留一张吧。以后再翻到它，别只记得“四分钱”，也记得当时等着算账的这些人。"
	},
	contract: {
		speaker: "secretary",
		scene: "办公桌上摆着两份合同。陈秘书把其中一份转向你。",
		lines: [W("secretary", "这一份给你留着。先看清做什么、报酬怎么算，还有双方各担什么责任。"), W("secretary", "哪里没说清，现在就问。别光看见签名的地方，就急着把名字写上。")],
		response: "都看过了？那你收好自己的这份。出门往街口走，老张他们正忙着挂一块新牌子。"
	},
	slogan: {
		speaker: "zhang",
		scene: "几块写着大字的板子靠在支架旁，老张腾不出手来。",
		lines: [W("zhang", "来得正好，帮我扶一下！这几块得先排好，钉上去可不好拆。"), W("zhang", "“时间就是金钱，效率就是生命。”字都在这儿，你把顺序排给我看。")],
		response: "齐了！你往后站站，看歪没歪。主编刚才来找你，说有几封信等着送呢。"
	},
	messenger: {
		speaker: "editor",
		historyLabel: "这一页，也留下了当年的声音",
		scene: "五张签收回执摆在主编桌上，其中一张沾了雨水。",
		lines: [W("editor", "这几处你都跑到了？来，坐下，说说工棚那边怎么答的。"), W("editor", "信送到了，事情还没完。你打算怎么接着办？")],
		choices: {
			faithful: G("按原话转交，批评的那段也留下。", "好，我把原信留档。你带一份过去，请他们给个回音。", "editor"),
			clarify: G("我先去问清是哪间工棚、漏了多久。", "把这些补在旁边，原信先别改。我等你回来，一起送过去。", "editor"),
			hold: G("先交给负责修缮的人，约个日子回访。", "那你把日期记下来。到时候再去，别让他们只等来一句“正在处理”。", "editor")
		}
	},
	ballot: {
		speaker: "zhang",
		scene: "礼堂门口排着队。老张看着手里的选票，迟迟没折起来。",
		lines: [W("zhang", "干活记车数，我熟。让我挑管事的人，还真得想一想。"), W("secretary", "三个人的主张都在票上。你关心哪件事，就看看谁愿意去办。想好了，再把票折上。")],
		action: "接过选票",
		choices: {
			reformer: G(null, "你看重肯做事、敢试的人。那咱们往后也看着，他答应的机会能不能落到人头上。", "zhang"),
			moderate: G(null, "住处和吃饭，都是天天要碰的事。你这一票，他们可得记在心上。", "zhang"),
			conservative: G(null, "有人把规矩讲清，把责任担下来，大伙做事也能少点悬心。", "zhang")
		}
	},
	visit: {
		speaker: "ahai",
		historyLabel: "你也把明华轮记进了行程",
		scene: "走出礼堂，阿海展开一张折得发白的街区图。",
		lines: [W("ahai", "我家里人来信，问这些年蛇口变成什么样了。光说“变了很多”，他们哪想得出来？"), W("ahai", "假如只有半天，你带他们看哪三处？先去哪儿，后去哪儿，你来排。")],
		response: "行，就照这条路走。你讲你亲眼见过的，我补上你没来时的事。"
	},
	read: {
		speaker: "editor",
		scene: "主编把桌上的稿子挪开，露出一封折了几道的来信。",
		lines: [W("editor", "你跑过工棚，知道他们说的是什么。这封信先由你看看。"), W("editor", "别急着改字。听听写信的人到底在盼什么。")],
		action: "展开来信",
		response: "看完了？建设的稿子在这边，工人的信在这边。今天的头版，我们得作个安排。"
	},
	frontpage: {
		speaker: "editor",
		historyLabel: "批评与回应，曾被一同公开",
		scene: "头版样张只剩下一块空白。主编把铅笔递给你。",
		lines: [W("editor", "建设的消息要登，工人的难处也还没解决。"), W("editor", "你刚从他们那儿回来。这里怎么排，你说个办法。")],
		choices: {
			dialogue: G("来信和答复并排，让大家都看得见。", "那我留出两栏。答复还没到的地方空着，不能替人把话说满。"),
			followup: G("我再跑一趟，核实了写成跟进报道。", "好，纸给你留着。回来别只写“去看过”，他们最想知道什么时候能修好。"),
			building: G("建设消息放头版，给来信留个固定栏目。", "可以，下一期也得有。别今天开了栏，往后就找不到地方。")
		}
	},
	reflection: {
		speaker: "ahai",
		scene: "编辑室窗外亮起了灯。阿海在门口等你，手里还是那本旧手记。",
		lines: [W("ahai", "还记得你刚下船那会儿吗？报到棚在哪儿都要问人。现在这几条路，你闭着眼也认识了。"), W("ahai", "本子快写满了。最后这一页，你想留给什么？")],
		choices: {
			people: G("留给这些人，也记下他们的难处。", "那就从周姐写起，还有老张。明天见到他们，我告诉他们一声。"),
			rules: G("记下那些办法，怎么试，又怎么改。", "别忘了写大伙争过的那些话。往后有人遇上同样的难处，也好翻翻。"),
			places: G("把走过的路画下来，看看从哪儿来到哪儿去。", "把报到棚也画上。以后房子再多，咱们也能找到第一天落脚的地方。")
		}
	}
}, K = (e, t, n) => ({
	id: e,
	label: t,
	response: n
}), Fe = (e, t) => ({
	image: "/images/history/" + e,
	caption: t
}), Ie = (e, t, n) => ({
	video: e,
	caption: t,
	poster: n
}), Le = (e, t, n, r) => ({
	x: e,
	z: t,
	label: n,
	lead: r
}), Re = (e, t, n, r, i = {}) => ({
	id: e,
	title: t,
	kind: n,
	text: r,
	...i,
	story: Pe[e],
	options: i.options?.map((t) => ({
		...t,
		label: Pe[e]?.choices?.[t.id]?.label || t.label,
		response: Pe[e]?.choices?.[t.id]?.text || t.response
	}))
}), ze = [
	{
		id: "arrival",
		target: {
			x: -21,
			z: 19.5,
			label: "报到棚"
		},
		lead: "船靠了岸。阿海在信里写过：报到棚就在岸边。沿着便道走过去，找周姐报到。",
		no: "01",
		title: "抵达蛇口",
		subtitle: "一封来信，把你带到海边。",
		date: "1979 · 初到",
		place: "岸边与报到棚",
		image: "01-arrival",
		anchor: [
			-28,
			2,
			19
		],
		scene: "arrival",
		history: "1979年，蛇口工业区开始建设。来到这里的建设者面对的是需要逐步完善的生产与生活条件。来信、阿海、周姐和木板交接是为体验编写的个人故事。",
		sources: ["arrival"],
		tasks: [
			Re("letter", "带着来信出发", "choice", "阿海在信里说：海边正在建设，需要肯做事的人。你联系好接洽人、办妥手续，带着信来到蛇口。眼下，你最想问什么？", {
				options: [
					K("income", "这份工作，能不能让生活安稳些？", "阿海先带你看工棚和食堂，并答应陪你问清劳动报酬。"),
					K("skill", "能不能在这里学一门手艺？", "阿海把你介绍给熟悉工具的工友，让你先从观察和记录做起。"),
					K("horizon", "我想看看，一座新城怎样建起来。", "阿海指向山和海：眼前的路、码头和住处，都还有事要做。")
				],
				reveal: {
					text: "你脚下这片海边，几个月前刚刚获批：1979年1月31日，中央批复同意建立蛇口工业区。招商局档案中，至今保存着批准建立时圈划过的《香港明细全图》。",
					media: [Fe("shekou-archive-map.png", "《香港明细全图》档案影像（图上有深圳市档案馆水印）")],
					source: ["archives", "election"]
				}
			}),
			Re("handoff", "六捆木板，三处去向", "evidence", "周姐要核对六捆木板。先查看现场三条线索，再决定怎样把交接记录留给下一班。", {
				clues: [
					[
						"yard",
						"堆场里",
						"三捆木板仍在堆场，绳结和标记完整。"
					],
					[
						"shelter",
						"雨棚旁",
						"两捆木板已用于补雨棚，工友能说明去向。"
					],
					[
						"road",
						"便道边",
						"一捆木板临时垫在泥地上，尚未补入记录。"
					]
				],
				options: [
					K("annotated", "按实际去向补记，并注明临时借用", "你写下“堆场3、雨棚2、便道1”。下一班能按记录找到六捆木板。"),
					K("waited", "请经手工友一起核对后再签收", "交接慢了一点，经手人共同确认了数量和去向。"),
					K("guided", "带下一班到三处现场交接", "你多走了一小段路，把纸上的去向与实物逐一对上。")
				],
				at: Le(-24.2, 21.5, "堆场", "周姐把记录本递给你：“木板对不上数，去堆场那边看看。”")
			}),
			Re("reply", "写下第一封回信", "choice", "天色暗下来。你把随身的信纸展开，准备把今天发生的事告诉家里。", {
				options: [
					K("reassure", "先报平安，再说安顿的事", "家书先写平安，也写下住处还简陋、自己正在熟悉工作。"),
					K("candid", "把困难和工友的帮助一起写下来", "家书留下了陌生与疲惫，也记下有人愿意带你认识这里。"),
					K("hopeful", "写下明天想学会的一件事", "你写下明天的打算：先把手上的事做清楚，再慢慢学会新的本领。")
				],
				at: Le(-23, 19, "工棚", "交接办完，天快黑了。回工棚去，把今天的事写进家书。"),
				reveal: {
					text: "你写信的这些日子，岸线正在一点点改变。1979年夏天，蛇口的顺岸码头已经开始施工。",
					media: [Fe("port-construction-1979.jpg", "1979年8月，蛇口工业区顺岸码头施工现场（六月版资料图）")],
					source: "arrival"
				}
			})
		]
	},
	{
		id: "quarry",
		target: {
			x: 32,
			z: -42,
			label: "山前观察点"
		},
		lead: "第二天一早，阿海叫醒你：“今天带你去看开山。”往东走，到山前的观察点去。",
		no: "02",
		title: "开山筑港",
		subtitle: "山与海之间，先要有一条路。",
		date: "1979 · 建设之初",
		place: "山前观察点",
		image: "02-quarry",
		anchor: [
			28,
			5,
			-42
		],
		scene: "quarry",
		history: "蛇口工业区早期建设包括开山、道路和码头等基础工程。开山是建设过程中的集体劳动与工程组织，并不由游戏中的个人选择改变。此处使用“1979年7月”，不合并不同资料中的具体日期口径。",
		sources: [
			"arrival",
			"quarry",
			"video"
		],
		tasks: [
			Re("survey", "读懂眼前的工地", "observe", "在观察棚里，查看山坡、运输路和岸线。把开山与筑港之间的关系连起来。", { clues: [
				[
					"hill",
					"看山坡",
					"山体挡在施工区域与道路之间，裸岩面显出开挖层次。"
				],
				[
					"haul",
					"看运输路",
					"土石需要经过运输通路，抵达岸边施工区域。"
				],
				[
					"shore",
					"看岸线",
					"岸边的基础工程，为后续装卸与交通创造条件。"
				]
			] }),
			Re("planning", "有限时间，先协调什么？", "choice", "这是一次工程组织的情境讨论。现场还需要把通路、运输和岸边施工接起来。", { options: [
				K("route", "先把运输通路和作业衔接安排清楚", "你的安排先解决工序之间的连接，后续运输更容易协调。"),
				K("shore", "先核对岸边施工的需求与接收位置", "你的安排先弄清材料去向，避免土石运到现场却无处交接。"),
				K("team", "先让各工序负责人共同确认计划", "你的安排让信息先对齐，现场准备更充分，但需要多留一点协调时间。")
			] }),
			Re("archive", "见证开山，回到历史", "video", "看一段旧版保留的开山节目片段，也可以阅读文字摘要后继续。历史事件按史料展示，不随刚才的选择改写。", {
				video: "archive-blast-full.mp4",
				summary: "1979年7月，蛇口工业区基础工程进入建设阶段。山体、通路和岸线的改变，构成了后来港区发展的起点。",
				source: "video",
				reveal: {
					text: "史料记载：1979年7月，蛇口工业区基础工程破土动工，“开山第一炮”后来被称为改革开放的启幕之声。不同资料对具体日期有7月2日、7月8日两种说法，这里统一写作“1979年7月”。",
					media: [Fe("blast-first-shot-1979.jpg", "蛇口“开山第一炮”（六月版资料图）")],
					source: "quarry"
				}
			})
		]
	},
	{
		id: "wages",
		target: {
			x: -29,
			z: 10,
			label: "码头计工处"
		},
		lead: "山炸开了，土石要一车车运到岸边。傍晚，运土的工友在码头计工处排起了队——去帮周姐核对今天的计工单。",
		no: "03",
		title: "四分钱",
		subtitle: "多运的一车土，怎样被看见？",
		date: "1979—1980 · 劳动与报酬",
		place: "码头计工处",
		image: "03-wages",
		anchor: [
			-29,
			2,
			-9
		],
		scene: "wages",
		history: "蛇口早期土石方运输试行超定额奖励，“四分钱奖金”成为分配制度探索的代表性案例。这里按55车定额、定额内每车2分钱、超额每车4分钱演示当日奖金，不是完整工资表，也不代表所有岗位。",
		sources: ["wages"],
		tasks: [
			Re("count", "核对今天的计工单", "wage", "把滑块移到你要核对的运量，看看奖金怎样换算。示例按深圳市档案馆的记述：定额每人每天55车，定额内每车奖2分，超过定额的部分每车奖4分。"),
			Re("policy", "你会怎样回应工友？", "choice", "有人说，多干的劳动应当被看见；也有人担心，数量之外的质量和安全会被忽略。你更支持哪一种安排？", {
				match: "piece",
				options: [
					K("piece", "记录合格运量，对超额部分给予奖励", "你支持让额外劳动得到可见回报，同时要求把质量与安全核对写入记录。"),
					K("fixed", "先保持固定报酬，把困难逐项解决", "你优先保持收入稳定。工友仍希望看到额外劳动与回报之间更清楚的关系。"),
					K("trial", "先做小范围试行，再公开讨论记录", "你希望用可核对的记录检验办法，让支持与顾虑都有机会被讨论。")
				],
				historical: "piece",
				at: Le(-29, 13, "码头边的工友", "计工单核完，几个工友在码头边争了起来。过去听听。"),
				reveal: {
					match: "当年的蛇口，也选择了让多干的劳动被看见。1979年，码头工地定额每人每天55车，定额内每车奖2分，超额每车奖4分。最多的人一天跑了131车，奖金4.14元，正好等于55×0.02加76×0.04。",
					other: "历史上，蛇口选了另一条路：按车计奖。码头工地定额每人每天55车，定额内每车奖2分，超额每车奖4分；最多的人一天跑了131车，奖金4.14元。",
					after: "这个办法当时引起争论，一度被叫停，后来经新华社内参上报中央、获得批示才恢复。",
					media: [Fe("overproduction-bonus-approval.jpeg", "关于蛇口工业区超产奖问题的批示（六月版资料图）")],
					source: "wages"
				}
			}),
			Re("review", "把争论放回当时", "reading", "旧版把这段故事做成工资互动。这里保留算账和选择，再回看真实的制度探索：奖励办法经历过争论与调整，不能用一次点击概括它的全部过程。", { reveal: {
				text: "几年后，蛇口的工资表已经分出了基本、职务、浮动几栏。这张1985年的工资表，把“多劳多得”写进了每个月的账里。",
				media: [Fe("wage-slip.png", "1985年12月，蛇口工业区电脑公司职工工资表（六月版资料图，姓名已隐去）")],
				source: "wages"
			} })
		]
	},
	{
		id: "daily",
		target: {
			x: -9.79,
			z: 0,
			label: "行政办公楼"
		},
		lead: "几年过去，工棚旁盖起了办公楼。今天你要去那里，签一份把工作和报酬写清楚的约定。",
		no: "04",
		title: "立约与日常",
		subtitle: "纸上的约定，走进每天的生活。",
		date: "1980年代初 · 城市日常",
		place: "办公楼与职工街巷",
		image: "04-daily",
		anchor: [
			21,
			2,
			-22
		],
		scene: "daily",
		history: "早期蛇口在用人、报酬和管理方式上持续探索。“时间就是金钱，效率就是生命”成为与蛇口联系紧密的口号。五封信沿用旧版虚构叙事，不能作为真实个人往来或历史引语。",
		sources: ["daily", "voices"],
		tasks: [
			Re("contract", "把约定读清楚", "observe", "旧版合同交互接到办公桌上。先阅读工作内容、报酬说明和双方责任；这是一份体验用示意文本。", {
				reveal: {
					text: "这份约定在历史上有原型。蛇口较早推行劳动合同制，蛇口改革开放博物馆至今陈列着一份1985年的《合同制工人呈批表》。",
					media: [Fe("labor-contract-1985.jpg", "《合同制工人呈批表》，1985年（蛇口改革开放博物馆展品，图源人民画报）")],
					source: "daily"
				},
				clues: [
					[
						"work",
						"工作内容",
						"知道自己负责什么，也知道遇到困难向谁说明。"
					],
					[
						"pay",
						"报酬说明",
						"把计算依据与核对方式写清楚，不只留下一个口头数字。"
					],
					[
						"rights",
						"双方责任",
						"约定需要双方了解；不清楚的地方可以先提出问题。"
					]
				]
			}),
			Re("slogan", "拼起街边的标语", "slogan", "按顺序选择四块字牌，把旧版的标语拼装放回街巷。", {
				pieces: [
					"效率就是",
					"金钱",
					"生命",
					"时间就是"
				],
				answer: [
					"时间就是",
					"金钱",
					"效率就是",
					"生命"
				],
				at: Le(-3, 22, "街口标语牌", "签完约定出门，街口正在挂一块新标语牌，工人们喊你搭把手。"),
				reveal: {
					text: "1981年底，写着“时间就是金钱，效率就是生命”的巨型标语牌竖在蛇口工业区最显眼的地方。这句话当时争议很大。1984年国庆35周年，写着这句口号的蛇口彩车开过了天安门广场。",
					media: [Fe("slogan-original-photo.jpg", "标语牌原始照片（图源深圳前海管理局，六月版资料）"), Fe("national-day-float-1984.jpg", "1984年国庆，蛇口工业区彩车经过天安门广场（六月版资料图）")],
					source: ["quarry", "daily"]
				}
			}),
			Re("messenger", "五封信，走过一个街区", "delivery", "沿用旧版信使的五个站点。按顺序查看来信与收件回应，最后决定怎样处理工人的意见。", {
				stops: [
					[
						"工棚区",
						"奖金通知",
						"老张把通知摊在桌上，想先看清计算与核对的办法。"
					],
					[
						"行政办公楼",
						"港商联系函",
						"秘书留下签收记录，请你把回执带回。"
					],
					[
						"主编办公室",
						"一封工人来信",
						"工人写下漏雨和生活困难，希望有人认真回应。"
					],
					[
						"工棚区·回访",
						"处理进度的回信",
						"你带回了受理情况，工友追问下一步什么时候能有消息。"
					],
					[
						"码头",
						"放下今天的报纸",
						"报纸被放到工棚的小桌上，几个人围过来一起读。"
					]
				],
				options: [
					K("faithful", "保留原意，核实后继续转交", "你保留了来信的批评与具体问题，并让处理进度有记录可查。"),
					K("clarify", "先找写信人补充细节", "你补齐地点、时间与事情经过，来信的问题更具体。"),
					K("hold", "暂缓刊登，先跟进解决情况", "你先跟进处理，但也留下回访日期，避免来信无声地搁置。")
				],
				historical: "faithful",
				at: Le(22, -22, "工棚区", "报社托你送五封信。第一站：工棚区。"),
				stopsAt: [
					[22, -22],
					[-9.79, 0],
					[-10.93, -29],
					[21, -19],
					[-29, 13]
				],
				reveal: {
					match: "你保留了来信里的批评，当年的蛇口也有过这样的纸面空间。工业区的内部报纸《蛇口通讯》，让工人的意见和讨论能够印在纸上。",
					other: "当年的蛇口还多走了一步：工业区办起内部报纸《蛇口通讯》，让工人的意见和讨论能够印在纸上。",
					media: [Fe("shekou-newspaper.jpeg", "《蛇口通讯》报纸（六月版资料图）")],
					source: "newsroom"
				}
			})
		]
	},
	{
		id: "voices",
		target: {
			x: 4,
			z: 0,
			label: "职工礼堂"
		},
		lead: "送信的路上，你听说礼堂里要投票了：普通职工也能对管理者表达信任与否。去礼堂看看。",
		no: "05",
		title: "开声与参与",
		subtitle: "从一张选票，到一条参观路线。",
		date: "1983—1984 · 参与和展示",
		place: "职工礼堂",
		image: "05-voices",
		anchor: [
			17,
			4,
			0
		],
		scene: "voices",
		history: "1983年蛇口探索领导班子的公开选举与民主评议；1984年邓小平到蛇口视察。游戏中的三位候选人为虚构角色，玩家的投票不等同于当年的票数或当选结果；你安排的路线也不冒充真实行程。",
		sources: [
			"voices",
			"election",
			"visit"
		],
		tasks: [Re("ballot", "听主张，投出一票", "choice", "沿用礼堂中的三位虚构候选人。这一票表达你关注的问题，不改变历史上的真实选举。", {
			options: [
				K("reformer", "张国栋 · 效率与机会", "你希望有能力、愿意尝试的人获得更多做事的机会。"),
				K("moderate", "陈慧芳 · 生活与保障", "你希望发展的议程里，始终有工人的住处和日常生活。"),
				K("conservative", "刘德明 · 规则与责任", "你希望探索有清楚的责任与规则，让承诺能够被核对。")
			],
			reveal: {
				banner: "这一票的背后，是真实的历史",
				text: "三位候选人是虚构的，可“投票”这件事真实发生过。1983年4月，蛇口第一届管委会成立，宣布每年接受一次群众信任投票。1984年4月举行首次信任投票：300余名干部参加，管委会成员获信任票295张，袁庚本人得了1张不信任票；当晚还公布了82张选票上的批评意见。1985年4月，在工业区工作超过30天的正式职工直接选举管委会。",
				media: [Fe("election-1985.jpeg", "蛇口街头的投票箱（六月版资料图，具体年份待核）"), Ie("/videos/history/democratic-election.mp4", "民主选举情境影像：情境影像，非原始档案", "/images/history/election-1985.jpeg")],
				source: "voices"
			}
		}), Re("visit", "用三处地方讲述变化", "route", "沿用旧版参观路线玩法，从五处地方选三处，按你点击的顺序组成一次讲述。", {
			places: [
				["port", "蛇口码头"],
				["factory", "合资工厂"],
				["housing", "工人社区"],
				["school", "培训中心"],
				["minghua", "明华轮"]
			],
			historical: { route: "minghua" },
			reveal: {
				match: "你把明华轮放进了讲述，历史上它真的成了蛇口的名片。1984年1月，邓小平视察蛇口工业区，在明华轮上题写了“海上世界”四个字。",
				other: "你的路线没有经过明华轮，可历史在那里留下了一笔：1984年1月，邓小平视察蛇口工业区，在明华轮上题写了“海上世界”四个字。",
				media: [Fe("deng-inscription.jpg", "邓小平题写的“海上世界”（六月版资料图）"), Fe("deng-visit-shekou-1984.jpg", "1984年1月26日，邓小平在蛇口工业区（图源人民网）")],
				source: "election"
			}
		})]
	},
	{
		id: "newsroom",
		target: {
			x: -10.93,
			z: -29,
			label: "蛇口通讯编辑室"
		},
		lead: "投完票，你想把这几年的见闻写下来。编辑室的桌上，有一封等待回应的来信。",
		no: "06",
		title: "通讯与回响",
		subtitle: "让不同的声音，留在同一张纸上。",
		date: "1980年代 · 回望",
		place: "蛇口通讯编辑室",
		image: "06-newsroom",
		anchor: [
			0,
			5,
			-29
		],
		scene: "newsroom",
		history: "《蛇口通讯》及相关公共讨论，让建设与改革中的不同意见留下记录。本章把旧版来信和头版编辑的设想连起来；标题、信件与回应是游戏演绎，历史背景与资料来源单独保存。",
		sources: ["newsroom", "visit"],
		tasks: [
			Re("read", "摊开桌上的来信", "reading", "工人写道：我们关心生产，也关心住处、食堂和每天的生活。城市的变化很快，意见能否有一个被认真听见的地方？这封信沿用当前编辑室的叙事演绎。"),
			Re("frontpage", "决定今天的头版", "choice", "报纸的版面有限。你准备怎样安排这封来信与建设消息？", {
				options: [
					K("dialogue", "来信与回应并列，让问题继续被看见", "头版保留工人的具体问题，同时列出回应与后续核对时间。"),
					K("followup", "先核实问题，做一次跟进报道", "头版留下实地核对的位置，下一次报道需要回答处理到了哪一步。"),
					K("building", "建设报道为主，来信设专栏持续追踪", "头版展示建设进展，来信专栏持续记录尚未解决的问题。")
				],
				historical: "dialogue",
				reveal: {
					match: "让批评和结果出现在同一张纸上，当年的蛇口真的这样做过。1984年4月首次信任投票的当晚，新闻发布会公布了投票结果，也公布了82张选票上的批评意见。",
					other: "历史上，蛇口试过把批评和结果并列公开：1984年4月首次信任投票的当晚，新闻发布会公布了投票结果，也公布了82张选票上的批评意见。",
					media: [Fe("shekou-newspaper.jpeg", "《蛇口通讯》报纸（六月版资料图）")],
					source: "voices"
				}
			}),
			Re("reflection", "把你的经历写进手记", "choice", "从初到海边，到理解一份记录、一个约定和一张选票，你想在手记最后留下什么？", { options: [
				K("people", "记下遇见的人和他们的日常", "你的手记以具体的人收尾：城市的故事也存在于住处、工作和一封回信里。"),
				K("rules", "记下办法怎样被提出和讨论", "你的手记留下探索过程：规则需要被理解、试行，也需要回应问题。"),
				K("places", "记下山、海与街区的改变", "你的手记把场所连起来：路通向码头，街巷连着工棚，报纸留下了声音。")
			] })
		]
	}
];
//#endregion
//#region src/districtNavigation.js
function Be(e, t, n, r = .25) {
	return e.walkAreas.some((e) => t > e.min[0] + .15 && t < e.max[0] - .15 && n > e.min[2] + .15 && n < e.max[2] - .15) && !e.colliders.some((e) => t > e.min[0] - r && t < e.max[0] + r && n > e.min[2] - r && n < e.max[2] + r);
}
function Ve(e, t, n) {
	let r = 1.1, i = Math.min(...e.walkAreas.map((e) => e.min[0])), a = Math.min(...e.walkAreas.map((e) => e.min[2])), o = Math.ceil((Math.max(...e.walkAreas.map((e) => e.max[0])) - i) / r) + 1, s = Math.ceil((Math.max(...e.walkAreas.map((e) => e.max[2])) - a) / r) + 1, c = (t, n) => Be(e, t, n, .56), l = (e, t) => {
		let n = Math.ceil(Math.hypot(t.x - e.x, t.z - e.z) / .08);
		for (let r = 0; r <= n; r++) if (!c(e.x + (t.x - e.x) * r / Math.max(1, n), e.z + (t.z - e.z) * r / Math.max(1, n))) return !1;
		return !0;
	};
	if (l(t, n)) return [{
		x: n.x,
		z: n.z
	}];
	let u = (e) => ({
		x: i + e % o * r,
		z: a + Math.floor(e / o) * r
	}), d = new Uint8Array(o * s);
	for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) d[e * o + t] = +!!c(i + t * r, a + e * r);
	let f = (e) => {
		let t = -1, n = Infinity;
		for (let r = 0; r < d.length; r++) {
			if (!d[r]) continue;
			let i = u(r), a = Math.hypot(i.x - e.x, i.z - e.z);
			a < n && l(e, i) && (t = r, n = a);
		}
		return t;
	}, p = f(t), m = f(n);
	if (p < 0 || m < 0) return [];
	let h = new Float64Array(o * s).fill(Infinity), g = new Int32Array(o * s).fill(-1), _ = new Uint8Array(o * s);
	h[p] = 0;
	let v = u(m), y = [p], b = (e) => {
		let t = u(e);
		return Math.hypot(t.x - v.x, t.z - v.z);
	};
	for (; y.length;) {
		let e = 0;
		for (let t = 1; t < y.length; t++) h[y[t]] + b(y[t]) < h[y[e]] + b(y[e]) && (e = t);
		let t = y.splice(e, 1)[0];
		if (_[t]) continue;
		if (t === m) break;
		_[t] = 1;
		let n = t % o, i = Math.floor(t / o);
		for (let [e, a] of [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
			[1, 1],
			[1, -1],
			[-1, 1],
			[-1, -1]
		]) {
			let c = n + e, l = i + a;
			if (c < 0 || c >= o || l < 0 || l >= s) continue;
			let u = l * o + c;
			if (!d[u] || _[u] || e && a && (!d[i * o + c] || !d[l * o + n])) continue;
			let f = h[t] + Math.hypot(e, a) * r;
			f < h[u] && (h[u] = f, g[u] = t, y.push(u));
		}
	}
	if (!Number.isFinite(h[m])) return [];
	let x = [];
	for (let e = m; e !== p; e = g[e]) {
		if (e < 0) return [];
		x.push(u(e));
	}
	x.push(u(p)), x.reverse(), x.push({
		x: n.x,
		z: n.z
	});
	let S = [], C = t, w = 0;
	for (; w < x.length;) {
		let e = w;
		for (let t = w; t < x.length; t++) l(C, x[t]) && (e = t);
		let t = x[e];
		S.push(t), C = t, w = e + 1;
	}
	return S;
}
//#endregion
//#region src/campaignScenery.js
function q(n, r, { whitebox: i = !1 } = {}) {
	let a = new t();
	a.name = "CAMPAIGN_STORY_SETS", n.add(a);
	let o = new M(), s = {};
	function l(t, n) {
		let r = new c({
			color: i ? "#d8dcde" : t,
			roughness: .87
		});
		if (n && !i) {
			if (!s[n]) {
				let t = o.load(fe("/images/campaign/texture-" + n + ".png"));
				t.colorSpace = ge, t.wrapS = t.wrapT = e, t.anisotropy = 4, s[n] = t;
			}
			r.map = s[n], r.color.set("#ffffff"), r.bumpMap = s[n], r.bumpScale = .015;
		}
		return r;
	}
	let u = {
		wall: l("#dedbd1", "plaster"),
		wood: l("#82705c", "wood"),
		blue: l("#728a98", "canvas"),
		stone: l("#a6a398", "rock"),
		dark: l("#3c4c57"),
		paper: l("#eee4cf"),
		red: l("#aa725b"),
		green: l("#788774"),
		light: l("#b6b597"),
		yellow: l("#c5af77")
	}, d = new re(1, 1, 1), f = new Se(1, 1, 1, 10), p = new m(1, 1);
	function h(e, t, n, r, i, a, o, s = u.wood) {
		let c = new v(d, s);
		return c.scale.set(t, n, r), c.position.set(i, a, o), c.castShadow = c.receiveShadow = !0, e.add(c), c;
	}
	function g(e, t, n, r, i, a, o = u.dark) {
		let s = new v(f, o);
		return s.scale.set(t, n, t), s.position.set(r, i, a), s.castShadow = !0, e.add(s), s;
	}
	function _(e, n, r) {
		let i = new t();
		return i.name = e, i.position.set(n, 0, r), a.add(i), i;
	}
	function y(e, t, n, r = 2, i = 1) {
		h(e, r, .09, i, t, .91, n);
		for (let a of [-r * .42, r * .42]) for (let r of [-i * .36, i * .36]) h(e, .09, .87, .09, t + a, .43, n + r);
		h(e, r * .8, .07, .08, t, .32, n);
	}
	function b(e, t, n, r, i = .8) {
		h(e, i, .06, i, t, n, r);
		for (let a = 0; a < 3; a++) for (let o of [-1, 1]) h(e, i, .08, .045, t, n + .1 + a * .12, r + o * i * .48), h(e, .045, .08, i, t + o * i * .48, n + .1 + a * .12, r);
	}
	function x(e, t, n, r) {
		let i = new de(t, n, 20, 8);
		i.rotateX(-Math.PI / 2);
		let a = i.attributes.position;
		for (let e = 0; e < a.count; e++) a.setY(e, Math.sin(a.getX(e) * 11) * .018 + (a.getZ(e) / n) ** 2 * .35);
		i.computeVertexNormals();
		let o = u.blue.clone();
		o.side = 2;
		let s = new v(i, o);
		s.position.y = r, s.castShadow = !0, e.add(s);
		for (let i of [-t * .47, t * .47]) for (let t of [-n * .46, n * .46]) g(e, .045, r, i, r / 2, t, u.wood);
	}
	function S(e, t, n, r, a, o = 2) {
		if (i) return;
		let s = document.createElement("canvas");
		s.width = 768, s.height = 160;
		let l = s.getContext("2d");
		l.fillStyle = "#ded8c6", l.fillRect(0, 0, 768, 160), l.fillStyle = "#374d5d", l.font = "60px serif", l.textAlign = "center", l.textBaseline = "middle", l.fillText(t, 384, 80, 730);
		let u = new I(s);
		u.colorSpace = ge;
		let d = new v(new de(o, o * 160 / 768), new c({
			map: u,
			roughness: 1
		}));
		d.position.set(n, r, a), e.add(d);
	}
	function C(e, t, n, i, a, o) {
		r.colliders.push({
			name: e,
			min: [
				t - i / 2,
				-.1,
				n - a / 2
			],
			max: [
				t + i / 2,
				o,
				n + a / 2
			]
		});
	}
	let w = _("STORY_ARRIVAL_SHED", -23, 16);
	h(w, 5, .2, 3.6, 0, .05, 0, u.stone), h(w, 5, 3.2, .15, 0, 1.6, -1.65, u.wall), h(w, .15, 3.2, 3.4, 2.45, 1.6, 0, u.wall), h(w, 1.2, 3.2, .15, -1.9, 1.6, 1.65, u.wall), h(w, 5.4, .14, 4, 0, 3.25, 0, u.blue), x(w, 5.5, 4.8, 3.12), y(w, .5, .3, 2.1, 1);
	for (let e = 0; e < 4; e++) h(w, .7, .025, .55, .4, .98 + e * .025, .3, u.paper);
	b(w, -1.5, .16, -.8), b(w, -1.5, .16, .2), S(w, "报到处", .5, 2.55, 1.7, 2), C("reporting-shed", -23, 16, 5.5, 4.8, 3.5);
	for (let [e, t, n] of [
		[
			-26,
			20,
			3
		],
		[
			-21,
			12,
			2
		],
		[
			-26,
			12,
			1
		]
	]) {
		let r = _("STORY_TIMBER_BUNDLES", e, t);
		for (let e = 0; e < n; e++) {
			for (let t = 0; t < 4; t++) h(r, 1.8, .08, .15, 0, .1 + e * .14, t * .17);
			for (let t of [-.6, .6]) h(r, .025, .13, .75, t, .1 + e * .14, .25, u.dark);
		}
		C("timber-bundle", e, t, 1.8, .8, .7);
	}
	let T = _("STORY_WAGE_DESK", -29, 8);
	x(T, 2.7, 2.4, 2.8), y(T, 0, 0, 2.1, 1.2), h(T, .75, .035, .6, -.3, .99, 0, u.paper), h(T, .2, .02, .25, .65, .98, .2, u.dark), S(T, "计工处", 0, 2.25, .6, 1.5), b(T, 1.4, 0, -.5), C("wage-desk", -29, 8, 2.7, 2.4, 3);
	let E = _("STORY_WHEELBARROW", -30, 12);
	h(E, .8, .12, 1.3, 0, .65, 0);
	for (let e of [-.43, .43]) h(E, .08, .4, 1.3, e, .85, 0);
	for (let e of [-.3, .3]) h(E, .06, .06, 2.3, e, .67, .4);
	let D = g(E, .28, .12, 0, .3, -.65);
	D.rotation.z = Math.PI / 2;
	let O = _("STORY_MARKET", 9, 28);
	for (let e = 0; e < 3; e++) {
		let n = new t();
		n.position.z = (e - 1) * 3.1, O.add(n), x(n, 2.7, 2.7, 2.7), y(n, 0, 0, 2.4, 1.1);
		for (let t = 0; t < 3; t++) {
			let r = (t - 1) * .76;
			b(n, r, .99, 0, .67);
			for (let i = 0; i < 8; i++) {
				let a = new v(p, [
					u.green,
					u.red,
					u.yellow
				][(e + t) % 3]);
				a.position.set(r + (i % 3 - 1) * .18, 1.2 + Math.floor(i / 6) * .14, (Math.floor(i / 3) % 2 - .5) * .25), a.scale.set(.12, .1 + (t === 0 ? .12 : 0), .12), a.castShadow = !0, n.add(a);
			}
		}
	}
	S(O, "街坊菜市", 0, 2.25, 4.5, 2.3), C("market-stalls", 9, 28, 2.9, 9, 3);
	let k = _("STORY_QUARRY_OBSERVATION", 38, -43);
	x(k, 5, 3.5, 3.2), y(k, 0, 0, 2.5, 1.1), h(k, 1.2, .025, .8, 0, .98, 0, u.paper);
	for (let e of [-2.4, 2.4]) g(k, .1, 1.2, e, .6, -2, u.wood);
	return h(k, 5, .1, .1, 0, 1.1, -2), S(k, "山前观察点", 0, 2.2, -.3, 2.8), n.userData.campaignSets = [
		"arrival",
		"quarry",
		"wages",
		"daily"
	], a;
}
//#endregion
//#region src/landscape.js
var J = (e, t, n) => {
	let r = l.clamp((n - e) / (t - e), 0, 1);
	return r * r * (3 - 2 * r);
}, He = (e, t) => {
	let n = Math.imul(e, 374761393) ^ Math.imul(t, 668265263) ^ 1983;
	return n = Math.imul(n ^ n >>> 13, 1274126177), ((n ^ n >>> 16) >>> 0) / 4294967295;
};
function Y(e, t) {
	let n = Math.floor(e), r = Math.floor(t), i = J(0, 1, e - n), a = J(0, 1, t - r);
	return l.lerp(l.lerp(He(n, r), He(n + 1, r), i), l.lerp(He(n, r + 1), He(n + 1, r + 1), i), a);
}
function Ue(e, t) {
	let n = 0, r = 1;
	for (let i = 0; i < 5; i++) n += (Y(e, t) - .5) * r, e = e * 2.03 + 37.1, t = t * 2.03 + 11.3, r *= .5;
	return n;
}
var We = [
	[
		32,
		-44,
		0
	],
	[
		29,
		-52,
		3.5
	],
	[
		-3,
		-58,
		7.2
	],
	[
		26,
		-66,
		11
	],
	[
		0,
		-74,
		15
	]
];
function Ge(e, t) {
	let n = Infinity, r = 0;
	for (let i = 1; i < We.length; i++) {
		let a = We[i - 1], o = We[i], s = o[0] - a[0], c = o[1] - a[1], u = l.clamp(((e - a[0]) * s + (t - a[1]) * c) / (s * s + c * c), 0, 1), d = a[0] + s * u, f = a[1] + c * u, p = Math.hypot(e - d, t - f);
		p < n && (n = p, r = a[2] + (o[2] - a[2]) * u);
	}
	return {
		distance: n,
		height: r
	};
}
function Ke(e, t) {
	let n = J(0, 14, -t - 46), r = (29 * Math.exp(-(((e - 4) / 35) ** 2) - ((t + 78) / 23) ** 2) + 17 * Math.exp(-(((e + 43) / 24) ** 2) - ((t + 82) / 22) ** 2) + 19 * Math.exp(-(((e - 49) / 24) ** 2) - ((t + 78) / 26) ** 2)) * n;
	r += Ue(e * .075, t * .075) * 7 * n, r = Math.max(0, r);
	let i = Math.min(e + 11, 32 - e, -t - 49, t + 78);
	if (i > 0) {
		let n = 3.3 + Math.floor(Math.max(0, -t - 51) / 6) * 3.8 + Ue(e * .38, t * .38) * .38;
		r = l.lerp(r, Math.min(r, n), J(0, 1.7, i));
	}
	let a = Ge(e, t);
	return t < -43 && a.distance < 3 && (r = l.lerp(r, a.height, 1 - J(1.9, 3, a.distance))), r;
}
function qe(e, t = !1) {
	let n = e.clone();
	if (t) return n.color?.set("#d3d7d8"), n.map = null, n.normalMap = null, n.roughnessMap = null, n.metalnessMap = null, n.vertexColors = !1, n.metalness = 0, n.roughness = .9, n;
	if (n.color) {
		let e = {};
		n.color.getHSL(e), n.color.setHSL(e.h, e.s * .24, Math.min(.9, e.l + .035));
	}
	return n.roughness = Math.max(.55, n.roughness ?? .8), n.metalness = Math.min(.25, n.metalness ?? 0), n.onBeforeCompile = (e) => {
		e.fragmentShader = e.fragmentShader.replace("#include <map_fragment>", "#include <map_fragment>\nfloat legacyLuma=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));diffuseColor.rgb=mix(vec3(legacyLuma),diffuseColor.rgb,.28);");
	}, n.customProgramCacheKey = () => "shekou-reused-neutral-v1", n;
}
function Je({ whitebox: n = !1 } = {}) {
	let r = new t();
	r.name = "MICROWAVE_HILL_AND_NATURAL_SHORE";
	let i = (t) => {
		if (n) return null;
		let r = new M().load(fe("/images/terrain/" + t + ".png"));
		return r.colorSpace = ge, r.wrapS = r.wrapT = e, r.anisotropy = 8, r;
	}, o = qe(new c({
		color: "#d5ded7",
		map: i("t_grass2"),
		roughness: .98,
		vertexColors: !0
	}), n), s = n ? null : new M().load(fe("/images/campaign/texture-rock.png"));
	s && (s.colorSpace = ge, s.wrapS = s.wrapT = e, s.anisotropy = 8);
	let u = qe(new c({
		color: "#d5d6cf",
		map: s,
		bumpMap: s,
		bumpScale: .22,
		roughness: .98,
		vertexColors: !0
	}), n), d = i("t_soil"), f = qe(new c({
		color: "#c5b9a1",
		map: d,
		bumpMap: d,
		bumpScale: .05,
		roughness: .95,
		side: 2
	}), n), p = [], m = [], h = [], g = [], _ = [];
	for (let e = 0; e <= 70; e++) for (let t = 0; t <= 116; t++) {
		let n = -76 + t * 152 / 116, r = -111 + e * 70 / 70, i = Ke(n, r);
		p.push(n, i - .04, r), m.push(n / 7, r / 7);
		let a = new R(n > -12 && n < 34 && r < -49 && r > -80 ? "#c0bfb3" : "#9cae9d");
		a.multiplyScalar(.88 + Y(n * .6, r * .6) * .2), h.push(a.r, a.g, a.b);
	}
	for (let e = 0; e < 70; e++) for (let t = 0; t < 116; t++) {
		let n = e * 117 + t, r = n + 1, i = n + 116 + 1, a = i + 1, o = -76 + (t + .5) * 152 / 116, s = -111 + (e + .5) * 70 / 70;
		(o > -12 && o < 34 && s < -49 && s > -80 ? _ : g).push(n, i, r, r, i, a);
	}
	let y = new N();
	y.setAttribute("position", new a(p, 3)), y.setAttribute("uv", new a(m, 2)), y.setAttribute("color", new a(h, 3)), y.setIndex([...g, ..._]), y.computeVertexNormals(), u.flatShading = !0;
	for (let [e, t, n] of [[
		"Grass_Ridges",
		g,
		o
	], [
		"Exposed_Quarry_Rock",
		_,
		u
	]]) {
		let i = y.clone();
		i.setIndex(t);
		let a = i;
		if (e === "Exposed_Quarry_Rock") {
			a = i.toNonIndexed(), i.dispose();
			let e = a.attributes.position, t = a.attributes.uv, n = new V(), r = new V(), o = new V(), s = new V();
			for (let i = 0; i < e.count; i += 3) {
				n.fromBufferAttribute(e, i), r.fromBufferAttribute(e, i + 1), o.fromBufferAttribute(e, i + 2), s.crossVectors(r.sub(n), o.sub(n)).normalize();
				for (let n = i; n < i + 3; n++) {
					let r = e.getX(n), i = e.getY(n), a = e.getZ(n);
					Math.abs(s.y) > Math.max(Math.abs(s.x), Math.abs(s.z)) ? t.setXY(n, r / 5, a / 5) : Math.abs(s.x) > Math.abs(s.z) ? t.setXY(n, a / 5, i / 5) : t.setXY(n, r / 5, i / 5);
				}
			}
			t.needsUpdate = !0;
		}
		let o = new v(a, n);
		o.name = e, o.castShadow = o.receiveShadow = !0, r.add(o);
	}
	y.dispose();
	let b = [], x = [], S = [];
	for (let e = 0; e < We.length; e++) {
		let t = We[Math.max(0, e - 1)], n = We[Math.min(We.length - 1, e + 1)], r = We[e], i = n[0] - t[0], a = n[1] - t[1], o = Math.hypot(i, a), s = -a / o * 1.75, c = i / o * 1.75;
		for (let t of [-1, 1]) b.push(r[0] + s * t, r[2] + .09, r[1] + c * t), x.push(t === -1 ? 0 : 1, e * 3);
		if (e < We.length - 1) {
			let t = e * 2;
			S.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
		}
	}
	let C = new N();
	C.setAttribute("position", new a(b, 3)), C.setAttribute("uv", new a(x, 2)), C.setIndex(S), C.computeVertexNormals();
	let w = new v(C, f);
	w.name = "Winding_Haul_Road", w.receiveShadow = !0, r.add(w);
	let T = [], E = [], D = [];
	for (let e = 0; e <= 65; e++) for (let t = 0; t <= 12; t++) {
		let n = -47 + t * 14 / 12, r = -56 + e * 111 / 65, i = l.clamp((-n - 34) / 13, 0, 1), a = -.12 - i * i * 3.5 + Ue(n * .3, r * .3) * .3, o = 1 - J(37, 44, Math.abs(r)), s = l.lerp(a, -2.2 - i * 3, o);
		T.push(n, s, r), E.push(n / 5, r / 5);
	}
	for (let e = 0; e < 65; e++) for (let t = 0; t < 12; t++) {
		let n = e * 13 + t, r = n + 1, i = n + 12 + 1, a = i + 1;
		D.push(n, i, r, r, i, a);
	}
	let O = new N();
	O.setAttribute("position", new a(T, 3)), O.setAttribute("uv", new a(E, 2)), O.setIndex(D), O.computeVertexNormals();
	let k = new v(O, qe(new c({
		map: i("t_sand"),
		color: "#b3b3aa",
		roughness: 1
	}), n));
	k.name = "Natural_Rocky_Shore", k.receiveShadow = !0, r.add(k);
	let A = 1979, j = () => (A = A * 1664525 + 1013904223 >>> 0, A / 4294967296), P = [], F = [], I = [], L = [];
	for (let e = 0; e < 95; e++) {
		let t = e < 70 ? -61 + j() * 120 : 31 + j() * 2, n = e < 70 ? -91 + j() * 43 : -40 + j() * 75;
		if (!(e < 70 && t > -12 && t < 34 && n > -80 && n < -49)) for (let e = 0; e < 18; e++) {
			let e = t + (j() - .5) * 3, r = n + (j() - .5) * 3, i = r < -43 ? Ke(e, r) : .015, a = .2 + j() * .28, o = .025 + j() * .035, s = j() * Math.PI * 2, c = Math.cos(s) * o, l = Math.sin(s) * o, u = P.length / 3;
			P.push(e - c, i, r - l, e + c, i, r + l, e + c * .4 + .08, i + a * .65, r + l * .4, e + .08, i + a, r + .03), I.push(0, 0, 1, 0, 1, .65, .5, 1);
			for (let e = 0; e < 4; e++) {
				let t = new R(e < 2 ? "#56695b" : "#85917a");
				F.push(t.r, t.g, t.b);
			}
			L.push(u, u + 2, u + 1, u + 1, u + 2, u + 3);
		}
	}
	let z = new N();
	z.setAttribute("position", new a(P, 3)), z.setAttribute("color", new a(F, 3)), z.setAttribute("uv", new a(I, 2)), z.setIndex(L), z.computeVertexNormals();
	let B = new v(z, new c({
		color: n ? "#d4d7d8" : "#bbc3b9",
		vertexColors: !n,
		roughness: 1,
		side: 2
	}));
	return B.name = "CoastalGrass_From_Unity_Pattern", r.add(B), r;
}
//#endregion
//#region src/reusedAssets.js
async function Ye(e, { whitebox: n = !1 } = {}) {
	let r = new he(), i = /* @__PURE__ */ new Map(), a = [];
	await Promise.all([
		"gantry_crane",
		"cargo_ship",
		"fishing_boat",
		"hill_tree_lychee",
		"hill_tree_pine",
		"shrub_bush",
		"coastal_fern",
		"coastal_shade_tree",
		"warehouse",
		"crate_stack",
		"bollard_rope",
		"dl_mountain",
		"dl_palm",
		"dl_bulldozer"
	].map(async (e) => {
		try {
			let t = (await r.loadAsync(fe("/models/reused/" + e + ".glb"))).scene, a = /* @__PURE__ */ new Map();
			t.traverse((e) => {
				if (!e.isMesh) return;
				e.castShadow = e.receiveShadow = !0;
				let t = (e) => (a.has(e) || a.set(e, qe(e, n)), a.get(e));
				e.material = Array.isArray(e.material) ? e.material.map(t) : t(e.material);
			}), i.set(e, t);
		} catch (t) {
			console.warn("[reused-asset] unavailable", e, t.message);
		}
	}));
	function o(n, r, o, s, c = 0, l = 0) {
		let u = i.get(n);
		if (!u) return null;
		let d = u.clone(!0), f = new t();
		f.add(d), f.rotation.y = c, f.updateMatrixWorld(!0);
		let p = new j().setFromObject(f), m = p.getSize(new V()), h = p.getCenter(new V()), g = s / Math.max(m.x, m.y, m.z, .001);
		f.position.set(-h.x, -p.min.y, -h.z);
		let _ = new t();
		_.scale.setScalar(g), _.add(f);
		let v = new t();
		return v.name = "REUSED_" + n, v.position.set(r, l, o), v.add(_), e.add(v), a.push({
			name: n,
			position: [
				r,
				l,
				o
			],
			fit: s,
			rotation: c
		}), v;
	}
	let s = (t) => {
		e.children.filter((e) => e.name.startsWith(t)).forEach((e) => e.removeFromParent());
	};
	i.has("gantry_crane") && (s("Fallback_Crane"), o("gantry_crane", -29, -13, 14, Math.PI / 2), o("gantry_crane", -29, 33, 13, Math.PI / 2)), i.has("cargo_ship") && i.has("fishing_boat") && (s("Fallback_Boat"), o("cargo_ship", -41, -17, 23, Math.PI / 2, -2.2), o("fishing_boat", -40, 12, 14, Math.PI / 2, -1.1), o("cargo_ship", -51, 31, 19, Math.PI / 2, -1.7)), i.has("warehouse") && (s("Workshop_码头仓库"), o("warehouse", -19, -16, 8, Math.PI / 2));
	for (let [t, n] of [
		[-7, 7],
		[8, 9],
		[-6, -13],
		[8, -14],
		[-30, 4],
		[-30, 23],
		[29, -8],
		[30, -24],
		[29, 18],
		[12, -24],
		[-10, 38],
		[6, 38],
		[29, 38]
	]) {
		let r = Math.abs(t) > 25 ? "coastal_shade_tree" : "hill_tree_lychee";
		i.has(r) && (e.getObjectByName("Fallback_Tree_" + t + "_" + n)?.removeFromParent(), o(r, t, n, Math.abs(t) > 25 ? 6.2 : 6.5, Math.sin(t + n) * 2));
	}
	for (let e = 0; e < 28; e++) {
		let t = -62 + e % 10 * 13 + Math.sin(e * 4.1) * 3, n = -96 + Math.floor(e / 10) * 11;
		t > -13 && t < 34 && n > -80 && n < -49 || o(e % 3 ? "hill_tree_pine" : "hill_tree_lychee", t, n, 5.2 + e % 4 * .7, e * 1.7, Ke(t, n));
	}
	for (let [e, t] of [
		[-32, -42],
		[-31, 41],
		[32, -35],
		[32, -19],
		[32, 8],
		[31, 39],
		[-12, -44],
		[36, -53],
		[40, -61],
		[-31, -53],
		[-39, -69],
		[-46, -82]
	]) o("shrub_bush", e, t, 1.7, (e + t) * .1, t < -43 ? Ke(e, t) : 0), o("coastal_fern", e + 1.2, t + .7, 1.1, .4, t < -43 ? Ke(e + 1.2, t + .7) : 0);
	o("dl_mountain", -58, -87, 42, .45, -1), o("dl_bulldozer", 22, -54, 3.5, Math.PI / 2, 4.2), o("dl_bulldozer", -2, -67, 3.2, 1.2, 11.5);
	for (let [e, t] of [
		[-26, -5],
		[-26, -2],
		[30, 12]
	]) o("crate_stack", e, t, 2.1, Math.PI / 2);
	for (let e = -35; e < 40; e += 12) o("bollard_rope", -32.5, e, 1.1, 0);
	return e.userData.reusedAssets = a, a;
}
//#endregion
//#region src/compactDistrict.js
var Xe = {
	walkSpeed: 3.8,
	runSpeed: 6,
	radius: .25,
	routeWidth: 3,
	bounds: {
		minX: -34,
		maxX: 34,
		minZ: -45,
		maxZ: 43
	},
	spawn: [
		0,
		0,
		17
	]
}, Ze = [
	{
		id: "quay",
		name: "顺岸码头",
		point: [
			-29,
			0,
			13
		]
	},
	{
		id: "mill",
		name: "大成面粉厂",
		point: [
			-15.2,
			0,
			-27
		]
	},
	{
		id: "housing",
		name: "职工生活区",
		point: [
			22,
			0,
			-22
		]
	},
	{
		id: "quarry",
		name: "微波山采石场",
		point: [
			32,
			0,
			-42
		]
	},
	{
		id: "commerce",
		name: "招商大厦",
		point: [
			-13,
			0,
			28
		]
	}
];
function X(n, r, { whitebox: i = !1 } = {}) {
	let a = new t();
	a.name = "COMPACT_PORT_DISTRICT_20261028";
	let o = [], s = [], l = [{
		min: [
			-34,
			-.2,
			-45
		],
		max: [
			34,
			0,
			43
		]
	}], u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = 1983, h = () => (p = p * 1664525 + 1013904223 >>> 0, p / 4294967296);
	function g(t, n) {
		let r = document.createElement("canvas");
		r.width = r.height = 256;
		let i = r.getContext("2d");
		i.fillStyle = t, i.fillRect(0, 0, 256, 256);
		for (let e = 0; e < 3500; e++) i.fillStyle = h() > .5 ? "rgba(255,250,235,.10)" : "rgba(26,42,52,.08)", i.fillRect(h() * 256, h() * 256, h() * 3 + 1, h() * 2 + 1);
		if (n === "plaster") for (let e = 0; e < 18; e++) {
			let e = h() * 256;
			i.fillStyle = "#52626d0b", i.fillRect(e, 0, 1 + h() * 5, 80 + h() * 176);
		}
		if (n === "paving") {
			i.strokeStyle = "#5a687443", i.lineWidth = 2;
			for (let e = 0; e < 256; e += 64) {
				i.beginPath(), i.moveTo(0, e), i.lineTo(256, e), i.stroke();
				for (let t = e % 128 ? 32 : 0; t < 256; t += 64) i.beginPath(), i.moveTo(t, e), i.lineTo(t, e + 64), i.stroke();
			}
		}
		if (n === "wood") {
			for (let e = 0; e < 256; e += 7) i.strokeStyle = "#503b2f55", i.beginPath(), i.moveTo(0, e), i.bezierCurveTo(70, e - 4, 160, e + 4, 256, e), i.stroke();
			i.fillStyle = "#26394766", i.fillRect(0, 0, 256, 3), i.fillRect(0, 125, 256, 3);
		}
		if (n === "roof") {
			i.strokeStyle = "#26394777", i.lineWidth = 2;
			for (let e = 0; e < 256; e += 13) i.beginPath(), i.moveTo(e, 0), i.lineTo(e, 256), i.stroke();
		}
		let a = new I(r);
		return a.colorSpace = ge, a.wrapS = a.wrapT = e, a.anisotropy = 4, f.add(a), a;
	}
	let _ = i ? {} : {
		plaster: g("#d8d6cc", "plaster"),
		paving: g("#bbbcb4", "paving"),
		wood: g("#a18c70", "wood"),
		roof: g("#65747a", "roof"),
		rust: g("#806256", "metal")
	}, y = {
		plaster: "#d6d6ce",
		cream: "#ede6d5",
		blue: "#71899a",
		dark: "#3e5361",
		roof: "#5a6c75",
		wood: "#b09b7c",
		rust: "#a76b50",
		glass: "#344e60",
		stone: "#aeb7b8",
		paving: "#c5c5bb",
		soil: "#9b947b",
		leaf: "#556b5e",
		leaf2: "#7c8870",
		red: "#a66d56",
		water: "#56788c",
		yellow: "#c7a874",
		white: "#e9e5d9"
	}, x = {};
	for (let [e, t] of Object.entries(y)) {
		let n = new c({
			color: i ? "#d4d7d8" : t,
			roughness: e === "glass" ? .3 : .83,
			metalness: ["rust", "dark"].includes(e) ? .25 : 0
		});
		if (!i) {
			let t = _[e];
			t && (n.color.set("#ffffff"), n.map = t, n.bumpMap = t, n.bumpScale = e === "wood" ? .018 : .025);
		}
		u.add(n), x[e] = n;
	}
	let S = new re(1, 1, 1);
	d.add(S);
	let C = new Se(1, 1, 1, 12);
	d.add(C);
	function w(e, t, n, r, a, o, s, c = "plaster") {
		let l = S;
		if (!i && x[c].map) {
			l = new re(t, n, r);
			let e = l.attributes.uv, i = [
				[r, n],
				[r, n],
				[t, r],
				[t, r],
				[t, n],
				[t, n]
			];
			for (let t = 0; t < e.count; t++) {
				let [n, r] = i[Math.floor(t / 4)];
				e.setXY(t, e.getX(t) * n / 3, e.getY(t) * r / 3);
			}
			d.add(l);
		}
		let u = new v(l, x[c]);
		return u.position.set(a, o, s), l === S && u.scale.set(t, n, r), u.castShadow = u.receiveShadow = !0, e.add(u), u;
	}
	function T(e, t, n, r, i, a, o = "dark") {
		let s = new v(C, x[o]);
		return s.position.set(r, i, a), s.scale.set(t, n, t), s.castShadow = s.receiveShadow = !0, e.add(s), s;
	}
	function E(e, t, n, r, i = "dark") {
		let a = new V(...t), o = new V(...n), s = o.clone().sub(a), c = T(e, r, s.length(), 0, 0, 0, i);
		return c.position.copy(a.add(o).multiplyScalar(.5)), c.quaternion.setFromUnitVectors(new V(0, 1, 0), s.normalize()), c;
	}
	function D(e = 0, n = 0) {
		let r = new t();
		return r.position.set(e, 0, n), a.add(r), r;
	}
	function O(e, t, n, r, i = 10, a = "prop") {
		o.push({
			name: a,
			min: [
				e - n / 2,
				-.1,
				t - r / 2
			],
			max: [
				e + n / 2,
				i,
				t + r / 2
			]
		});
	}
	function A(e, t, n, r, a, o, s) {
		if (i) return;
		let l = document.createElement("canvas");
		l.width = 1024, l.height = 128;
		let p = l.getContext("2d");
		p.fillStyle = "#d7c393", p.fillRect(0, 0, 1024, 128), p.fillStyle = "#304656", p.font = "bold 66px \"Songti SC\",serif", p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, 512, 64, 980);
		let m = new I(l);
		m.colorSpace = ge, f.add(m);
		let h = new c({
			map: m,
			roughness: .95
		});
		u.add(h);
		let g = new de(n, r);
		d.add(g);
		let _ = new v(g, h);
		_.position.set(a, o, s), e.add(_);
	}
	w(a, 68, .28, 88, 0, -.16, -1, "stone"), w(a, 11, .025, 86, 0, -.006, -1, "paving"), w(a, 62, .025, 8, -1, -.003, 10, "paving"), w(a, 12, .025, 87, -28, -.002, -1, "paving"), w(a, 31, .026, 25, -1, -.001, 4, "paving");
	for (let e of [-6, 6]) for (let t = -43; t < 42; t += 2.4) w(a, .13, .04, 2.2, e, .025, t, "cream");
	for (let e = -40; e < 42; e += 4) w(a, .2, .1, 3, -33, .02, e, "cream");
	n.updateMatrixWorld(!0);
	for (let e of [
		{
			name: "Building_Office",
			x: -17,
			z: 0
		},
		{
			name: "Building_Hall",
			x: 17,
			z: 0
		},
		{
			name: "Building_Press_24m",
			x: 0,
			z: -29
		}
	]) {
		let t = n.getObjectByName(e.name);
		if (!t) throw Error("Missing civic building " + e.name);
		let r = new j().setFromObject(t), o = r.getCenter(new V());
		a.attach(t), t.position.add(new V(e.x - o.x, -r.min.y, e.z - o.z)), t.updateMatrixWorld(!0);
		let c = new j().setFromObject(t), l = e.name === "Building_Office" ? 1 : -1;
		s.push({
			name: e.name,
			min: c.min.toArray(),
			max: c.max.toArray(),
			door: [
				(l < 0 ? c.min.x : c.max.x) + l * 1.1,
				0,
				e.z
			]
		}), O(e.x, e.z, c.max.x - c.min.x, c.max.z - c.min.z, c.max.y, e.name), i && t.traverse((e) => {
			e.isMesh && (e.material = x.plaster);
		}), w(a, c.max.x - c.min.x + .25, .22, c.max.z - c.min.z + .25, e.x, .1, e.z, "stone");
		let u = e.x > 0 ? -1 : 1, d = (u < 0 ? c.min.x : c.max.x) + u * .7;
		if (e.name !== "Building_Hall") for (let t of [-1.8, 1.8]) {
			let n = T(a, .12, .4, d, 2.5, e.z + t, "yellow");
			n.castShadow = !1;
		}
	}
	let M = D(-23, -30);
	w(M, 12, 9, 12, 0, 4.5, 0, "plaster"), w(M, 12.5, .3, 12.5, 0, 9.15, 0, "roof");
	for (let e = 0; e < 3; e++) for (let t = -4; t <= 4; t += 2) w(M, 1.15, 1.35, .09, t, 1.9 + e * 2.55, 6.06, "glass"), w(M, 1.4, .13, .28, t, 1.2 + e * 2.55, 6.15, "cream");
	for (let e of [
		-4,
		0,
		4
	]) T(M, 1.7, 15, e, 7.6, -8, "cream"), T(M, 1.8, .3, e, 15.2, -8, "dark"), E(M, [
		e,
		15.4,
		-8
	], [
		e,
		17,
		-8
	], .18, "rust");
	E(M, [
		-5,
		14,
		-8
	], [
		5,
		14,
		-8
	], .12, "dark"), A(M, "大成面粉厂", 6, .7, 0, 7.3, 6.1), O(-23, -32, 13, 19, 18, "flour-mill");
	function N(e, t) {
		let n = D(e, t);
		w(n, 12, 8, 8, 0, 4, 0, "cream"), w(n, 12.6, .3, 8.5, 0, 8.2, 0, "red");
		for (let e = 0; e < 3; e++) {
			w(n, 12.5, .16, 1.5, 0, 1.1 + e * 2.55, 4.4, "stone");
			for (let t = -5; t <= 5; t += 2) {
				w(n, .85, 1.5, .07, t, 2 + e * 2.55, 4.06, "blue");
				for (let r of [-.6, .6]) w(n, .045, .8, .045, t + r, 1.6 + e * 2.55, 5, "dark");
			}
			w(n, 12.4, .05, .05, 0, 2 + e * 2.55, 5, "dark");
		}
		E(n, [
			-5,
			6.5,
			5
		], [
			5,
			6.5,
			5
		], .015, "dark");
		for (let e = 0; e < 6; e++) w(n, .65, .8, .02, -4 + e * 1.5, 6, 5, [
			"white",
			"blue",
			"cream"
		][e % 3]);
		return O(e, t, 12.5, 9, 9, "workers-housing"), n;
	}
	N(22, -28).name = "Compact_Housing_0", N(22, -41).name = "Compact_Housing_1", A(a, "职工生活区", 5, .6, 22, 4.2, -23.9);
	let P = D(-21, 28);
	w(P, 10, 21, 11, 0, 10.5, 0, "plaster"), w(P, 10.6, .35, 11.6, 0, 21.2, 0, "cream");
	for (let e = 0; e < 7; e++) for (let t = -3.2; t <= 3.3; t += 2.1) w(P, 1.3, 1.9, .08, t, 1.6 + e * 2.75, 5.56, "glass"), w(P, 1.45, .13, .2, t, .65 + e * 2.75, 5.6, "cream");
	A(P, "招商大厦", 7, 1, 0, 19.6, 5.6), O(-21, 28, 10.5, 11.5, 22, "commerce");
	function F(e, t, n) {
		let r = D(e, t);
		r.name = "Workshop_" + n, w(r, 8, 4.2, 6, 0, 2.1, 0, "plaster"), w(r, 8.5, .25, 6.6, 0, 4.35, 0, "roof"), w(r, 3, 2.8, .1, 0, 1.4, 3.06, "blue"), w(r, 4.6, .1, 1.7, 0, 3.1, 3.7, "blue");
		for (let e of [-3, 3]) w(r, 1.1, 1.4, .1, e, 2.1, 3.07, "glass");
		A(r, n, 4.5, .55, 0, 3.65, 3.12), O(e, t, 8.4, 6.4, 5, "workshop");
	}
	F(18, 22, "供销服务站"), F(18, 34, "工人食堂"), F(-19, -16, "码头仓库");
	let L = new de(190, 200, 90, 90);
	d.add(L);
	let R = new v(L, x.water);
	R.rotation.x = -Math.PI / 2, R.position.set(-129, -.42, -2), R.name = "Sea_Static_Compact", R.castShadow = !1, a.add(R);
	for (let e = -39; e < 41; e += 5) {
		T(a, .17, .6, -32.4, .3, e, "rust");
		for (let t of [-.25, .25]) w(a, .55, .12, .1, -32.4, .62, e + t, "dark");
	}
	for (let e = -40; e < 42; e += 3) {
		let t = new ve(.42, .12, 6, 12);
		d.add(t);
		let n = new v(t, x.dark);
		n.rotation.y = Math.PI / 2, n.position.set(-34.05, -.12, e), a.add(n);
	}
	function z(e, t) {
		let n = D(e, t);
		n.name = "Fallback_Crane_" + e + "_" + t;
		for (let e of [-1, 1]) for (let t of [-1, 1]) E(n, [
			e,
			0,
			t
		], [
			e * .6,
			5,
			t * .6
		], .1, "rust");
		w(n, 2.1, 1.6, 2, 0, 5.4, 0, "rust"), E(n, [
			0,
			5.9,
			0
		], [
			-6,
			12,
			0
		], .16, "rust"), E(n, [
			1,
			6,
			0
		], [
			-6,
			12,
			0
		], .08, "dark"), E(n, [
			-6,
			12,
			0
		], [
			-6,
			1.6,
			0
		], .025, "dark"), w(n, .7, .4, .7, -6, 1.4, 0, "dark"), O(e, t, 2.5, 2.5, 12, "crane");
	}
	z(-29, -13), z(-29, 33);
	function B(e, t, n = 1) {
		let r = D(e, t);
		r.name = "Fallback_Boat_" + e + "_" + t, r.scale.setScalar(n);
		let i = new k();
		i.moveTo(-1.5, -4), i.lineTo(1.5, -4), i.lineTo(1.5, 2), i.quadraticCurveTo(1, 4.8, 0, 5.3), i.quadraticCurveTo(-1, 4.8, -1.5, 2), i.closePath();
		let a = new b(i, {
			depth: 1,
			bevelEnabled: !0,
			bevelSegments: 1,
			bevelThickness: .15,
			bevelSize: .12
		});
		d.add(a);
		let o = new v(a, x.dark);
		return o.rotation.x = -Math.PI / 2, o.position.y = -.4, r.add(o), w(r, 2.7, .1, 7.2, 0, .65, .1, "wood"), w(r, 2.5, 1.8, 2.2, 0, 1.65, -2, "cream"), w(r, 2.8, .2, 2.5, 0, 2.65, -2, "blue"), w(r, 1.8, .8, .08, 0, 1.9, -.85, "glass"), E(r, [
			0,
			.6,
			1
		], [
			0,
			5.2,
			1
		], .06, "rust"), E(r, [
			-1,
			3.5,
			1
		], [
			1,
			3.5,
			1
		], .04, "dark"), r;
	}
	B(-39, 10, 1.45), B(-43, -18, 1.3), B(-51, 29, 1.6);
	function ee(e, t, n = 1) {
		let r = D(e, t);
		w(r, n, n * .8, n, 0, n * .4, 0, "wood");
		for (let e of [.15, .65]) w(r, n + .06, .07, n + .06, 0, e * n, 0, "dark");
		for (let e of [-.4, .4]) w(r, .06, n * .8, n + .04, e * n, n * .4, 0, "cream");
		O(e, t, n + .15, n + .15, n, "cargo");
	}
	for (let e = 0; e < 18; e++) ee((e < 9 ? -26 : 29) + e % 3 * .95, e < 9 ? -6 + Math.floor(e / 3) * 1.1 : 10 + Math.floor((e - 9) / 3) * 1.15, .8 + e % 2 * .25);
	function te(e, t, n = 0) {
		let r = D(e, t);
		r.rotation.y = n, w(r, 1.9, .4, 4.6, 0, .7, 0, "dark"), w(r, 1.9, 1.55, 1.5, 0, 1.5, 1.4, "yellow"), w(r, 1.55, .65, .08, 0, 1.9, 2.17, "glass"), w(r, 1.9, .8, 2.9, 0, 1.25, -.6, "wood");
		for (let e of [-1, 1]) for (let t of [-1.4, 1.4]) {
			let n = T(r, .4, .18, e, .5, t, "dark");
			n.rotation.z = Math.PI / 2;
		}
		O(e, t, 2.8, 5.6, 3, "parked-truck");
	}
	te(-29, -30), te(29, 30, Math.PI), te(29, -16, Math.PI);
	function ne(e, t) {
		let n = D(e, t);
		for (let e of [-.65, .65]) {
			let t = new ve(.34, .035, 6, 16);
			d.add(t);
			let r = new v(t, x.dark);
			r.rotation.y = Math.PI / 2, r.position.set(0, .37, e), n.add(r);
		}
		for (let [e, t] of [
			[[
				0,
				.37,
				-.65
			], [
				0,
				.9,
				0
			]],
			[[
				0,
				.9,
				0
			], [
				0,
				.37,
				.65
			]],
			[[
				0,
				.37,
				.65
			], [
				0,
				.37,
				-.65
			]],
			[[
				0,
				.37,
				-.65
			], [
				0,
				.95,
				-.25
			]],
			[[
				0,
				.95,
				-.25
			], [
				0,
				.37,
				.65
			]]
		]) E(n, e, t, .025, "blue");
		w(n, .2, .06, .25, 0, 1, -.25, "dark"), E(n, [
			0,
			.9,
			.6
		], [
			0,
			1.2,
			.65
		], .025, "dark"), E(n, [
			-.23,
			1.2,
			.65
		], [
			.23,
			1.2,
			.65
		], .025, "dark");
	}
	for (let [e, t] of [
		[-9, 6],
		[-10, 8],
		[27, 6],
		[28, 7],
		[17, -21],
		[18, -21]
	]) ne(e, t);
	function ie(e, t, n = 5.5, r = !1) {
		let i = D(e, t);
		if (i.name = "Fallback_Tree_" + e + "_" + t, T(i, .12, n * .72, 0, n * .36, 0, "wood"), r) for (let e = 0; e < 7; e++) {
			let t = e * Math.PI * 2 / 7, r = new me(1, 6, 4);
			d.add(r);
			let a = new v(r, x.leaf);
			a.position.set(Math.cos(t) * 1.2, n - .4, Math.sin(t) * 1.2), a.scale.set(2, .12, .45), a.rotation.y = -t, a.rotation.z = .2, i.add(a);
		}
		else for (let e = 0; e < 7; e++) {
			let t = e * 2.4, r = new m(1, 1);
			d.add(r);
			let a = new v(r, e % 2 ? x.leaf : x.leaf2);
			a.position.set(Math.cos(t) * .95, n - .9 + e % 3 * .45, Math.sin(t) * .95), a.scale.set(1.65, 1, 1.4), a.castShadow = !0, i.add(a);
		}
		O(e, t, .55, .55, n, "tree");
	}
	for (let [e, t] of [
		[-7, 7],
		[8, 9],
		[-6, -13],
		[8, -14],
		[-30, 4],
		[-30, 23],
		[29, -8],
		[30, -24],
		[29, 18],
		[12, -24],
		[-10, 38],
		[6, 38],
		[29, 38]
	]) ie(e, t, 5 + h() * 1.5, Math.abs(e) > 25);
	for (let [e, t] of [[-7, 7], [8, 9]]) {
		w(a, 2.5, .35, 2.5, e, .15, t, "cream");
		for (let n of [-1, 1]) w(a, .35, .45, 3, e + n, .35, t, "stone");
	}
	for (let e of [
		-18,
		15,
		35
	]) T(a, .07, 6, -7, 3, e, "dark"), E(a, [
		-7,
		6,
		e
	], [
		-5.6,
		6,
		e
	], .05, "dark"), w(a, .55, .18, .4, -5.5, 5.9, e, "cream");
	for (let [e, t] of [
		[-10, 11],
		[10, 15],
		[-29, 18]
	]) {
		w(a, 2, .15, .5, e, .65, t, "wood");
		for (let n of [-.7, .7]) w(a, .12, .65, .4, e + n, .32, t, "dark");
		w(a, 2, .55, .1, e, 1.05, t - .2, "wood"), O(e, t, 2.2, .8, 1.2, "bench");
	}
	return a.add(Je({ whitebox: i })), A(a, "微波山 · 开山建设", 7, .7, 24, 3, -48), A(a, "顺岸码头", 4, .7, -29, 2.3, 1), A(a, "职工礼堂  ←  ·  蛇口通讯  ↑", 6, .6, 1, 2.3, 13), a.userData.metrics = Xe, {
		model: a,
		metadata: {
			...r,
			version: "compact-port-20261028-v1",
			source: "engine-source/src/compactDistrict.js",
			spawn: Xe.spawn,
			buildings: s,
			colliders: o,
			walkAreas: l,
			places: Ze,
			actors: [
				{ position: [
					4.9,
					.05,
					14.2
				] },
				{ position: [
					-4.9,
					.05,
					5
				] },
				{ position: [
					4.9,
					.05,
					-8
				] },
				{ position: [
					-12,
					.05,
					-15
				] },
				{ position: [
					-28,
					.05,
					13
				] },
				{ position: [
					24,
					.05,
					14
				] },
				{ position: [
					22,
					.05,
					-19
				] }
			]
		}
	};
}
//#endregion
//#region src/editedStreet.js
function Qe(e, t) {
	let n = !1, r = null, i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
	function s() {
		i.forEach((e) => e.dispose()), a.forEach((e) => e.dispose()), o.forEach((e) => {
			e.dispose(), e.source?.data?.close?.();
		}), r?.removeFromParent();
	}
	return (async () => {
		let t = await fetch(fe("/models/edited-street.json"), { cache: "no-cache" });
		if (!t.ok) throw Error("Edited street manifest unavailable");
		let c = await t.json();
		if (n) return;
		let l = new URLSearchParams(location.search).get("layout") === "legacy" ? c.file : "civic-buildings.glb";
		if (r = (await new he().loadAsync(fe("/models/") + l + "?v=" + c.version)).scene, r.traverse((e) => {
			if (e.isMesh) {
				i.add(e.geometry);
				for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
					a.add(t);
					for (let e of Object.values(t)) e?.isTexture && o.add(e);
				}
			}
		}), n) {
			s();
			return;
		}
		if (new URLSearchParams(location.search).get("layout") !== "legacy") {
			let e = X(r, c, { whitebox: new URLSearchParams(location.search).get("stage") === "whitebox" });
			if (r = e.model, c = e.metadata, q(r, c, { whitebox: new URLSearchParams(location.search).get("stage") === "whitebox" }), await Ye(r, { whitebox: new URLSearchParams(location.search).get("stage") === "whitebox" }), n) {
				r.traverse((e) => {
					if (e.isMesh) {
						i.add(e.geometry);
						for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
							a.add(t);
							for (let e of Object.values(t)) e?.isTexture && o.add(e);
						}
					}
				}), s();
				return;
			}
			r.traverse((e) => {
				if (e.isMesh) {
					i.add(e.geometry);
					for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
						a.add(t);
						for (let e of Object.values(t)) e?.isTexture && o.add(e);
					}
				}
			});
		}
		e(r, c), console.info("[edited-street] loaded", JSON.stringify({
			version: c.version,
			sourceSaved: c.sourceSaved,
			buildings: c.buildings.map((e) => e.name)
		}));
	})().catch((e) => {
		n || (s(), console.error("[edited-street] current district unavailable", e), t?.(e));
	}), () => {
		n = !0, s();
	};
}
//#endregion
//#region src/walkingNpc.js
function $e(e, n, { maxAnisotropy: r = 1, file: i = "npc-walking-men1.glb", x: a = 4.9, minZ: s = -4, maxZ: c = 10, speed: u = 1.05, phaseOffset: d = 0 } = {}) {
	let f = !1, p = null, m = null, h = !1, g = 0, _ = null, v = 1, y = [], b = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set(), w = () => {
		C.forEach((e) => e.dispose()), b.forEach((e) => e.dispose()), x.forEach((e) => e.dispose()), S.forEach((e) => {
			e.dispose(), e.source?.data?.close?.();
		});
	};
	return new he().load(fe("/models/" + i) + "?v=20261028-no-case-2", (i) => {
		let l = i.scene;
		if (l.traverse((e) => {
			if (e.isMesh) {
				b.add(e.geometry), e.isSkinnedMesh && C.add(e.skeleton), e.castShadow = e.receiveShadow = !0;
				for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
					x.add(t);
					for (let e of Object.values(t)) e?.isTexture && (S.add(e), e.anisotropy = Math.min(16, r), e.needsUpdate = !0);
				}
			}
		}), f) {
			w();
			return;
		}
		let u = i.animations.find((e) => /walk/i.test(e.name)) || i.animations[0];
		if (!u || C.size === 0) {
			w(), console.warn("[walking-npc] missing skin or animation; retaining passerby");
			return;
		}
		m = new ce(l), m.clipAction(u).setLoop(o, Infinity).play(), m.update(0), l.updateMatrixWorld(!0), l.traverse((e) => {
			e.isSkinnedMesh && e.computeBoundingBox();
		});
		let d = new j().setFromObject(l), g = d.getCenter(new V());
		for (let e = 0; e <= 48; e++) m.setTime(u.duration * e / 48), l.updateMatrixWorld(!0), l.traverse((e) => {
			e.isSkinnedMesh && e.computeBoundingBox();
		}), y.push(-new j().setFromObject(l).min.y);
		m.setTime(0), _ = l, v = u.duration, l.position.set(-g.x, y[0], -g.z);
		let T = new t();
		T.add(l), T.scale.setScalar(1.72 / Math.max(d.max.y - d.min.y, .001)), T.rotation.y = Math.PI, p = new t(), p.name = "NPC_Walking_Men1", p.add(T), e.add(p), e.scale.setScalar(1), e.position.set(a, .18, c), e.rotation.y = 0, n.forEach((e) => {
			e.visible = !1;
		}), h = !0, e.userData.walkingNpc = {
			clip: u.name,
			duration: u.duration,
			height: 1.72,
			route: [c, s],
			x: a
		}, console.info("[walking-npc] loaded", JSON.stringify(e.userData.walkingNpc));
	}, void 0, (e) => {
		f || console.warn("[walking-npc] load failed; retaining passerby", e);
	}), {
		get ready() {
			return h;
		},
		update(t, n) {
			if (!h || !n) return;
			g += t;
			let r = c - s, i = (g * u + d) % (r * 2), o = i < r;
			e.position.x = a, e.position.z = c - (o ? i : r * 2 - i);
			let f = o ? 0 : Math.PI, p = Math.atan2(Math.sin(f - e.rotation.y), Math.cos(f - e.rotation.y));
			e.rotation.y += p * (1 - Math.exp(-t * 12)), m.update(t);
			let b = m.time % v / v * 48, x = Math.floor(b);
			_.position.y = l.lerp(y[x], y[x + 1], b - x);
		},
		dispose() {
			f = !0, h = !1, m && p && (m.stopAllAction(), m.uncacheRoot(m.getRoot())), p?.removeFromParent(), w();
		}
	};
}
//#endregion
//#region src/playerAvatar.js
function et(e, n) {
	let r = !1, i = null, a = null, o = null, s = null, c = !1, l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = (e) => e.traverse((e) => {
		if (e.isMesh) {
			l.add(e.geometry);
			for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
				u.add(t);
				for (let e of Object.values(t)) e?.isTexture && d.add(e);
			}
		}
	}), p = () => {
		l.forEach((e) => e.dispose()), u.forEach((e) => e.dispose()), d.forEach((e) => {
			e.dispose(), e.source?.data?.close?.();
		});
	};
	return new he().load(fe("/models/hero-walk.glb"), (l) => {
		if (f(l.scene), r) {
			p();
			return;
		}
		let u = l.scene;
		u.updateMatrixWorld(!0);
		let d = new j().setFromObject(u), m = d.getSize(new V()), h = d.getCenter(new V());
		u.position.set(-h.x, -d.min.y, -h.z);
		let g = new t();
		g.add(u), g.scale.setScalar(1.42 / Math.max(m.y, .001)), g.rotation.y = Math.PI, i = new t(), i.name = "PLAYER_BOY", i.add(g), u.traverse((e) => {
			e.isMesh && (e.castShadow = !0, e.receiveShadow = !0);
		}), a = new ce(u), o = a.clipAction(l.animations[0]), o.play(), o.paused = !0, new he().load(fe("/models/hero-idle.glb"), (e) => {
			if (f(e.scene), r) {
				p();
				return;
			}
			s = a.clipAction(e.animations[0]), s.play(), c ? (s.setEffectiveWeight(0), o.paused = !1) : o.setEffectiveWeight(0);
		}), e.add(i), n.forEach((e) => {
			e.visible = !1;
		}), e.userData.modelLoaded = !0, console.info("[player-avatar] loaded: rigged hero, idle/walk, height 1.42m");
	}, void 0, (e) => {
		r || console.warn("[player-avatar] model unavailable; retaining courier", e);
	}), {
		update(e, t, n = 1 / 60) {
			i && (e !== c && (e ? (o.paused = !1, o.reset().setEffectiveWeight(1).fadeIn(.2).play(), s?.fadeOut(.2)) : s ? (s.reset().setEffectiveWeight(1).fadeIn(.2).play(), o.fadeOut(.2)) : o.paused = !0, c = e), a?.update(n));
		},
		dispose() {
			r = !0, a?.stopAllAction(), i?.removeFromParent(), p();
		}
	};
}
//#endregion
//#region ../../../游戏版本/shekou-game-versions/shekou-spatial-play/engine-source/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js
var tt = new V();
function nt(e, t, n, r, i, a) {
	let o = 2 * Math.PI * i / 4, s = Math.max(a - 2 * i, 0), c = Math.PI / 4;
	tt.copy(t), tt[r] = 0, tt.normalize();
	let l = .5 * o / (o + s), u = 1 - tt.angleTo(e) / c;
	return Math.sign(tt[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u);
}
var rt = class e extends re {
	constructor(e = 1, t = 1, n = 1, r = 2, i = .1) {
		let a = r * 2 + 1;
		if (i = Math.min(e / 2, t / 2, n / 2, i), super(1, 1, 1, a, a, a), this.type = "RoundedBoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			segments: r,
			radius: i
		}, a === 1) return;
		let o = this.toNonIndexed();
		this.index = null, this.attributes.position = o.attributes.position, this.attributes.normal = o.attributes.normal, this.attributes.uv = o.attributes.uv;
		let s = new V(), c = new V(), l = new V(e, t, n).divideScalar(2).subScalar(i), u = this.attributes.position.array, d = this.attributes.normal.array, f = this.attributes.uv.array, p = u.length / 6, m = new V(), h = .5 / a;
		for (let r = 0, a = 0; r < u.length; r += 3, a += 2) switch (s.fromArray(u, r), c.copy(s), c.x -= Math.sign(c.x) * h, c.y -= Math.sign(c.y) * h, c.z -= Math.sign(c.z) * h, c.normalize(), u[r + 0] = l.x * Math.sign(s.x) + c.x * i, u[r + 1] = l.y * Math.sign(s.y) + c.y * i, u[r + 2] = l.z * Math.sign(s.z) + c.z * i, d[r + 0] = c.x, d[r + 1] = c.y, d[r + 2] = c.z, Math.floor(r / p)) {
			case 0:
				m.set(1, 0, 0), f[a + 0] = nt(m, c, "z", "y", i, n), f[a + 1] = 1 - nt(m, c, "y", "z", i, t);
				break;
			case 1:
				m.set(-1, 0, 0), f[a + 0] = 1 - nt(m, c, "z", "y", i, n), f[a + 1] = 1 - nt(m, c, "y", "z", i, t);
				break;
			case 2:
				m.set(0, 1, 0), f[a + 0] = 1 - nt(m, c, "x", "z", i, e), f[a + 1] = nt(m, c, "z", "x", i, n);
				break;
			case 3:
				m.set(0, -1, 0), f[a + 0] = 1 - nt(m, c, "x", "z", i, e), f[a + 1] = 1 - nt(m, c, "z", "x", i, n);
				break;
			case 4:
				m.set(0, 0, 1), f[a + 0] = 1 - nt(m, c, "x", "y", i, e), f[a + 1] = 1 - nt(m, c, "y", "x", i, t);
				break;
			case 5:
				m.set(0, 0, -1), f[a + 0] = nt(m, c, "x", "y", i, e), f[a + 1] = 1 - nt(m, c, "y", "x", i, t);
				break;
		}
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.segments, t.radius);
	}
};
//#endregion
//#region src/pressRoom.js
function it({ group: e, materials: n, geometries: r, textures: i, collision: a, colliders: o }) {
	let s = new URLSearchParams(location.search).get("stage") === "whitebox", l = {};
	for (let [e, t] of Object.entries({
		plaster: "#eee4cf",
		trim: "#e8ddc4",
		dado: "#89988a",
		wood: "#926542",
		edge: "#694a33",
		cork: "#a78960",
		iron: "#3e5751",
		file: "#879487",
		paper: "#f1e7cd",
		ink: "#3b4239",
		brass: "#b39a68",
		red: "#9e4939",
		leaf: "#587450",
		pot: "#a17554",
		ceramic: "#eee8d9",
		black: "#303933",
		floor: "#b18b61",
		pageedge: "#e9ddc4",
		archive: "#c1a681",
		notebook: "#7e3f37",
		book0: "#4b6069",
		book1: "#7c4140",
		book2: "#a28b56",
		book3: "#60756c",
		book4: "#655343",
		book5: "#465e78",
		book6: "#5d6750",
		book7: "#cdc2a3"
	})) {
		let r = new c({
			color: s ? [
				"ink",
				"black",
				"iron"
			].includes(e) ? "#b4b7b7" : "#e2e3e0" : t,
			roughness: .8,
			metalness: !s && [
				"iron",
				"brass",
				"file"
			].includes(e) ? .25 : 0
		});
		n.add(r), l[e] = r;
	}
	for (let e = 0; e < 5; e++) l["floor" + e] = l.floor.clone(), n.add(l["floor" + e]);
	let u = new re(1, 1, 1);
	r.add(u);
	let d = /* @__PURE__ */ new Map();
	function f(e, t, n, i = 0, a = 0, o = 0) {
		r.add(t);
		let s = new v(t, n);
		return s.position.set(i, a, o), s.castShadow = !0, s.receiveShadow = !0, e.add(s), s;
	}
	function p(e, t, n, i, a, o, s, c = "wood", p = !1) {
		let m = u;
		if (p) {
			let e = [
				t,
				n,
				i
			].join(",");
			d.has(e) || (d.set(e, new rt(t, n, i, 2, Math.min(.025, t * .08, n * .08, i * .08))), r.add(d.get(e))), m = d.get(e);
		}
		let h = f(e, m, l[c], a, o, s);
		return p || h.scale.set(t, n, i), h;
	}
	function m(e, t, n, r, i, a, o = "iron", s = t) {
		return f(e, new Se(s, t, n, 20), l[o], r, i, a);
	}
	function h(e, t, n, r, i = "iron") {
		let a = new V(...t), o = new V(...n), s = o.clone().sub(a), c = m(e, r, s.length(), 0, 0, 0, i);
		return c.position.copy(a.add(o).multiplyScalar(.5)), c.quaternion.setFromUnitVectors(new V(0, 1, 0), s.normalize()), c;
	}
	function g(e, t, n, r, i, a, o = "brass") {
		return f(e, new ve(t, n, 8, 36), l[o], r, i, a);
	}
	function _(n, r, i, a = 0) {
		let o = new t();
		return o.position.set(n, r, i), o.rotation.y = a, e.add(o), o;
	}
	function y(e, t, n, r, i, a, o = "news", s = "") {
		let c = f(e, new de(t, n), l.paper, r, i, a);
		return c.userData.print = {
			kind: o,
			text: s
		}, c.castShadow = !1, c;
	}
	p(e, 12, .18, 15, 0, -.16, 0, "edge");
	for (let t = 0; t < 30; t++) for (let n = -1; n < 7; n++) {
		let r = Math.max(-7.5, -7.5 + n * 2.4 + t % 3 * .8), i = Math.min(7.5, -7.5 + (n + 1) * 2.4 + t % 3 * .8);
		i - r > .05 && p(e, .396, .075, i - r - .008, -5.8 + t * .4, -.045, (r + i) / 2, "floor" + (t * 3 + n + 5) % 5, !0);
	}
	p(e, 12, .2, 15, 0, 4.8, 0, "plaster"), p(e, 12, 4.7, .22, 0, 2.35, -7.5, "plaster"), p(e, 12, 1.3, .06, 0, .65, -7.35, "dado"), p(e, 12, .045, .075, 0, 1.32, -7.3, "trim"), p(e, 12, .14, .08, 0, .07, -7.28, "edge"), p(e, .24, 4.7, 15, 6, 2.35, 0, "plaster"), p(e, .06, 1.3, 15, 5.85, .65, 0, "dado"), p(e, .08, .045, 15, 5.8, 1.32, 0, "trim"), p(e, .08, .14, 15, 5.8, .07, 0, "edge");
	for (let t of [-3.55, 3.55]) p(e, 4.9, 4.7, .2, t, 2.35, 7.5, "plaster");
	p(e, 2.2, 1.7, .2, 0, 3.85, 7.5, "plaster"), p(e, .22, 1.3, 15, -6, .65, 0, "dado"), p(e, .22, .65, 15, -6, 4.375, 0, "plaster");
	for (let t of [
		-7.2,
		-3.3,
		.6,
		4.5,
		7.3
	]) p(e, .24, 2.75, .55, -6, 2.675, t, "plaster");
	for (let t of [
		-5.25,
		-1.35,
		2.55
	]) {
		p(e, .5, .12, 3.4, -5.85, 1.32, t, "trim", !0);
		for (let n of [
			-1.65,
			0,
			1.65
		]) p(e, .14, 2.7, .09, -5.94, 2.7, t + n, "trim");
		for (let n of [
			1.38,
			3.2,
			4.02
		]) p(e, .14, .08, 3.4, -5.94, n, t, "trim");
		let n = _(-5.9, 0, t + 1.58, -.4);
		for (let e of [0, -1.5]) p(n, .07, 1.75, .07, 0, 2.3, e, "trim");
		for (let e of [1.43, 3.17]) p(n, .07, .07, 1.56, 0, e, -.75, "trim");
	}
	p(e, .1, .15, 15, -5.84, .08, 0, "edge");
	for (let t of [
		-6.8,
		-2.1,
		2.6
	]) p(e, 12, .24, .22, 0, 4.59, t, "trim");
	for (let t of [-5.75, 5.75]) p(e, .15, .17, 15, t, 4.57, 0, "trim");
	function b(e, t, n, r) {
		p(e, .22, .04, .055, t, n, r, "brass", !0);
		for (let i of [-.1, .1]) p(e, .025, .04, .07, t + i, n, r - .025, "brass");
	}
	function x(e, t, n = 3.8, r = 1.7, i = 0) {
		let a = _(e, 0, t, i), o = 1.16;
		p(a, n, .14, r, 0, o, 0, "wood", !0), p(a, n - .05, .06, r - .06, 0, o - .09, 0, "edge", !0);
		for (let e of [-1, 1]) {
			let t = e * (n / 2 - .48);
			p(a, .82, .95, r - .16, t, .57, 0, "wood", !0), p(a, .72, .11, r - .25, t, .08, 0, "edge");
			for (let e = 0; e < 3; e++) {
				let n = .34 + e * .25;
				p(a, .73, .22, .055, t, n, r / 2 - .04, "wood", !0), b(a, t, n + .015, r / 2 + .005);
			}
		}
		return p(a, n - 1.8, .2, .065, 0, .97, r / 2 - .07, "wood"), a;
	}
	function S(e, t, n = 0) {
		let r = _(e, 0, t, n);
		p(r, .65, .09, .65, 0, .64, 0, "wood", !0);
		for (let e of [-.26, .26]) for (let t of [-.25, .25]) p(r, .065, .62, .065, e, .31, t, "edge");
		for (let e of [-.27, .27]) p(r, .065, .9, .065, e, 1.02, -.27, "edge");
		p(r, .67, .16, .08, 0, 1.42, -.27, "wood", !0);
		for (let e of [
			-.14,
			0,
			.14
		]) p(r, .045, .62, .05, e, 1.07, -.27, "wood");
		return r;
	}
	let C = x(1.15, -2.55);
	a(1.15, -2.55, 3.8, 1.7, o), S(1.15, -4.05), a(1.15, -4.05, .7, .7, o), x(-4.95, .1, 3, 1.15, Math.PI / 2), a(-4.95, .1, 1.15, 3, o), S(-3.95, .2, Math.PI / 2), a(-3.95, .2, .75, .75, o);
	function w(e, t, n, r, i = 1) {
		for (let a = 0; a < i; a++) {
			let i = p(e, .67, .018, .48, t + Math.sin(a * 2) * .025, n + a * .019, r, "pageedge");
			i.rotation.y = .04 * Math.sin(a);
		}
		let a = y(e, .66, .47, t, n + i * .019 + .002, r, "news");
		a.rotation.x = -Math.PI / 2;
	}
	w(C, -1.25, 1.245, -.05, 10), w(C, -.92, 1.25, .29, 4), y(C, .55, .66, .06, 1.244, .3, "letter").rotation.set(-Math.PI / 2, 0, -.08), y(C, .39, .25, -.36, 1.247, .31, "envelope").rotation.set(-Math.PI / 2, 0, .18), h(C, [
		.46,
		1.265,
		.22
	], [
		.62,
		1.265,
		.54
	], .014, "red");
	function T(e, t, n, r) {
		m(e, .105, .22, t, n + .11, r, "ceramic"), g(e, .105, .012, t, n + .22, r, "iron").rotation.x = Math.PI / 2, g(e, .07, .018, t + .11, n + .11, r, "ceramic"), m(e, .092, .005, t, n + .224, r, "edge");
	}
	T(C, -.52, 1.24, -.24);
	function E(e, t, n, r) {
		m(e, .19, .055, t, n + .028, r, "iron"), h(e, [
			t,
			n + .05,
			r
		], [
			t + .12,
			n + .58,
			r
		], .022), h(e, [
			t + .12,
			n + .58,
			r
		], [
			t - .12,
			n + .85,
			r
		], .023), m(e, .05, .07, t + .12, n + .58, r, "brass").rotation.x = Math.PI / 2;
		let i = f(e, new me(.22, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), l.iron, t - .12, n + .76, r);
		i.rotation.z = .2;
		let a = f(e, new B(.2, 24), l.paper, t - .12, n + .75, r);
		a.rotation.x = Math.PI / 2;
	}
	E(C, .9, 1.24, -.35);
	function D(e, n, r, i) {
		let a = new t();
		a.position.set(n, r, i), e.add(a);
		let o = p(a, .42, .12, .36, 0, .06, 0, "black", !0);
		o.rotation.x = .13;
		let s = m(a, .1, .018, 0, .136, .05, "brass");
		s.rotation.x = .18;
		for (let e = 0; e < 10; e++) {
			let t = e * Math.PI / 5;
			m(a, .012, .022, Math.cos(t) * .072, .15, .05 + Math.sin(t) * .072, "black");
		}
		p(a, .5, .07, .09, 0, .23, -.1, "black", !0);
		for (let e of [-.2, .2]) m(a, .072, .11, e, .19, -.1, "black");
		for (let e = 0; e < 16; e++) g(a, .024, .006, .28 + .008 * Math.sin(e), .18 - e * .008, -.09 + e * .013, "black");
	}
	D(C, 1.5, 1.24, .12), m(C, .07, .15, -.77, 1.32, -.39, "wood");
	for (let e = 0; e < 6; e++) h(C, [
		-.8 + e * .013,
		1.32,
		-.39
	], [
		-.84 + e * .027,
		1.61,
		-.4
	], .007, e % 3 ? "edge" : "red");
	w(e, -4.95, 1.245, -.6, 7), T(e, -4.9, 1.24, .85), p(e, 6.1, 2.05, .1, .05, 2.63, -7.25, "edge", !0), p(e, 5.93, 1.88, .025, .05, 2.63, -7.18, "cork"), p(e, 4.9, .85, .1, .05, 4.05, -7.23, "edge", !0), y(e, 4.68, .65, .05, 4.05, -7.165, "title", "蛇 口 通 讯"), [
		"读者来信",
		"一线采访",
		"校样待审",
		"本期刊发"
	].forEach((t, n) => {
		let r = -2.17 + n * 1.47;
		y(e, 1.16, .2, r, 3.4, -7.15, "label", t);
		let i = y(e, 1.13, 1.28, r, 2.55, -7.14, "editorial", String(n));
		i.rotation.z = (n % 2 ? 1 : -1) * .025;
		let a = m(e, .022, .035, r, 3.17, -7.11, "red");
		a.rotation.x = Math.PI / 2;
	});
	let O = _(-3.5, 0, -5.4);
	for (let e of [-.67, .67]) p(O, .18, 1.53, 1, e, .83, 0, "iron", !0), p(O, .34, .12, 1.18, e, .09, 0, "iron", !0);
	p(O, 1.5, .16, 1.05, 0, .78, 0, "iron", !0);
	for (let e of [-.35, .27]) {
		let t = m(O, .17, 1.46, 0, 1.38, e, "black");
		t.rotation.z = Math.PI / 2;
		let n = m(O, .065, 1.85, 0, 1.38, e, "brass");
		n.rotation.z = Math.PI / 2;
	}
	p(O, 1.44, .055, .95, 0, 1.03, .76, "iron", !0), w(O, 0, 1.08, .74, 3);
	let k = g(O, .56, .035, .9, .96, .1, "black");
	k.rotation.y = Math.PI / 2;
	for (let e = 0; e < 6; e++) {
		let t = e * Math.PI / 3;
		h(O, [
			.9,
			.96,
			.1
		], [
			.9,
			.96 + Math.cos(t) * .53,
			.1 + Math.sin(t) * .53
		], .018, "iron");
	}
	h(O, [
		.9,
		1.48,
		.1
	], [
		1.15,
		1.48,
		.1
	], .045, "edge"), a(-3.5, -5.05, 2.3, 2.3, o);
	let A = _(-1.8, 0, -6.52);
	p(A, .85, .95, .7, 0, .49, 0, "wood", !0);
	for (let e = 0; e < 3; e++) p(A, .76, .24, .04, 0, .25 + e * .27, .37, "wood", !0), b(A, 0, .25 + e * .27, .4);
	w(A, 0, .98, 0, 11), a(-1.8, -6.52, .9, .75, o);
	let j = _(4.58, 0, -6.65);
	p(j, 1.85, 3.55, .07, 0, 1.8, -.36, "edge");
	for (let e of [-.94, .94]) p(j, .1, 3.65, .85, e, 1.83, 0, "wood", !0);
	for (let e of [
		.12,
		.92,
		1.72,
		2.52,
		3.63
	]) p(j, 1.9, .1, .85, 0, e, 0, "wood", !0);
	for (let e = 0; e < 3; e++) if (e === 1) for (let e = 0; e < 8; e++) {
		let t = -.76 + e * .218, n = .59 + e % 3 * .035;
		p(j, .195, n, .56, t, .99 + n / 2, .04, "book" + e, !0), y(j, .192, n - .01, t, .99 + n / 2, .326, "spine", String(e));
	}
	else for (let t = 0; t < 6; t++) {
		let n = -.72 + t * .29;
		p(j, .23, .6, .6, n, .48 + e * .8, 0, "archive", !0), y(j, .225, .59, n, .48 + e * .8, .306, "binder");
	}
	p(C, .47, .055, .58, .68, 1.28, .36, "notebook", !0), p(C, .44, .035, .55, .68, 1.284, .36, "pageedge");
	let M = y(C, .47, .58, .68, 1.315, .36, "cover");
	M.rotation.x = -Math.PI / 2, w(j, -.38, 2.58, 0, 13), w(j, .4, 2.58, 0, 18), a(4.58, -6.65, 2, .85, o);
	for (let e of [-3.8, -1.4]) {
		let t = _(5.15, 0, e, -Math.PI / 2);
		p(t, 1.65, 1.48, .85, 0, .82, 0, "file", !0);
		for (let e of [-.68, .68]) for (let n of [-.28, .28]) p(t, .05, .17, .05, e, .1, n, "iron");
		for (let e of [-.4, .4]) for (let n of [.47, 1.13]) p(t, .76, .61, .045, e, n, .45, "file", !0), b(t, e, n, .49), p(t, .24, .12, .01, e, n + .15, .48, "brass"), y(t, .2, .08, e, n + .15, .49, "label", n < .8 ? "来信" : "校样");
		w(t, -.35, 1.58, 0, 7), a(5.15, e, .9, 1.7, o);
	}
	function N(e, t, n = 1) {
		let r = _(e, 0, t);
		r.scale.setScalar(n), m(r, .23, .42, 0, .27, 0, "pot", .29), m(r, .3, .06, 0, .49, 0, "pot"), m(r, .25, .02, 0, .5, 0, "edge");
		for (let e = 0; e < 13; e++) {
			let t = e * 2.4, n = .95 + e % 4 * .17, i = .3 + e % 3 * .09, a = [
				Math.cos(t) * i,
				n,
				Math.sin(t) * i
			];
			h(r, [
				0,
				.5,
				0
			], a, .012, "leaf");
			let o = f(r, new me(1, 8, 6), l.leaf, ...a);
			o.scale.set(.13, .035, .33), o.rotation.set(.6 + e % 3 * .2, t, .35);
		}
		a(e, t, .7 * n, .7 * n, o);
	}
	N(-5.05, -6.65, 1.3), N(-5, 2.35, .9);
	for (let t of [-2.6, 2.4]) {
		m(e, .018, .62, t, 4.35, -3.4, "black"), f(e, new me(.38, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), l.iron, t, 3.93, -3.4);
		let n = f(e, new B(.36, 24), l.paper, t, 3.925, -3.4);
		n.rotation.x = Math.PI / 2;
	}
	p(e, 22, .2, 32, -18, -.5, -2, "trim");
	for (let t = 0; t < 4; t++) p(e, 3.2, 2.4 + t % 2, 4, -15 - t % 2 * 2, 1.1, -10 + t * 6, "plaster"), p(e, 3.4, .18, 4.2, -15 - t % 2 * 2, 2.4 + t % 2, -10 + t * 6, "dado");
	return {
		palette: l,
		whitebox: s,
		printSurfaces: (() => {
			let t = [];
			return e.traverse((e) => {
				e.userData.print && t.push(e);
			}), t;
		})()
	};
}
//#endregion
//#region src/pressFinishes.js
function at(t, { group: n, textures: r, materials: i }) {
	if (t.whitebox) return;
	let a = t.palette, o = 1983, s = () => (o = o * 1664525 + 1013904223 >>> 0, o / 4294967296);
	function l(e, t = 1024, n = 1024) {
		let i = document.createElement("canvas");
		i.width = t, i.height = n, e(i.getContext("2d"), t, n);
		let a = new I(i);
		return a.colorSpace = ge, a.anisotropy = 8, r.add(a), a;
	}
	let d = l((e, t, n) => {
		e.fillStyle = "#f5f2e9", e.fillRect(0, 0, t, n);
		for (let r = 0; r < 18e3; r++) e.fillStyle = `rgba(102,91,70,${s() * .025})`, e.fillRect(s() * t, s() * n, 1 + s() * 2, 1 + s() * 2);
	}, 512, 512);
	a.plaster.map = d, a.plaster.bumpMap = d, a.plaster.bumpScale = .008;
	let f = l((e, t, n) => {
		e.fillStyle = "#e4d0ae", e.fillRect(0, 0, t, n);
		for (let r = 0; r < 500; r++) {
			let i = s() * n;
			e.strokeStyle = `rgba(89,57,30,${.015 + s() * .065})`, e.lineWidth = .5 + s(), e.beginPath(), e.moveTo(0, i);
			for (let n = 0; n <= t; n += 16) e.lineTo(n, i + Math.sin(n * .014 + r) * 1.8);
			e.stroke();
		}
		for (let r = 0; r < 9; r++) {
			let r = s() * t, i = s() * n;
			e.strokeStyle = "#8a68401a", e.beginPath(), e.ellipse(r, i, 40 + s() * 100, 2 + s() * 5, 0, 0, Math.PI * 2), e.stroke();
		}
	});
	a.wood.color.set("#b58b5f"), a.wood.map = f, a.wood.roughness = .68, a.wood.bumpMap = f, a.wood.bumpScale = .012, a.edge.map = f, a.edge.roughness = .72;
	let p = l((e, t, n) => {
		e.fillStyle = "#6f5944", e.fillRect(0, 0, t, n);
		for (let t = 0; t < 8; t++) for (let n = -1; n < 3; n++) {
			let r = t * 128, i = n * 512 + t % 3 * 170;
			e.fillStyle = `hsl(31 27% ${43 + s() * 7}%)`, e.fillRect(r + 1, i + 1, 126, 510);
			let a = e.createLinearGradient(r, 0, r + 128, 0);
			a.addColorStop(0, "#fff0"), a.addColorStop(.4, "#ffe5bc0b"), a.addColorStop(1, "#21140712"), e.fillStyle = a, e.fillRect(r + 2, i + 2, 124, 508);
			for (let t = 0; t < 22; t++) {
				let n = r + s() * 125;
				e.strokeStyle = `rgba(52,32,18,${s() * .075})`, e.lineWidth = .5, e.beginPath(), e.moveTo(n, i + 2);
				for (let r = 0; r < 508; r += 32) e.lineTo(n + Math.sin(r * .012 + t) * 1.5, i + r);
				e.stroke();
			}
			e.fillStyle = "#44392950";
			for (let t of [r + 9, r + 119]) for (let n of [i + 9, i + 501]) e.fillRect(t, n, 1.3, 1.3);
		}
	});
	p.wrapS = p.wrapT = e, p.repeat.set(3, 3.5), a.floor.color.set("#e6d3b7"), a.floor.map = p, a.floor.bumpMap = p, a.floor.bumpScale = .018, a.floor.roughness = .78, a.cork.map = l((e, t, n) => {
		e.fillStyle = "#d7c4a6", e.fillRect(0, 0, t, n);
		for (let r = 0; r < 16e3; r++) e.fillStyle = `rgba(75,52,31,${s() * .09})`, e.fillRect(s() * t, s() * n, s() * 3, s() * 2);
	}, 512, 512);
	function m(e, t, n, r, i) {
		e.fillStyle = "#9b9b87", e.fillRect(t, n, r, i), e.fillStyle = "#c2bda5", e.fillRect(t, n, r, i * .42), e.fillStyle = "#727f76", e.beginPath(), e.moveTo(t, n + i * .5);
		for (let a = 0; a <= 8; a++) e.lineTo(t + a * r / 8, n + i * (.29 + s() * .18));
		e.lineTo(t + r, n + i * .65), e.lineTo(t, n + i * .65), e.fill(), e.strokeStyle = "#555f53", e.lineWidth = 2;
		for (let a = 0; a < 3; a++) {
			let o = t + r * (.2 + a * .26);
			e.beginPath(), e.moveTo(o, n + i * .8), e.lineTo(o, n + i * .24), e.lineTo(o + r * .16, n + i * .36), e.moveTo(o, n + i * .3), e.lineTo(o - r * .08, n + i * .45), e.stroke();
		}
		e.fillStyle = "#535c51", e.fillRect(t + r * .12, n + i * .76, r * .7, i * .06);
	}
	let h = /* @__PURE__ */ new Map();
	for (let [e, n] of t.printSurfaces.entries()) {
		let { kind: t, text: r } = n.userData.print;
		if ([
			"editorial",
			"spine",
			"binder",
			"cover"
		].includes(t)) continue;
		let a = t === "title" ? 1536 : t === "label" ? 640 : t === "number" ? 128 : 512, o = t === "title" ? 220 : t === "label" || t === "number" ? 128 : t === "envelope" ? 320 : 700, u = t === "news" ? `news-${e % 4}` : `${t}-${r}`;
		if (!h.has(u)) {
			let n = new c({
				map: l((n, i, a) => {
					if (n.fillStyle = t === "title" ? "#eee1c3" : "#ece1c7", n.fillRect(0, 0, i, a), n.fillStyle = "#474b3e", t === "title") n.strokeStyle = "#9a8560", n.lineWidth = 3, n.strokeRect(14, 14, i - 28, a - 28), n.textAlign = "center", n.textBaseline = "middle", n.font = "100px \"Songti SC\", \"STSong\", serif", n.fillText(r, i / 2, a * .48), n.font = "16px Georgia", n.fillStyle = "#8a8066", n.fillText("S H E K O U   ·   E D I T O R I A L   O F F I C E", i / 2, a * .86);
					else if (t === "label" || t === "number") n.textAlign = "center", n.textBaseline = "middle", n.font = `${t === "label" ? 55 : 48}px "Songti SC",serif`, n.fillText(r, i / 2, a / 2);
					else if (t === "envelope") {
						n.strokeStyle = "#a9513d", n.lineWidth = 3;
						for (let e = 0; e < 6; e++) n.strokeRect(25 + e * 40, 26, 31, 36);
						n.strokeStyle = "#a79a7c", n.lineWidth = 1, n.strokeRect(i - 88, 25, 60, 75), n.font = "23px \"Songti SC\",serif", n.fillText("蛇口通讯 编辑部收", 60, 155), n.fillText("读者来信", 60, 210), n.beginPath(), n.moveTo(20, a - 45), n.lineTo(i - 20, a - 45), n.stroke();
					} else if (t === "letter") {
						n.strokeStyle = "#b7a588", n.lineWidth = 1;
						for (let e = 100; e < a - 35; e += 38) n.beginPath(), n.moveTo(40, e), n.lineTo(i - 40, e), n.stroke();
						n.fillStyle = "#905344", n.font = "30px \"Songti SC\",serif", n.fillText("致编辑部", 42, 65), n.fillStyle = "#666150", n.font = "19px \"Songti SC\",serif", [
							"厂里的变化越来越快。",
							"我们关心生产，也关心生活。",
							"住处、食堂和每天的工作，",
							"都有一些想说的话。",
							"希望我们的声音能被听见。"
						].forEach((e, t) => n.fillText(e, 44, 145 + t * 38)), n.fillText("一位读者", i - 160, a - 100), n.font = "12px sans-serif", n.fillStyle = "#9b927c", n.fillText("叙事道具 · 非历史原件", 42, a - 30);
					} else {
						n.textAlign = "center", n.font = "bold 55px \"Songti SC\",serif", n.fillText("蛇 口 通 讯", i / 2, 74), n.font = "14px \"Songti SC\",serif", n.fillText("城 市 · 生 产 · 生 活", i / 2, 104), n.strokeStyle = "#6e705c", n.lineWidth = 2, n.beginPath(), n.moveTo(26, 119), n.lineTo(i - 26, 119), n.stroke(), n.textAlign = "left", n.font = "bold 25px \"Songti SC\",serif", n.fillText([
							"来自建设一线的声音",
							"城市生活里的新变化",
							"把读者的来信带上版面",
							"人与城，一同向前"
						][e % 4], 28, 157), m(n, 29, 178, i * .56, 160), n.fillStyle = "#777763";
						for (let e = 0; e < 4; e++) {
							let t = 28 + e * 118;
							for (let r = 0; r < 43; r++) {
								let i = 184 + r * 11;
								if (i > a - 48) break;
								e < 3 && i < 354 || (n.globalAlpha = .45 + s() * .3, n.fillRect(t, i, 85 + s() * 20, 1.7));
							}
						}
						n.globalAlpha = 1, n.strokeStyle = "#a1967b", n.lineWidth = 1, n.beginPath(), n.moveTo(26, a - 38), n.lineTo(i - 26, a - 38), n.stroke(), n.fillStyle = "#9c927c", n.font = "12px sans-serif", n.fillText("场景排版示意 · 非历史报刊原件", 28, a - 17);
					}
				}, a, o),
				color: "#ffffff",
				roughness: .95,
				polygonOffset: !0,
				polygonOffsetFactor: -1,
				polygonOffsetUnits: -1
			});
			i.add(n), h.set(u, n);
		}
		n.material = h.get(u);
	}
	let g = [], _ = new M().load(fe("/images/press-study/walnut-albedo.png"), () => g.forEach((e) => {
		e.needsUpdate = !0;
	}));
	_.colorSpace = ge, _.wrapS = _.wrapT = e, _.anisotropy = 8, r.add(_), a.wood.map = _, a.wood.color.set("#eadbc5"), a.wood.roughness = .43, a.wood.bumpMap = _, a.wood.bumpScale = .045, a.edge.map = _, a.edge.color.set("#a98c6b"), a.edge.roughness = .55, a.edge.bumpMap = _, a.edge.bumpScale = .025;
	let v = l((e, t, n) => {
		e.fillStyle = "#b8b8b8", e.fillRect(0, 0, t, n);
		for (let r = 0; r < 450; r++) {
			let r = 145 + Math.floor(s() * 70);
			e.strokeStyle = `rgb(${r},${r},${r})`, e.lineWidth = 1 + s() * 3, e.beginPath();
			let i = s() * n;
			e.moveTo(0, i), e.lineTo(t, i + s() * 4), e.stroke();
		}
	}, 512, 512);
	v.colorSpace = "", a.wood.roughnessMap = v, a.wood.roughness = .64, a.edge.roughnessMap = v;
	for (let e = 0; e < 5; e++) {
		let t = _.clone();
		g.push(t), t.colorSpace = ge, t.rotation = Math.PI / 2, t.center.set(.5, .5), t.repeat.set(.65, .23), t.offset.set(e * .13, e * .17), r.add(t);
		let n = a["floor" + e];
		n.map = t, n.bumpMap = t, n.bumpScale = .025, n.color.set([
			"#cfbb9e",
			"#c0af98",
			"#d5c1a7",
			"#bba78c",
			"#c7b397"
		][e]), n.roughnessMap = v, n.roughness = .72 + e * .025;
	}
	let y = l((e, t, n) => {
		e.fillStyle = "#d1d6ca", e.fillRect(0, 0, t, n);
		for (let r = 0; r < 4e3; r++) e.fillStyle = `rgba(55,68,57,${s() * .08})`, e.fillRect(s() * t, s() * n, 1, 1);
		e.strokeStyle = "#e5e5d180", e.lineWidth = 3, e.strokeRect(3, 3, t - 6, n - 6);
		for (let r = 0; r < 70; r++) {
			let r = s() * t, i = s() > .5 ? s() * 10 : n - s() * 10;
			e.fillStyle = "#656c5c60", e.fillRect(r, i, 1 + s() * 9, 1);
		}
	}, 512, 512);
	a.file.map = y, a.file.color.set("#7f9585"), a.file.roughness = .39, a.file.metalness = .32, a.file.bumpMap = y, a.file.bumpScale = .012, a.iron.roughness = .3, a.iron.metalness = .5, a.brass.roughness = .31, a.brass.metalness = .7, a.ceramic.roughness = .21, a.ceramic.metalness = .04, a.black.roughness = .28, a.black.metalness = .13, a.paper.roughness = .94, a.plaster.roughness = .96, a.dado.roughness = .7;
	function b(e) {
		let t = [], n = new M().load(fe("/images/press-study/" + e), () => t.forEach((e) => {
			e.needsUpdate = !0;
		}));
		return n.colorSpace = ge, n.anisotropy = 8, r.add(n), (e, i, a, o) => {
			let s = n.clone();
			return s.repeat.set(a, o), s.offset.set(e, 1 - i - o), s.colorSpace = ge, s.anisotropy = 8, r.add(s), t.push(s), n.image && (s.needsUpdate = !0), s;
		};
	}
	let x = b("material-atlas.png"), S = b("archive-atlas.png"), C = b("editorial-paper-atlas.png"), w = x(.003, .003, .494, .494), T = x(.503, .003, .494, .494), E = x(.003, .503, .494, .494), D = x(.503, .503, .494, .494);
	a.file.map = w, a.file.color.set("#e8eee3"), a.file.bumpMap = w, a.file.bumpScale = .025, a.file.roughness = .46, a.iron.map = T, a.iron.color.set("#cadbd2"), a.iron.bumpMap = T, a.iron.bumpScale = .009, a.iron.roughness = .36, a.iron.metalness = .22, a.plaster.map = E, a.plaster.color.set("#e6e2d9"), a.plaster.bumpMap = E, a.plaster.bumpScale = .022, a.pageedge.map = D, a.pageedge.color.set("#f4e9d3"), a.pageedge.bumpMap = D, a.pageedge.bumpScale = .015, a.pageedge.roughness = .98, a.cork.map = S(.004, .004, .492, .492), a.cork.color.set("#d8bc96"), a.cork.bumpMap = a.cork.map, a.cork.bumpScale = .035, a.archive.map = S(.62, .04, .2, .04), a.archive.color.set("#eee0c5"), a.archive.roughness = .95, a.notebook.map = S(.55, .84, .37, .09), a.notebook.color.set("#ffffff"), a.notebook.roughness = .88;
	let O = [
		[
			.632,
			.004,
			.364,
			.52
		],
		[
			.004,
			.004,
			.618,
			.52
		],
		[
			.004,
			.539,
			.535,
			.457
		],
		[
			.547,
			.539,
			.449,
			.457
		]
	], k = /* @__PURE__ */ new Map();
	function A(e, t) {
		if (k.has(t)) return k.get(t);
		let n = new c({
			map: e,
			color: "#fff9ee",
			roughness: .93,
			polygonOffset: !0,
			polygonOffsetFactor: -1,
			polygonOffsetUnits: -1
		});
		return i.add(n), k.set(t, n), n;
	}
	for (let e of t.printSurfaces) {
		let { kind: t, text: n } = e.userData.print;
		t === "editorial" ? e.material = A(C(...O[Number(n)]), "editorial" + n) : t === "news" ? e.material = A(C(...O[1]), "news") : t === "letter" ? e.material = A(C(...O[0]), "letter") : t === "binder" ? e.material = A(S(.503, .003, .494, .494), "binder") : t === "spine" ? e.material = A(S(Number(n) * .0625 + .002, .503, .0585, .494), "spine" + n) : t === "cover" && (e.material = A(S(.503, .503, .494, .494), "cover"));
	}
	for (let e of [-2.6, 2.4]) {
		let t = new u("#f4e7d0", 4.5, 7, 2);
		t.position.set(e, 3.7, -3.4), n.add(t);
	}
	let j = new u("#dce6ea", 13, 13, 2);
	j.position.set(-4, 2.3, -1.3), n.add(j);
	for (let e of Object.values(a)) e.needsUpdate = !0;
}
//#endregion
//#region ../../../游戏版本/shekou-game-versions/shekou-spatial-play/engine-source/node_modules/three/examples/jsm/environments/RoomEnvironment.js
var ot = class extends pe {
	constructor() {
		super(), this.name = "RoomEnvironment", this.position.y = -3.5;
		let e = new re();
		e.deleteAttribute("uv");
		let t = new c({ side: 1 }), n = new c(), r = new u(16777215, 900, 28, 2);
		r.position.set(.418, 16.199, .3), this.add(r);
		let i = new v(e, t);
		i.position.set(-.757, 13.219, .717), i.scale.set(31.713, 28.305, 28.591), this.add(i);
		let a = new g(e, n, 6), o = new C();
		o.position.set(-10.906, 2.009, 1.846), o.rotation.set(0, -.195, 0), o.scale.set(2.328, 7.905, 4.651), o.updateMatrix(), a.setMatrixAt(0, o.matrix), o.position.set(-5.607, -.754, -.758), o.rotation.set(0, .994, 0), o.scale.set(1.97, 1.534, 3.955), o.updateMatrix(), a.setMatrixAt(1, o.matrix), o.position.set(6.167, .857, 7.803), o.rotation.set(0, .561, 0), o.scale.set(3.927, 6.285, 3.687), o.updateMatrix(), a.setMatrixAt(2, o.matrix), o.position.set(-2.017, .018, 6.124), o.rotation.set(0, .333, 0), o.scale.set(2.002, 4.566, 2.064), o.updateMatrix(), a.setMatrixAt(3, o.matrix), o.position.set(2.291, -.756, -2.621), o.rotation.set(0, -.286, 0), o.scale.set(1.546, 1.552, 1.496), o.updateMatrix(), a.setMatrixAt(4, o.matrix), o.position.set(-2.193, -.369, -5.547), o.rotation.set(0, .516, 0), o.scale.set(3.875, 3.487, 2.986), o.updateMatrix(), a.setMatrixAt(5, o.matrix), this.add(a);
		let s = new v(e, st(50));
		s.position.set(-16.116, 14.37, 8.208), s.scale.set(.1, 2.428, 2.739), this.add(s);
		let l = new v(e, st(50));
		l.position.set(-16.109, 18.021, -8.207), l.scale.set(.1, 2.425, 2.751), this.add(l);
		let d = new v(e, st(17));
		d.position.set(14.904, 12.198, -1.832), d.scale.set(.15, 4.265, 6.331), this.add(d);
		let f = new v(e, st(43));
		f.position.set(-.462, 8.89, 14.52), f.scale.set(4.38, 5.441, .088), this.add(f);
		let p = new v(e, st(20));
		p.position.set(3.235, 11.486, -12.541), p.scale.set(2.5, 2, .1), this.add(p);
		let m = new v(e, st(100));
		m.position.set(0, 20, 0), m.scale.set(1, .1, 1), this.add(m);
	}
	dispose() {
		let e = /* @__PURE__ */ new Set();
		this.traverse((t) => {
			t.isMesh && (e.add(t.geometry), e.add(t.material));
		});
		for (let t of e) t.dispose();
	}
};
function st(e) {
	return new n({
		color: 0,
		emissive: 16777215,
		emissiveIntensity: e
	});
}
//#endregion
//#region ../../../游戏版本/shekou-game-versions/shekou-spatial-play/engine-source/node_modules/three/examples/jsm/shaders/CopyShader.js
var ct = {
	name: "CopyShader",
	uniforms: {
		tDiffuse: { value: null },
		opacity: { value: 1 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		uniform float opacity;\n\n		uniform sampler2D tDiffuse;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 texel = texture2D( tDiffuse, vUv );\n			gl_FragColor = opacity * texel;\n\n\n		}"
}, lt = class {
	constructor() {
		this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
	}
	setSize() {}
	render() {
		console.error("THREE.Pass: .render() must be implemented in derived pass.");
	}
	dispose() {}
}, ut = new s(-1, 1, 1, -1, 0, 1), dt = new class extends N {
	constructor() {
		super(), this.setAttribute("position", new a([
			-1,
			3,
			0,
			-1,
			-1,
			0,
			3,
			-1,
			0
		], 3)), this.setAttribute("uv", new a([
			0,
			2,
			0,
			0,
			2,
			0
		], 2));
	}
}(), ft = class {
	constructor(e) {
		this._mesh = new v(dt, e);
	}
	dispose() {
		this._mesh.geometry.dispose();
	}
	render(e) {
		e.render(this._mesh, ut);
	}
	get material() {
		return this._mesh.material;
	}
	set material(e) {
		this._mesh.material = e;
	}
}, pt = class extends lt {
	constructor(e, t = "tDiffuse") {
		super(), this.textureID = t, this.uniforms = null, this.material = null, e instanceof te ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = L.clone(e.uniforms), this.material = new te({
			name: e.name === void 0 ? "unspecified" : e.name,
			defines: Object.assign({}, e.defines),
			uniforms: this.uniforms,
			vertexShader: e.vertexShader,
			fragmentShader: e.fragmentShader
		})), this._fsQuad = new ft(this.material);
	}
	render(e, t, n) {
		this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this._fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
	}
	dispose() {
		this.material.dispose(), this._fsQuad.dispose();
	}
}, mt = class extends lt {
	constructor(e, t) {
		super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
	}
	render(e, t, n) {
		let r = e.getContext(), i = e.state;
		i.buffers.color.setMask(!1), i.buffers.depth.setMask(!1), i.buffers.color.setLocked(!0), i.buffers.depth.setLocked(!0);
		let a, o;
		this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), i.buffers.stencil.setTest(!0), i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295), i.buffers.stencil.setClear(o), i.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), i.buffers.color.setLocked(!1), i.buffers.depth.setLocked(!1), i.buffers.color.setMask(!0), i.buffers.depth.setMask(!0), i.buffers.stencil.setLocked(!1), i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295), i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), i.buffers.stencil.setLocked(!0);
	}
}, ht = class extends lt {
	constructor() {
		super(), this.needsSwap = !1;
	}
	render(e) {
		e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
	}
}, gt = class {
	constructor(e, t) {
		if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
			let n = e.getSize(new oe());
			this._width = n.width, this._height = n.height, t = new z(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: ne }), t.texture.name = "EffectComposer.rt1";
		} else this._width = t.width, this._height = t.height;
		this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new pt(ct), this.copyPass.material.blending = 0, this.timer = new ie();
	}
	swapBuffers() {
		let e = this.readBuffer;
		this.readBuffer = this.writeBuffer, this.writeBuffer = e;
	}
	addPass(e) {
		this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	insertPass(e, t) {
		this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	removePass(e) {
		let t = this.passes.indexOf(e);
		t !== -1 && this.passes.splice(t, 1);
	}
	isLastEnabledPass(e) {
		for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return !1;
		return !0;
	}
	render(e) {
		this.timer.update(), e === void 0 && (e = this.timer.getDelta());
		let t = this.renderer.getRenderTarget(), n = !1;
		for (let t = 0, r = this.passes.length; t < r; t++) {
			let r = this.passes[t];
			if (r.enabled !== !1) {
				if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t), r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), r.needsSwap) {
					if (n) {
						let t = this.renderer.getContext(), n = this.renderer.state.buffers.stencil;
						n.setFunc(t.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), n.setFunc(t.EQUAL, 1, 4294967295);
					}
					this.swapBuffers();
				}
				mt !== void 0 && (r instanceof mt ? n = !0 : r instanceof ht && (n = !1));
			}
		}
		this.renderer.setRenderTarget(t);
	}
	reset(e) {
		if (e === void 0) {
			let t = this.renderer.getSize(new oe());
			this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
		}
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
	}
	setSize(e, t) {
		this._width = e, this._height = t;
		let n = this._width * this._pixelRatio, r = this._height * this._pixelRatio;
		this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r);
		for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(n, r);
	}
	setPixelRatio(e) {
		this._pixelRatio = e, this.setSize(this._width, this._height);
	}
	dispose() {
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
	}
}, _t = class {
	constructor(e = Math) {
		this.grad3 = [
			[
				1,
				1,
				0
			],
			[
				-1,
				1,
				0
			],
			[
				1,
				-1,
				0
			],
			[
				-1,
				-1,
				0
			],
			[
				1,
				0,
				1
			],
			[
				-1,
				0,
				1
			],
			[
				1,
				0,
				-1
			],
			[
				-1,
				0,
				-1
			],
			[
				0,
				1,
				1
			],
			[
				0,
				-1,
				1
			],
			[
				0,
				1,
				-1
			],
			[
				0,
				-1,
				-1
			]
		], this.grad4 = [
			[
				0,
				1,
				1,
				1
			],
			[
				0,
				1,
				1,
				-1
			],
			[
				0,
				1,
				-1,
				1
			],
			[
				0,
				1,
				-1,
				-1
			],
			[
				0,
				-1,
				1,
				1
			],
			[
				0,
				-1,
				1,
				-1
			],
			[
				0,
				-1,
				-1,
				1
			],
			[
				0,
				-1,
				-1,
				-1
			],
			[
				1,
				0,
				1,
				1
			],
			[
				1,
				0,
				1,
				-1
			],
			[
				1,
				0,
				-1,
				1
			],
			[
				1,
				0,
				-1,
				-1
			],
			[
				-1,
				0,
				1,
				1
			],
			[
				-1,
				0,
				1,
				-1
			],
			[
				-1,
				0,
				-1,
				1
			],
			[
				-1,
				0,
				-1,
				-1
			],
			[
				1,
				1,
				0,
				1
			],
			[
				1,
				1,
				0,
				-1
			],
			[
				1,
				-1,
				0,
				1
			],
			[
				1,
				-1,
				0,
				-1
			],
			[
				-1,
				1,
				0,
				1
			],
			[
				-1,
				1,
				0,
				-1
			],
			[
				-1,
				-1,
				0,
				1
			],
			[
				-1,
				-1,
				0,
				-1
			],
			[
				1,
				1,
				1,
				0
			],
			[
				1,
				1,
				-1,
				0
			],
			[
				1,
				-1,
				1,
				0
			],
			[
				1,
				-1,
				-1,
				0
			],
			[
				-1,
				1,
				1,
				0
			],
			[
				-1,
				1,
				-1,
				0
			],
			[
				-1,
				-1,
				1,
				0
			],
			[
				-1,
				-1,
				-1,
				0
			]
		], this.p = [];
		for (let t = 0; t < 256; t++) this.p[t] = Math.floor(e.random() * 256);
		this.perm = [];
		for (let e = 0; e < 512; e++) this.perm[e] = this.p[e & 255];
		this.simplex = [
			[
				0,
				1,
				2,
				3
			],
			[
				0,
				1,
				3,
				2
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				2,
				3,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				2,
				3,
				0
			],
			[
				0,
				2,
				1,
				3
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				3,
				1,
				2
			],
			[
				0,
				3,
				2,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				3,
				2,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				2,
				0,
				3
			],
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				3,
				0,
				2
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				2,
				3,
				0,
				1
			],
			[
				2,
				3,
				1,
				0
			],
			[
				1,
				0,
				2,
				3
			],
			[
				1,
				0,
				3,
				2
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				2,
				0,
				3,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				2,
				1,
				3,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				2,
				0,
				1,
				3
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				3,
				0,
				1,
				2
			],
			[
				3,
				0,
				2,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				3,
				1,
				2,
				0
			],
			[
				2,
				1,
				0,
				3
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				3,
				1,
				0,
				2
			],
			[
				0,
				0,
				0,
				0
			],
			[
				3,
				2,
				0,
				1
			],
			[
				3,
				2,
				1,
				0
			]
		];
	}
	noise(e, t) {
		let n, r, i, a = .5 * (Math.sqrt(3) - 1), o = (e + t) * a, s = Math.floor(e + o), c = Math.floor(t + o), l = (3 - Math.sqrt(3)) / 6, u = (s + c) * l, d = s - u, f = c - u, p = e - d, m = t - f, h, g;
		p > m ? (h = 1, g = 0) : (h = 0, g = 1);
		let _ = p - h + l, v = m - g + l, y = p - 1 + 2 * l, b = m - 1 + 2 * l, x = s & 255, S = c & 255, C = this.perm[x + this.perm[S]] % 12, w = this.perm[x + h + this.perm[S + g]] % 12, T = this.perm[x + 1 + this.perm[S + 1]] % 12, E = .5 - p * p - m * m;
		E < 0 ? n = 0 : (E *= E, n = E * E * this._dot(this.grad3[C], p, m));
		let D = .5 - _ * _ - v * v;
		D < 0 ? r = 0 : (D *= D, r = D * D * this._dot(this.grad3[w], _, v));
		let O = .5 - y * y - b * b;
		return O < 0 ? i = 0 : (O *= O, i = O * O * this._dot(this.grad3[T], y, b)), 70 * (n + r + i);
	}
	noise3d(e, t, n) {
		let r, i, a, o, s = (e + t + n) * (1 / 3), c = Math.floor(e + s), l = Math.floor(t + s), u = Math.floor(n + s), d = 1 / 6, f = (c + l + u) * d, p = c - f, m = l - f, h = u - f, g = e - p, _ = t - m, v = n - h, y, b, x, S, C, w;
		g >= _ ? _ >= v ? (y = 1, b = 0, x = 0, S = 1, C = 1, w = 0) : g >= v ? (y = 1, b = 0, x = 0, S = 1, C = 0, w = 1) : (y = 0, b = 0, x = 1, S = 1, C = 0, w = 1) : _ < v ? (y = 0, b = 0, x = 1, S = 0, C = 1, w = 1) : g < v ? (y = 0, b = 1, x = 0, S = 0, C = 1, w = 1) : (y = 0, b = 1, x = 0, S = 1, C = 1, w = 0);
		let T = g - y + d, E = _ - b + d, D = v - x + d, O = g - S + 2 * d, k = _ - C + 2 * d, A = v - w + 2 * d, j = g - 1 + 3 * d, M = _ - 1 + 3 * d, N = v - 1 + 3 * d, P = c & 255, F = l & 255, I = u & 255, L = this.perm[P + this.perm[F + this.perm[I]]] % 12, R = this.perm[P + y + this.perm[F + b + this.perm[I + x]]] % 12, z = this.perm[P + S + this.perm[F + C + this.perm[I + w]]] % 12, B = this.perm[P + 1 + this.perm[F + 1 + this.perm[I + 1]]] % 12, V = .6 - g * g - _ * _ - v * v;
		V < 0 ? r = 0 : (V *= V, r = V * V * this._dot3(this.grad3[L], g, _, v));
		let ee = .6 - T * T - E * E - D * D;
		ee < 0 ? i = 0 : (ee *= ee, i = ee * ee * this._dot3(this.grad3[R], T, E, D));
		let te = .6 - O * O - k * k - A * A;
		te < 0 ? a = 0 : (te *= te, a = te * te * this._dot3(this.grad3[z], O, k, A));
		let ne = .6 - j * j - M * M - N * N;
		return ne < 0 ? o = 0 : (ne *= ne, o = ne * ne * this._dot3(this.grad3[B], j, M, N)), 32 * (r + i + a + o);
	}
	noise4d(e, t, n, r) {
		let i = this.grad4, a = this.simplex, o = this.perm, s = (Math.sqrt(5) - 1) / 4, c = (5 - Math.sqrt(5)) / 20, l, u, d, f, p, m = (e + t + n + r) * s, h = Math.floor(e + m), g = Math.floor(t + m), _ = Math.floor(n + m), v = Math.floor(r + m), y = (h + g + _ + v) * c, b = h - y, x = g - y, S = _ - y, C = v - y, w = e - b, T = t - x, E = n - S, D = r - C, O = w > T ? 32 : 0, k = w > E ? 16 : 0, A = T > E ? 8 : 0, j = w > D ? 4 : 0, M = T > D ? 2 : 0, N = +(E > D), P = O + k + A + j + M + N, F = +(a[P][0] >= 3), I = +(a[P][1] >= 3), L = +(a[P][2] >= 3), R = +(a[P][3] >= 3), z = +(a[P][0] >= 2), B = +(a[P][1] >= 2), V = +(a[P][2] >= 2), ee = +(a[P][3] >= 2), te = +(a[P][0] >= 1), ne = +(a[P][1] >= 1), re = +(a[P][2] >= 1), ie = +(a[P][3] >= 1), ae = w - F + c, oe = T - I + c, se = E - L + c, ce = D - R + c, H = w - z + 2 * c, le = T - B + 2 * c, ue = E - V + 2 * c, de = D - ee + 2 * c, fe = w - te + 3 * c, pe = T - ne + 3 * c, me = E - re + 3 * c, he = D - ie + 3 * c, ge = w - 1 + 4 * c, _e = T - 1 + 4 * c, ve = E - 1 + 4 * c, ye = D - 1 + 4 * c, be = h & 255, xe = g & 255, Se = _ & 255, Ce = v & 255, we = o[be + o[xe + o[Se + o[Ce]]]] % 32, Te = o[be + F + o[xe + I + o[Se + L + o[Ce + R]]]] % 32, Ee = o[be + z + o[xe + B + o[Se + V + o[Ce + ee]]]] % 32, De = o[be + te + o[xe + ne + o[Se + re + o[Ce + ie]]]] % 32, U = o[be + 1 + o[xe + 1 + o[Se + 1 + o[Ce + 1]]]] % 32, Oe = .6 - w * w - T * T - E * E - D * D;
		Oe < 0 ? l = 0 : (Oe *= Oe, l = Oe * Oe * this._dot4(i[we], w, T, E, D));
		let ke = .6 - ae * ae - oe * oe - se * se - ce * ce;
		ke < 0 ? u = 0 : (ke *= ke, u = ke * ke * this._dot4(i[Te], ae, oe, se, ce));
		let Ae = .6 - H * H - le * le - ue * ue - de * de;
		Ae < 0 ? d = 0 : (Ae *= Ae, d = Ae * Ae * this._dot4(i[Ee], H, le, ue, de));
		let je = .6 - fe * fe - pe * pe - me * me - he * he;
		je < 0 ? f = 0 : (je *= je, f = je * je * this._dot4(i[De], fe, pe, me, he));
		let Me = .6 - ge * ge - _e * _e - ve * ve - ye * ye;
		return Me < 0 ? p = 0 : (Me *= Me, p = Me * Me * this._dot4(i[U], ge, _e, ve, ye)), 27 * (l + u + d + f + p);
	}
	_dot(e, t, n) {
		return e[0] * t + e[1] * n;
	}
	_dot3(e, t, n, r) {
		return e[0] * t + e[1] * n + e[2] * r;
	}
	_dot4(e, t, n, r, i) {
		return e[0] * t + e[1] * n + e[2] * r + e[3] * i;
	}
}, vt = {
	name: "SSAOShader",
	defines: {
		PERSPECTIVE_CAMERA: 1,
		KERNEL_SIZE: 32
	},
	uniforms: {
		tNormal: { value: null },
		tDepth: { value: null },
		tNoise: { value: null },
		kernel: { value: null },
		cameraNear: { value: null },
		cameraFar: { value: null },
		resolution: { value: new oe() },
		cameraProjectionMatrix: { value: new f() },
		cameraInverseProjectionMatrix: { value: new f() },
		kernelRadius: { value: 8 },
		minDistance: { value: .005 },
		maxDistance: { value: .05 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n		uniform highp sampler2D tNormal;\n		uniform highp sampler2D tDepth;\n		uniform sampler2D tNoise;\n\n		uniform vec3 kernel[ KERNEL_SIZE ];\n\n		uniform vec2 resolution;\n\n		uniform float cameraNear;\n		uniform float cameraFar;\n		uniform mat4 cameraProjectionMatrix;\n		uniform mat4 cameraInverseProjectionMatrix;\n\n		uniform float kernelRadius;\n		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference\n		uniform float maxDistance; // avoid the influence of fragments which are too far away\n\n		varying vec2 vUv;\n\n		#include <packing>\n\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n\n			const float depthThreshold = 0.0;\n\n		#else\n\n			const float depthThreshold = 1.0;\n\n		#endif\n\n		float getDepth( const in vec2 screenPosition ) {\n\n			return texture2D( tDepth, screenPosition ).x;\n\n		}\n\n		float getLinearDepth( const in vec2 screenPosition ) {\n\n			#if PERSPECTIVE_CAMERA == 1\n\n				float fragCoordZ = texture2D( tDepth, screenPosition ).x;\n				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );\n				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n\n			#else\n\n				return texture2D( tDepth, screenPosition ).x;\n\n			#endif\n\n		}\n\n		float getViewZ( const in float depth ) {\n\n			#if PERSPECTIVE_CAMERA == 1\n\n				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );\n\n			#else\n\n				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );\n\n			#endif\n\n		}\n\n		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {\n\n			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];\n\n			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );\n\n			clipPosition *= clipW; // unprojection.\n\n			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;\n\n		}\n\n		vec3 getViewNormal( const in vec2 screenPosition ) {\n\n			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );\n\n		}\n\n		void main() {\n\n			float depth = getDepth( vUv );\n\n			if ( depth == depthThreshold ) {\n\n				gl_FragColor = vec4( 1.0 ); // don't influence background\n\n			} else {\n\n				float viewZ = getViewZ( depth );\n\n				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );\n				vec3 viewNormal = getViewNormal( vUv );\n\n				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );\n				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );\n\n				// compute matrix used to reorient a kernel vector\n\n				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );\n				vec3 bitangent = cross( viewNormal, tangent );\n				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );\n\n				float occlusion = 0.0;\n\n				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {\n\n					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space\n					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point\n\n					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC\n					samplePointNDC /= samplePointNDC.w;\n\n					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates\n\n					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture\n					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value\n					float delta = sampleDepth - realDepth;\n\n					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion\n\n						occlusion += 1.0;\n\n					}\n\n				}\n\n				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );\n\n				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );\n\n			}\n\n		}"
}, yt = {
	name: "SSAODepthShader",
	defines: { PERSPECTIVE_CAMERA: 1 },
	uniforms: {
		tDepth: { value: null },
		cameraNear: { value: null },
		cameraFar: { value: null }
	},
	vertexShader: "varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "uniform sampler2D tDepth;\n\n		uniform float cameraNear;\n		uniform float cameraFar;\n\n		varying vec2 vUv;\n\n		#include <packing>\n\n		float getLinearDepth( const in vec2 screenPosition ) {\n\n			#if PERSPECTIVE_CAMERA == 1\n\n				float fragCoordZ = texture2D( tDepth, screenPosition ).x;\n				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );\n				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n\n			#else\n\n				return texture2D( tDepth, screenPosition ).x;\n\n			#endif\n\n		}\n\n		void main() {\n\n			float depth = getLinearDepth( vUv );\n			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );\n\n		}"
}, bt = {
	name: "SSAOBlurShader",
	uniforms: {
		tDiffuse: { value: null },
		resolution: { value: new oe() }
	},
	vertexShader: "varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "uniform sampler2D tDiffuse;\n\n		uniform vec2 resolution;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec2 texelSize = ( 1.0 / resolution );\n			float result = 0.0;\n\n			for ( int i = - 2; i <= 2; i ++ ) {\n\n				for ( int j = - 2; j <= 2; j ++ ) {\n\n					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;\n					result += texture2D( tDiffuse, vUv + offset ).r;\n\n				}\n\n			}\n\n			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );\n\n		}"
}, xt = class t extends lt {
	constructor(e, t, n = 512, r = 512, i = 32) {
		super(), this.width = n, this.height = r, this.clear = !0, this.needsSwap = !1, this.camera = t, this.scene = e, this.kernelRadius = 8, this.kernel = [], this.noiseTexture = null, this.output = 0, this.minDistance = .005, this.maxDistance = .1, this._visibilityCache = [], this._generateSampleKernel(i), this._generateRandomKernelRotations();
		let a = new y();
		a.format = xe, a.type = ue, this.normalRenderTarget = new z(this.width, this.height, {
			minFilter: x,
			magFilter: x,
			type: ne,
			depthTexture: a
		}), this.ssaoRenderTarget = new z(this.width, this.height, { type: ne }), this.blurRenderTarget = this.ssaoRenderTarget.clone(), this.ssaoMaterial = new te({
			defines: Object.assign({}, vt.defines),
			uniforms: L.clone(vt.uniforms),
			vertexShader: vt.vertexShader,
			fragmentShader: vt.fragmentShader,
			blending: 0
		}), this.ssaoMaterial.defines.KERNEL_SIZE = i, this.ssaoMaterial.uniforms.tNormal.value = this.normalRenderTarget.texture, this.ssaoMaterial.uniforms.tDepth.value = this.normalRenderTarget.depthTexture, this.ssaoMaterial.uniforms.tNoise.value = this.noiseTexture, this.ssaoMaterial.uniforms.kernel.value = this.kernel, this.ssaoMaterial.uniforms.cameraNear.value = this.camera.near, this.ssaoMaterial.uniforms.cameraFar.value = this.camera.far, this.ssaoMaterial.uniforms.resolution.value.set(this.width, this.height), this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix), this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse), this.normalMaterial = new S(), this.normalMaterial.blending = 0, this.blurMaterial = new te({
			defines: Object.assign({}, bt.defines),
			uniforms: L.clone(bt.uniforms),
			vertexShader: bt.vertexShader,
			fragmentShader: bt.fragmentShader
		}), this.blurMaterial.uniforms.tDiffuse.value = this.ssaoRenderTarget.texture, this.blurMaterial.uniforms.resolution.value.set(this.width, this.height), this.depthRenderMaterial = new te({
			defines: Object.assign({}, yt.defines),
			uniforms: L.clone(yt.uniforms),
			vertexShader: yt.vertexShader,
			fragmentShader: yt.fragmentShader,
			blending: 0
		}), this.depthRenderMaterial.uniforms.tDepth.value = this.normalRenderTarget.depthTexture, this.depthRenderMaterial.uniforms.cameraNear.value = this.camera.near, this.depthRenderMaterial.uniforms.cameraFar.value = this.camera.far, this.copyMaterial = new te({
			uniforms: L.clone(ct.uniforms),
			vertexShader: ct.vertexShader,
			fragmentShader: ct.fragmentShader,
			transparent: !0,
			depthTest: !1,
			depthWrite: !1,
			blendSrc: 208,
			blendDst: 200,
			blendEquation: 100,
			blendSrcAlpha: 206,
			blendDstAlpha: 200,
			blendEquationAlpha: 100
		}), this._fsQuad = new ft(null), this._originalClearColor = new R();
	}
	dispose() {
		this.normalRenderTarget.dispose(), this.ssaoRenderTarget.dispose(), this.blurRenderTarget.dispose(), this.normalMaterial.dispose(), this.blurMaterial.dispose(), this.copyMaterial.dispose(), this.depthRenderMaterial.dispose(), this._fsQuad.dispose();
	}
	render(e, n, r) {
		switch (this._overrideVisibility(), this._renderOverride(e, this.normalMaterial, this.normalRenderTarget, 7829503, 1), this._restoreVisibility(), this.ssaoMaterial.uniforms.kernelRadius.value = this.kernelRadius, this.ssaoMaterial.uniforms.minDistance.value = this.minDistance, this.ssaoMaterial.uniforms.maxDistance.value = this.maxDistance, this._renderPass(e, this.ssaoMaterial, this.ssaoRenderTarget), this._renderPass(e, this.blurMaterial, this.blurRenderTarget), this.output) {
			case t.OUTPUT.SSAO:
				this.copyMaterial.uniforms.tDiffuse.value = this.ssaoRenderTarget.texture, this.copyMaterial.blending = 0, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : r);
				break;
			case t.OUTPUT.Blur:
				this.copyMaterial.uniforms.tDiffuse.value = this.blurRenderTarget.texture, this.copyMaterial.blending = 0, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : r);
				break;
			case t.OUTPUT.Depth:
				this._renderPass(e, this.depthRenderMaterial, this.renderToScreen ? null : r);
				break;
			case t.OUTPUT.Normal:
				this.copyMaterial.uniforms.tDiffuse.value = this.normalRenderTarget.texture, this.copyMaterial.blending = 0, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : r);
				break;
			case t.OUTPUT.Default:
				this.copyMaterial.uniforms.tDiffuse.value = this.blurRenderTarget.texture, this.copyMaterial.blending = 5, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : r);
				break;
			default: console.warn("THREE.SSAOPass: Unknown output type.");
		}
	}
	setSize(e, t) {
		this.width = e, this.height = t, this.ssaoRenderTarget.setSize(e, t), this.normalRenderTarget.setSize(e, t), this.blurRenderTarget.setSize(e, t), this.ssaoMaterial.uniforms.resolution.value.set(e, t), this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix), this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse), this.blurMaterial.uniforms.resolution.value.set(e, t);
	}
	_renderPass(e, t, n, r, i) {
		e.getClearColor(this._originalClearColor);
		let a = e.getClearAlpha(), o = e.autoClear;
		e.setRenderTarget(n), e.autoClear = !1, r != null && (e.setClearColor(r), e.setClearAlpha(i || 0), e.clear()), this._fsQuad.material = t, this._fsQuad.render(e), e.autoClear = o, e.setClearColor(this._originalClearColor), e.setClearAlpha(a);
	}
	_renderOverride(e, t, n, r, i) {
		e.getClearColor(this._originalClearColor);
		let a = e.getClearAlpha(), o = e.autoClear;
		e.setRenderTarget(n), e.autoClear = !1, r = t.clearColor || r, i = t.clearAlpha || i, r != null && (e.setClearColor(r), e.setClearAlpha(i || 0), e.clear()), this.scene.overrideMaterial = t, e.render(this.scene, this.camera), this.scene.overrideMaterial = null, e.autoClear = o, e.setClearColor(this._originalClearColor), e.setClearAlpha(a);
	}
	_generateSampleKernel(e) {
		let t = this.kernel;
		for (let n = 0; n < e; n++) {
			let r = new V();
			r.x = Math.random() * 2 - 1, r.y = Math.random() * 2 - 1, r.z = Math.random(), r.normalize();
			let i = n / e;
			i = l.lerp(.1, 1, i * i), r.multiplyScalar(i), t.push(r);
		}
	}
	_generateRandomKernelRotations() {
		let t = new _t(), n = new Float32Array(16);
		for (let e = 0; e < 16; e++) {
			let r = Math.random() * 2 - 1, i = Math.random() * 2 - 1;
			n[e] = t.noise3d(r, i, 0);
		}
		this.noiseTexture = new A(n, 4, 4, _, i), this.noiseTexture.wrapS = e, this.noiseTexture.wrapT = e, this.noiseTexture.needsUpdate = !0;
	}
	_overrideVisibility() {
		let e = this.scene, t = this._visibilityCache;
		e.traverse(function(e) {
			(e.isPoints || e.isLine || e.isLine2) && e.visible && (e.visible = !1, t.push(e));
		});
	}
	_restoreVisibility() {
		let e = this._visibilityCache;
		for (let t = 0; t < e.length; t++) e[t].visible = !0;
		e.length = 0;
	}
};
xt.OUTPUT = {
	Default: 0,
	SSAO: 1,
	Blur: 2,
	Depth: 3,
	Normal: 4
};
//#endregion
//#region ../../../游戏版本/shekou-game-versions/shekou-spatial-play/engine-source/node_modules/three/examples/jsm/postprocessing/RenderPass.js
var St = class extends lt {
	constructor(e, t, n = null, r = null, i = null) {
		super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = r, this.clearAlpha = i, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this.isRenderPass = !0, this._oldClearColor = new R();
	}
	render(e, t, n) {
		let r = e.autoClear;
		e.autoClear = !1;
		let i, a;
		this.overrideMaterial !== null && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (i = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == 1 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(i), this.overrideMaterial !== null && (this.scene.overrideMaterial = a), e.autoClear = r;
	}
}, Ct = {
	name: "OutputShader",
	uniforms: {
		tDiffuse: { value: null },
		toneMappingExposure: { value: 1 }
	},
	vertexShader: "\n		precision highp float;\n\n		uniform mat4 modelViewMatrix;\n		uniform mat4 projectionMatrix;\n\n		attribute vec3 position;\n		attribute vec2 uv;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		precision highp float;\n\n		uniform sampler2D tDiffuse;\n\n		#include <tonemapping_pars_fragment>\n		#include <colorspace_pars_fragment>\n\n		varying vec2 vUv;\n\n		void main() {\n\n			gl_FragColor = texture2D( tDiffuse, vUv );\n\n			// tone mapping\n\n			#ifdef LINEAR_TONE_MAPPING\n\n				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n\n			#elif defined( REINHARD_TONE_MAPPING )\n\n				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n\n			#elif defined( CINEON_TONE_MAPPING )\n\n				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n\n			#elif defined( ACES_FILMIC_TONE_MAPPING )\n\n				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n\n			#elif defined( AGX_TONE_MAPPING )\n\n				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n\n			#elif defined( NEUTRAL_TONE_MAPPING )\n\n				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n\n			#elif defined( CUSTOM_TONE_MAPPING )\n\n				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n\n			#endif\n\n			// color space\n\n			#ifdef SRGB_TRANSFER\n\n				gl_FragColor = sRGBTransferOETF( gl_FragColor );\n\n			#endif\n\n		}"
}, wt = class extends lt {
	constructor() {
		super(), this.isOutputPass = !0, this.uniforms = L.clone(Ct.uniforms), this.material = new w({
			name: Ct.name,
			uniforms: this.uniforms,
			vertexShader: Ct.vertexShader,
			fragmentShader: Ct.fragmentShader
		}), this._fsQuad = new ft(this.material), this._outputColorSpace = null, this._toneMapping = null;
	}
	render(e, t, n) {
		this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, D.getTransfer(this._outputColorSpace) === "srgb" && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === 6 ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === 7 ? this.material.defines.NEUTRAL_TONE_MAPPING = "" : this._toneMapping === 5 && (this.material.defines.CUSTOM_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
	}
	dispose() {
		this.material.dispose(), this._fsQuad.dispose();
	}
};
//#endregion
//#region ../../../游戏版本/shekou-game-versions/shekou-spatial-play/engine-source/node_modules/gsap/gsap-core.js
function Tt(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Et(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var Dt = {
	autoSleep: 120,
	force3D: "auto",
	nullTargetWarn: 1,
	units: { lineHeight: "" }
}, Ot = {
	duration: .5,
	overwrite: !1,
	delay: 0
}, kt, At, jt, Mt = 1e8, Z = 1 / Mt, Nt = Math.PI * 2, Pt = Nt / 4, Q = 0, Ft = Math.sqrt, It = Math.cos, Lt = Math.sin, Rt = function(e) {
	return typeof e == "string";
}, zt = function(e) {
	return typeof e == "function";
}, Bt = function(e) {
	return typeof e == "number";
}, Vt = function(e) {
	return e === void 0;
}, Ht = function(e) {
	return typeof e == "object";
}, Ut = function(e) {
	return e !== !1;
}, Wt = function() {
	return typeof window < "u";
}, Gt = function(e) {
	return zt(e) || Rt(e);
}, Kt = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}, qt = Array.isArray, Jt = /random\([^)]+\)/g, Yt = /,\s*/g, Xt = /(?:-?\.?\d|\.)+/gi, Zt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Qt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, $t = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, en = /[+-]=-?[.\d]+/, tn = /[^,'"\[\]\s]+/gi, nn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, rn, an, on, sn, cn = {}, ln = {}, un, dn = function(e) {
	return (ln = Un(e, cn)) && sa;
}, fn = function(e, t) {
	return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, pn = function(e, t) {
	return !t && console.warn(e);
}, mn = function(e, t) {
	return e && (cn[e] = t) && ln && (ln[e] = t) || cn;
}, hn = function() {
	return 0;
}, gn = {
	suppressEvents: !0,
	isStart: !0,
	kill: !1
}, _n = {
	suppressEvents: !0,
	kill: !1
}, vn = { suppressEvents: !0 }, yn = {}, bn = [], xn = {}, Sn, Cn = {}, wn = {}, Tn = 30, En = [], Dn = "", On = function(e) {
	var t = e[0], n, r;
	if (Ht(t) || zt(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
		for (r = En.length; r-- && !En[r].targetTest(t););
		n = En[r];
	}
	for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new _i(e[r], n))) || e.splice(r, 1);
	return e;
}, kn = function(e) {
	return e._gsap || On(Er(e))[0]._gsap;
}, An = function(e, t, n) {
	return (n = e[t]) && zt(n) ? e[t]() : Vt(n) && e.getAttribute && e.getAttribute(t) || n;
}, jn = function(e, t) {
	return (e = e.split(",")).forEach(t) || e;
}, Mn = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, Nn = function(e) {
	return Math.round(e * 1e7) / 1e7 || 0;
}, Pn = function(e, t) {
	var n = t.charAt(0), r = parseFloat(t.substr(2));
	return e = parseFloat(e), n === "+" ? e + r : n === "-" ? e - r : n === "*" ? e * r : e / r;
}, Fn = function(e, t) {
	for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
	return r < n;
}, In = function() {
	var e = bn.length, t = bn.slice(0), n, r;
	for (xn = {}, bn.length = 0, n = 0; n < e; n++) r = t[n], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Ln = function(e) {
	return !!(e._initted || e._startAt || e.add);
}, Rn = function(e, t, n, r) {
	bn.length && !At && In(), e.render(t, n, r || !!(At && t < 0 && Ln(e))), bn.length && !At && In();
}, zn = function(e) {
	var t = parseFloat(e);
	return (t || t === 0) && (e + "").match(tn).length < 2 ? t : Rt(e) ? e.trim() : e;
}, Bn = function(e) {
	return e;
}, Vn = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, Hn = function(e) {
	return function(t, n) {
		for (var r in n) r in t || r === "duration" && e || r === "ease" || (t[r] = n[r]);
	};
}, Un = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, Wn = function e(t, n) {
	for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Ht(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
	return t;
}, Gn = function(e, t) {
	var n = {}, r;
	for (r in e) r in t || (n[r] = e[r]);
	return n;
}, Kn = function(e) {
	var t = e.parent || rn, n = e.keyframes ? Hn(qt(e.keyframes)) : Vn;
	if (Ut(e.inherit)) for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
	return e;
}, qn = function(e, t) {
	for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
	return n < 0;
}, Jn = function(e, t, n, r, i) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var a = e[r], o;
	if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
	return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = a, t.parent = t._dp = e, t;
}, Yn = function(e, t, n, r) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var i = t._prev, a = t._next;
	i ? i._next = a : e[n] === t && (e[n] = a), a ? a._prev = i : e[r] === t && (e[r] = i), t._next = t._prev = t.parent = null;
}, Xn = function(e, t) {
	e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Zn = function(e, t) {
	if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n;) n._dirty = 1, n = n.parent;
	return e;
}, Qn = function(e) {
	for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
	return e;
}, $n = function(e, t, n, r) {
	return e._startAt && (At ? e._startAt.revert(_n) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r));
}, er = function e(t) {
	return !t || t._ts && e(t.parent);
}, tr = function(e) {
	return e._repeat ? nr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, nr = function(e, t) {
	var n = Math.floor(e = Nn(e / t));
	return e && n === e ? n - 1 : n;
}, rr = function(e, t) {
	return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, ir = function(e) {
	return e._end = Nn(e._start + (e._tDur / Math.abs(e._ts || e._rts || Z) || 0));
}, ar = function(e, t) {
	var n = e._dp;
	return n && n.smoothChildTiming && e._ts && (e._start = Nn(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ir(e), n._dirty || Zn(n, e)), e;
}, or = function(e, t) {
	var n;
	if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = rr(e.rawTime(), t), (!t._dur || br(0, t.totalDuration(), n) - t._tTime > Z) && t.render(n, !0)), Zn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
		if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
		e._zTime = -Z;
	}
}, sr = function(e, t, n, r) {
	return t.parent && Xn(t), t._start = Nn((Bt(n) ? n : n || e !== rn ? _r(e, n, t) : e._time) + t._delay), t._end = Nn(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Jn(e, t, "_first", "_last", e._sort ? "_start" : 0), dr(t) || (e._recent = t), r || or(e, t), e._ts < 0 && ar(e, e._tTime), e;
}, cr = function(e, t) {
	return (cn.ScrollTrigger || fn("scrollTrigger", t)) && cn.ScrollTrigger.create(t, e);
}, lr = function(e, t, n, r, i) {
	if (Ei(e, t, i), !e._initted) return 1;
	if (!n && e._pt && !At && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Sn !== ii.frame) return bn.push(e), e._lazy = [i, r], 1;
}, ur = function e(t) {
	var n = t.parent;
	return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
}, dr = function(e) {
	var t = e.data;
	return t === "isFromStart" || t === "isStart";
}, fr = function(e, t, n, r) {
	var i = e.ratio, a = t < 0 || !t && (!e._start && ur(e) && !(!e._initted && dr(e)) || (e._ts < 0 || e._dp._ts < 0) && !dr(e)) ? 0 : 1, o = e._rDelay, s = 0, c, l, u;
	if (o && e._repeat && (s = br(0, e._tDur, t), l = nr(s, o), e._yoyo && l & 1 && (a = 1 - a), l !== nr(e._tTime, o) && (i = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== i || At || r || e._zTime === Z || !t && e._zTime) {
		if (!e._initted && lr(e, t, r, n, s)) return;
		for (u = e._zTime, e._zTime = t || (n ? Z : 0), n ||= t && !u, e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = s, c = e._pt; c;) c.r(a, c.d), c = c._next;
		t < 0 && $n(e, t, n, !0), e._onUpdate && !n && Ur(e, "onUpdate"), s && e._repeat && !n && e.parent && Ur(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && Xn(e, 1), !n && !At && (Ur(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
	} else e._zTime ||= t;
}, pr = function(e, t, n) {
	var r;
	if (n > t) for (r = e._first; r && r._start <= n;) {
		if (r.data === "isPause" && r._start > t) return r;
		r = r._next;
	}
	else for (r = e._last; r && r._start >= n;) {
		if (r.data === "isPause" && r._start < t) return r;
		r = r._prev;
	}
}, mr = function(e, t, n, r) {
	var i = e._repeat, a = Nn(t) || 0, o = e._tTime / e._tDur;
	return o && !r && (e._time *= a / e._dur), e._dur = a, e._tDur = i ? i < 0 ? 1e10 : Nn(a * (i + 1) + e._rDelay * i) : a, o > 0 && !r && ar(e, e._tTime = e._tDur * o), e.parent && ir(e), n || Zn(e.parent, e), e;
}, hr = function(e) {
	return e instanceof yi ? Zn(e) : mr(e, e._dur);
}, gr = {
	_start: 0,
	endTime: hn,
	totalDuration: hn
}, _r = function e(t, n, r) {
	var i = t.labels, a = t._recent || gr, o = t.duration() >= Mt ? a.endTime(!1) : t._dur, s, c, l;
	return Rt(n) && (isNaN(n) || n in i) ? (c = n.charAt(0), l = n.substr(-1) === "%", s = n.indexOf("="), c === "<" || c === ">" ? (s >= 0 && (n = n.replace(/=/, "")), (c === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (l ? (s < 0 ? a : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = o), i[n]) : (c = parseFloat(n.charAt(s - 1) + n.substr(s + 1)), l && r && (c = c / 100 * (qt(r) ? r[0] : r).totalDuration()), s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c)) : n == null ? o : +n;
}, vr = function(e, t, n) {
	var r = Bt(t[1]), i = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[i], o, s;
	if (r && (a.duration = t[1]), a.parent = n, e) {
		for (o = a, s = n; s && !("immediateRender" in o);) o = s.vars.defaults || {}, s = Ut(s.vars.inherit) && s.parent;
		a.immediateRender = Ut(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[i - 1];
	}
	return new Ni(t[0], a, t[i + 1]);
}, yr = function(e, t) {
	return e || e === 0 ? t(e) : t;
}, br = function(e, t, n) {
	return n < e ? e : n > t ? t : n;
}, xr = function(e, t) {
	return !Rt(e) || !(t = nn.exec(e)) ? "" : t[1];
}, Sr = function(e, t, n) {
	return yr(n, function(n) {
		return br(e, t, n);
	});
}, Cr = [].slice, wr = function(e, t) {
	return e && Ht(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Ht(e[0])) && !e.nodeType && e !== an;
}, Tr = function(e, t, n) {
	return n === void 0 && (n = []), e.forEach(function(e) {
		var r;
		return Rt(e) && !t || wr(e, 1) ? (r = n).push.apply(r, Er(e)) : n.push(e);
	}) || n;
}, Er = function(e, t, n) {
	return jt && !t && jt.selector ? jt.selector(e) : Rt(e) && !n && (on || !ai()) ? Cr.call((t || sn).querySelectorAll(e), 0) : qt(e) ? Tr(e, n) : wr(e) ? Cr.call(e, 0) : e ? [e] : [];
}, Dr = function(e) {
	return e = Er(e)[0] || pn("Invalid scope") || {}, function(t) {
		var n = e.current || e.nativeElement || e;
		return Er(t, n.querySelectorAll ? n : n === e ? pn("Invalid scope") || sn.createElement("div") : e);
	};
}, Or = function(e) {
	return e.sort(function() {
		return .5 - Math.random();
	});
}, kr = function(e) {
	if (zt(e)) return e;
	var t = Ht(e) ? e : { each: e }, n = fi(t.ease), r = t.from || 0, i = parseFloat(t.base) || 0, a = {}, o = r > 0 && r < 1, s = isNaN(r) || o, c = t.axis, l = r, u = r;
	return Rt(r) ? l = u = {
		center: .5,
		edges: .5,
		end: 1
	}[r] || 0 : !o && s && (l = r[0], u = r[1]), function(e, o, d) {
		var f = (d || t).length, p = a[f], m, h, g, _, v, y, b, x, S;
		if (!p) {
			if (S = t.grid === "auto" ? 0 : (t.grid || [1, Mt])[1], !S) {
				for (b = -Mt; b < (b = d[S++].getBoundingClientRect().left) && S < f;);
				S < f && S--;
			}
			for (p = a[f] = [], m = s ? Math.min(S, f) * l - .5 : r % S, h = S === Mt ? 0 : s ? f * u / S - .5 : r / S | 0, b = 0, x = Mt, y = 0; y < f; y++) g = y % S - m, _ = h - (y / S | 0), p[y] = v = c ? Math.abs(c === "y" ? _ : g) : Ft(g * g + _ * _), v > b && (b = v), v < x && (x = v);
			r === "random" && Or(p), p.max = b - x, p.min = x, p.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (S > f ? f - 1 : c ? c === "y" ? f / S : S : Math.max(S, f / S)) || 0) * (r === "edges" ? -1 : 1), p.b = f < 0 ? i - f : i, p.u = xr(t.amount || t.each) || 0, n = n && f < 0 ? di(n) : n;
		}
		return f = (p[e] - p.min) / p.max || 0, Nn(p.b + (n ? n(f) : f) * p.v) + p.u;
	};
}, Ar = function(e) {
	var t = 10 ** ((e + "").split(".")[1] || "").length;
	return function(n) {
		var r = Nn(Math.round(parseFloat(n) / e) * e * t);
		return (r - r % 1) / t + (Bt(n) ? 0 : xr(n));
	};
}, jr = function(e, t) {
	var n = qt(e), r, i;
	return !n && Ht(e) && (r = n = e.radius || Mt, e.values ? (e = Er(e.values), (i = !Bt(e[0])) && (r *= r)) : e = Ar(e.increment)), yr(t, n ? zt(e) ? function(t) {
		return i = e(t), Math.abs(i - t) <= r ? i : t;
	} : function(t) {
		for (var n = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), o = Mt, s = 0, c = e.length, l, u; c--;) i ? (l = e[c].x - n, u = e[c].y - a, l = l * l + u * u) : l = Math.abs(e[c] - n), l < o && (o = l, s = c);
		return s = !r || o <= r ? e[s] : t, i || s === t || Bt(t) ? s : s + xr(t);
	} : Ar(e));
}, Mr = function(e, t, n, r) {
	return yr(qt(e) ? !t : n === !0 ? !!(n = 0) : !r, function() {
		return qt(e) ? e[~~(Math.random() * e.length)] : (n ||= 1e-5) && (r = n < 1 ? 10 ** ((n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * r) / r;
	});
}, Nr = function() {
	var e = [...arguments];
	return function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}, Pr = function(e, t) {
	return function(n) {
		return e(parseFloat(n)) + (t || xr(n));
	};
}, Fr = function(e, t, n) {
	return Br(e, t, 0, 1, n);
}, Ir = function(e, t, n) {
	return yr(n, function(n) {
		return e[~~t(n)];
	});
}, Lr = function e(t, n, r) {
	var i = n - t;
	return qt(t) ? Ir(t, e(0, t.length), n) : yr(r, function(e) {
		return (i + (e - t) % i) % i + t;
	});
}, Rr = function e(t, n, r) {
	var i = n - t, a = i * 2;
	return qt(t) ? Ir(t, e(0, t.length - 1), n) : yr(r, function(e) {
		return e = (a + (e - t) % a) % a || 0, t + (e > i ? a - e : e);
	});
}, zr = function(e) {
	return e.replace(Jt, function(e) {
		var t = e.indexOf("[") + 1, n = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(Yt);
		return Mr(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
	});
}, Br = function(e, t, n, r, i) {
	var a = t - e, o = r - n;
	return yr(i, function(t) {
		return n + ((t - e) / a * o || 0);
	});
}, Vr = function e(t, n, r, i) {
	var a = isNaN(t + n) ? 0 : function(e) {
		return (1 - e) * t + e * n;
	};
	if (!a) {
		var o = Rt(t), s = {}, c, l, u, d, f;
		if (r === !0 && (i = 1) && (r = null), o) t = { p: t }, n = { p: n };
		else if (qt(t) && !qt(n)) {
			for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++) u.push(e(t[l - 1], t[l]));
			d--, a = function(e) {
				e *= d;
				var t = Math.min(f, ~~e);
				return u[t](e - t);
			}, r = n;
		} else i || (t = Un(qt(t) ? [] : {}, t));
		if (!u) {
			for (c in n) xi.call(s, t, c, "get", n[c]);
			a = function(e) {
				return Hi(e, s) || (o ? t.p : t);
			};
		}
	}
	return yr(r, a);
}, Hr = function(e, t, n) {
	var r = e.labels, i = Mt, a, o, s;
	for (a in r) o = r[a] - t, o < 0 == !!n && o && i > (o = Math.abs(o)) && (s = a, i = o);
	return s;
}, Ur = function(e, t, n) {
	var r = e.vars, i = r[t], a = jt, o = e._ctx, s, c, l;
	if (i) return s = r[t + "Params"], c = r.callbackScope || e, n && bn.length && In(), o && (jt = o), l = s ? i.apply(c, s) : i.call(c), jt = a, l;
}, Wr = function(e) {
	return Xn(e), e.scrollTrigger && e.scrollTrigger.kill(!!At), e.progress() < 1 && Ur(e, "onInterrupt"), e;
}, Gr, Kr = [], qr = function(e) {
	if (e) if (e = !e.name && e.default || e, Wt() || e.headless) {
		var t = e.name, n = zt(e), r = t && !n && e.init ? function() {
			this._props = [];
		} : e, i = {
			init: hn,
			render: Hi,
			add: xi,
			kill: Wi,
			modifier: Ui,
			rawVars: 0
		}, a = {
			targetTest: 0,
			get: 0,
			getSetter: Ri,
			aliases: {},
			register: 0
		};
		if (ai(), e !== r) {
			if (Cn[t]) return;
			Vn(r, Vn(Gn(e, i), a)), Un(r.prototype, Un(i, Gn(e, a))), Cn[r.prop = t] = r, e.targetTest && (En.push(r), yn[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
		}
		mn(t, r), e.register && e.register(sa, r, qi);
	} else Kr.push(e);
}, Jr = 255, Yr = {
	aqua: [
		0,
		Jr,
		Jr
	],
	lime: [
		0,
		Jr,
		0
	],
	silver: [
		192,
		192,
		192
	],
	black: [
		0,
		0,
		0
	],
	maroon: [
		128,
		0,
		0
	],
	teal: [
		0,
		128,
		128
	],
	blue: [
		0,
		0,
		Jr
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		Jr,
		Jr,
		Jr
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		Jr,
		Jr,
		0
	],
	orange: [
		Jr,
		165,
		0
	],
	gray: [
		128,
		128,
		128
	],
	purple: [
		128,
		0,
		128
	],
	green: [
		0,
		128,
		0
	],
	red: [
		Jr,
		0,
		0
	],
	pink: [
		Jr,
		192,
		203
	],
	cyan: [
		0,
		Jr,
		Jr
	],
	transparent: [
		Jr,
		Jr,
		Jr,
		0
	]
}, Xr = function(e, t, n) {
	return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Jr + .5 | 0;
}, Zr = function(e, t, n) {
	var r = e ? Bt(e) ? [
		e >> 16,
		e >> 8 & Jr,
		e & Jr
	] : 0 : Yr.black, i, a, o, s, c, l, u, d, f, p;
	if (!r) {
		if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Yr[e]) r = Yr[e];
		else if (e.charAt(0) === "#") {
			if (e.length < 6 && (i = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [
				r >> 16,
				r >> 8 & Jr,
				r & Jr,
				parseInt(e.substr(7), 16) / 255
			];
			e = parseInt(e.substr(1), 16), r = [
				e >> 16,
				e >> 8 & Jr,
				e & Jr
			];
		} else if (e.substr(0, 3) === "hsl") {
			if (r = p = e.match(Xt), !t) s = r[0] % 360 / 360, c = r[1] / 100, l = r[2] / 100, a = l <= .5 ? l * (c + 1) : l + c - l * c, i = l * 2 - a, r.length > 3 && (r[3] *= 1), r[0] = Xr(s + 1 / 3, i, a), r[1] = Xr(s, i, a), r[2] = Xr(s - 1 / 3, i, a);
			else if (~e.indexOf("=")) return r = e.match(Zt), n && r.length < 4 && (r[3] = 1), r;
		} else r = e.match(Xt) || Yr.transparent;
		r = r.map(Number);
	}
	return t && !p && (i = r[0] / Jr, a = r[1] / Jr, o = r[2] / Jr, u = Math.max(i, a, o), d = Math.min(i, a, o), l = (u + d) / 2, u === d ? s = c = 0 : (f = u - d, c = l > .5 ? f / (2 - u - d) : f / (u + d), s = u === i ? (a - o) / f + (a < o ? 6 : 0) : u === a ? (o - i) / f + 2 : (i - a) / f + 4, s *= 60), r[0] = ~~(s + .5), r[1] = ~~(c * 100 + .5), r[2] = ~~(l * 100 + .5)), n && r.length < 4 && (r[3] = 1), r;
}, Qr = function(e) {
	var t = [], n = [], r = -1;
	return e.split(ei).forEach(function(e) {
		var i = e.match(Qt) || [];
		t.push.apply(t, i), n.push(r += i.length + 1);
	}), t.c = n, t;
}, $r = function(e, t, n) {
	var r = "", i = (e + r).match(ei), a = t ? "hsla(" : "rgba(", o = 0, s, c, l, u;
	if (!i) return e;
	if (i = i.map(function(e) {
		return (e = Zr(e, t, 1)) && a + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
	}), n && (l = Qr(e), s = n.c, s.join(r) !== l.c.join(r))) for (c = e.replace(ei, "1").split(Qt), u = c.length - 1; o < u; o++) r += c[o] + (~s.indexOf(o) ? i.shift() || a + "0,0,0,0)" : (l.length ? l : i.length ? i : n).shift());
	if (!c) for (c = e.split(ei), u = c.length - 1; o < u; o++) r += c[o] + i[o];
	return r + c[u];
}, ei = function() {
	var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
	for (t in Yr) e += "|" + t + "\\b";
	return RegExp(e + ")", "gi");
}(), ti = /hsl[a]?\(/, ni = function(e) {
	var t = e.join(" "), n;
	if (ei.lastIndex = 0, ei.test(t)) return n = ti.test(t), e[1] = $r(e[1], n), e[0] = $r(e[0], n, Qr(e[1])), !0;
}, ri, ii = function() {
	var e = Date.now, t = 500, n = 33, r = e(), i = r, a = 1e3 / 240, o = a, s = [], c, l, u, d, f, p, m = function u(m) {
		var h = e() - i, g = m === !0, _, v, y, b;
		if ((h > t || h < 0) && (r += h - n), i += h, y = i - r, _ = y - o, (_ > 0 || g) && (b = ++d.frame, f = y - d.time * 1e3, d.time = y /= 1e3, o += _ + (_ >= a ? 4 : a - _), v = 1), g || (c = l(u)), v) for (p = 0; p < s.length; p++) s[p](y, f, b, m);
	};
	return d = {
		time: 0,
		frame: 0,
		tick: function() {
			m(!0);
		},
		deltaRatio: function(e) {
			return f / (1e3 / (e || 60));
		},
		wake: function() {
			un && (!on && Wt() && (an = on = window, sn = an.document || {}, cn.gsap = sa, (an.gsapVersions ||= []).push(sa.version), dn(ln || an.GreenSockGlobals || !an.gsap && an || {}), Kr.forEach(qr)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && d.sleep(), l = u || function(e) {
				return setTimeout(e, o - d.time * 1e3 + 1 | 0);
			}, ri = 1, m(2));
		},
		sleep: function() {
			(u ? cancelAnimationFrame : clearTimeout)(c), ri = 0, l = hn;
		},
		lagSmoothing: function(e, r) {
			t = e || Infinity, n = Math.min(r || 33, t);
		},
		fps: function(e) {
			a = 1e3 / (e || 240), o = d.time * 1e3 + a;
		},
		add: function(e, t, n) {
			var r = t ? function(t, n, i, a) {
				e(t, n, i, a), d.remove(r);
			} : e;
			return d.remove(e), s[n ? "unshift" : "push"](r), ai(), r;
		},
		remove: function(e, t) {
			~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
		},
		_listeners: s
	}, d;
}(), ai = function() {
	return !ri && ii.wake();
}, $ = {}, oi = /^[\d.\-M][\d.\-,\s]/, si = /["']/g, ci = function(e) {
	for (var t = {}, n = e.substr(1, e.length - 3).split(":"), r = n[0], i = 1, a = n.length, o, s, c; i < a; i++) s = n[i], o = i === a - 1 ? s.length : s.lastIndexOf(","), c = s.substr(0, o), t[r] = isNaN(c) ? c.replace(si, "").trim() : +c, r = s.substr(o + 1).trim();
	return t;
}, li = function(e) {
	var t = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", t);
	return e.substring(t, ~r && r < n ? e.indexOf(")", n + 1) : n);
}, ui = function(e) {
	var t = (e + "").split("("), n = $[t[0]];
	return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [ci(t[1])] : li(e).split(",").map(zn)) : $._CE && oi.test(e) ? $._CE("", e) : n;
}, di = function(e) {
	return function(t) {
		return 1 - e(1 - t);
	};
}, fi = function(e, t) {
	return e && (zt(e) ? e : $[e] || ui(e)) || t;
}, pi = function(e, t, n, r) {
	n === void 0 && (n = function(e) {
		return 1 - t(1 - e);
	}), r === void 0 && (r = function(e) {
		return e < .5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
	});
	var i = {
		easeIn: t,
		easeOut: n,
		easeInOut: r
	}, a;
	return jn(e, function(e) {
		for (var t in $[e] = cn[e] = i, $[a = e.toLowerCase()] = n, i) $[a + (t === "easeIn" ? ".in" : t === "easeOut" ? ".out" : ".inOut")] = $[e + "." + t] = i[t];
	}), i;
}, mi = function(e) {
	return function(t) {
		return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2;
	};
}, hi = function e(t, n, r) {
	var i = n >= 1 ? n : 1, a = (r || (t ? .3 : .45)) / (n < 1 ? n : 1), o = a / Nt * (Math.asin(1 / i) || 0), s = function(e) {
		return e === 1 ? 1 : i * 2 ** (-10 * e) * Lt((e - o) * a) + 1;
	}, c = t === "out" ? s : t === "in" ? function(e) {
		return 1 - s(1 - e);
	} : mi(s);
	return a = Nt / a, c.config = function(n, r) {
		return e(t, n, r);
	}, c;
}, gi = function e(t, n) {
	n === void 0 && (n = 1.70158);
	var r = function(e) {
		return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
	}, i = t === "out" ? r : t === "in" ? function(e) {
		return 1 - r(1 - e);
	} : mi(r);
	return i.config = function(n) {
		return e(t, n);
	}, i;
};
jn("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
	var n = t < 5 ? t + 1 : t;
	pi(e + ",Power" + (n - 1), t ? function(e) {
		return e ** +n;
	} : function(e) {
		return e;
	}, function(e) {
		return 1 - (1 - e) ** n;
	}, function(e) {
		return e < .5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
	});
}), $.Linear.easeNone = $.none = $.Linear.easeIn, pi("Elastic", hi("in"), hi("out"), hi()), (function(e, t) {
	var n = 1 / t, r = 2 * n, i = 2.5 * n, a = function(a) {
		return a < n ? e * a * a : a < r ? e * (a - 1.5 / t) ** 2 + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
	};
	pi("Bounce", function(e) {
		return 1 - a(1 - e);
	}, a);
})(7.5625, 2.75), pi("Expo", function(e) {
	return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
}), pi("Circ", function(e) {
	return -(Ft(1 - e * e) - 1);
}), pi("Sine", function(e) {
	return e === 1 ? 1 : -It(e * Pt) + 1;
}), pi("Back", gi("in"), gi("out"), gi()), $.SteppedEase = $.steps = cn.SteppedEase = { config: function(e, t) {
	e === void 0 && (e = 1);
	var n = 1 / e, r = e + +!t, i = +!!t, a = 1 - Z;
	return function(e) {
		return ((r * br(0, a, e) | 0) + i) * n;
	};
} }, Ot.ease = $["quad.out"], jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
	return Dn += e + "," + e + "Params,";
});
var _i = function(e, t) {
	this.id = Q++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : An, this.set = t ? t.getSetter : Ri;
}, vi = /* @__PURE__ */ function() {
	function e(e) {
		this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === Infinity ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, mr(this, +e.duration, 1, 1), this.data = e.data, jt && (this._ctx = jt, jt.data.push(this)), ri || ii.wake();
	}
	var t = e.prototype;
	return t.delay = function(e) {
		return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
	}, t.duration = function(e) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
	}, t.totalDuration = function(e) {
		return arguments.length ? (this._dirty = 0, mr(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
	}, t.totalTime = function(e, t) {
		if (ai(), !arguments.length) return this._tTime;
		var n = this._dp;
		if (n && n.smoothChildTiming && this._ts) {
			for (ar(this, e), !n._dp || n.parent || or(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
			!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && sr(this._dp, this, this._start - this._delay);
		}
		return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === Z || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Rn(this, e, t)), this;
	}, t.time = function(e, t) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + tr(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time;
	}, t.totalProgress = function(e, t) {
		return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	}, t.progress = function(e, t) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + tr(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0);
	}, t.iteration = function(e, t) {
		var n = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? nr(this._tTime, n) + 1 : 1;
	}, t.timeScale = function(e, t) {
		if (!arguments.length) return this._rts === -Z ? 0 : this._rts;
		if (this._rts === e) return this;
		var n = this.parent && this._ts ? rr(this.parent._time, this) : this._tTime;
		return this._rts = +e || 0, this._ts = this._ps || e === -Z ? 0 : this._rts, this.totalTime(br(-Math.abs(this._delay), this.totalDuration(), n), t !== !1), ir(this), Qn(this);
	}, t.paused = function(e) {
		return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ai(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Z && (this._tTime -= Z)))), this) : this._ps;
	}, t.startTime = function(e) {
		if (arguments.length) {
			this._start = Nn(e);
			var t = this.parent || this._dp;
			return t && (t._sort || !this.parent) && sr(t, this, this._start - this._delay), this;
		}
		return this._start;
	}, t.endTime = function(e) {
		return this._start + (Ut(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	}, t.rawTime = function(e) {
		var t = this.parent || this._dp;
		return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? rr(t.rawTime(e), this) : this._tTime : this._tTime;
	}, t.revert = function(e) {
		e === void 0 && (e = vn);
		var t = At;
		return At = e, Ln(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), At = t, this;
	}, t.globalTime = function(e) {
		for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
		return !this.parent && this._sat ? this._sat.globalTime(e) : n;
	}, t.repeat = function(e) {
		return arguments.length ? (this._repeat = e === Infinity ? -2 : e, hr(this)) : this._repeat === -2 ? Infinity : this._repeat;
	}, t.repeatDelay = function(e) {
		if (arguments.length) {
			var t = this._time;
			return this._rDelay = e, hr(this), t ? this.time(t) : this;
		}
		return this._rDelay;
	}, t.yoyo = function(e) {
		return arguments.length ? (this._yoyo = e, this) : this._yoyo;
	}, t.seek = function(e, t) {
		return this.totalTime(_r(this, e), Ut(t));
	}, t.restart = function(e, t) {
		return this.play().totalTime(e ? -this._delay : 0, Ut(t)), this._dur || (this._zTime = -Z), this;
	}, t.play = function(e, t) {
		return e != null && this.seek(e, t), this.reversed(!1).paused(!1);
	}, t.reverse = function(e, t) {
		return e != null && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
	}, t.pause = function(e, t) {
		return e != null && this.seek(e, t), this.paused(!0);
	}, t.resume = function() {
		return this.paused(!1);
	}, t.reversed = function(e) {
		return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -Z : 0)), this) : this._rts < 0;
	}, t.invalidate = function() {
		return this._initted = this._act = 0, this._zTime = -Z, this;
	}, t.isActive = function() {
		var e = this.parent || this._dp, t = this._start, n;
		return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= t && n < this.endTime(!0) - Z);
	}, t.eventCallback = function(e, t, n) {
		var r = this.vars;
		return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = t)) : delete r[e], this) : r[e];
	}, t.then = function(e) {
		var t = this, n = t._prom;
		return new Promise(function(r) {
			var i = zt(e) ? e : Bn, a = function() {
				var e = t.then;
				t.then = null, n && n(), zt(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), r(i), t.then = e;
			};
			t._initted && t.totalProgress() === 1 && t._ts >= 0 || !t._tTime && t._ts < 0 ? a() : t._prom = a;
		});
	}, t.kill = function() {
		Wr(this);
	}, e;
}();
Vn(vi.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -Z,
	_prom: 0,
	_ps: !1,
	_rts: 1
});
var yi = /* @__PURE__ */ function(e) {
	Et(t, e);
	function t(t, n) {
		var r;
		return t === void 0 && (t = {}), r = e.call(this, t) || this, r.labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = Ut(t.sortChildren), rn && sr(t.parent || rn, Tt(r), n), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && cr(Tt(r), t.scrollTrigger), r;
	}
	var n = t.prototype;
	return n.to = function(e, t, n) {
		return vr(0, arguments, this), this;
	}, n.from = function(e, t, n) {
		return vr(1, arguments, this), this;
	}, n.fromTo = function(e, t, n, r) {
		return vr(2, arguments, this), this;
	}, n.set = function(e, t, n) {
		return t.duration = 0, t.parent = this, Kn(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Ni(e, t, _r(this, n), 1), this;
	}, n.call = function(e, t, n) {
		return sr(this, Ni.delayedCall(0, e, t), n);
	}, n.staggerTo = function(e, t, n, r, i, a, o) {
		return n.duration = t, n.stagger = n.stagger || r, n.onComplete = a, n.onCompleteParams = o, n.parent = this, new Ni(e, n, _r(this, i)), this;
	}, n.staggerFrom = function(e, t, n, r, i, a, o) {
		return n.runBackwards = 1, Kn(n).immediateRender = Ut(n.immediateRender), this.staggerTo(e, t, n, r, i, a, o);
	}, n.staggerFromTo = function(e, t, n, r, i, a, o, s) {
		return r.startAt = n, Kn(r).immediateRender = Ut(r.immediateRender), this.staggerTo(e, t, r, i, a, o, s);
	}, n.render = function(e, t, n) {
		var r = this._time, i = this._dirty ? this.totalDuration() : this._tDur, a = this._dur, o = e <= 0 ? 0 : Nn(e), s = this._zTime < 0 != e < 0 && (this._initted || !a), c, l, u, d, f, p, m, h, g, _, v, y;
		if (this !== rn && o > i && e >= 0 && (o = i), o !== this._tTime || n || s) {
			if (r !== this._time && a && (o += this._time - r, e += this._time - r), c = o, g = this._start, h = this._ts, p = !h, s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
				if (v = this._yoyo, f = a + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(f * 100 + e, t, n);
				if (c = Nn(o % f), o === i ? (d = this._repeat, c = a) : (_ = Nn(o / f), d = ~~_, d && d === _ && (c = a, d--), c > a && (c = a)), _ = nr(this._tTime, f), !r && this._tTime && _ !== d && this._tTime - _ * f - this._dur <= 0 && (_ = d), v && d & 1 && (c = a - c, y = 1), d !== _ && !this._lock) {
					var b = v && _ & 1, x = b === (v && d & 1);
					if (d < _ && (b = !b), r = b ? 0 : o % a ? a : o, this._lock = 1, this.render(r || (y ? 0 : Nn(d * f)), t, !a)._lock = 0, this._tTime = o, !t && this.parent && Ur(this, "onRepeat"), this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1, _ = d), r && r !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (a = this._dur, i = this._tDur, x && (this._lock = 2, r = b ? a : -1e-4, this.render(r, !0), this.vars.repeatRefresh && !y && this.invalidate()), this._lock = 0, !this._ts && !p)) return this;
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2 && (m = pr(this, Nn(r), Nn(c)), m && (o -= c - (c = m._start))), this._tTime = o, this._time = c, this._act = !!h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, r = 0), !r && o && a && !t && !_ && (Ur(this, "onStart"), this._tTime !== o)) return this;
			if (c >= r && e >= 0) for (l = this._first; l;) {
				if (u = l._next, (l._act || c >= l._start) && l._ts && m !== l) {
					if (l.parent !== this) return this.render(e, t, n);
					if (l.render(l._ts > 0 ? (c - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (c - l._start) * l._ts, t, n), c !== this._time || !this._ts && !p) {
						m = 0, u && (o += this._zTime = -Z);
						break;
					}
				}
				l = u;
			}
			else {
				l = this._last;
				for (var S = e < 0 ? e : c; l;) {
					if (u = l._prev, (l._act || S <= l._end) && l._ts && m !== l) {
						if (l.parent !== this) return this.render(e, t, n);
						if (l.render(l._ts > 0 ? (S - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (S - l._start) * l._ts, t, n || At && Ln(l)), c !== this._time || !this._ts && !p) {
							m = 0, u && (o += this._zTime = S ? -Z : Z);
							break;
						}
					}
					l = u;
				}
			}
			if (m && !t && (this.pause(), m.render(c >= r ? 0 : -Z)._zTime = c >= r ? 1 : -1, this._ts)) return this._start = g, ir(this), this.render(e, t, n);
			this._onUpdate && !t && Ur(this, "onUpdate", !0), (o === i && this._tTime >= this.totalDuration() || !o && r) && (g === this._start || Math.abs(h) !== Math.abs(this._ts)) && (this._lock || ((e || !a) && (o === i && this._ts > 0 || !o && this._ts < 0) && Xn(this, 1), !t && !(e < 0 && !r) && (o || r || !i) && (Ur(this, o === i && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(o < i && this.timeScale() > 0) && this._prom())));
		}
		return this;
	}, n.add = function(e, t) {
		var n = this;
		if (Bt(t) || (t = _r(this, t, e)), !(e instanceof vi)) {
			if (qt(e)) return e.forEach(function(e) {
				return n.add(e, t);
			}), this;
			if (Rt(e)) return this.addLabel(e, t);
			if (zt(e)) e = Ni.delayedCall(0, e);
			else return this;
		}
		return this === e ? this : sr(this, e, t);
	}, n.getChildren = function(e, t, n, r) {
		e === void 0 && (e = !0), t === void 0 && (t = !0), n === void 0 && (n = !0), r === void 0 && (r = -Mt);
		for (var i = [], a = this._first; a;) a._start >= r && (a instanceof Ni ? t && i.push(a) : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))), a = a._next;
		return i;
	}, n.getById = function(e) {
		for (var t = this.getChildren(1, 1, 1), n = t.length; n--;) if (t[n].vars.id === e) return t[n];
	}, n.remove = function(e) {
		return Rt(e) ? this.removeLabel(e) : zt(e) ? this.killTweensOf(e) : (e.parent === this && Yn(this, e), e === this._recent && (this._recent = this._last), Zn(this));
	}, n.totalTime = function(t, n) {
		return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Nn(ii.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime;
	}, n.addLabel = function(e, t) {
		return this.labels[e] = _r(this, t), this;
	}, n.removeLabel = function(e) {
		return delete this.labels[e], this;
	}, n.addPause = function(e, t, n) {
		var r = Ni.delayedCall(0, t || hn, n);
		return r.data = "isPause", this._hasPause = 1, sr(this, r, _r(this, e));
	}, n.removePause = function(e) {
		var t = this._first;
		for (e = _r(this, e); t;) t._start === e && t.data === "isPause" && Xn(t), t = t._next;
	}, n.killTweensOf = function(e, t, n) {
		for (var r = this.getTweensOf(e, n), i = r.length; i--;) wi !== r[i] && r[i].kill(e, t);
		return this;
	}, n.getTweensOf = function(e, t) {
		for (var n = [], r = Er(e), i = this._first, a = Bt(t), o; i;) i instanceof Ni ? Fn(i._targets, r) && (a ? (!wi || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o), i = i._next;
		return n;
	}, n.tweenTo = function(e, t) {
		t ||= {};
		var n = this, r = _r(n, e), i = t, a = i.startAt, o = i.onStart, s = i.onStartParams, c = i.immediateRender, l, u = Ni.to(n, Vn({
			ease: t.ease || "none",
			lazy: !1,
			immediateRender: !1,
			time: r,
			overwrite: "auto",
			duration: t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || Z,
			onStart: function() {
				if (n.pause(), !l) {
					var e = t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale());
					u._dur !== e && mr(u, e, 0, 1).render(u._time, !0, !0), l = 1;
				}
				o && o.apply(u, s || []);
			}
		}, t));
		return c ? u.render(0) : u;
	}, n.tweenFromTo = function(e, t, n) {
		return this.tweenTo(t, Vn({ startAt: { time: _r(this, e) } }, n));
	}, n.recent = function() {
		return this._recent;
	}, n.nextLabel = function(e) {
		return e === void 0 && (e = this._time), Hr(this, _r(this, e));
	}, n.previousLabel = function(e) {
		return e === void 0 && (e = this._time), Hr(this, _r(this, e), 1);
	}, n.currentLabel = function(e) {
		return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + Z);
	}, n.shiftChildren = function(e, t, n) {
		n === void 0 && (n = 0);
		var r = this._first, i = this.labels, a;
		for (e = Nn(e); r;) r._start >= n && (r._start += e, r._end += e), r = r._next;
		if (t) for (a in i) i[a] >= n && (i[a] += e);
		return Zn(this);
	}, n.invalidate = function(t) {
		var n = this._first;
		for (this._lock = 0; n;) n.invalidate(t), n = n._next;
		return e.prototype.invalidate.call(this, t);
	}, n.clear = function(e) {
		e === void 0 && (e = !0);
		for (var t = this._first, n; t;) n = t._next, this.remove(t), t = n;
		return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Zn(this);
	}, n.totalDuration = function(e) {
		var t = 0, n = this, r = n._last, i = Mt, a, o, s;
		if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
		if (n._dirty) {
			for (s = n.parent; r;) a = r._prev, r._dirty && r.totalDuration(), o = r._start, o > i && n._sort && r._ts && !n._lock ? (n._lock = 1, sr(n, r, o - r._delay, 1)._lock = 0) : i = o, o < 0 && r._ts && (t -= o, (!s && !n._dp || s && s.smoothChildTiming) && (n._start += Nn(o / n._ts), n._time -= o, n._tTime -= o), n.shiftChildren(-o, !1, -Infinity), i = 0), r._end > t && r._ts && (t = r._end), r = a;
			mr(n, n === rn && n._time > t ? n._time : t, 1, 1), n._dirty = 0;
		}
		return n._tDur;
	}, t.updateRoot = function(e) {
		if (rn._ts && (Rn(rn, rr(e, rn)), Sn = ii.frame), ii.frame >= Tn) {
			Tn += Dt.autoSleep || 120;
			var t = rn._first;
			if ((!t || !t._ts) && Dt.autoSleep && ii._listeners.length < 2) {
				for (; t && !t._ts;) t = t._next;
				t || ii.sleep();
			}
		}
	}, t;
}(vi);
Vn(yi.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var bi = function(e, t, n, r, i, a, o) {
	var s = new qi(this._pt, e, t, 0, 1, Vi, null, i), c = 0, l = 0, u, d, f, p, m, h, g, _;
	for (s.b = n, s.e = r, n += "", r += "", (g = ~r.indexOf("random(")) && (r = zr(r)), a && (_ = [n, r], a(_, e, t), n = _[0], r = _[1]), d = n.match($t) || []; u = $t.exec(r);) p = u[0], m = r.substring(c, u.index), f ? f = (f + 1) % 5 : m.substr(-5) === "rgba(" && (f = 1), p !== d[l++] && (h = parseFloat(d[l - 1]) || 0, s._pt = {
		_next: s._pt,
		p: m || l === 1 ? m : ",",
		s: h,
		c: p.charAt(1) === "=" ? Pn(h, p) - h : parseFloat(p) - h,
		m: f && f < 4 ? Math.round : 0
	}, c = $t.lastIndex);
	return s.c = c < r.length ? r.substring(c, r.length) : "", s.fp = o, (en.test(r) || g) && (s.e = 0), this._pt = s, s;
}, xi = function(e, t, n, r, i, a, o, s, c, l) {
	zt(r) && (r = r(i || 0, e, a));
	var u = e[t], d = n === "get" ? zt(u) ? c ? e[t.indexOf("set") || !zt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u : n, f = zt(u) ? c ? Ii : Fi : Pi, p;
	if (Rt(r) && (~r.indexOf("random(") && (r = zr(r)), r.charAt(1) === "=" && (p = Pn(d, r) + (xr(d) || 0), (p || p === 0) && (r = p))), !l || d !== r || Ti) return !isNaN(d * r) && r !== "" ? (p = new qi(this._pt, e, t, +d || 0, r - (d || 0), typeof u == "boolean" ? Bi : zi, 0, f), c && (p.fp = c), o && p.modifier(o, this, e), this._pt = p) : (!u && !(t in e) && fn(t, r), bi.call(this, e, t, d, r, f, s || Dt.stringFilter, c));
}, Si = function(e, t, n, r, i) {
	if (zt(e) && (e = Ai(e, i, t, n, r)), !Ht(e) || e.style && e.nodeType || qt(e) || Kt(e)) return Rt(e) ? Ai(e, i, t, n, r) : e;
	var a = {}, o;
	for (o in e) a[o] = Ai(e[o], i, t, n, r);
	return a;
}, Ci = function(e, t, n, r, i, a) {
	var o, s, c, l;
	if (Cn[e] && (o = new Cn[e]()).init(i, o.rawVars ? t[e] : Si(t[e], r, i, a, n), n, r, a) !== !1 && (n._pt = s = new qi(n._pt, i, e, 0, 1, o.render, o, 0, o.priority), n !== Gr)) for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;) c[o._props[l]] = s;
	return o;
}, wi, Ti, Ei = function e(t, n, r) {
	var i = t.vars, a = i.ease, o = i.startAt, s = i.immediateRender, c = i.lazy, l = i.onUpdate, u = i.runBackwards, d = i.yoyoEase, f = i.keyframes, p = i.autoRevert, m = t._dur, h = t._startAt, g = t._targets, _ = t.parent, v = _ && _.data === "nested" ? _.vars.targets : g, y = t._overwrite === "auto" && !kt, b = t.timeline, x = i.easeReverse || d, S, C, w, T, E, D, O, k, A, j, M, N, P;
	if (b && (!f || !a) && (a = "none"), t._ease = fi(a, Ot.ease), t._rEase = x && (fi(x) || t._ease), t._from = !b && !!i.runBackwards, t._from && (t.ratio = 1), !b || f && !i.stagger) {
		if (k = g[0] ? kn(g[0]).harness : 0, N = k && i[k.prop], S = Gn(i, yn), h && (h._zTime < 0 && h.progress(1), n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? _n : gn), h._lazy = 0), o) {
			if (Xn(t._startAt = Ni.set(g, Vn({
				data: "isStart",
				overwrite: !1,
				parent: _,
				immediateRender: !0,
				lazy: !h && Ut(c),
				startAt: null,
				delay: 0,
				onUpdate: l && function() {
					return Ur(t, "onUpdate");
				},
				stagger: 0
			}, o))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (At || !s && !p) && t._startAt.revert(_n), s && m && n <= 0 && r <= 0) {
				n && (t._zTime = n);
				return;
			}
		} else if (u && m && !h) {
			if (n && (s = !1), w = Vn({
				overwrite: !1,
				data: "isFromStart",
				lazy: s && !h && Ut(c),
				immediateRender: s,
				stagger: 0,
				parent: _
			}, S), N && (w[k.prop] = N), Xn(t._startAt = Ni.set(g, w)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (At ? t._startAt.revert(_n) : t._startAt.render(-1, !0)), t._zTime = n, !s) e(t._startAt, Z, Z);
			else if (!n) return;
		}
		for (t._pt = t._ptCache = 0, c = m && Ut(c) || c && !m, C = 0; C < g.length; C++) {
			if (E = g[C], O = E._gsap || On(g)[C]._gsap, t._ptLookup[C] = j = {}, xn[O.id] && bn.length && In(), M = v === g ? C : v.indexOf(E), k && (A = new k()).init(E, N || S, t, M, v) !== !1 && (t._pt = T = new qi(t._pt, E, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(e) {
				j[e] = T;
			}), A.priority && (D = 1)), !k || N) for (w in S) Cn[w] && (A = Ci(w, S, t, M, E, v)) ? A.priority && (D = 1) : j[w] = T = xi.call(t, E, w, "get", S[w], M, v, 0, i.stringFilter);
			t._op && t._op[C] && t.kill(E, t._op[C]), y && t._pt && (wi = t, rn.killTweensOf(E, j, t.globalTime(n)), P = !t.parent, wi = 0), t._pt && c && (xn[O.id] = 1);
		}
		D && Ki(t), t._onInit && t._onInit(t);
	}
	t._onUpdate = l, t._initted = (!t._op || t._pt) && !P, f && n <= 0 && b.render(Mt, !0, !0);
}, Di = function(e, t, n, r, i, a, o, s) {
	var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, u, d, f;
	if (!c) for (c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length; f--;) {
		if (l = d[f][t], l && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
		if (!l) return Ti = 1, e.vars[t] = "+=0", Ei(e, o), Ti = 0, s ? pn(t + " not eligible for reset. Try splitting into individual properties") : 1;
		c.push(l);
	}
	for (f = c.length; f--;) u = c[f], l = u._pt || u, l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c, l.c = n - l.s, u.e &&= Mn(n) + xr(u.e), u.b &&= l.s + xr(u.b);
}, Oi = function(e, t) {
	var n = e[0] ? kn(e[0]).harness : 0, r = n && n.aliases, i, a, o, s;
	if (!r) return t;
	for (a in i = Un({}, t), r) if (a in i) for (s = r[a].split(","), o = s.length; o--;) i[s[o]] = i[a];
	return i;
}, ki = function(e, t, n, r) {
	var i = t.ease || r || "power1.inOut", a, o;
	if (qt(t)) o = n[e] || (n[e] = []), t.forEach(function(e, n) {
		return o.push({
			t: n / (t.length - 1) * 100,
			v: e,
			e: i
		});
	});
	else for (a in t) o = n[a] || (n[a] = []), a === "ease" || o.push({
		t: parseFloat(e),
		v: t[a],
		e: i
	});
}, Ai = function(e, t, n, r, i) {
	return zt(e) ? e.call(t, n, r, i) : Rt(e) && ~e.indexOf("random(") ? zr(e) : e;
}, ji = Dn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Mi = {};
jn(ji + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
	return Mi[e] = 1;
});
var Ni = /* @__PURE__ */ function(e) {
	Et(t, e);
	function t(t, n, r, i) {
		var a;
		typeof n == "number" && (r.duration = n, n = r, r = null), a = e.call(this, i ? n : Kn(n)) || this;
		var o = a.vars, s = o.duration, c = o.delay, l = o.immediateRender, u = o.stagger, d = o.overwrite, f = o.keyframes, p = o.defaults, m = o.scrollTrigger, h = n.parent || rn, g = (qt(t) || Kt(t) ? Bt(t[0]) : "length" in n) ? [t] : Er(t), _, v, y, b, x, S, C, w;
		if (a._targets = g.length ? On(g) : pn("GSAP target " + t + " not found. https://gsap.com", !Dt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, f || u || Gt(s) || Gt(c)) {
			n = a.vars;
			var T = n.easeReverse || n.yoyoEase;
			if (_ = a.timeline = new yi({
				data: "nested",
				defaults: p || {},
				targets: h && h.data === "nested" ? h.vars.targets : g
			}), _.kill(), _.parent = _._dp = Tt(a), _._start = 0, u || Gt(s) || Gt(c)) {
				if (b = g.length, C = u && kr(u), Ht(u)) for (x in u) ~ji.indexOf(x) && (w ||= {}, w[x] = u[x]);
				for (v = 0; v < b; v++) y = Gn(n, Mi), y.stagger = 0, T && (y.easeReverse = T), w && Un(y, w), S = g[v], y.duration = +Ai(s, Tt(a), v, S, g), y.delay = (+Ai(c, Tt(a), v, S, g) || 0) - a._delay, !u && b === 1 && y.delay && (a._delay = c = y.delay, a._start += c, y.delay = 0), _.to(S, y, C ? C(v, S, g) : 0), _._ease = $.none;
				_.duration() ? s = c = 0 : a.timeline = 0;
			} else if (f) {
				Kn(Vn(_.vars.defaults, { ease: "none" })), _._ease = fi(f.ease || n.ease || "none");
				var E = 0, D, O, k;
				if (qt(f)) f.forEach(function(e) {
					return _.to(g, e, ">");
				}), _.duration();
				else {
					for (x in y = {}, f) x === "ease" || x === "easeEach" || ki(x, f[x], y, f.easeEach);
					for (x in y) for (D = y[x].sort(function(e, t) {
						return e.t - t.t;
					}), E = 0, v = 0; v < D.length; v++) O = D[v], k = {
						ease: O.e,
						duration: (O.t - (v ? D[v - 1].t : 0)) / 100 * s
					}, k[x] = O.v, _.to(g, k, E), E += k.duration;
					_.duration() < s && _.to({}, { duration: s - _.duration() });
				}
			}
			s || a.duration(s = _.duration());
		} else a.timeline = 0;
		return d === !0 && !kt && (wi = Tt(a), rn.killTweensOf(g), wi = 0), sr(h, Tt(a), r), n.reversed && a.reverse(), n.paused && a.paused(!0), (l || !s && !f && a._start === Nn(h._time) && Ut(l) && er(Tt(a)) && h.data !== "nested") && (a._tTime = -Z, a.render(Math.max(0, -c) || 0)), m && cr(Tt(a), m), a;
	}
	var n = t.prototype;
	return n.render = function(e, t, n) {
		var r = this._time, i = this._tDur, a = this._dur, o = e < 0, s = e > i - Z && !o ? i : e < Z ? 0 : e, c, l, u, d, f, p, m, h;
		if (!a) fr(this, e, t, n);
		else if (s !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o || this._lazy) {
			if (c = s, h = this.timeline, this._repeat) {
				if (d = a + this._rDelay, this._repeat < -1 && o) return this.totalTime(d * 100 + e, t, n);
				if (c = Nn(s % d), s === i ? (u = this._repeat, c = a) : (f = Nn(s / d), u = ~~f, u && u === f ? (c = a, u--) : c > a && (c = a)), p = this._yoyo && u & 1, p && (c = a - c), f = nr(this._tTime, d), c === r && !n && this._initted && u === f) return this._tTime = s, this;
				u !== f && this.vars.repeatRefresh && !p && !this._lock && c !== d && this._initted && (this._lock = n = 1, this.render(Nn(d * u), !0).invalidate()._lock = 0);
			}
			if (!this._initted) {
				if (lr(this, o ? e : c, n, t, s)) return this._tTime = 0, this;
				if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f)) return this;
				if (a !== this._dur) return this.render(e, t, n);
			}
			if (this._rEase) {
				var g = c < r;
				if (g !== this._inv) {
					var _ = g ? r : a - r;
					this._inv = g, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = r, this._invRecip = _ ? (g ? -1 : 1) / _ : 0, this._invScale = g ? -this.ratio : 1 - this.ratio, this._invEase = g ? this._rEase : this._ease;
				}
				this.ratio = m = this._invRatio + this._invScale * this._invEase((c - this._invTime) * this._invRecip);
			} else this.ratio = m = this._ease(c / a);
			if (this._from && (this.ratio = m = 1 - m), this._tTime = s, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), !r && s && !t && !f && (Ur(this, "onStart"), this._tTime !== s)) return this;
			for (l = this._pt; l;) l.r(m, l.d), l = l._next;
			h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (o && $n(this, e, t, n), Ur(this, "onUpdate")), this._repeat && u !== f && this.vars.onRepeat && !t && this.parent && Ur(this, "onRepeat"), (s === this._tDur || !s) && this._tTime === s && (o && !this._onUpdate && $n(this, e, !0, !0), (e || !a) && (s === this._tDur && this._ts > 0 || !s && this._ts < 0) && Xn(this, 1), !t && !(o && !r) && (s || r || p) && (Ur(this, s === i ? "onComplete" : "onReverseComplete", !0), this._prom && !(s < i && this.timeScale() > 0) && this._prom()));
		}
		return this;
	}, n.targets = function() {
		return this._targets;
	}, n.invalidate = function(t) {
		return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t);
	}, n.resetTo = function(e, t, n, r, i) {
		ri || ii.wake(), this._ts || this.play();
		var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o;
		return this._initted || Ei(this, a), o = this._ease(a / this._dur), Di(this, e, t, n, r, o, a, i) ? this.resetTo(e, t, n, r, 1) : (ar(this, 0), this.parent || Jn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
	}, n.kill = function(e, t) {
		if (t === void 0 && (t = "all"), !e && (!t || t === "all")) return this._lazy = this._pt = 0, this.parent ? Wr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!At), this;
		if (this.timeline) {
			var n = this.timeline.totalDuration();
			return this.timeline.killTweensOf(e, t, wi && wi.vars.overwrite !== !0)._first || Wr(this), this.parent && n !== this.timeline.totalDuration() && mr(this, this._dur * this.timeline._tDur / n, 0, 1), this;
		}
		var r = this._targets, i = e ? Er(e) : r, a = this._ptLookup, o = this._pt, s, c, l, u, d, f, p;
		if ((!t || t === "all") && qn(r, i)) return t === "all" && (this._pt = 0), Wr(this);
		for (s = this._op = this._op || [], t !== "all" && (Rt(t) && (d = {}, jn(t, function(e) {
			return d[e] = 1;
		}), t = d), t = Oi(r, t)), p = r.length; p--;) if (~i.indexOf(r[p])) for (d in c = a[p], t === "all" ? (s[p] = t, u = c, l = {}) : (l = s[p] = s[p] || {}, u = t), u) f = c && c[d], f && ((!("kill" in f.d) || f.d.kill(d) === !0) && Yn(this, f, "_pt"), delete c[d]), l !== "all" && (l[d] = 1);
		return this._initted && !this._pt && o && Wr(this), this;
	}, t.to = function(e, n) {
		return new t(e, n, arguments[2]);
	}, t.from = function(e, t) {
		return vr(1, arguments);
	}, t.delayedCall = function(e, n, r, i) {
		return new t(n, 0, {
			immediateRender: !1,
			lazy: !1,
			overwrite: !1,
			delay: e,
			onComplete: n,
			onReverseComplete: n,
			onCompleteParams: r,
			onReverseCompleteParams: r,
			callbackScope: i
		});
	}, t.fromTo = function(e, t, n) {
		return vr(2, arguments);
	}, t.set = function(e, n) {
		return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n);
	}, t.killTweensOf = function(e, t, n) {
		return rn.killTweensOf(e, t, n);
	}, t;
}(vi);
Vn(Ni.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
}), jn("staggerTo,staggerFrom,staggerFromTo", function(e) {
	Ni[e] = function() {
		var t = new yi(), n = Cr.call(arguments, 0);
		return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
	};
});
var Pi = function(e, t, n) {
	return e[t] = n;
}, Fi = function(e, t, n) {
	return e[t](n);
}, Ii = function(e, t, n, r) {
	return e[t](r.fp, n);
}, Li = function(e, t, n) {
	return e.setAttribute(t, n);
}, Ri = function(e, t) {
	return zt(e[t]) ? Fi : Vt(e[t]) && e.setAttribute ? Li : Pi;
}, zi = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Bi = function(e, t) {
	return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Vi = function(e, t) {
	var n = t._pt, r = "";
	if (!e && t.b) r = t.b;
	else if (e === 1 && t.e) r = t.e;
	else {
		for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r, n = n._next;
		r += t.c;
	}
	t.set(t.t, t.p, r, t);
}, Hi = function(e, t) {
	for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
}, Ui = function(e, t, n, r) {
	for (var i = this._pt, a; i;) a = i._next, i.p === r && i.modifier(e, t, n), i = a;
}, Wi = function(e) {
	for (var t = this._pt, n, r; t;) r = t._next, t.p === e && !t.op || t.op === e ? Yn(this, t, "_pt") : t.dep || (n = 1), t = r;
	return !n;
}, Gi = function(e, t, n, r) {
	r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
}, Ki = function(e) {
	for (var t = e._pt, n, r, i, a; t;) {
		for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
		(t._prev = r ? r._prev : a) ? t._prev._next = t : i = t, (t._next = r) ? r._prev = t : a = t, t = n;
	}
	e._pt = i;
}, qi = /* @__PURE__ */ function() {
	function e(e, t, n, r, i, a, o, s, c) {
		this.t = t, this.s = r, this.c = i, this.p = n, this.r = a || zi, this.d = o || this, this.set = s || Pi, this.pr = c || 0, this._next = e, e && (e._prev = this);
	}
	var t = e.prototype;
	return t.modifier = function(e, t, n) {
		this.mSet = this.mSet || this.set, this.set = Gi, this.m = e, this.mt = n, this.tween = t;
	}, e;
}();
jn(Dn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(e) {
	return yn[e] = 1;
}), cn.TweenMax = cn.TweenLite = Ni, cn.TimelineLite = cn.TimelineMax = yi, rn = new yi({
	sortChildren: !1,
	defaults: Ot,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0
}), Dt.stringFilter = ni;
var Ji = [], Yi = {}, Xi = [], Zi = 0, Qi = 0, $i = function(e) {
	return (Yi[e] || Xi).map(function(e) {
		return e();
	});
}, ea = function() {
	var e = Date.now(), t = [];
	e - Zi > 2 && ($i("matchMediaInit"), Ji.forEach(function(e) {
		var n = e.queries, r = e.conditions, i, a, o, s;
		for (a in n) i = an.matchMedia(n[a]).matches, i && (o = 1), i !== r[a] && (r[a] = i, s = 1);
		s && (e.revert(), o && t.push(e));
	}), $i("matchMediaRevert"), t.forEach(function(e) {
		return e.onMatch(e, function(t) {
			return e.add(null, t);
		});
	}), Zi = e, $i("matchMedia"));
}, ta = /* @__PURE__ */ function() {
	function e(e, t) {
		this.selector = t && Dr(t), this.data = [], this._r = [], this.isReverted = !1, this.id = Qi++, e && this.add(e);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		zt(e) && (n = t, t = e, e = zt);
		var r = this, i = function() {
			var e = jt, i = r.selector, a;
			return e && e !== r && e.data.push(r), n && (r.selector = Dr(n)), jt = r, a = t.apply(r, arguments), zt(a) && r._r.push(a), jt = e, r.selector = i, r.isReverted = !1, a;
		};
		return r.last = i, e === zt ? i(r, function(e) {
			return r.add(null, e);
		}) : e ? r[e] = i : i;
	}, t.ignore = function(e) {
		var t = jt;
		jt = null, e(this), jt = t;
	}, t.getTweens = function() {
		var t = [];
		return this.data.forEach(function(n) {
			return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof Ni && !(n.parent && n.parent.data === "nested") && t.push(n);
		}), t;
	}, t.clear = function() {
		this._r.length = this.data.length = 0;
	}, t.kill = function(e, t) {
		var n = this;
		if (e ? (function() {
			for (var t = n.getTweens(), r = n.data.length, i; r--;) i = n.data[r], i.data === "isFlip" && (i.revert(), i.getChildren(!0, !0, !1).forEach(function(e) {
				return t.splice(t.indexOf(e), 1);
			}));
			for (t.map(function(e) {
				return {
					g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -Infinity,
					t: e
				};
			}).sort(function(e, t) {
				return t.g - e.g || -Infinity;
			}).forEach(function(t) {
				return t.t.revert(e);
			}), r = n.data.length; r--;) i = n.data[r], i instanceof yi ? i.data !== "nested" && (i.scrollTrigger && i.scrollTrigger.revert(), i.kill()) : !(i instanceof Ni) && i.revert && i.revert(e);
			n._r.forEach(function(t) {
				return t(e, n);
			}), n.isReverted = !0;
		})() : this.data.forEach(function(e) {
			return e.kill && e.kill();
		}), this.clear(), t) for (var r = Ji.length; r--;) Ji[r].id === this.id && Ji.splice(r, 1);
	}, t.revert = function(e) {
		this.kill(e || {});
	}, e;
}(), na = /* @__PURE__ */ function() {
	function e(e) {
		this.contexts = [], this.scope = e, jt && jt.data.push(this);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		Ht(e) || (e = { matches: e });
		var r = new ta(0, n || this.scope), i = r.conditions = {}, a, o, s;
		for (o in jt && !r.selector && (r.selector = jt.selector), this.contexts.push(r), t = r.add("onMatch", t), r.queries = e, e) o === "all" ? s = 1 : (a = an.matchMedia(e[o]), a && (Ji.indexOf(r) < 0 && Ji.push(r), (i[o] = a.matches) && (s = 1), a.addListener ? a.addListener(ea) : a.addEventListener("change", ea)));
		return s && t(r, function(e) {
			return r.add(null, e);
		}), this;
	}, t.revert = function(e) {
		this.kill(e || {});
	}, t.kill = function(e) {
		this.contexts.forEach(function(t) {
			return t.kill(e, !0);
		});
	}, e;
}(), ra = {
	registerPlugin: function() {
		[...arguments].forEach(function(e) {
			return qr(e);
		});
	},
	timeline: function(e) {
		return new yi(e);
	},
	getTweensOf: function(e, t) {
		return rn.getTweensOf(e, t);
	},
	getProperty: function(e, t, n, r) {
		Rt(e) && (e = Er(e)[0]);
		var i = kn(e || {}).get, a = n ? Bn : zn;
		return n === "native" && (n = ""), e && (t ? a((Cn[t] && Cn[t].get || i)(e, t, n, r)) : function(t, n, r) {
			return a((Cn[t] && Cn[t].get || i)(e, t, n, r));
		});
	},
	quickSetter: function(e, t, n) {
		if (e = Er(e), e.length > 1) {
			var r = e.map(function(e) {
				return sa.quickSetter(e, t, n);
			}), i = r.length;
			return function(e) {
				for (var t = i; t--;) r[t](e);
			};
		}
		e = e[0] || {};
		var a = Cn[t], o = kn(e), s = o.harness && (o.harness.aliases || {})[t] || t, c = a ? function(t) {
			var r = new a();
			Gr._pt = 0, r.init(e, n ? t + n : t, Gr, 0, [e]), r.render(1, r), Gr._pt && Hi(1, Gr);
		} : o.set(e, s);
		return a ? c : function(t) {
			return c(e, s, n ? t + n : t, o, 1);
		};
	},
	quickTo: function(e, t, n) {
		var r, i = sa.to(e, Vn((r = {}, r[t] = "+=0.1", r.paused = !0, r.stagger = 0, r), n || {})), a = function(e, n, r) {
			return i.resetTo(t, e, n, r);
		};
		return a.tween = i, a;
	},
	isTweening: function(e) {
		return rn.getTweensOf(e, !0).length > 0;
	},
	defaults: function(e) {
		return e && e.ease && (e.ease = fi(e.ease, Ot.ease)), Wn(Ot, e || {});
	},
	config: function(e) {
		return Wn(Dt, e || {});
	},
	registerEffect: function(e) {
		var t = e.name, n = e.effect, r = e.plugins, i = e.defaults, a = e.extendTimeline;
		(r || "").split(",").forEach(function(e) {
			return e && !Cn[e] && !cn[e] && pn(t + " effect requires " + e + " plugin.");
		}), wn[t] = function(e, t, r) {
			return n(Er(e), Vn(t || {}, i), r);
		}, a && (yi.prototype[t] = function(e, n, r) {
			return this.add(wn[t](e, Ht(n) ? n : (r = n) && {}, this), r);
		});
	},
	registerEase: function(e, t) {
		$[e] = fi(t);
	},
	parseEase: function(e, t) {
		return arguments.length ? fi(e, t) : $;
	},
	getById: function(e) {
		return rn.getById(e);
	},
	exportRoot: function(e, t) {
		e === void 0 && (e = {});
		var n = new yi(e), r, i;
		for (n.smoothChildTiming = Ut(e.smoothChildTiming), rn.remove(n), n._dp = 0, n._time = n._tTime = rn._time, r = rn._first; r;) i = r._next, (t || !(!r._dur && r instanceof Ni && r.vars.onComplete === r._targets[0])) && sr(n, r, r._start - r._delay), r = i;
		return sr(rn, n, 0), n;
	},
	context: function(e, t) {
		return e ? new ta(e, t) : jt;
	},
	matchMedia: function(e) {
		return new na(e);
	},
	matchMediaRefresh: function() {
		return Ji.forEach(function(e) {
			var t = e.conditions, n, r;
			for (r in t) t[r] && (t[r] = !1, n = 1);
			n && e.revert();
		}) || ea();
	},
	addEventListener: function(e, t) {
		var n = Yi[e] || (Yi[e] = []);
		~n.indexOf(t) || n.push(t);
	},
	removeEventListener: function(e, t) {
		var n = Yi[e], r = n && n.indexOf(t);
		r >= 0 && n.splice(r, 1);
	},
	utils: {
		wrap: Lr,
		wrapYoyo: Rr,
		distribute: kr,
		random: Mr,
		snap: jr,
		normalize: Fr,
		getUnit: xr,
		clamp: Sr,
		splitColor: Zr,
		toArray: Er,
		selector: Dr,
		mapRange: Br,
		pipe: Nr,
		unitize: Pr,
		interpolate: Vr,
		shuffle: Or
	},
	install: dn,
	effects: wn,
	ticker: ii,
	updateRoot: yi.updateRoot,
	plugins: Cn,
	globalTimeline: rn,
	core: {
		PropTween: qi,
		globals: mn,
		Tween: Ni,
		Timeline: yi,
		Animation: vi,
		getCache: kn,
		_removeLinkedListItem: Yn,
		reverting: function() {
			return At;
		},
		context: function(e) {
			return e && jt && (jt.data.push(e), e._ctx = jt), jt;
		},
		suppressOverwrites: function(e) {
			return kt = e;
		}
	}
};
jn("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
	return ra[e] = Ni[e];
}), ii.add(yi.updateRoot), Gr = ra.to({}, { duration: 0 });
var ia = function(e, t) {
	for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
	return n;
}, aa = function(e, t) {
	var n = e._targets, r, i, a;
	for (r in t) for (i = n.length; i--;) a = e._ptLookup[i][r], (a &&= a.d) && (a._pt && (a = ia(a, r)), a && a.modifier && a.modifier(t[r], e, n[i], r));
}, oa = function(e, t) {
	return {
		name: e,
		headless: 1,
		rawVars: 1,
		init: function(e, n, r) {
			r._onInit = function(e) {
				var r, i;
				if (Rt(n) && (r = {}, jn(n, function(e) {
					return r[e] = 1;
				}), n = r), t) {
					for (i in r = {}, n) r[i] = t(n[i]);
					n = r;
				}
				aa(e, n);
			};
		}
	};
}, sa = ra.registerPlugin({
	name: "attr",
	init: function(e, t, n, r, i) {
		var a, o, s;
		for (a in this.tween = n, t) s = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (s || 0) + "", t[a], r, i, 0, 0, a), o.op = a, o.b = s, this._props.push(a);
	},
	render: function(e, t) {
		for (var n = t._pt; n;) At ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
	}
}, {
	name: "endArray",
	headless: 1,
	init: function(e, t) {
		for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
	}
}, oa("roundProps", Ar), oa("modifiers"), oa("snap", jr)) || ra;
Ni.version = yi.version = sa.version = "3.15.0", un = 1, Wt() && ai(), $.Power0, $.Power1, $.Power2, $.Power3, $.Power4, $.Linear, $.Quad, $.Cubic, $.Quart, $.Quint, $.Strong, $.Elastic, $.Back, $.SteppedEase, $.Bounce, $.Sine, $.Expo, $.Circ;
//#endregion
//#region ../../../游戏版本/shekou-game-versions/shekou-spatial-play/engine-source/node_modules/gsap/CSSPlugin.js
var ca, la, ua, da, fa, pa, ma, ha = function() {
	return typeof window < "u";
}, ga = {}, _a = 180 / Math.PI, va = Math.PI / 180, ya = Math.atan2, ba = 1e8, xa = /([A-Z])/g, Sa = /(left|right|width|margin|padding|x)/i, Ca = /[\s,\(]\S/, wa = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
}, Ta = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Ea = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Da = function(e, t) {
	return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Oa = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, ka = function(e, t) {
	var n = t.s + t.c * e;
	t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t);
}, Aa = function(e, t) {
	return t.set(t.t, t.p, e ? t.e : t.b, t);
}, ja = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
}, Ma = function(e, t, n) {
	return e.style[t] = n;
}, Na = function(e, t, n) {
	return e.style.setProperty(t, n);
}, Pa = function(e, t, n) {
	return e._gsap[t] = n;
}, Fa = function(e, t, n) {
	return e._gsap.scaleX = e._gsap.scaleY = n;
}, Ia = function(e, t, n, r, i) {
	var a = e._gsap;
	a.scaleX = a.scaleY = n, a.renderTransform(i, a);
}, La = function(e, t, n, r, i) {
	var a = e._gsap;
	a[t] = n, a.renderTransform(i, a);
}, Ra = "transform", za = Ra + "Origin", Ba = function e(t, n) {
	var r = this, i = this.target, a = i.style, o = i._gsap;
	if (t in ga && a) {
		if (this.tfm = this.tfm || {}, t !== "transform") t = wa[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(e) {
			return r.tfm[e] = ao(i, e);
		}) : this.tfm[t] = o.x ? o[t] : ao(i, t), t === za && (this.tfm.zOrigin = o.zOrigin);
		else return wa.transform.split(",").forEach(function(t) {
			return e.call(r, t, n);
		});
		if (this.props.indexOf(Ra) >= 0) return;
		o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(za, n, "")), t = Ra;
	}
	(a || n) && this.props.push(t, n, a[t]);
}, Va = function(e) {
	e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Ha = function() {
	var e = this.props, t = this.target, n = t.style, r = t._gsap, i, a;
	for (i = 0; i < e.length; i += 3) e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? n[e[i]] = e[i + 2] : n.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(xa, "-$1").toLowerCase());
	if (this.tfm) {
		for (a in this.tfm) r[a] = this.tfm[a];
		r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = ma(), (!i || !i.isStart) && !n[Ra] && (Va(n), r.zOrigin && n[za] && (n[za] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
	}
}, Ua = function(e, t) {
	var n = {
		target: e,
		props: [],
		revert: Ha,
		save: Ba
	};
	return e._gsap || sa.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
		return n.save(e);
	}), n;
}, Wa, Ga = function(e, t) {
	var n = la.createElementNS ? la.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : la.createElement(e);
	return n && n.style ? n : la.createElement(e);
}, Ka = function e(t, n, r) {
	var i = getComputedStyle(t);
	return i[n] || i.getPropertyValue(n.replace(xa, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, Ja(n) || n, 1) || "";
}, qa = "O,Moz,ms,Ms,Webkit".split(","), Ja = function(e, t, n) {
	var r = (t || fa).style, i = 5;
	if (e in r && !n) return e;
	for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(qa[i] + e in r););
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? qa[i] : "") + e;
}, Ya = function() {
	ha() && window.document && (ca = window, la = ca.document, ua = la.documentElement, fa = Ga("div") || { style: {} }, Ga("div"), Ra = Ja(Ra), za = Ra + "Origin", fa.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Wa = !!Ja("perspective"), ma = sa.core.reverting, da = 1);
}, Xa = function(e) {
	var t = e.ownerSVGElement, n = Ga("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = e.cloneNode(!0), i;
	r.style.display = "block", n.appendChild(r), ua.appendChild(n);
	try {
		i = r.getBBox();
	} catch {}
	return n.removeChild(r), ua.removeChild(n), i;
}, Za = function(e, t) {
	for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
}, Qa = function(e) {
	var t, n;
	try {
		t = e.getBBox();
	} catch {
		t = Xa(e), n = 1;
	}
	return t && (t.width || t.height) || n || (t = Xa(e)), t && !t.width && !t.x && !t.y ? {
		x: +Za(e, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +Za(e, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : t;
}, $a = function(e) {
	return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Qa(e));
}, eo = function(e, t) {
	if (t) {
		var n = e.style, r;
		t in ga && t !== za && (t = Ra), n.removeProperty ? (r = t.substr(0, 2), (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(r === "--" ? t : t.replace(xa, "-$1").toLowerCase())) : n.removeAttribute(t);
	}
}, to = function(e, t, n, r, i, a) {
	var o = new qi(e._pt, t, n, 0, 1, a ? ja : Aa);
	return e._pt = o, o.b = r, o.e = i, e._props.push(n), o;
}, no = {
	deg: 1,
	rad: 1,
	turn: 1
}, ro = {
	grid: 1,
	flex: 1
}, io = function e(t, n, r, i) {
	var a = parseFloat(r) || 0, o = (r + "").trim().substr((a + "").length) || "px", s = fa.style, c = Sa.test(n), l = t.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (c ? "Width" : "Height"), d = 100, f = i === "px", p = i === "%", m, h, g, _;
	if (i === o || !a || no[i] || no[o]) return a;
	if (o !== "px" && !f && (a = e(t, n, r, "px")), _ = t.getCTM && $a(t), (p || o === "%") && (ga[n] || ~n.indexOf("adius"))) return m = _ ? t.getBBox()[c ? "width" : "height"] : t[u], Mn(p ? a / m * d : a / 100 * m);
	if (s[c ? "width" : "height"] = d + (f ? o : i), h = i !== "rem" && ~n.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, _ && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === la || !h.appendChild) && (h = la.body), g = h._gsap, g && p && g.width && c && g.time === ii.time && !g.uncache) return Mn(a / g.width * d);
	if (p && (n === "height" || n === "width")) {
		var v = t.style[n];
		t.style[n] = d + i, m = t[u], v ? t.style[n] = v : eo(t, n);
	} else (p || o === "%") && !ro[Ka(h, "display")] && (s.position = Ka(t, "position")), h === t && (s.position = "static"), h.appendChild(fa), m = fa[u], h.removeChild(fa), s.position = "absolute";
	return c && p && (g = kn(h), g.time = ii.time, g.width = h[u]), Mn(f ? m * a / d : m && a ? d / m * a : 0);
}, ao = function(e, t, n, r) {
	var i;
	return da || Ya(), t in wa && t !== "transform" && (t = wa[t], ~t.indexOf(",") && (t = t.split(",")[0])), ga[t] && t !== "transform" ? (i = vo(e, r), i = t === "transformOrigin" ? i.svg ? i.origin : yo(Ka(e, za)) + " " + i.zOrigin + "px" : i[t]) : (i = e.style[t], (!i || i === "auto" || r || ~(i + "").indexOf("calc(")) && (i = uo[t] && uo[t](e, t, n) || Ka(e, t) || An(e, t) || +(t === "opacity"))), n && !~(i + "").trim().indexOf(" ") ? io(e, t, i, n) + n : i;
}, oo = function(e, t, n, r) {
	if (!n || n === "none") {
		var i = Ja(t, e, 1), a = i && Ka(e, i, 1);
		a && a !== n ? (t = i, n = a) : t === "borderColor" && (n = Ka(e, "borderTopColor"));
	}
	var o = new qi(this._pt, e.style, t, 0, 1, Vi), s = 0, c = 0, l, u, d, f, p, m, h, g, _, v, y, b;
	if (o.b = n, o.e = r, n += "", r += "", r.substring(0, 6) === "var(--" && (r = Ka(e, r.substring(4, r.indexOf(")")))), r === "auto" && (m = e.style[t], e.style[t] = r, r = Ka(e, t) || r, m ? e.style[t] = m : eo(e, t)), l = [n, r], ni(l), n = l[0], r = l[1], d = n.match(Qt) || [], b = r.match(Qt) || [], b.length) {
		for (; u = Qt.exec(r);) h = u[0], _ = r.substring(s, u.index), p ? p = (p + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (p = 1), h !== (m = d[c++] || "") && (f = parseFloat(m) || 0, y = m.substr((f + "").length), h.charAt(1) === "=" && (h = Pn(f, h) + y), g = parseFloat(h), v = h.substr((g + "").length), s = Qt.lastIndex - v.length, v || (v = v || Dt.units[t] || y, s === r.length && (r += v, o.e += v)), y !== v && (f = io(e, t, m, v) || 0), o._pt = {
			_next: o._pt,
			p: _ || c === 1 ? _ : ",",
			s: f,
			c: g - f,
			m: p && p < 4 || t === "zIndex" ? Math.round : 0
		});
		o.c = s < r.length ? r.substring(s, r.length) : "";
	} else o.r = t === "display" && r === "none" ? ja : Aa;
	return en.test(r) && (o.e = 0), this._pt = o, o;
}, so = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
}, co = function(e) {
	var t = e.split(" "), n = t[0], r = t[1] || "50%";
	return (n === "top" || n === "bottom" || r === "left" || r === "right") && (e = n, n = r, r = e), t[0] = so[n] || n, t[1] = so[r] || r, t.join(" ");
}, lo = function(e, t) {
	if (t.tween && t.tween._time === t.tween._dur) {
		var n = t.t, r = n.style, i = t.u, a = n._gsap, o, s, c;
		if (i === "all" || i === !0) r.cssText = "", s = 1;
		else for (i = i.split(","), c = i.length; --c > -1;) o = i[c], ga[o] && (s = 1, o = o === "transformOrigin" ? za : Ra), eo(n, o);
		s && (eo(n, Ra), a && (a.svg && n.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", vo(n, 1), a.uncache = 1, Va(r)));
	}
}, uo = { clearProps: function(e, t, n, r, i) {
	if (i.data !== "isFromStart") {
		var a = e._pt = new qi(e._pt, t, n, 0, 0, lo);
		return a.u = r, a.pr = -10, a.tween = i, e._props.push(n), 1;
	}
} }, fo = [
	1,
	0,
	0,
	1,
	0,
	0
], po = {}, mo = function(e) {
	return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, ho = function(e) {
	var t = Ka(e, Ra);
	return mo(t) ? fo : t.substr(7).match(Zt).map(Mn);
}, go = function(e, t) {
	var n = e._gsap || kn(e), r = e.style, i = ho(e), a, o, s, c;
	return n.svg && e.getAttribute("transform") ? (s = e.transform.baseVal.consolidate().matrix, i = [
		s.a,
		s.b,
		s.c,
		s.d,
		s.e,
		s.f
	], i.join(",") === "1,0,0,1,0,0" ? fo : i) : (i === fo && !e.offsetParent && e !== ua && !n.svg && (s = r.display, r.display = "block", a = e.parentNode, (!a || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, o = e.nextElementSibling, ua.appendChild(e)), i = ho(e), s ? r.display = s : eo(e, "display"), c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : ua.removeChild(e))), t && i.length > 6 ? [
		i[0],
		i[1],
		i[4],
		i[5],
		i[12],
		i[13]
	] : i);
}, _o = function(e, t, n, r, i, a) {
	var o = e._gsap, s = i || go(e, !0), c = o.xOrigin || 0, l = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, f = s[0], p = s[1], m = s[2], h = s[3], g = s[4], _ = s[5], v = t.split(" "), y = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, x, S, C, w;
	n ? s !== fo && (S = f * h - p * m) && (C = h / S * y + b * (-m / S) + (m * _ - h * g) / S, w = y * (-p / S) + f / S * b - (f * _ - p * g) / S, y = C, b = w) : (x = Qa(e), y = x.x + (~v[0].indexOf("%") ? y / 100 * x.width : y), b = x.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * x.height : b)), r || r !== !1 && o.smooth ? (g = y - c, _ = b - l, o.xOffset = u + (g * f + _ * m) - g, o.yOffset = d + (g * p + _ * h) - _) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = b, o.smooth = !!r, o.origin = t, o.originIsAbsolute = !!n, e.style[za] = "0px 0px", a && (to(a, o, "xOrigin", c, y), to(a, o, "yOrigin", l, b), to(a, o, "xOffset", u, o.xOffset), to(a, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", y + " " + b);
}, vo = function(e, t) {
	var n = e._gsap || new _i(e);
	if ("x" in n && !t && !n.uncache) return n;
	var r = e.style, i = n.scaleX < 0, a = "px", o = "deg", s = getComputedStyle(e), c = Ka(e, za) || "0", l = u = d = m = h = g = _ = v = y = 0, u, d, f = p = 1, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B;
	return n.svg = !!(e.getCTM && $a(e)), s.translate && ((s.translate !== "none" || s.scale !== "none" || s.rotate !== "none") && (r[Ra] = (s.translate === "none" ? "" : "translate3d(" + (s.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") ") + (s.rotate === "none" ? "" : "rotate(" + s.rotate + ") ") + (s.scale === "none" ? "" : "scale(" + s.scale.split(" ").join(",") + ") ") + (s[Ra] === "none" ? "" : s[Ra])), r.scale = r.rotate = r.translate = "none"), S = go(e, n.svg), n.svg && (n.uncache ? (N = e.getBBox(), c = n.xOrigin - N.x + "px " + (n.yOrigin - N.y) + "px", M = "") : M = !t && e.getAttribute("data-svg-origin"), _o(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)), b = n.xOrigin || 0, x = n.yOrigin || 0, S !== fo && (E = S[0], D = S[1], O = S[2], k = S[3], l = A = S[4], u = j = S[5], S.length === 6 ? (f = Math.sqrt(E * E + D * D), p = Math.sqrt(k * k + O * O), m = E || D ? ya(D, E) * _a : 0, _ = O || k ? ya(O, k) * _a + m : 0, _ && (p *= Math.abs(Math.cos(_ * va))), n.svg && (l -= b - (b * E + x * O), u -= x - (b * D + x * k))) : (B = S[6], R = S[7], F = S[8], I = S[9], L = S[10], z = S[11], l = S[12], u = S[13], d = S[14], C = ya(B, L), h = C * _a, C && (w = Math.cos(-C), T = Math.sin(-C), M = A * w + F * T, N = j * w + I * T, P = B * w + L * T, F = A * -T + F * w, I = j * -T + I * w, L = B * -T + L * w, z = R * -T + z * w, A = M, j = N, B = P), C = ya(-O, L), g = C * _a, C && (w = Math.cos(-C), T = Math.sin(-C), M = E * w - F * T, N = D * w - I * T, P = O * w - L * T, z = k * T + z * w, E = M, D = N, O = P), C = ya(D, E), m = C * _a, C && (w = Math.cos(C), T = Math.sin(C), M = E * w + D * T, N = A * w + j * T, D = D * w - E * T, j = j * w - A * T, E = M, A = N), h && Math.abs(h) + Math.abs(m) > 359.9 && (h = m = 0, g = 180 - g), f = Mn(Math.sqrt(E * E + D * D + O * O)), p = Mn(Math.sqrt(j * j + B * B)), C = ya(A, j), _ = Math.abs(C) > 2e-4 ? C * _a : 0, y = z ? 1 / (z < 0 ? -z : z) : 0), n.svg && (M = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !mo(Ka(e, Ra)), M && e.setAttribute("transform", M))), Math.abs(_) > 90 && Math.abs(_) < 270 && (i ? (f *= -1, _ += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (p *= -1, _ += _ <= 0 ? 180 : -180)), t ||= n.uncache, n.x = l - ((n.xPercent = l && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a, n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a, n.z = d + a, n.scaleX = Mn(f), n.scaleY = Mn(p), n.rotation = Mn(m) + o, n.rotationX = Mn(h) + o, n.rotationY = Mn(g) + o, n.skewX = _ + o, n.skewY = v + o, n.transformPerspective = y + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (r[za] = yo(c)), n.xOffset = n.yOffset = 0, n.force3D = Dt.force3D, n.renderTransform = n.svg ? Eo : Wa ? To : xo, n.uncache = 0, n;
}, yo = function(e) {
	return (e = e.split(" "))[0] + " " + e[1];
}, bo = function(e, t, n) {
	var r = xr(t);
	return Mn(parseFloat(t) + parseFloat(io(e, "x", n + "px", r))) + r;
}, xo = function(e, t) {
	t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, To(e, t);
}, So = "0deg", Co = "0px", wo = ") ", To = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.z, c = n.rotation, l = n.rotationY, u = n.rotationX, d = n.skewX, f = n.skewY, p = n.scaleX, m = n.scaleY, h = n.transformPerspective, g = n.force3D, _ = n.target, v = n.zOrigin, y = "", b = g === "auto" && e && e !== 1 || g === !0;
	if (v && (u !== So || l !== So)) {
		var x = parseFloat(l) * va, S = Math.sin(x), C = Math.cos(x), w;
		x = parseFloat(u) * va, w = Math.cos(x), a = bo(_, a, S * w * -v), o = bo(_, o, -Math.sin(x) * -v), s = bo(_, s, C * w * -v + v);
	}
	h !== Co && (y += "perspective(" + h + wo), (r || i) && (y += "translate(" + r + "%, " + i + "%) "), (b || a !== Co || o !== Co || s !== Co) && (y += s !== Co || b ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + wo), c !== So && (y += "rotate(" + c + wo), l !== So && (y += "rotateY(" + l + wo), u !== So && (y += "rotateX(" + u + wo), (d !== So || f !== So) && (y += "skew(" + d + ", " + f + wo), (p !== 1 || m !== 1) && (y += "scale(" + p + ", " + m + wo), _.style[Ra] = y || "translate(0, 0)";
}, Eo = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.rotation, c = n.skewX, l = n.skewY, u = n.scaleX, d = n.scaleY, f = n.target, p = n.xOrigin, m = n.yOrigin, h = n.xOffset, g = n.yOffset, _ = n.forceCSS, v = parseFloat(a), y = parseFloat(o), b, x, S, C, w;
	s = parseFloat(s), c = parseFloat(c), l = parseFloat(l), l && (l = parseFloat(l), c += l, s += l), s || c ? (s *= va, c *= va, b = Math.cos(s) * u, x = Math.sin(s) * u, S = Math.sin(s - c) * -d, C = Math.cos(s - c) * d, c && (l *= va, w = Math.tan(c - l), w = Math.sqrt(1 + w * w), S *= w, C *= w, l && (w = Math.tan(l), w = Math.sqrt(1 + w * w), b *= w, x *= w)), b = Mn(b), x = Mn(x), S = Mn(S), C = Mn(C)) : (b = u, C = d, x = S = 0), (v && !~(a + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (v = io(f, "x", a, "px"), y = io(f, "y", o, "px")), (p || m || h || g) && (v = Mn(v + p - (p * b + m * S) + h), y = Mn(y + m - (p * x + m * C) + g)), (r || i) && (w = f.getBBox(), v = Mn(v + r / 100 * w.width), y = Mn(y + i / 100 * w.height)), w = "matrix(" + b + "," + x + "," + S + "," + C + "," + v + "," + y + ")", f.setAttribute("transform", w), _ && (f.style[Ra] = w);
}, Do = function(e, t, n, r, i) {
	var a = 360, o = Rt(i), s = parseFloat(i) * (o && ~i.indexOf("rad") ? _a : 1) - r, c = r + s + "deg", l, u;
	return o && (l = i.split("_")[1], l === "short" && (s %= a, s !== s % (a / 2) && (s += s < 0 ? a : -a)), l === "cw" && s < 0 ? s = (s + a * ba) % a - ~~(s / a) * a : l === "ccw" && s > 0 && (s = (s - a * ba) % a - ~~(s / a) * a)), e._pt = u = new qi(e._pt, t, n, r, s, Ea), u.e = c, u.u = "deg", e._props.push(n), u;
}, Oo = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, ko = function(e, t, n) {
	var r = Oo({}, n._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, s, c, l, u, d, f, p;
	for (s in r.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[Ra] = t, o = vo(n, 1), eo(n, Ra), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[Ra], a[Ra] = t, o = vo(n, 1), a[Ra] = c), ga) c = r[s], l = o[s], c !== l && i.indexOf(s) < 0 && (f = xr(c), p = xr(l), u = f === p ? parseFloat(c) : io(n, s, c, p), d = parseFloat(l), e._pt = new qi(e._pt, o, s, u, d - u, Ta), e._pt.u = p || 0, e._props.push(s));
	Oo(o, r);
};
jn("padding,margin,Width,Radius", function(e, t) {
	var n = "Top", r = "Right", i = "Bottom", a = "Left", o = (t < 3 ? [
		n,
		r,
		i,
		a
	] : [
		n + a,
		n + r,
		i + r,
		i + a
	]).map(function(n) {
		return t < 2 ? e + n : "border" + n + e;
	});
	uo[t > 1 ? "border" + e : e] = function(e, t, n, r, i) {
		var a, s;
		if (arguments.length < 4) return a = o.map(function(t) {
			return ao(e, t, n);
		}), s = a.join(" "), s.split(a[0]).length === 5 ? a[0] : s;
		a = (r + "").split(" "), s = {}, o.forEach(function(e, t) {
			return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0];
		}), e.init(t, s, i);
	};
});
var Ao = {
	name: "css",
	register: Ya,
	targetTest: function(e) {
		return e.style && e.nodeType;
	},
	init: function(e, t, n, r, i) {
		var a = this._props, o = e.style, s = n.vars.startAt, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
		for (m in da || Ya(), this.styles = this.styles || Ua(e), C = this.styles.props, this.tween = n, t) if (m !== "autoRound" && (l = t[m], !(Cn[m] && Ci(m, t, n, r, e, i)))) {
			if (f = typeof l, p = uo[m], f === "function" && (l = l.call(n, r, e, i), f = typeof l), f === "string" && ~l.indexOf("random(") && (l = zr(l)), p) p(this, e, m, l, n) && (S = 1);
			else if (m.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(m) + "").trim(), l += "", ei.lastIndex = 0, ei.test(c) || (h = xr(c), g = xr(l), g ? h !== g && (c = io(e, m, c, g) + g) : h && (l += h)), this.add(o, "setProperty", c, l, r, i, 0, 0, m), a.push(m), C.push(m, 0, o[m]);
			else if (f !== "undefined") {
				if (s && m in s ? (c = typeof s[m] == "function" ? s[m].call(n, r, e, i) : s[m], Rt(c) && ~c.indexOf("random(") && (c = zr(c)), xr(c + "") || c === "auto" || (c += Dt.units[m] || xr(ao(e, m)) || ""), (c + "").charAt(1) === "=" && (c = ao(e, m))) : c = ao(e, m), d = parseFloat(c), _ = f === "string" && l.charAt(1) === "=" && l.substr(0, 2), _ && (l = l.substr(2)), u = parseFloat(l), m in wa && (m === "autoAlpha" && (d === 1 && ao(e, "visibility") === "hidden" && u && (d = 0), C.push("visibility", 0, o.visibility), to(this, o, "visibility", d ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), m !== "scale" && m !== "transform" && (m = wa[m], ~m.indexOf(",") && (m = m.split(",")[0]))), v = m in ga, v) {
					if (this.styles.save(m), w = l, f === "string" && l.substring(0, 6) === "var(--") {
						if (l = Ka(e, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
							var T = e.style.perspective;
							e.style.perspective = l, l = Ka(e, "perspective"), T ? e.style.perspective = T : eo(e, "perspective");
						}
						u = parseFloat(l);
					}
					if (y || (b = e._gsap, b.renderTransform && !t.parseTransform || vo(e, t.parseTransform), x = t.smoothOrigin !== !1 && b.smooth, y = this._pt = new qi(this._pt, o, Ra, 0, 1, b.renderTransform, b, 0, -1), y.dep = 1), m === "scale") this._pt = new qi(this._pt, b, "scaleY", b.scaleY, (_ ? Pn(b.scaleY, _ + u) : u) - b.scaleY || 0, Ta), this._pt.u = 0, a.push("scaleY", m), m += "X";
					else if (m === "transformOrigin") {
						C.push(za, 0, o[za]), l = co(l), b.svg ? _o(e, l, 0, x, 0, this) : (g = parseFloat(l.split(" ")[2]) || 0, g !== b.zOrigin && to(this, b, "zOrigin", b.zOrigin, g), to(this, o, m, yo(c), yo(l)));
						continue;
					} else if (m === "svgOrigin") {
						_o(e, l, 1, x, 0, this);
						continue;
					} else if (m in po) {
						Do(this, b, m, d, _ ? Pn(d, _ + l) : l);
						continue;
					} else if (m === "smoothOrigin") {
						to(this, b, "smooth", b.smooth, l);
						continue;
					} else if (m === "force3D") {
						b[m] = l;
						continue;
					} else if (m === "transform") {
						ko(this, l, e);
						continue;
					}
				} else m in o || (m = Ja(m) || m);
				if (v || (u || u === 0) && (d || d === 0) && !Ca.test(l) && m in o) h = (c + "").substr((d + "").length), u ||= 0, g = xr(l) || (m in Dt.units ? Dt.units[m] : h), h !== g && (d = io(e, m, c, g)), this._pt = new qi(this._pt, v ? b : o, m, d, (_ ? Pn(d, _ + u) : u) - d, !v && (g === "px" || m === "zIndex") && t.autoRound !== !1 ? ka : Ta), this._pt.u = g || 0, v && w !== l ? (this._pt.b = c, this._pt.e = w, this._pt.r = Oa) : h !== g && g !== "%" && (this._pt.b = c, this._pt.r = Da);
				else if (m in o) oo.call(this, e, m, c, _ ? _ + l : l);
				else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
				else if (m !== "parseTransform") {
					fn(m, l);
					continue;
				}
				v || (m in o ? C.push(m, 0, o[m]) : typeof e[m] == "function" ? C.push(m, 2, e[m]()) : C.push(m, 1, c || e[m])), a.push(m);
			}
		}
		S && Ki(this);
	},
	render: function(e, t) {
		if (t.tween._time || !ma()) for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
		else t.styles.revert();
	},
	get: ao,
	aliases: wa,
	getSetter: function(e, t, n) {
		var r = wa[t];
		return r && r.indexOf(",") < 0 && (t = r), t in ga && t !== za && (e._gsap.x || ao(e, "x")) ? n && pa === n ? t === "scale" ? Fa : Pa : (pa = n || {}) && (t === "scale" ? Ia : La) : e.style && !Vt(e.style[t]) ? Ma : ~t.indexOf("-") ? Na : Ri(e, t);
	},
	core: {
		_removeProperty: eo,
		_getMatrix: go
	}
};
sa.utils.checkPrefix = Ja, sa.core.getStyleSaver = Ua, (function(e, t, n, r) {
	var i = jn(e + "," + t + "," + n, function(e) {
		ga[e] = 1;
	});
	jn(t, function(e) {
		Dt.units[e] = "deg", po[e] = 1;
	}), wa[i[13]] = e + "," + t, jn(r, function(e) {
		var t = e.split(":");
		wa[t[1]] = i[t[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"), jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
	Dt.units[e] = "px";
}), sa.registerPlugin(Ao);
//#endregion
//#region ../../../游戏版本/shekou-game-versions/shekou-spatial-play/engine-source/node_modules/gsap/index.js
var jo = sa.registerPlugin(Ao) || sa;
jo.core.Tween;
//#endregion
//#region src/world3d.js
var Mo = (e) => () => (e = e * 1664525 + 1013904223 >>> 0, e / 4294967296);
function No(n, i) {
	let o = Mo(1983), s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), g = !1, _ = !1, y = !0, b = "street", x = !1, S = !1, C = [], w = !1, T = 0, D = !1, k = 0, A = 0, M = 0, P = .26, L = 0, B, te = performance.now(), ie = 0, ae = !1, oe = null, ce = null, H = null, ue = null, fe = null, he = document.createElement("button");
	he.type = "button", he.hidden = !0, he.style.cssText = "position:absolute;right:24px;bottom:36px;z-index:8;padding:12px 18px;border:1px solid #b7a67f;border-radius:3px;background:#353f37e8;color:#efe2bd;font:16px KaiTi,serif;cursor:pointer", he.onclick = (e) => {
		e.stopPropagation(), x && !g && !w && b === "street" && ue && H.harbor.toggle(ue);
	}, n.appendChild(he);
	let ve = document.createElement("div");
	ve.setAttribute("role", "status"), ve.textContent = "正在加载街区…", ve.style.cssText = "position:absolute;inset:0;z-index:9;display:flex;gap:16px;align-items:center;justify-content:center;background:#d9dfdd;color:#354b50;font:18px serif", n.appendChild(ve);
	let be = new V(-32, 32, 30), xe = new V(0, 0, -25), we = /* @__PURE__ */ new Set(), Te = {
		x: 0,
		y: 0
	};
	new V();
	let Ee = new V(), De = new V(), U = new O({
		antialias: !0,
		powerPreference: "high-performance"
	});
	U.setPixelRatio(Math.min(devicePixelRatio, 2)), U.setClearColor("#8da2b2"), U.shadowMap.enabled = !0, U.shadowMap.type = 1, U.toneMapping = 4, U.toneMappingExposure = 1.05, n.appendChild(U.domElement);
	let Oe = new ot(), ke = new ee(U), Ae = ke.fromScene(Oe, .04);
	Oe.dispose(), ke.dispose(), U.domElement.setAttribute("aria-label", "可沿街行走并进入礼堂的三维蛇口");
	let W = new pe();
	if (W.background = new R("#8da2b2"), W.fog = new h("#8da2b2", .0035), new URLSearchParams(location.search).get("stage") === "whitebox") {
		let e = new c({
			color: "#d6dadd",
			roughness: .9
		});
		u.add(e), W.overrideMaterial = e;
	}
	let G = new d(51, 1, .1, 350);
	G.position.set(0, 3.4, 16), W.add(G);
	let Pe = new p("#cbdbea", "#6b7379", 1.15);
	W.add(Pe);
	let K = new r("#fff0d5", 3.5);
	K.position.set(-35, 32, 5), K.target.position.set(0, 0, -25), K.castShadow = !0, K.shadow.mapSize.set(2048, 2048), Object.assign(K.shadow.camera, {
		left: -65,
		right: 65,
		top: 75,
		bottom: -75,
		near: .1,
		far: 180
	}), K.shadow.bias = -15e-5, K.shadow.normalBias = .045, W.add(K, K.target);
	let Fe = new r("#b4d6dd", .65);
	Fe.position.set(25, 15, -45), W.add(Fe);
	function Ie(e, t = 512, n = 512) {
		let r = document.createElement("canvas");
		r.width = t, r.height = n, e(r.getContext("2d"), t, n);
		let i = new I(r);
		return i.colorSpace = ge, i.anisotropy = 4, s.add(i), i;
	}
	let Le = Ie((e, t, n) => {
		e.fillStyle = "#ded8c9", e.fillRect(0, 0, t, n);
		let r = Mo(41);
		for (let i = 0; i < 24e3; i++) e.fillStyle = `rgba(${r() > .5 ? "255,255,235" : "65,56,42"},${r() * .15})`, e.fillRect(r() * t, r() * n, r() * 3 + 1, r() * 3 + 1);
		for (let i = 0; i < 35; i++) e.fillStyle = "rgba(80,68,45,.025)", e.fillRect(r() * t, 0, r() * 25 + 2, n);
	}), Re = Ie((e, t, n) => {
		e.fillStyle = "#b69a76", e.fillRect(0, 0, t, n);
		for (let r = 0; r < 650; r++) {
			let r = o() * n;
			e.strokeStyle = `rgba(51,28,14,${o() * .23})`, e.beginPath(), e.moveTo(0, r);
			for (let n = 0; n <= t; n += 20) e.lineTo(n, r + Math.sin(n * .03 + r) * 3);
			e.stroke();
		}
	}), Be = Ie((e, t, n) => {
		e.fillStyle = "#b5b3a6", e.fillRect(0, 0, t, n);
		for (let t = 0; t < 8; t++) for (let n = 0; n < 4; n++) {
			let r = n * 128 + t % 2 * 64;
			e.fillStyle = `hsl(47,8%,${64 + o() * 5}%)`, e.fillRect(r, t * 64, 125, 61), e.strokeStyle = "#999b8f", e.strokeRect(r + 1, t * 64 + 1, 122, 58);
		}
		for (let r = 0; r < 5e3; r++) e.fillStyle = "rgba(70,67,53,.09)", e.fillRect(o() * t, o() * n, 2, 1);
	});
	Be.wrapS = Be.wrapT = e, Be.repeat.set(1, 12);
	function q(e, t = {}) {
		let n = new c({
			color: e,
			roughness: .87,
			...t
		});
		return u.add(n), n;
	}
	let J = {
		cream: q("#ece1bc", {
			map: Le,
			bumpMap: Le,
			bumpScale: .025
		}),
		ochre: q("#d9ba78", { map: Le }),
		white: q("#e1e0cd", { map: Le }),
		green: q("#536e5e", { map: Le }),
		blue: q("#799b9c", { map: Le }),
		pink: q("#c9a392", { map: Le }),
		wood: q("#c5ab86", {
			map: Re,
			bumpMap: Re,
			bumpScale: .02
		}),
		darkwood: q("#8a7052", { map: Re }),
		roof: q("#5e635e"),
		roofdark: q("#665f51"),
		iron: q("#425650", {
			metalness: .3,
			roughness: .65
		}),
		glass: q("#304a47", {
			metalness: .35,
			roughness: .35
		}),
		stone: q("#b3b4a4"),
		road: q("#d3d3c4", {
			map: Be,
			bumpMap: Be,
			bumpScale: .025
		}),
		red: q("#a05238"),
		paper: q("#e9ddba"),
		leaves: q("#405b35"),
		leaves2: q("#647746"),
		flowers: q("#b3717c"),
		brass: q("#a08c57", {
			metalness: .45,
			roughness: .5
		}),
		black: q("#26332f")
	}, He = new t(), Y = new t(), Ue = new t(), We = new t(), Ge = {
		street: He,
		hall: Y,
		office: Ue,
		press: We
	};
	W.add(He, Y, Ue, We), Y.visible = Ue.visible = We.visible = !1;
	let Ke = {}, qe = [], Je = [], Ye = [
		{
			id: "hall",
			name: "职工礼堂"
		},
		{
			id: "press",
			name: "蛇口通讯"
		},
		{
			id: "office",
			name: "行政办公楼"
		}
	].map((e) => ({
		...e,
		p: new V(),
		door: new V()
	}));
	function Xe(e, t, n, r = 0, i = 0, a = 0) {
		f.add(e);
		let o = new v(e, t);
		return o.position.set(r, i, a), o.castShadow = !0, o.receiveShadow = !0, n.add(o), o;
	}
	let Ze = new re(1, 1, 1);
	f.add(Ze);
	function X(e, t, n, r, i, a, o, s) {
		let c = new v(Ze, s);
		return c.scale.set(t, n, r), c.position.set(i, a, o), c.castShadow = !0, c.receiveShadow = !0, e.add(c), c;
	}
	function tt(e, t, n, r, i, a, o, s = 10) {
		return Xe(new Se(t, t * .94, n, s), o, e, r, i, a);
	}
	function nt(e, t, n, r, i) {
		let a = new V(...t), o = new V(...n), s = o.clone().sub(a), c = tt(e, r, s.length(), 0, 0, 0, i, 6);
		return c.position.copy(a.add(o).multiplyScalar(.5)), c.quaternion.setFromUnitVectors(new V(0, 1, 0), s.normalize()), c;
	}
	function rt(e, t, n, r, i, a, o, s = "#e6dfc0", c = "#3f5143", l = 70) {
		let u = q("#ffffff", {
			map: Ie((e, n, r) => {
				e.fillStyle = s, e.fillRect(0, 0, n, r), e.strokeStyle = c, e.lineWidth = 5, e.strokeRect(12, 12, n - 24, r - 24), e.fillStyle = c, e.textAlign = "center", e.textBaseline = "middle", e.font = `${l}px "Songti SC",serif`, e.fillText(t, n / 2, r / 2, n - 45);
			}, 1024, 256),
			roughness: .9
		});
		return Xe(new de(n, r), u, e, i, a, o);
	}
	function st(e, t, n, r, i = qe) {
		i.push(new j(new V(e - n / 2, -.1, t - r / 2), new V(e + n / 2, 9, t + r / 2)));
	}
	function ct(e, t, n, r, i, o, s = J.roof) {
		let c = new N();
		c.setAttribute("position", new a([
			-t / 2,
			0,
			-n / 2,
			t / 2,
			0,
			-n / 2,
			0,
			t * .28,
			-n / 2,
			-t / 2,
			0,
			n / 2,
			t / 2,
			0,
			n / 2,
			0,
			t * .28,
			n / 2
		], 3)), c.setIndex([
			0,
			1,
			2,
			3,
			5,
			4,
			0,
			2,
			5,
			0,
			5,
			3,
			2,
			1,
			4,
			2,
			4,
			5
		]), c.computeVertexNormals(), Xe(c, s, e, r, i, o);
		for (let a = 0; a <= n; a += .32) nt(e, [
			r - t / 2,
			i,
			o - n / 2 + a
		], [
			r,
			i + t * .28,
			o - n / 2 + a
		], .025, J.roofdark), nt(e, [
			r,
			i + t * .28,
			o - n / 2 + a
		], [
			r + t / 2,
			i,
			o - n / 2 + a
		], .025, J.roofdark);
	}
	let lt = Me();
	u.add(lt);
	let ut = Be.clone();
	s.add(ut), ut.repeat.set(3, 5), X(Y, 16, .25, 25, 0, -.15, 0, q("#c1bca9", {
		map: ut,
		roughness: .92
	})), X(Y, 16, .2, 25, 0, 7.2, 0, J.darkwood), X(Y, .3, 7.2, 25, 8, 3.6, 0, J.cream), X(Y, .32, 1.5, 25, 7.96, .75, 0, J.green), X(Y, 16, 7.2, .3, 0, 3.6, -12.5, J.cream), X(Y, 6.8, 7.2, .3, -4.6, 3.6, 12.5, J.cream), X(Y, 6.8, 7.2, .3, 4.6, 3.6, 12.5, J.cream), X(Y, 2.4, 3.7, .3, 0, 5.35, 12.5, J.cream), X(Y, .3, 1.5, 25, -8, .75, 0, J.green), X(Y, .3, 1.7, 25, -8, 6.35, 0, J.cream);
	for (let e = -11.5; e < 12; e += 4) {
		X(Y, .35, 4, 1.2, -8, 3.5, e, J.cream);
		for (let t of [
			-1.4,
			0,
			1.4
		]) X(Y, .15, 3.7, .09, -8, 3.45, e + 2 + t, J.wood);
		for (let t of [
			1.6,
			3.45,
			5.3
		]) X(Y, .18, .1, 2.8, -8, t, e + 2, J.wood);
	}
	for (let e = -10; e < 12; e += 4) X(Y, 16, .32, .25, 0, 6.9, e, J.darkwood), nt(Y, [
		-7.7,
		5.9,
		e
	], [
		0,
		7.1,
		e
	], .12, J.wood), nt(Y, [
		0,
		7.1,
		e
	], [
		7.7,
		5.9,
		e
	], .12, J.wood), tt(Y, .025, 1.1, 0, 6.25, e, J.iron, 6), Xe(new ye(.4, .25, 16), J.green, Y, 0, 5.55, e);
	X(Y, 13, .6, 4, 0, .3, -10.2, J.wood);
	for (let e = 0; e < 3; e++) X(Y, 4, .15, 1.4 - e * .35, 0, .075 + e * .15, -7.65 - e * .25, J.wood);
	let dt = q("#794335", { roughness: 1 }), ft = new de(13, 5.7, 100, 4);
	for (let e = 0; e < ft.attributes.position.count; e++) {
		let t = ft.attributes.position.getX(e);
		ft.attributes.position.setZ(e, .14 * Math.sin(t * 9) + .03 * Math.sin(t * 23));
	}
	ft.computeVertexNormals(), Xe(ft, dt, Y, 0, 3.8, -12.1), rt(Y, "职 工 代 表 选 举", 8, .75, 0, 5.55, -11.85, "#a9543c", "#e7dbaf", 80), X(Y, 2, 1.15, 1, 0, 1.15, -10, J.wood), X(Y, 2.15, .13, 1.15, 0, 1.79, -10, J.darkwood);
	function mt(e, n) {
		let r = new t();
		Y.add(r), X(r, .8, .12, .8, e, .55, n, J.wood);
		for (let t of [-.32, .32]) for (let i of [-.32, .32]) X(r, .07, .6, .07, e + t, .28, n + i, J.darkwood);
		for (let t of [-.32, .32]) X(r, .065, .9, .065, e + t, 1, n + .33, J.wood);
		for (let t of [
			.86,
			1.13,
			1.36
		]) X(r, .7, .09, .05, e, t, n + .35, J.wood);
	}
	for (let e = 0; e < 6; e++) for (let t = 0; t < 8; t++) {
		let n = t < 4 ? -5.8 + t * 1.15 : 2.35 + (t - 4) * 1.15, r = 8 - e * 1.85;
		mt(n, r), st(n, r, .85, 1, Je);
	}
	X(Y, 3, .15, 1.5, 2, .9, -4, J.wood);
	for (let e of [.65, 3.35]) for (let t of [-4.6, -3.4]) X(Y, .12, .9, .12, e, .45, t, J.darkwood);
	st(2, -4, 3, 1.5, Je);
	let ht = new t();
	ht.position.set(2.6, .98, -4), Y.add(ht);
	let _t = q("#703b2d", {
		map: Re,
		bumpMap: Re,
		bumpScale: .015
	});
	for (let e of [-.34, .34]) X(ht, 1, .9, .06, 0, .45, e, _t);
	for (let e of [-.47, .47]) X(ht, .06, .9, .65, e, .45, 0, _t);
	X(ht, 1, .06, .7, 0, .03, 0, _t);
	for (let e of [-.21, .21]) X(ht, 1.08, .08, .35, 0, .94, e, _t);
	for (let e of [-.48, .48]) X(ht, .12, .08, .07, e, .94, 0, _t);
	rt(ht, "投 票 箱", .8, .3, 0, .5, .375, "#d8c39b", "#713f2e", 125);
	for (let e of [-.45, .45]) X(ht, .025, .85, .018, e, .47, .38, J.brass);
	let vt = new de(.7, .92, 8, 24), yt = new Float32Array(vt.attributes.position.array);
	f.add(vt);
	let bt, Ct = q("#ede1c5", {
		side: 2,
		roughness: 1
	}), Tt = Xe(vt, Ct, Y, 1.35, .99, -3.8);
	Tt.rotation.set(-Math.PI / 2, 0, -.15);
	function Et(e = "") {
		bt && (s.delete(bt), bt.dispose()), bt = Ie((t, n, r) => {
			t.fillStyle = "#ede1c5", t.fillRect(0, 0, n, r), t.strokeStyle = "#8b7a61", t.strokeRect(20, 20, n - 40, r - 40), t.fillStyle = "#6d3b2b", t.textAlign = "center", t.font = "bold 45px \"Songti SC\",serif", t.fillText("选 票", n / 2, 90), t.font = "18px serif", t.fillText("蛇口工业区 · 体验样章", n / 2, 135), [
				"张国栋",
				"陈慧芳",
				"刘德明"
			].forEach((r, i) => {
				t.fillStyle = "#413c2c", t.font = "28px serif", t.fillText(r, n * .4, 245 + i * 100), t.strokeRect(n * .7, 215 + i * 100, 29, 29), r === e && (t.strokeStyle = "#963f2e", t.lineWidth = 4, t.beginPath(), t.moveTo(n * .7 + 4, 230 + i * 100), t.lineTo(n * .7 + 15, 240 + i * 100), t.lineTo(n * .7 + 35, 208 + i * 100), t.stroke(), t.lineWidth = 1, t.strokeStyle = "#8b7a61");
			});
		}, 512, 640), Ct.map = bt, Ct.needsUpdate = !0;
	}
	Et();
	let Dt = {
		office: [],
		press: []
	};
	function Ot(e, n) {
		X(e, 12, .24, 15, 0, -.15, 0, J.wood), X(e, 12, .2, 15, 0, 5.2, 0, J.cream), X(e, .25, 5.2, 15, 6, 2.6, 0, J.cream), X(e, .3, 1.25, 15, 5.95, .625, 0, J.green), X(e, 12, 5.2, .25, 0, 2.6, -7.5, J.cream);
		for (let t of [-3.5, 3.5]) X(e, 5, 5.2, .25, t, 2.6, 7.5, J.cream);
		X(e, 2, 2.3, .25, 0, 4.05, 7.5, J.cream), X(e, .25, 1.3, 15, -6, .65, 0, J.green), X(e, .25, 1.2, 15, -6, 4.6, 0, J.cream);
		for (let t = -6.6; t < 7; t += 3.3) {
			X(e, .28, 2.7, .7, -6, 2.65, t, J.cream);
			for (let n of [
				1.35,
				2.65,
				3.95
			]) X(e, .16, .07, 2.6, -6, n, t + 1.65, J.wood);
			for (let n of [
				.35,
				1.65,
				2.95
			]) X(e, .16, 2.6, .07, -6, 2.65, t + n, J.wood);
		}
		let r = new t();
		e.add(r), X(r, 3, .12, 1.4, 1.7, .85, -2.5, J.wood);
		for (let e of [.4, 3]) for (let t of [-3.05, -1.95]) X(r, .12, .83, .12, e, .42, t, J.darkwood);
		X(r, .85, .65, 1.2, 2.65, .43, -2.5, J.wood), Ke[n + "-desk"] = r, st(1.7, -2.5, 3, 1.4, Dt[n]);
		for (let t = 0; t < 5; t++) {
			let n = X(e, .55, .015, .75, .9 + t * .12, .94 + t * .016, -2.25, J.paper);
			n.rotation.y = t * .13;
		}
		tt(e, .1, .2, 2.8, 1.03, -2.65, J.white, 16), X(e, .55, .08, .4, 1.9, .98, -2.75, J.black);
		for (let t = -5; t < 5; t += 2.2) {
			X(e, 1.2, 2.7, 1, 5, 1.35, t, J.green);
			for (let n of [
				.55,
				1.25,
				1.95
			]) X(e, 1.1, .04, .03, 5, n, t + .51, J.iron), X(e, .3, .05, .07, 5, n + .25, t + .55, J.brass);
			st(5, t, 1.2, 1, Dt[n]);
		}
		X(e, 5, 2, .12, 0, 2.9, -7.32, J.darkwood), rt(e, n === "press" ? "蛇口通讯 · 编辑室" : "工业区 · 工作会议", 4.6, .55, 0, 3.4, -7.23, "#e1d6b3", "#415b4a", 80);
		for (let t = 0; t < 4; t++) rt(e, n === "press" ? [
			"来信",
			"采访",
			"校样",
			"刊发"
		][t] : [
			"建设",
			"生产",
			"生活",
			"改革"
		][t], .8, .65, -1.6 + t * 1.06, 2.65, -7.22, "#ddd4b8", "#5d5a43", 120);
		if (n === "press") {
			X(e, 2, 1.1, 1.7, -3, .55, -4, J.iron);
			for (let t of [-4.5, -3.6]) {
				let n = tt(e, .23, 2, -3, 1.3, t, J.black, 18);
				n.rotation.z = Math.PI / 2;
			}
			X(e, 2.1, .08, 1.4, -3, .75, -2.7, J.wood);
			for (let t = 0; t < 6; t++) X(e, .9, .045, 1.1, -3, .82 + t * .05, -2.7, J.paper);
			st(-3, -3.6, 2.2, 3, Dt[n]);
		} else {
			X(e, 3, .12, 1.4, -2.8, .8, 2, J.wood);
			for (let t of [-4, -1.6]) for (let n of [1.5, 2.5]) X(e, .1, .8, .1, t, .4, n, J.darkwood);
			st(-2.8, 2, 3, 1.4, Dt[n]), rt(e, "蛇口工业区 · 建设示意", 3.5, 1.8, -2.8, 2.8, -7.2, "#bbc5b1", "#536354", 64);
		}
		for (let t of [-3, 3]) tt(e, .02, .6, 0, 4.7, t, J.iron, 6), Xe(new ye(.35, .2, 12), J.green, e, 0, 4.35, t);
		X(e, 8, .3, 28, -11, -.4, 0, J.stone), X(e, 6, 4, 5, -14, 2, -6, J.ochre), ct(e, 6.4, 5.4, -14, 4, -6);
	}
	Ot(Ue, "office");
	let kt = it({
		group: We,
		materials: u,
		geometries: f,
		textures: s,
		collision: st,
		colliders: Dt.press
	});
	at(kt, {
		group: We,
		textures: s,
		materials: u
	});
	let At = q("#bca580"), jt = q("#607c79"), Mt = q("#404d48");
	function Z(e, n = 1) {
		let r = new t();
		e.add(r), r.scale.setScalar(n), Xe(new le(.21, .45, 3, 8), jt, r, 0, 1.05, 0), Xe(new me(.17, 12, 8), At, r, 0, 1.61, 0), Xe(new me(.18, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), J.darkwood, r, 0, 1.64, 0), X(r, .2, .3, .12, .23, .92, .08, J.wood);
		let i = [], a = [];
		for (let e of [-.12, .12]) {
			let n = new t();
			n.position.set(e, .82, 0), r.add(n), Xe(new le(.075, .48, 3, 6), Mt, n, 0, -.29, 0), X(n, .13, .1, .26, 0, -.58, -.06, J.darkwood), i.push(n);
			let o = new t();
			o.position.set(e * 2.2, 1.27, 0), r.add(o), Xe(new le(.06, .39, 3, 6), jt, o, 0, -.22, 0), a.push(o);
		}
		return {
			group: r,
			legs: i,
			arms: a
		};
	}
	let Nt = Z(W), Pt = et(Nt.group, [...Nt.group.children]);
	Nt.group.position.set(0, 0, 9);
	let Q = Nt.group.position, Ft = [];
	for (let e = 0; e < 2; e++) {
		let t = Z(He, .9 + o() * .1);
		t.group.position.set(e % 2 ? -4.9 : 4.9, .18, 12 - e * 15), t.group.rotation.y = e % 2 ? Math.PI : 0, Ft.push(t);
	}
	let It = $e(Ft[0].group, [...Ft[0].group.children], { maxAnisotropy: U.capabilities.getMaxAnisotropy() }), Lt = $e(Ft[1].group, [...Ft[1].group.children], {
		maxAnisotropy: U.capabilities.getMaxAnisotropy(),
		file: "npc-older-runtime.glb",
		...new URLSearchParams(location.search).get("layout") === "legacy" ? {
			x: -10.2,
			minZ: 8,
			maxZ: 25
		} : {
			x: -3.6,
			minZ: 3,
			maxZ: 24
		},
		speed: .62,
		phaseOffset: 9
	});
	function Rt(e, t = []) {
		e.updateMatrixWorld(!0);
		let n = /* @__PURE__ */ new Map(), r = [];
		e.traverse((e) => {
			if (!e.isMesh || t.some((t) => t === e || t.getObjectById(e.id))) return;
			let i = e.geometry.clone();
			if (i.attributes.uv || i.setAttribute("uv", new _e(new Float32Array(i.attributes.position.count * 2), 2)), i.index) {
				let e = i;
				i = i.toNonIndexed(), e.dispose();
			}
			i.applyMatrix4(e.matrixWorld);
			let a = e.material.uuid;
			n.has(a) || n.set(a, {
				m: e.material,
				geos: []
			}), n.get(a).geos.push(i), r.push(e);
		}), r.forEach((e) => e.parent.remove(e));
		for (let t of n.values()) {
			let n = se(t.geos, !1);
			if (t.geos.forEach((e) => e.dispose()), n) {
				f.add(n);
				let r = new v(n, t.m);
				r.castShadow = !0, r.receiveShadow = !0, e.add(r);
			}
		}
	}
	Rt(Y, [Tt]), Rt(Ue, [Ke["office-desk"]]), Rt(We);
	let zt = Qe((e, t) => {
		if (!y) return;
		e.name = "USER_EDITED_STREET_" + t.version, e.updateMatrixWorld(!0);
		let n = [];
		e.traverse((e) => {
			if (e.isMesh) {
				e.castShadow = e.receiveShadow = !0, e.name.startsWith("Sea_Static") && (e.material = lt, e.castShadow = !1, n.push(e));
				for (let t of Array.isArray(e.material) ? e.material : [e.material]) for (let e of Object.values(t)) e?.isTexture && (e.anisotropy = Math.min(16, U.capabilities.getMaxAnisotropy()), e.needsUpdate = !0);
			}
		});
		for (let e of He.children) Ft.some((t) => t.group === e) || (e.visible = !1);
		for (let n of t.buildings) {
			e.getObjectByName(n.name)?.removeFromParent();
			let t = Ne(n);
			t.traverse((e) => {
				if (e.isMesh) {
					f.add(e.geometry);
					for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
						u.add(t);
						for (let e of Object.values(t)) e?.isTexture && s.add(e);
					}
				}
			}), e.add(t);
		}
		H = je(e, t, {
			anisotropy: Math.min(8, U.capabilities.getMaxAnisotropy()),
			...new URLSearchParams(location.search).get("stage") === "whitebox" ? { textureFactory: () => null } : {}
		}), lt.uniforms.coast.value = H.compact ? -34 : -17;
		let r = (e, t) => {
			let n = new j().setFromObject(e);
			return {
				min: n.min.toArray(),
				max: n.max.toArray(),
				kind: t
			};
		};
		fe = {
			compact: H.compact,
			coast: H.compact ? -34 : -17,
			areas: t.walkAreas,
			footprints: [
				...t.buildings.map((e) => ({
					...e,
					kind: "civic"
				})),
				...H.residences.instances.map((e) => r(e, "housing")),
				...H.village.houses.map((e) => r(e, "village")),
				...H.fleet.vessels.map((e) => r(e, "boat")),
				...H.harbor.group.children.filter((e) => e.name.startsWith("CorrugatedContainer")).map((e) => r(e, "cargo"))
			]
		}, oe = t.walkAreas, ce = t.places ? t : null, e.traverse((e) => {
			if (e.isMesh) {
				f.add(e.geometry);
				for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
					u.add(t);
					for (let e of Object.values(t)) e?.isTexture && s.add(e);
				}
			}
		}), e.updateMatrixWorld(!0), Rt(e, [
			...n,
			...H.harbor.moving,
			...H.fleet.vessels
		]), He.add(e), qe.splice(0, qe.length, ...H.colliders);
		let a = {
			hall: "Building_Hall",
			press: "Building_Press_24m",
			office: "Building_Office"
		};
		for (let e of Ye) {
			let n = t.buildings.find((t) => t.name === a[e.id]);
			if (!n) continue;
			let r = n.min[0] + n.max[0] > 0 ? -1 : 1;
			n.door ? e.door.fromArray(n.door) : e.door.set((r < 0 ? n.min[0] : n.max[0]) + r * 1.1, 0, (n.min[2] + n.max[2]) / 2), e.p.copy(e.door).add(new V(0, Math.min(6, n.max[1] * .65), 0));
		}
		for (let e of t.places || []) Ye.push({
			id: e.id,
			name: e.name,
			door: new V(...e.point),
			p: new V(...e.point).add(new V(0, 2.5, 0))
		});
		for (let e = 1; e < Ft.length; e++) {
			let n = t.actors[e];
			n ? (Ft[e].group.position.fromArray(n.position), Ft[e].baseZ = n.position[2]) : Ft[e].group.visible = !1;
		}
		b === "street" && t.spawn && Q.fromArray(t.spawn);
		let o = new URLSearchParams(location.search);
		b === "street" && o.has("review") && (o.get("harbor") === "1" && H.harbor.gates.length && (Q.copy(H.harbor.gates[0].point).add(new V(1.7, 0, 0)), M = Math.PI / 2), o.get("boats") === "1" && (Q.set(H.compact ? -31 : -34, .1, 12.3), M = Math.PI / 2, P = .4), o.get("homes") === "1" && (Q.set(...H.compact ? [
			22,
			.1,
			-22
		] : [
			1.4,
			.1,
			-40.5
		]), M = H.compact ? 0 : -Math.PI / 2, P = .42), o.get("village") === "1" && (Q.set(...H.compact ? [
			53.2,
			.1,
			-2
		] : [
			-64,
			.1,
			-108
		]), M = 0, P = .4));
		let c = new j();
		for (let e of t.buildings) c.union(new j(new V(...e.min), new V(...e.max)));
		H.compact || c.union(new j().setFromObject(H.village.group)), c.getCenter(xe), xe.y = 2, be.copy(xe).add(new V(-65, 62, 83)), ae = !0, ve.remove(), i.onReady(), i.onSceneReady?.();
	}, (e) => {
		if (!y) return;
		ve.textContent = "街区暂时未能加载，请刷新重试。";
		let t = document.createElement("button");
		t.textContent = "重新加载", t.onclick = () => location.reload(), ve.appendChild(t), i.onError?.(e);
	}), Bt = new gt(U, new z(800, 500, {
		samples: 4,
		type: ne
	})), Vt = new xt(W, G, 800, 500, 12);
	Vt.kernelRadius = 1.8, Vt.minDistance = .003, Vt.maxDistance = .13;
	let Ht = new URLSearchParams(location.search).get("quality") === "cinematic", Ut = new St(W, G);
	Bt.addPass(Ut), Bt.addPass(Vt), Vt.enabled = Ht;
	let Wt = new pt({
		uniforms: {
			tDiffuse: { value: null },
			strength: { value: 1 }
		},
		vertexShader: "varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
		fragmentShader: "uniform sampler2D tDiffuse; uniform float strength; varying vec2 vUv;\n    void main(){vec4 pixel=texture2D(tDiffuse,vUv);vec3 original=pixel.rgb;\n      float luma=dot(original,vec3(.2126,.7152,.0722));\n      vec3 colour=mix(vec3(luma),original,.84);\n      float shadow=1.-smoothstep(.08,.65,luma);\n      colour*=mix(vec3(1.015,1.,.96),vec3(.91,.99,1.10),shadow);\n      gl_FragColor=vec4(mix(original,colour,strength),pixel.a);}"
	});
	Bt.addPass(Wt);
	let Gt = new wt();
	Bt.addPass(Gt);
	function Kt() {
		let e = n.clientWidth, t = n.clientHeight;
		U.setSize(e, t), G.aspect = e / t, G.updateProjectionMatrix(), Bt.setSize(e, t);
	}
	let qt = new ResizeObserver(Kt);
	qt.observe(n), Kt();
	let Jt = new V(), Yt = new V(), Xt = "", Zt = null, Qt = new t();
	Qt.visible = !1, W.add(Qt);
	{
		let e = new F(.9, 1.15, 48), t = new Ce({
			color: "#f2c46d",
			transparent: !0,
			opacity: .85,
			side: 2,
			depthWrite: !1
		}), n = new Se(.55, .75, 7, 24, 1, !0), r = new Ce({
			color: "#ffe2a0",
			transparent: !0,
			opacity: .16,
			side: 2,
			depthWrite: !1
		});
		f.add(e), f.add(n), u.add(t), u.add(r);
		let i = new v(e, t);
		i.rotation.x = -Math.PI / 2, i.position.y = .06;
		let a = new v(n, r);
		a.position.y = 3.5, Qt.add(i, a), Qt.userData.ring = i;
	}
	let $t = (e) => {
		if (!e.target?.closest("input,textarea,[role=\"dialog\"]") && ([
			"KeyW",
			"KeyA",
			"KeyS",
			"KeyD",
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
			"Space"
		].includes(e.code) && e.preventDefault(), we.add(e.code), e.code === "KeyE" && x && !w && !g)) {
			if (b === "street" && ue && Xt !== "story" && !e.repeat) {
				H.harbor.toggle(ue);
				return;
			}
			b === "street" && [
				"hall",
				"press",
				"office"
			].includes(Xt) && i.onRequestEnter(Xt), ["office", "press"].includes(b) && Xt === "document" && i.onRequestDocument(b), b === "hall" && Xt === "ballot" && i.onRequestBallot(), b !== "street" && Xt === "exit" && i.onRequestExit(), Xt === "story" && Zt && i.onRequestStory?.(Zt.id);
		}
	}, en = (e) => we.delete(e.code), tn = () => {
		we.clear(), Te.x = Te.y = 0, D = !1;
	};
	window.addEventListener("keydown", $t), window.addEventListener("keyup", en), window.addEventListener("blur", tn);
	let nn = (e) => {
		e.button !== 0 || !x || w || g || (D = !0, k = e.clientX, A = e.clientY, L = 0, U.domElement.setPointerCapture(e.pointerId));
	}, rn = (e) => {
		if (!D) return;
		let t = e.clientX - k, n = e.clientY - A;
		L += Math.abs(t) + Math.abs(n), M -= t * .004, P = l.clamp(P + n * .002, .04, .7), k = e.clientX, A = e.clientY;
	}, an = () => D = !1;
	U.domElement.addEventListener("pointerdown", nn), U.domElement.addEventListener("pointermove", rn), U.domElement.addEventListener("pointerup", an), U.domElement.addEventListener("pointercancel", an);
	function on() {
		return b === "street" ? qe : b === "hall" ? Je : Dt[b];
	}
	function sn(e, t) {
		if (["office", "press"].includes(b) && (e < -5.5 || e > 5.5 || t > 7 || t < -6.8)) return !1;
		if (b === "street") {
			if (oe) {
				if (!oe.some((n) => e > n.min[0] + .15 && e < n.max[0] - .15 && t > n.min[2] + .15 && t < n.max[2] - .15)) return !1;
			} else if (e < -15 || e > 6.5 || t > 24 || t < -92) return !1;
		}
		return b === "hall" && (e < -7.5 || e > 7.5 || t > 12 || t < -7.2) ? !1 : !on().some((n) => e > n.min.x - .25 && e < n.max.x + .25 && t > n.min.z - .25 && t < n.max.z + .25);
	}
	function cn(e) {
		if (!y) return;
		if (B = requestAnimationFrame(cn), (document.hidden || g || !x) && ie > 0) {
			te = e;
			return;
		}
		let t = Math.min((e - te) / 1e3, .045);
		te = e;
		let n = 0, r = 0, a = 0;
		if (ae && x && !w && !g && !_) {
			let e = (we.has("KeyW") || we.has("ArrowUp") ? 1 : 0) - (we.has("KeyS") || we.has("ArrowDown") ? 1 : 0) - Te.y, i = (we.has("KeyD") || we.has("ArrowRight") ? 1 : 0) - (we.has("KeyA") || we.has("ArrowLeft") ? 1 : 0) + Te.x;
			if (Math.abs(e) + Math.abs(i) > .02) C = [], n = i * Math.cos(M) - e * Math.sin(M), r = -e * Math.cos(M) - i * Math.sin(M);
			else if (C.length) {
				let e = C[0], t = Math.hypot(e.x - Q.x, e.z - Q.z);
				t < .25 ? C.shift() : (n = (e.x - Q.x) / t, r = (e.z - Q.z) / t);
			}
			let o = Math.hypot(n, r);
			if (o > .01) {
				n /= Math.max(1, o), r /= Math.max(1, o), a = we.has("ShiftLeft") || C.length ? 6.5 : 3.8;
				let e = Q.x + n * a * t, i = Q.z + r * a * t;
				sn(e, Q.z) && (Q.x = e), sn(Q.x, i) && (Q.z = i), Nt.group.rotation.y = Math.atan2(-n, -r), T += t * 10;
			}
		}
		if (b === "street" && oe) {
			let e = oe.filter((e) => Q.x > e.min[0] && Q.x < e.max[0] && Q.z > e.min[2] && Q.z < e.max[2]).map((e) => Math.max(0, e.max[1]));
			e.length && (Q.y = l.lerp(Q.y, Math.max(...e), 1 - Math.exp(-t * 14)));
		}
		if (Nt.legs.forEach((e, t) => e.rotation.x = Math.sin(T + t * Math.PI) * .43 * (a > 0)), Nt.arms.forEach((e, t) => e.rotation.x = Math.sin(T + t * Math.PI) * -.3 * (a > 0)), Pt.update(a > 0, T, t), H && (H.update(t, e * .001), ue = x && !g && !_ && !w && b === "street" ? H.harbor.nearest(Q) : null, he.hidden = !ue, ue && (he.textContent = "E · " + (ue.target > .5 ? "关闭集装箱门" : "打开集装箱门"))), It.update(t, x && !g && !w && b === "street"), Lt.update(t, x && !g && !w && b === "street"), Ft.forEach((t, n) => {
			if (n === 0 && It.ready || n === 1 && Lt.ready) return;
			let r = e * 5e-4 + n;
			t.group.position.z = (t.baseZ ?? 12 - n * 15) + Math.sin(r * .22) * 3, t.legs.forEach((e, t) => e.rotation.x = Math.sin(r * 4 + t * Math.PI) * .25);
		}), lt.uniforms.time.value = e * .001, !w && !_) {
			Jt.copy(Q).add(new V(-Math.sin(M) * 1.6, 2.05, -Math.cos(M) * 1.6));
			let e = b === "street" ? 5.7 : 4.3;
			Yt.set(Q.x + Math.sin(M) * e, Q.y + 1.8 + P * 4, Q.z + Math.cos(M) * e), x || (Yt.set(1.8, 3.6, 17), Jt.set(0, 1.4, -12));
			let n = new E(Jt, Yt.clone().sub(Jt).normalize()), r = Yt.distanceTo(Jt);
			for (let e of b === "street" ? qe : []) {
				let t = n.intersectBox(e, De);
				t && (r = Math.min(r, Math.max(1, Jt.distanceTo(t) - .25)));
			}
			Yt.copy(n.at(r, De)), b !== "street" && (Yt.z = Math.min(Yt.z, b === "hall" ? 12 : 7), Yt.x = l.clamp(Yt.x, b === "hall" ? -7.5 : -5.5, b === "hall" ? 7.5 : 5.5)), G.position.lerp(Yt, 1 - Math.exp(-t * 5)), Ee.lerp(Jt, 1 - Math.exp(-t * 7)), G.lookAt(Ee);
		}
		let o = "";
		if (b === "street") {
			for (let e of Ye) [
				"hall",
				"press",
				"office"
			].includes(e.id) && Q.distanceTo(e.door) < 2.7 && (o = e.id);
			Zt && (o = Math.hypot(Q.x - Zt.x, Q.z - Zt.z) < 2.6 ? "story" : Zt.story ? "" : o);
		} else b === "hall" ? (Math.hypot(Q.x - 1, Q.z + 2.5) < 2.6 && (o = "ballot"), Q.z > 10 && (o = "exit")) : (Math.hypot(Q.x - 1, Q.z + .9) < 2.6 && (o = "document"), Q.z > 5.5 && (o = "exit"));
		if (Xt = o, e - ie > 120) {
			ie = e;
			let t = b === "street" ? Ye : b === "hall" ? [{
				id: "ballot",
				name: "投票桌",
				p: new V(2, 2.25, -4)
			}, {
				id: "exit",
				name: "返回街区",
				p: new V(0, 2.5, 12)
			}] : [{
				id: "document",
				name: b === "press" ? "阅读来信" : "翻阅工作文件",
				p: b === "press" ? new V(1.21, 1.4, -2.25) : new V(1.7, 1.8, -2.5)
			}, {
				id: "exit",
				name: "返回街区",
				p: new V(0, 2, 7)
			}], n = null;
			Zt && (De.set(Zt.x, Qt.position.y + 2.6, Zt.z).project(G), n = {
				id: Zt.id,
				x: (De.x * .5 + .5) * 100,
				y: (-.5 * De.y + .5) * 100,
				visible: De.z < 1 && De.x > -1 && De.x < 1 && De.y > -1 && De.y < 1,
				distance: Math.hypot(Q.x - Zt.x, Q.z - Zt.z)
			}), i.onFrame({
				story: n,
				campaignPins: ze.map((e) => (De.set(...e.anchor).project(G), {
					id: e.id,
					x: (De.x * .5 + .5) * 100,
					y: (-.5 * De.y + .5) * 100,
					visible: De.z < 1 && Math.abs(De.x) < 1 && Math.abs(De.y) < 1
				})),
				near: o,
				position: {
					x: Q.x,
					z: Q.z
				},
				points: t.map((e) => (De.copy(e.p).project(G), {
					id: e.id,
					name: e.name,
					x: (De.x * .5 + .5) * 100,
					y: (-.5 * De.y + .5) * 100,
					visible: De.z < 1 && De.x > -1 && De.x < 1 && De.y > -1 && De.y < 1
				}))
			});
		}
		if (Qt.visible) {
			let t = 1 + Math.sin(e * .004) * .08;
			Qt.userData.ring.scale.set(t, t, t);
		}
		Bt.render();
	}
	Ee.set(0, 1, -12), cn(performance.now());
	let ln = "hall";
	function un(e) {
		G.fov = 51, G.updateProjectionMatrix(), b = e, w = !1, C = [], we.clear(), Object.entries(Ge).forEach(([t, n]) => n.visible = t === e), _ = !1, Nt.group.visible = !0, Pe.intensity = e === "street" ? 1.15 : 1.8, K.position.set(e === "street" ? -35 : -12, e === "street" ? 32 : 10, e === "street" ? 5 : 3), K.target.position.set(0, 0, e === "street" ? -25 : 0);
		let t = e === "street" ? 75 : e === "press" ? 12 : 16;
		if (Object.assign(K.shadow.camera, {
			left: -t,
			right: t,
			top: t,
			bottom: -t
		}), K.shadow.camera.updateProjectionMatrix(), W.fog.density = e === "street" ? .0035 : .004, e === "street") {
			let e = Ye.find((e) => e.id === ln)?.door;
			Q.copy(e || new V(4.8, 0, -23));
		} else ln = e, Q.set(0, 0, e === "hall" ? 8 : 3);
		M = e === "street" ? Math.PI / 2 : 0, P = .24, G.position.set(Q.x, 3, Q.z + 5), Ee.copy(Q).add(new V(0, 1.4, 0)), Tt.visible = !0, dn.angle = 0, fn(), _n();
	}
	let dn = { angle: 0 };
	function fn() {
		vt.attributes.position.array.set(yt), vt.attributes.position.needsUpdate = !0, vt.computeVertexNormals(), Tt.position.set(1.35, .99, -3.8), Tt.rotation.set(-Math.PI / 2, 0, -.15);
	}
	function pn(e, t) {
		let n = jo.to(e, t);
		return m.add(n), n;
	}
	function mn() {
		dn.angle = 0, _ = !1, w = !0, C = [], Nt.group.visible = !1, Tt.visible = !0, fn(), pn(G.position, {
			x: .15,
			y: 2.9,
			z: .2,
			duration: 1.1,
			ease: "power2.inOut",
			onUpdate: () => G.lookAt(1.9, 1.25, -4)
		}), G.lookAt(1.9, 1.25, -4);
	}
	function hn(e) {
		let t = jo.timeline({ onComplete: () => {
			Tt.visible = !1, e();
		} });
		m.add(t), t.to(Tt.position, {
			x: 1.3,
			y: 2.35,
			z: -3.3,
			duration: .7
		}, 0).to(Tt.rotation, {
			x: 0,
			y: 0,
			z: 0,
			duration: .7
		}, 0).to(dn, {
			angle: Math.PI - .02,
			duration: .7,
			onUpdate: () => {
				let e = vt.attributes.position;
				for (let t = 0; t < e.count; t++) {
					let n = yt[t * 3 + 1];
					n > 0 && (e.setY(t, n * Math.cos(dn.angle)), e.setZ(t, n * Math.sin(dn.angle)));
				}
				e.needsUpdate = !0, vt.computeVertexNormals();
			}
		}, .65).to(Tt.position, {
			x: 2.6,
			y: 2.65,
			z: -4,
			duration: .9
		}, 1.4).to(Tt.position, {
			y: 1.5,
			duration: .9,
			ease: "power2.in"
		}, 2.4);
	}
	function gn() {
		_ = !0, C = [], Nt.group.visible = !1, G.position.set(-.15, 2.6, 5.4), G.lookAt(.1, 2.04, -4.6);
	}
	function _n() {
		let e = b === "press";
		Pe.color.set(e ? "#eff5ff" : "#cbdbea"), Pe.groundColor.set(e ? "#a6a19a" : "#6b7379"), Pe.intensity = S ? .85 : e ? .6 : b === "street" ? 1.15 : 1.8, K.color.set(S ? "#fac58f" : e ? "#f4e7d0" : "#fff0d5"), K.intensity = S ? 1.05 : e ? 4.6 : 3.5, W.environment = e && !kt.whitebox ? Ae.texture : null, W.environmentIntensity = .22;
		let t = e ? 4096 : 2048;
		K.shadow.mapSize.x !== t && (K.shadow.mapSize.set(t, t), K.shadow.map?.dispose(), K.shadow.map = null), e && (K.shadow.mapSize.x !== 4096 && (K.shadow.mapSize.set(4096, 4096), K.shadow.map?.dispose(), K.shadow.map = null), K.position.set(-12, 8, -.8), K.target.position.set(1, 0, -3)), Fe.position.set(e ? 2 : 25, e ? 3.6 : 15, e ? 5 : -45), Fe.intensity = e ? .23 : .65, U.toneMappingExposure = S ? .95 : e ? 1.02 : 1.05, W.background.set(S ? "#84949c" : e ? "#c6ced0" : "#8da2b2"), W.fog.color.copy(W.background), Wt.uniforms.strength.value = kt.whitebox && e ? 0 : 1, Vt.enabled = Ht || e, Ut.enabled = !0, Vt.kernelRadius = e ? .4 : 1.8, Vt.minDistance = .001, Vt.maxDistance = e ? .04 : .13, lt.uniforms.dark.value = S ? .5 : 0;
	}
	function vn(e, t) {
		m.forEach((e) => e.kill()), e === "voices" && t === "visit" && (e = "visit"), e === "daily" && t === "contract" && (e = "contract"), Zt = null, Qt.visible = !1, un(e === "voices" ? "hall" : e === "newsroom" ? "press" : e === "contract" ? "office" : "street"), _ = !0, C = [], Nt.group.visible = !1;
		let n = {
			contract: [[
				-3,
				3,
				6
			], [
				0,
				1.5,
				-3
			]],
			visit: [[
				-40,
				35,
				40
			], [
				0,
				0,
				-10
			]],
			arrival: [[
				-24,
				3.4,
				25
			], [
				-20,
				1.7,
				16
			]],
			quarry: [[
				35,
				7,
				-46
			], [
				0,
				12,
				-65
			]],
			wages: [[
				-32,
				3.4,
				17
			], [
				-26,
				1.5,
				8
			]],
			daily: [[
				3,
				3.3,
				36
			], [
				12,
				2,
				24
			]],
			voices: [[
				-5,
				3,
				10
			], [
				1,
				1.5,
				-4
			]],
			newsroom: [[
				-.15,
				2.6,
				5.4
			], [
				.1,
				2.04,
				-4.6
			]]
		}, r = n[e] || n.arrival;
		G.fov = 55, G.updateProjectionMatrix(), G.position.set(...r[0]), G.lookAt(...r[1]);
	}
	function yn(e) {
		if (m.forEach((e) => e.kill()), b !== "street" && (ln = e?.room || ln, un("street")), _ = !1, w = !1, C = [], Nt.group.visible = !0, G.fov = 51, G.updateProjectionMatrix(), e?.spawn && Q.set(e.spawn[0], 0, e.spawn[1]), e?.face === void 0 ? e && (M = Math.atan2(Q.x - e.x, Q.z - e.z)) : M = e.face, P = .26, G.position.set(Q.x + Math.sin(M) * 5.7, Q.y + 2.8, Q.z + Math.cos(M) * 5.7), Ee.copy(Q).add(new V(0, 1.4, 0)), Zt = e ? {
			...e,
			story: !0
		} : null, Qt.visible = !!e, e) {
			let t = (oe || []).filter((t) => e.x > t.min[0] && e.x < t.max[0] && e.z > t.min[2] && e.z < t.max[2]).map((e) => Math.max(0, e.max[1]));
			Qt.position.set(e.x, t.length ? Math.max(...t) : 0, e.z);
		}
	}
	function bn() {
		if (!Zt || b !== "street") return !1;
		_ = !1, Nt.group.visible = !0;
		let e = {
			x: Zt.x,
			z: Zt.z
		};
		return C = (ce ? Ve(ce, Q, e) : [e]).map((e) => new V(e.x, 0, e.z)), C.length > 0;
	}
	function xn() {
		Zt = null, Qt.visible = !1;
	}
	function Sn() {
		_ = !0, w = !1, C = [], Zt = null, Qt.visible = !1, we.clear();
	}
	return {
		getMapData() {
			return fe ? {
				...fe,
				player: Q.toArray(),
				heading: Nt.group.rotation.y,
				points: Ye.map((e) => ({
					id: e.id,
					name: e.name,
					point: e.door.toArray()
				}))
			} : null;
		},
		explore: yn,
		walkToStory: bn,
		clearStory: xn,
		hold: Sn,
		campaignScene: vn,
		sceneView(e) {
			if (un("street"), m.forEach((e) => e.kill()), C = [], _ = !0, Nt.group.visible = !1, Zt = null, Qt.visible = !1, e === "square") G.fov = 58, G.updateProjectionMatrix(), G.position.set(-7, 4.3, 19), G.lookAt(1, 6, -17);
			else if (e === "quay") G.fov = 60, G.updateProjectionMatrix(), G.position.set(-38, 5, 34), G.lookAt(-24, 5, -19);
			else if (e === "quarry") G.position.set(44, 23, -30), G.lookAt(2, 12, -72);
			else {
				let e = Math.max(105, 85 / G.aspect);
				G.position.set(-e * .58, e * .68, e * .78), G.lookAt(0, 1, -6);
			}
		},
		pressOverview: gn,
		start() {
			x = !0;
		},
		pause(e) {
			g = e, e && (he.hidden = !0, ue = null, we.clear(), C = []);
		},
		overview() {
			if (b === "press" && !_) {
				gn();
				return;
			}
			_ = !_, C = [], Nt.group.visible = !_, _ && pn(G.position, {
				x: b === "street" ? be.x : 4,
				y: b === "street" ? be.y : 4.5,
				z: b === "street" ? be.z : 5,
				duration: 1.8,
				ease: "power2.inOut",
				onUpdate: () => G.lookAt(b === "street" ? xe : new V(0, 0, 0))
			});
		},
		walkTo(e) {
			if (_ = !1, Nt.group.visible = !0, ["office", "press"].includes(b)) C = e === "exit" ? [new V(0, 0, Q.z), new V(0, 0, 6.5)] : [
				new V(0, 0, Q.z),
				new V(0, 0, -.8),
				new V(1, 0, -.8)
			];
			else if (b === "hall") C = e === "exit" ? [new V(0, 0, Q.z), new V(0, 0, 11)] : [
				new V(0, 0, Q.z),
				new V(0, 0, -2.2),
				new V(1, 0, -2.2)
			];
			else {
				let t = Ye.find((t) => t.id === e);
				t && (C = ce ? Ve(ce, Q, t.door).map((e) => new V(e.x, 0, e.z)) : [
					new V(0, 0, Q.z),
					new V(0, 0, t.door.z),
					t.door.clone()
				]);
			}
		},
		enter(e = "hall") {
			un(e);
		},
		exit() {
			un("street");
		},
		closeup: mn,
		select: Et,
		cast: hn,
		cancelVote() {
			w = !1, Nt.group.visible = !0;
		},
		setTouch(e, t) {
			Te.x = e, Te.y = t;
		},
		setNight(e) {
			S = e, _n();
		},
		resetView() {
			G.fov = 51, G.updateProjectionMatrix(), _ = !1, Nt.group.visible = !0, M = 0, P = .26;
		},
		getMode() {
			return b;
		},
		dispose() {
			y = !1, he.remove(), Pt.dispose(), It.dispose(), Lt.dispose(), zt(), ve.remove(), cancelAnimationFrame(B), qt.disconnect(), window.removeEventListener("keydown", $t), window.removeEventListener("keyup", en), window.removeEventListener("blur", tn), U.domElement.removeEventListener("pointerdown", nn), U.domElement.removeEventListener("pointermove", rn), U.domElement.removeEventListener("pointerup", an), U.domElement.removeEventListener("pointercancel", an), m.forEach((e) => e.kill()), f.forEach((e) => e.dispose()), u.forEach((e) => e.dispose()), s.forEach((e) => e.dispose()), Ae.dispose(), Wt.dispose(), Vt.dispose(), Gt.dispose(), Bt.dispose(), U.dispose(), U.forceContextLoss(), U.domElement.remove();
		}
	};
}
//#endregion
export { No as buildWorld };

//# sourceMappingURL=world-engine.js.map