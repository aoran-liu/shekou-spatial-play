import { A as e, C as t, K as n, M as r, a as i, c as a, g as o, ht as s, k as c, r as l, rt as u, s as d, t as f } from "./GLTFLoader-DkEyfoyr.js";
//#region src/modelPreview.js
function p(p, m) {
	let h = new i({ antialias: !0 });
	h.setPixelRatio(Math.min(devicePixelRatio, 1.5)), h.setSize(p.clientWidth, p.clientHeight), h.toneMapping = 4, p.appendChild(h.domElement);
	let g = new u();
	g.background = new o("#e6e8e3");
	let _ = new n(36, p.clientWidth / p.clientHeight, .01, 100);
	_.position.set(1.8, 1.3, 2.2), _.lookAt(0, .4, 0), g.add(new r("#ffffff", "#777c72", 2.8));
	let v = new t("#fff1da", 3);
	v.position.set(3, 6, 4), g.add(v);
	let y = new e();
	g.add(y), g.add(new c(3, 12, "#a4aa9f", "#ced2ca"));
	let b = new d(1);
	g.add(b);
	let x = () => h.render(g, _);
	new f().load(l("/models/") + m, (t) => {
		let n = t.scene;
		n.updateMatrixWorld(!0);
		let r = new a().setFromObject(n), i = r.getCenter(new s()), o = r.getSize(new s());
		n.position.set(-i.x, -r.min.y, -i.z);
		let c = new e();
		c.add(n), c.scale.setScalar(1.2 / Math.max(o.x, o.y, o.z)), y.add(c), p.dataset.loaded = "true", x();
	}), p.parentElement.querySelectorAll("[data-turn]").forEach((e) => e.addEventListener("click", () => {
		y.rotation.y += Number(e.dataset.turn) * Math.PI / 2, x();
	})), x();
}
//#endregion
export { p as mountModelPreview };

//# sourceMappingURL=model-preview.js.map