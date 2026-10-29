//#region src/asset.js
var BASE = "/shekou-spatial-play/".replace(/\/$/, "");
var asset = (path) => BASE + path;
//#endregion
//#region src/districtReview.js
function DistrictReview({ react: React, engine }) {
	const h = React.createElement;
	const requested = new URLSearchParams(location.search).get("camera");
	const [view, setView] = React.useState([
		"aerial",
		"square",
		"quay",
		"quarry"
	].includes(requested) ? requested : "walk");
	const applied = React.useRef(false);
	React.useEffect(() => {
		if (engine && !applied.current) {
			applied.current = true;
			if (view !== "walk") engine.sceneView(view);
		}
	}, [engine]);
	const white = new URLSearchParams(location.search).get("stage") === "whitebox";
	const switchMaterial = () => {
		const url = new URL(location.href);
		url.searchParams.set("view", "street");
		if (white) url.searchParams.delete("stage");
		else url.searchParams.set("stage", "whitebox");
		location.assign(url.href);
	};
	return h("nav", {
		className: "district-review",
		"aria-label": "街区制作对照",
		"data-camera": view
	}, [
		h("span", { key: "label" }, white ? "街区白模" : "街区材质版"),
		...[
			["aerial", "布局鸟瞰"],
			["square", "广场视角"],
			["quay", "码头视角"],
			["quarry", "山体视角"]
		].map(([id, text]) => h("button", {
			key: id,
			type: "button",
			onClick: () => {
				setView(id);
				engine?.sceneView(id);
			}
		}, text)),
		h("button", {
			key: "walk",
			type: "button",
			onClick: () => {
				setView("walk");
				engine?.resetView();
			}
		}, "返回行走"),
		h("button", {
			key: "material",
			type: "button",
			onClick: switchMaterial
		}, white ? "切换材质版" : "切换白模"),
		h("a", {
			key: "concept",
			href: "/shekou-spatial-play/docs/district-redesign-20261028/01-aerial-concept.png",
			target: "_blank",
			rel: "noreferrer"
		}, "效果图参考 ↗")
	]);
}
//#endregion
//#region src/campaignDialogue.js
var CAST = {
	ahai: {
		name: "阿海",
		role: "先到蛇口的工友",
		portrait: "char-worker.png"
	},
	zhou: {
		name: "周姐",
		role: "报到处 · 计工员",
		portrait: "char-woman.png"
	},
	zhang: {
		name: "老张",
		role: "码头装卸队",
		portrait: "char-elder.png"
	},
	yuan: {
		name: "袁庚",
		role: "蛇口工业区",
		portrait: "portrait-yuan.png"
	},
	secretary: {
		name: "陈秘书",
		role: "行政办公楼",
		portrait: "char-manager.png"
	},
	editor: {
		name: "主编",
		role: "《蛇口通讯》",
		portrait: "char-manager.png"
	}
};
var say = (speaker, text) => ({
	speaker,
	text
});
var reply = (label, text, speaker) => ({
	label,
	text,
	speaker
});
var TASK_STORIES = {
	letter: {
		speaker: "ahai",
		scene: "阿海认出了你手里的信，接过行李，把你领到报到棚前。",
		lines: [say("ahai", "总算等到你了！船上晃得厉害吧？先坐，水在桌上。"), say("ahai", "信里我只顾着说这里缺人，没来得及问你。大老远跑来，你最惦记的是什么？")],
		choices: {
			income: reply("先问明白工钱，心里才踏实。", "走，我陪你去问周姐。每月怎么发，多干的怎么算，咱们一项项问清楚。"),
			skill: reply("我想学门手艺，往后能靠自己。", "那你来对地方了。明早跟我去工地，先认工具，有不懂的就问。"),
			horizon: reply("我想看看，这地方怎么变成一座城。", "现在还只看得见山和泥路。别急，往后咱们一起瞧。先去帮周姐一个忙。")
		}
	},
	handoff: {
		speaker: "zhou",
		scene: "周姐翻了两页交接本，又望向雨棚外。",
		lines: [say("zhou", "账上领了六捆木板，堆场里只剩三捆。下一班马上来了，这个数对不上，我没法交班。"), say("zhou", "你替我去看看另外三捆在哪儿。东西找齐了，这本账该怎么交出去？")],
		choices: {
			annotated: reply("我把三处去向补上，借走的那捆另记。", "好，便道上的那捆还得收回来。我在这儿加一行，下一班就不会找错。"),
			waited: reply("先把经手的人叫来，一起对一遍。", "行，我去找补雨棚的师傅。你守着这本账，等人齐了再签。"),
			guided: reply("我带下一班走一圈，当面交清楚。", "那就劳你再跑一趟。我把名字签上，交到谁手里也记下来。")
		}
	},
	reply: {
		speaker: "ahai",
		scene: "工棚里亮起一盏灯。阿海把一支铅笔推到你面前。",
		lines: [say("ahai", "第一天就跑了这么多地方，腿酸了吧？给家里写封信，他们还等着呢。"), say("ahai", "有好消息就说好消息，有难处也能说。你想先写哪一句？")],
		choices: {
			reassure: reply("“我平安到了，已经有地方住。”", "嗯，家里先盼这一句。写完我替你找个信封，明早一起寄。"),
			candid: reply("“这里还简陋，好在有人照应。”", "就这么写吧。头几天谁都不习惯，慢慢来。"),
			hopeful: reply("“明天我要跟师傅学一件新本事。”", "那可说定了。明早我来叫你，带你去山前看看。")
		}
	},
	survey: {
		speaker: "zhang",
		scene: "老张把草帽往后一推，指了指山坡，又指向海边。",
		lines: [say("zhang", "你看，石头在山上，码头要填在海边。中间这条路要是堵住，哪头都干不了。"), say("zhang", "先别忙着问什么时候开炮。跟我看看山坡、便道和岸边，三处都得接得上。")],
		response: "看出来了吧？山上干得再快，车过不去，岸边照样等着。来，跟几位师傅商量商量。"
	},
	planning: {
		speaker: "yuan",
		scene: "几个班组围在草图旁。袁庚听完运输队的情况，把图往中间推了推。",
		lines: [say("zhang", "山上说能开工，岸边说还没腾出地方。车队夹在中间，两头都催我。"), say("yuan", "港口、道路，哪一头都等不起。光催没用。你刚从现场回来，说说先把哪件事接上？")],
		choices: {
			route: reply("先把路腾出来，定好车怎么进出。", "我这就叫运输队去看转弯那段。车能一趟趟接上，才不至于堵在山脚。"),
			shore: reply("先去岸边问清楚，土石到底卸在哪儿。", "好，我让司机先等一等。卸料口定下来，再给车队画个记号。"),
			team: reply("把几位带班的叫来，摊开这张图一起定。", "也好，别再托人传话了。我叫他们过来，当面把先后次序排清楚。")
		}
	},
	archive: {
		speaker: "zhang",
		scene: "山前的工人陆续退到警戒线外。老张也收起了手里的草图。",
		lines: [say("zhang", "人都退到线外了。你跟紧我，站这边。"), say("zhang", "往后船要靠进来，得从今天这一步开始。听——")],
		response: "响了。等尘土落下去，还得一车一车往外运。今晚去计工处，你就知道大伙忙了多少。"
	},
	count: {
		speaker: "zhou",
		scene: "周姐把沾着灰的计工单摊平，在“55”下面划了一道线。",
		lines: [say("zhou", "今天的运量都记在这儿。一天定额五十五车，定额内一车奖两分，超过的每车四分。"), say("zhou", "你来替我核一张。车数别漏，大家忙了一天，正等着看。")],
		response: "这张对上了。把计工单拿给老张，他正和工友们聊这个办法。"
	},
	policy: {
		speaker: "zhang",
		scene: "老张看着计工单，旁边的工友也围了过来。",
		lines: [say("zhang", "以前多跑少跑，拿的差不多。现在多运一车能多拿一点，谁不愿意多跑两趟？"), say("zhou", "可我也得把话说在前头：只盯着车数，装得够不够、路上安不安全，谁来管？你怎么看？")],
		choices: {
			piece: reply("合格的运量照实记，多干的就该多拿。", "这话我认。少装一铲也算一车可不行，车数和验收得一起记。", "zhang"),
			fixed: reply("先别急着加车，路和工具都得跟上。", "也是，昨天车轮陷在泥里，想多跑都跑不动。这事得一并提上去。", "zhang"),
			trial: reply("先试一段，车数、质量和事故都记下来。", "那我另开一页。跑得快不快，究竟出了什么问题，过几天摊开来看。", "zhou")
		}
	},
	review: {
		speaker: "zhang",
		scene: "又一个傍晚，老张把旧计工单从口袋里掏出来。",
		lines: [say("zhang", "后来听说奖金要停，大伙又围在工棚里议论。我把这些计工单都留着，不能只凭谁一句话。"), say("zhou", "办法有争论，账更要记清。哪天有人来问，就把前后的单子拿出来。")],
		response: "你也留一张吧。以后再翻到它，别只记得“四分钱”，也记得当时等着算账的这些人。"
	},
	contract: {
		speaker: "secretary",
		scene: "办公桌上摆着两份合同。陈秘书把其中一份转向你。",
		lines: [say("secretary", "这一份给你留着。先看清做什么、报酬怎么算，还有双方各担什么责任。"), say("secretary", "哪里没说清，现在就问。别光看见签名的地方，就急着把名字写上。")],
		response: "都看过了？那你收好自己的这份。出门往街口走，老张他们正忙着挂一块新牌子。"
	},
	slogan: {
		speaker: "zhang",
		scene: "几块写着大字的板子靠在支架旁，老张腾不出手来。",
		lines: [say("zhang", "来得正好，帮我扶一下！这几块得先排好，钉上去可不好拆。"), say("zhang", "“时间就是金钱，效率就是生命。”字都在这儿，你把顺序排给我看。")],
		response: "齐了！你往后站站，看歪没歪。主编刚才来找你，说有几封信等着送呢。"
	},
	messenger: {
		speaker: "editor",
		historyLabel: "这一页，也留下了当年的声音",
		scene: "五张签收回执摆在主编桌上，其中一张沾了雨水。",
		lines: [say("editor", "这几处你都跑到了？来，坐下，说说工棚那边怎么答的。"), say("editor", "信送到了，事情还没完。你打算怎么接着办？")],
		choices: {
			faithful: reply("按原话转交，批评的那段也留下。", "好，我把原信留档。你带一份过去，请他们给个回音。", "editor"),
			clarify: reply("我先去问清是哪间工棚、漏了多久。", "把这些补在旁边，原信先别改。我等你回来，一起送过去。", "editor"),
			hold: reply("先交给负责修缮的人，约个日子回访。", "那你把日期记下来。到时候再去，别让他们只等来一句“正在处理”。", "editor")
		}
	},
	ballot: {
		speaker: "zhang",
		scene: "礼堂门口排着队。老张看着手里的选票，迟迟没折起来。",
		lines: [say("zhang", "干活记车数，我熟。让我挑管事的人，还真得想一想。"), say("secretary", "三个人的主张都在票上。你关心哪件事，就看看谁愿意去办。想好了，再把票折上。")],
		action: "接过选票",
		choices: {
			reformer: reply(null, "你看重肯做事、敢试的人。那咱们往后也看着，他答应的机会能不能落到人头上。", "zhang"),
			moderate: reply(null, "住处和吃饭，都是天天要碰的事。你这一票，他们可得记在心上。", "zhang"),
			conservative: reply(null, "有人把规矩讲清，把责任担下来，大伙做事也能少点悬心。", "zhang")
		}
	},
	visit: {
		speaker: "ahai",
		historyLabel: "你也把明华轮记进了行程",
		scene: "走出礼堂，阿海展开一张折得发白的街区图。",
		lines: [say("ahai", "我家里人来信，问这些年蛇口变成什么样了。光说“变了很多”，他们哪想得出来？"), say("ahai", "假如只有半天，你带他们看哪三处？先去哪儿，后去哪儿，你来排。")],
		response: "行，就照这条路走。你讲你亲眼见过的，我补上你没来时的事。"
	},
	read: {
		speaker: "editor",
		scene: "主编把桌上的稿子挪开，露出一封折了几道的来信。",
		lines: [say("editor", "你跑过工棚，知道他们说的是什么。这封信先由你看看。"), say("editor", "别急着改字。听听写信的人到底在盼什么。")],
		action: "展开来信",
		response: "看完了？建设的稿子在这边，工人的信在这边。今天的头版，我们得作个安排。"
	},
	frontpage: {
		speaker: "editor",
		historyLabel: "批评与回应，曾被一同公开",
		scene: "头版样张只剩下一块空白。主编把铅笔递给你。",
		lines: [say("editor", "建设的消息要登，工人的难处也还没解决。"), say("editor", "你刚从他们那儿回来。这里怎么排，你说个办法。")],
		choices: {
			dialogue: reply("来信和答复并排，让大家都看得见。", "那我留出两栏。答复还没到的地方空着，不能替人把话说满。"),
			followup: reply("我再跑一趟，核实了写成跟进报道。", "好，纸给你留着。回来别只写“去看过”，他们最想知道什么时候能修好。"),
			building: reply("建设消息放头版，给来信留个固定栏目。", "可以，下一期也得有。别今天开了栏，往后就找不到地方。")
		}
	},
	reflection: {
		speaker: "ahai",
		scene: "编辑室窗外亮起了灯。阿海在门口等你，手里还是那本旧手记。",
		lines: [say("ahai", "还记得你刚下船那会儿吗？报到棚在哪儿都要问人。现在这几条路，你闭着眼也认识了。"), say("ahai", "本子快写满了。最后这一页，你想留给什么？")],
		choices: {
			people: reply("留给这些人，也记下他们的难处。", "那就从周姐写起，还有老张。明天见到他们，我告诉他们一声。"),
			rules: reply("记下那些办法，怎么试，又怎么改。", "别忘了写大伙争过的那些话。往后有人遇上同样的难处，也好翻翻。"),
			places: reply("把走过的路画下来，看看从哪儿来到哪儿去。", "把报到棚也画上。以后房子再多，咱们也能找到第一天落脚的地方。")
		}
	}
};
function conversationFor(task, state) {
	const lines = task.story?.lines || [];
	const first = state?.runs?.arrival?.answers?.letter?.choice;
	if (task.id === "count" && first) return [say("zhou", {
		income: "阿海说，你刚来就惦记着工钱。正好，今天咱们把这张单算明白。",
		skill: "阿海说你想学门手艺。今天先教你看计工单，干了多少、怎么算，心里都要有数。",
		horizon: "你说想看一座城怎么建起来。这张单上每一车土，都是工友们来回跑出来的。"
	}[first]), ...lines];
	if (task.id === "frontpage") {
		const choice = state?.runs?.daily?.answers?.messenger?.choice;
		const remembered = {
			faithful: "上回你把批评的那段原样带了回来。我还留着那封信，今天这封，你也看看。",
			clarify: "上回你补清了工棚的位置和漏雨的日子。这回也一样，写在纸上的事，咱们得问明白。",
			hold: "上回你说先跟进修缮。这次排版前，先想想：答应回访的日子，咱们有没有再去？"
		};
		if (remembered[choice]) return [say("editor", remembered[choice]), ...lines];
	}
	return lines;
}
function responseFor(task, answer) {
	if (task.id === "messenger" && answer?.delivered === 5) return {
		speaker: "editor",
		text: {
			faithful: "回执都齐了。那段批评我照原话留着，答复一到，就接在后面。辛苦你今天来回跑。",
			clarify: "你补的地点和时间都在这儿了。这回问修缮进度，咱们就能把事情说具体。",
			hold: "回访的日子我也记下了。那天你再去一趟，修好没修好，都回来告诉我。"
		}[answer.choice] || "五张回执都齐了，来，坐下歇一会儿。"
	};
	const choice = task.story?.choices?.[answer?.choice];
	return {
		speaker: choice?.speaker || task.story?.speaker || "editor",
		text: choice?.text || task.story?.response || ""
	};
}
var DELIVERY_STORIES = [
	{
		speaker: "zhang",
		scene: "老张擦了擦手，在裤袋里找铅笔。",
		lines: [say("zhang", "奖金通知？给我看看。这回怎么算，得给大伙念明白。"), say("zhang", "签好了。办公楼那封可别压皱，刚才有人在门口等你。")],
		action: "收好回执，去办公楼"
	},
	{
		speaker: "secretary",
		scene: "陈秘书从一摞文件后抬起头。",
		lines: [say("secretary", "联系函给我吧，里面还在开会。这张回执你拿好，主编要收的。"), say("secretary", "他还托我叫你回去，说有封工人的信，想让你亲自跑一趟。")],
		action: "带回执去找主编"
	},
	{
		speaker: "editor",
		scene: "主编把一封字迹潦草的信摊开，指给你看。",
		lines: [say("editor", "工棚老王写的。屋顶漏雨，找了几回人，听到的都是“再等等”。信里批评的那段，你也看看。"), say("editor", "这封信怎么送，你来拿主意。我等你的回音。")],
		action: "就这么办，去工棚"
	},
	{
		speaker: "zhang",
		scene: "工棚门口放着接雨水的盆。老张掀开门帘迎出来。",
		lines: [],
		action: "记下他的答复，去码头"
	},
	{
		speaker: "ahai",
		scene: "阿海腾出工棚小桌的一角，让你放下报纸。",
		lines: [],
		action: "放下报纸，收好回执"
	}
];
function deliveryConversation(stop, choice) {
	if (stop === 3) return [say("zhang", {
		faithful: "原话都带过去了？好。别的我不多说，就盼下回下雨，屋里能有块干地方。",
		clarify: "你是来核对的？就是靠东头这一间，床挪了两回还是湿。来，我带你进去看。",
		hold: "修缮的人什么时候来？你答应哪天回访，我就在这儿等。别又让我们等没了信。"
	}[choice] || "信送到了？他们怎么答的？"), say("zhang", "这个鸡蛋拿着，刚煮的。你跑了这么远，歇一口气再走。")];
	if (stop === 4) return [say("ahai", {
		faithful: "那段批评你没改？那他们看到，就知道工棚的人真的说了话。",
		clarify: "你把哪间房、漏了多久都问清了？下回再去，就有账可对了。",
		hold: "回访的日子记好了？到时候我陪你去，别让老张白等。"
	}[choice] || "你这一趟，把街区都跑遍了。"), say("ahai", "报纸放这儿吧，等收工大伙就来看。一封信能走这么远，以前我还真没想过。")];
	return DELIVERY_STORIES[stop].lines;
}
//#endregion
//#region src/campaignData.js
var SAVE_KEY = "shekou-campaign-v1";
var source = (title, url) => ({
	title,
	url
});
var SOURCES = {
	election: source("招商局历史博物馆 · 干部聘任与选举探索", "https://1872.cmhk.com/xueshu/5411.html"),
	arrival: source("深圳市政府 · 蛇口工业区：改革开放“第一炮”", "https://www.sz.gov.cn/szstory/202301/content/post_10379289.html"),
	quarry: source("前海管理局 · 从“开山第一炮”到“前海模式”", "https://qh.sz.gov.cn/sygnan/qhzx/dtzx/content/post_10925683.html"),
	wages: source("深圳市档案馆 · 蛇口四分钱奖金的故事", "https://www.szdag.gov.cn/dawh/tqssn/content/post_98493.html"),
	daily: source("招商局 · 时间就是金钱，效率就是生命", "https://www.cmhk.com/main/ztbd/zsxt/content/1793244606029758466_1793244606151393282.html"),
	voices: source("招商局历史博物馆 · 蛇口的探索", "https://1872.cmhk.com/juchang/18.html"),
	visit: source("招商局史研究会 · 蛇口故事", "https://1872.cmhk.com/xueshu/505.html"),
	newsroom: source("旧版资料 · 蛇口通讯与公共讨论", "https://1872.cmhk.com/juchang/18.html"),
	archives: source("深圳市档案馆 · 蛇口四分钱奖金的故事（含1979年1月31日批复）", "https://www.szdag.gov.cn/dawh/tqssn/content/post_98493.html"),
	video: source("央视《国家记忆》· 蛇口见证：百年求索", "https://tv.cctv.com/2018/11/26/VIDEzQAkCF5kIrqcVb0K8hyf181126.shtml")
};
var option = (id, label, response) => ({
	id,
	label,
	response
});
var img = (file, caption) => ({
	image: "/images/history/" + file,
	caption
});
var vid = (path, caption, poster) => ({
	video: path,
	caption,
	poster
});
var at = (x, z, label, lead) => ({
	x,
	z,
	label,
	lead
});
var task = (id, title, kind, text, extra = {}) => ({
	id,
	title,
	kind,
	text,
	...extra,
	story: TASK_STORIES[id],
	options: extra.options?.map((o) => ({
		...o,
		label: TASK_STORIES[id]?.choices?.[o.id]?.label || o.label,
		response: TASK_STORIES[id]?.choices?.[o.id]?.text || o.response
	}))
});
var CHAPTERS = [
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
			task("letter", "带着来信出发", "choice", "阿海在信里说：海边正在建设，需要肯做事的人。你联系好接洽人、办妥手续，带着信来到蛇口。眼下，你最想问什么？", {
				options: [
					option("income", "这份工作，能不能让生活安稳些？", "阿海先带你看工棚和食堂，并答应陪你问清劳动报酬。"),
					option("skill", "能不能在这里学一门手艺？", "阿海把你介绍给熟悉工具的工友，让你先从观察和记录做起。"),
					option("horizon", "我想看看，一座新城怎样建起来。", "阿海指向山和海：眼前的路、码头和住处，都还有事要做。")
				],
				reveal: {
					text: "你脚下这片海边，几个月前刚刚获批：1979年1月31日，中央批复同意建立蛇口工业区。招商局档案中，至今保存着批准建立时圈划过的《香港明细全图》。",
					media: [img("shekou-archive-map.png", "《香港明细全图》档案影像（图上有深圳市档案馆水印）")],
					source: ["archives", "election"]
				}
			}),
			task("handoff", "六捆木板，三处去向", "evidence", "周姐要核对六捆木板。先查看现场三条线索，再决定怎样把交接记录留给下一班。", {
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
					option("annotated", "按实际去向补记，并注明临时借用", "你写下“堆场3、雨棚2、便道1”。下一班能按记录找到六捆木板。"),
					option("waited", "请经手工友一起核对后再签收", "交接慢了一点，经手人共同确认了数量和去向。"),
					option("guided", "带下一班到三处现场交接", "你多走了一小段路，把纸上的去向与实物逐一对上。")
				],
				at: at(-24.2, 21.5, "堆场", "周姐把记录本递给你：“木板对不上数，去堆场那边看看。”")
			}),
			task("reply", "写下第一封回信", "choice", "天色暗下来。你把随身的信纸展开，准备把今天发生的事告诉家里。", {
				options: [
					option("reassure", "先报平安，再说安顿的事", "家书先写平安，也写下住处还简陋、自己正在熟悉工作。"),
					option("candid", "把困难和工友的帮助一起写下来", "家书留下了陌生与疲惫，也记下有人愿意带你认识这里。"),
					option("hopeful", "写下明天想学会的一件事", "你写下明天的打算：先把手上的事做清楚，再慢慢学会新的本领。")
				],
				at: at(-23, 19, "工棚", "交接办完，天快黑了。回工棚去，把今天的事写进家书。"),
				reveal: {
					text: "你写信的这些日子，岸线正在一点点改变。1979年夏天，蛇口的顺岸码头已经开始施工。",
					media: [img("port-construction-1979.jpg", "1979年8月，蛇口工业区顺岸码头施工现场（六月版资料图）")],
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
			task("survey", "读懂眼前的工地", "observe", "在观察棚里，查看山坡、运输路和岸线。把开山与筑港之间的关系连起来。", { clues: [
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
			task("planning", "有限时间，先协调什么？", "choice", "这是一次工程组织的情境讨论。现场还需要把通路、运输和岸边施工接起来。", { options: [
				option("route", "先把运输通路和作业衔接安排清楚", "你的安排先解决工序之间的连接，后续运输更容易协调。"),
				option("shore", "先核对岸边施工的需求与接收位置", "你的安排先弄清材料去向，避免土石运到现场却无处交接。"),
				option("team", "先让各工序负责人共同确认计划", "你的安排让信息先对齐，现场准备更充分，但需要多留一点协调时间。")
			] }),
			task("archive", "见证开山，回到历史", "video", "看一段旧版保留的开山节目片段，也可以阅读文字摘要后继续。历史事件按史料展示，不随刚才的选择改写。", {
				video: "archive-blast-full.mp4",
				summary: "1979年7月，蛇口工业区基础工程进入建设阶段。山体、通路和岸线的改变，构成了后来港区发展的起点。",
				source: "video",
				reveal: {
					text: "史料记载：1979年7月，蛇口工业区基础工程破土动工，“开山第一炮”后来被称为改革开放的启幕之声。不同资料对具体日期有7月2日、7月8日两种说法，这里统一写作“1979年7月”。",
					media: [img("blast-first-shot-1979.jpg", "蛇口“开山第一炮”（六月版资料图）")],
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
			task("count", "核对今天的计工单", "wage", "把滑块移到你要核对的运量，看看奖金怎样换算。示例按深圳市档案馆的记述：定额每人每天55车，定额内每车奖2分，超过定额的部分每车奖4分。"),
			task("policy", "你会怎样回应工友？", "choice", "有人说，多干的劳动应当被看见；也有人担心，数量之外的质量和安全会被忽略。你更支持哪一种安排？", {
				match: "piece",
				options: [
					option("piece", "记录合格运量，对超额部分给予奖励", "你支持让额外劳动得到可见回报，同时要求把质量与安全核对写入记录。"),
					option("fixed", "先保持固定报酬，把困难逐项解决", "你优先保持收入稳定。工友仍希望看到额外劳动与回报之间更清楚的关系。"),
					option("trial", "先做小范围试行，再公开讨论记录", "你希望用可核对的记录检验办法，让支持与顾虑都有机会被讨论。")
				],
				historical: "piece",
				at: at(-29, 13, "码头边的工友", "计工单核完，几个工友在码头边争了起来。过去听听。"),
				reveal: {
					match: "当年的蛇口，也选择了让多干的劳动被看见。1979年，码头工地定额每人每天55车，定额内每车奖2分，超额每车奖4分。最多的人一天跑了131车，奖金4.14元，正好等于55×0.02加76×0.04。",
					other: "历史上，蛇口选了另一条路：按车计奖。码头工地定额每人每天55车，定额内每车奖2分，超额每车奖4分；最多的人一天跑了131车，奖金4.14元。",
					after: "这个办法当时引起争论，一度被叫停，后来经新华社内参上报中央、获得批示才恢复。",
					media: [img("overproduction-bonus-approval.jpeg", "关于蛇口工业区超产奖问题的批示（六月版资料图）")],
					source: "wages"
				}
			}),
			task("review", "把争论放回当时", "reading", "旧版把这段故事做成工资互动。这里保留算账和选择，再回看真实的制度探索：奖励办法经历过争论与调整，不能用一次点击概括它的全部过程。", { reveal: {
				text: "几年后，蛇口的工资表已经分出了基本、职务、浮动几栏。这张1985年的工资表，把“多劳多得”写进了每个月的账里。",
				media: [img("wage-slip.png", "1985年12月，蛇口工业区电脑公司职工工资表（六月版资料图，姓名已隐去）")],
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
			task("contract", "把约定读清楚", "observe", "旧版合同交互接到办公桌上。先阅读工作内容、报酬说明和双方责任；这是一份体验用示意文本。", {
				reveal: {
					text: "这份约定在历史上有原型。蛇口较早推行劳动合同制，蛇口改革开放博物馆至今陈列着一份1985年的《合同制工人呈批表》。",
					media: [img("labor-contract-1985.jpg", "《合同制工人呈批表》，1985年（蛇口改革开放博物馆展品，图源人民画报）")],
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
			task("slogan", "拼起街边的标语", "slogan", "按顺序选择四块字牌，把旧版的标语拼装放回街巷。", {
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
				at: at(-3, 22, "街口标语牌", "签完约定出门，街口正在挂一块新标语牌，工人们喊你搭把手。"),
				reveal: {
					text: "1981年底，写着“时间就是金钱，效率就是生命”的巨型标语牌竖在蛇口工业区最显眼的地方。这句话当时争议很大。1984年国庆35周年，写着这句口号的蛇口彩车开过了天安门广场。",
					media: [img("slogan-original-photo.jpg", "标语牌原始照片（图源深圳前海管理局，六月版资料）"), img("national-day-float-1984.jpg", "1984年国庆，蛇口工业区彩车经过天安门广场（六月版资料图）")],
					source: ["quarry", "daily"]
				}
			}),
			task("messenger", "五封信，走过一个街区", "delivery", "沿用旧版信使的五个站点。按顺序查看来信与收件回应，最后决定怎样处理工人的意见。", {
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
					option("faithful", "保留原意，核实后继续转交", "你保留了来信的批评与具体问题，并让处理进度有记录可查。"),
					option("clarify", "先找写信人补充细节", "你补齐地点、时间与事情经过，来信的问题更具体。"),
					option("hold", "暂缓刊登，先跟进解决情况", "你先跟进处理，但也留下回访日期，避免来信无声地搁置。")
				],
				historical: "faithful",
				at: at(22, -22, "工棚区", "报社托你送五封信。第一站：工棚区。"),
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
					media: [img("shekou-newspaper.jpeg", "《蛇口通讯》报纸（六月版资料图）")],
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
		tasks: [task("ballot", "听主张，投出一票", "choice", "沿用礼堂中的三位虚构候选人。这一票表达你关注的问题，不改变历史上的真实选举。", {
			options: [
				option("reformer", "张国栋 · 效率与机会", "你希望有能力、愿意尝试的人获得更多做事的机会。"),
				option("moderate", "陈慧芳 · 生活与保障", "你希望发展的议程里，始终有工人的住处和日常生活。"),
				option("conservative", "刘德明 · 规则与责任", "你希望探索有清楚的责任与规则，让承诺能够被核对。")
			],
			reveal: {
				banner: "这一票的背后，是真实的历史",
				text: "三位候选人是虚构的，可“投票”这件事真实发生过。1983年4月，蛇口第一届管委会成立，宣布每年接受一次群众信任投票。1984年4月举行首次信任投票：300余名干部参加，管委会成员获信任票295张，袁庚本人得了1张不信任票；当晚还公布了82张选票上的批评意见。1985年4月，在工业区工作超过30天的正式职工直接选举管委会。",
				media: [img("election-1985.jpeg", "蛇口街头的投票箱（六月版资料图，具体年份待核）"), vid("/videos/history/democratic-election.mp4", "民主选举情境影像：情境影像，非原始档案", "/images/history/election-1985.jpeg")],
				source: "voices"
			}
		}), task("visit", "用三处地方讲述变化", "route", "沿用旧版参观路线玩法，从五处地方选三处，按你点击的顺序组成一次讲述。", {
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
				media: [img("deng-inscription.jpg", "邓小平题写的“海上世界”（六月版资料图）"), img("deng-visit-shekou-1984.jpg", "1984年1月26日，邓小平在蛇口工业区（图源人民网）")],
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
			task("read", "摊开桌上的来信", "reading", "工人写道：我们关心生产，也关心住处、食堂和每天的生活。城市的变化很快，意见能否有一个被认真听见的地方？这封信沿用当前编辑室的叙事演绎。"),
			task("frontpage", "决定今天的头版", "choice", "报纸的版面有限。你准备怎样安排这封来信与建设消息？", {
				options: [
					option("dialogue", "来信与回应并列，让问题继续被看见", "头版保留工人的具体问题，同时列出回应与后续核对时间。"),
					option("followup", "先核实问题，做一次跟进报道", "头版留下实地核对的位置，下一次报道需要回答处理到了哪一步。"),
					option("building", "建设报道为主，来信设专栏持续追踪", "头版展示建设进展，来信专栏持续记录尚未解决的问题。")
				],
				historical: "dialogue",
				reveal: {
					match: "让批评和结果出现在同一张纸上，当年的蛇口真的这样做过。1984年4月首次信任投票的当晚，新闻发布会公布了投票结果，也公布了82张选票上的批评意见。",
					other: "历史上，蛇口试过把批评和结果并列公开：1984年4月首次信任投票的当晚，新闻发布会公布了投票结果，也公布了82张选票上的批评意见。",
					media: [img("shekou-newspaper.jpeg", "《蛇口通讯》报纸（六月版资料图）")],
					source: "voices"
				}
			}),
			task("reflection", "把你的经历写进手记", "choice", "从初到海边，到理解一份记录、一个约定和一张选票，你想在手记最后留下什么？", { options: [
				option("people", "记下遇见的人和他们的日常", "你的手记以具体的人收尾：城市的故事也存在于住处、工作和一封回信里。"),
				option("rules", "记下办法怎样被提出和讨论", "你的手记留下探索过程：规则需要被理解、试行，也需要回应问题。"),
				option("places", "记下山、海与街区的改变", "你的手记把场所连起来：路通向码头，街巷连着工棚，报纸留下了声音。")
			] })
		]
	}
];
function validAnswer(task, a) {
	if (!task || !a || typeof a !== "object" || Array.isArray(a)) return false;
	if (task.kind === "choice") return task.options.some((o) => o.id === a.choice);
	if (task.kind === "evidence") return Array.isArray(a.seen) && task.clues.every(([id]) => a.seen.includes(id)) && task.options.some((o) => o.id === a.choice);
	if (task.kind === "observe") return Array.isArray(a.seen) && task.clues.every(([id]) => a.seen.includes(id));
	if (task.kind === "wage") return Number.isInteger(a.loads) && a.loads >= 55 && a.loads <= 100;
	if (task.kind === "slogan") return JSON.stringify(a.order) === JSON.stringify(task.answer);
	if (task.kind === "delivery") return a.delivered === task.stops.length && task.options.some((o) => o.id === a.choice);
	if (task.kind === "route") return Array.isArray(a.route) && a.route.length === 3 && new Set(a.route).size === 3 && a.route.every((id) => task.places.some((p) => p[0] === id));
	return a.read === true;
}
function wageBonus(loads) {
	const n = Math.max(55, loads | 0);
	return {
		base: "1.10",
		extra: ((n - 55) * .04).toFixed(2),
		total: (1.1 + (n - 55) * .04).toFixed(2)
	};
}
function historyMatch(task, a) {
	if (!task?.reveal || !a) return null;
	const h = task.historical;
	if (h === void 0) return "archive";
	if (typeof h === "string") return a.choice === h ? "match" : "other";
	if (h.route) return Array.isArray(a.route) && a.route.includes(h.route) ? "match" : "other";
	return "archive";
}
function exploreTarget(chapter, step = 0, draft = {}) {
	const current = chapter.tasks[Math.min(step, chapter.tasks.length - 1)];
	if (current?.stopsAt) {
		const n = Math.min(Number.isInteger(draft?.delivered) ? draft.delivered : 0, current.stopsAt.length - 1), [place, title] = current.stops[n];
		return {
			x: current.stopsAt[n][0],
			z: current.stopsAt[n][1],
			label: place,
			lead: `送第 ${n + 1} 封信「${title}」，前往${place}。`,
			task: true,
			stop: n
		};
	}
	for (let i = Math.min(step, chapter.tasks.length - 1); i > 0; i--) if (chapter.tasks[i].at) return {
		...chapter.tasks[i].at,
		task: true
	};
	return {
		...chapter.target,
		lead: chapter.lead
	};
}
//#endregion
//#region src/campaignState.js
function initialCampaign() {
	return {
		version: 1,
		phase: "cover",
		introSeen: false,
		completed: [],
		runs: {},
		active: null
	};
}
function chapterStatus(state, id) {
	const i = CHAPTERS.findIndex((c) => c.id === id);
	if (i < 0) return "locked";
	return state.completed.includes(id) ? "completed" : CHAPTERS.slice(0, i).every((c) => state.completed.includes(c.id)) ? "available" : "locked";
}
var nextChapter = (s) => CHAPTERS.find((c) => !s.completed.includes(c.id));
var fullRun = (c, r) => c && r && c.tasks.every((t) => validAnswer(t, r.answers?.[t.id]));
function cleanDraft(t, a) {
	if (!a || typeof a !== "object") return {};
	return {
		npcReady: a.npcReady === true,
		choice: t.options?.some((o) => o.id === a.choice) ? a.choice : void 0,
		seen: Array.isArray(a.seen) ? [...new Set(a.seen.filter((id) => t.clues?.some((c) => c[0] === id)))] : [],
		order: Array.isArray(a.order) ? [...new Set(a.order.filter((p) => t.pieces?.includes(p)))] : [],
		route: Array.isArray(a.route) ? [...new Set(a.route.filter((id) => t.places?.some((p) => p[0] === id)))].slice(0, 3) : [],
		loads: Number.isInteger(a.loads) ? Math.max(55, Math.min(100, a.loads)) : 55,
		delivered: Number.isInteger(a.delivered) ? Math.max(0, Math.min(t.stops?.length || 0, a.delivered)) : 0
	};
}
function sanitizeCampaign(value) {
	const s = initialCampaign();
	if (!value || value.version !== 1) return s;
	s.introSeen = value.introSeen === true;
	for (const c of CHAPTERS) {
		if (chapterStatus(s, c.id) === "locked") break;
		const old = value.runs?.[c.id];
		if (!old || typeof old !== "object") break;
		const run = {
			step: 0,
			answers: {},
			draft: {}
		};
		for (const t of c.tasks) {
			if (!validAnswer(t, old.answers?.[t.id])) break;
			run.answers[t.id] = old.answers[t.id];
		}
		const count = Object.keys(run.answers).length;
		run.step = Math.min(Number.isInteger(old.step) ? Math.max(0, old.step) : 0, count, c.tasks.length - 1);
		for (const t of c.tasks) run.draft[t.id] = cleanDraft(t, old.draft?.[t.id]);
		s.runs[c.id] = run;
		if (Array.isArray(value.completed) && value.completed.includes(c.id) && fullRun(c, run)) s.completed.push(c.id);
		else break;
	}
	if (CHAPTERS.some((c) => c.id === value.active) && chapterStatus(s, value.active) !== "locked") s.active = value.active;
	return s;
}
function campaignReducer(s, a) {
	const c = CHAPTERS.find((c) => c.id === s.active), r = s.runs[s.active], t = c?.tasks[r?.step || 0];
	const setRun = (run) => ({
		...s,
		runs: {
			...s.runs,
			[s.active]: run
		}
	});
	const explore = (base, id) => {
		if (!CHAPTERS.find((x) => x.id === id)) return {
			...base,
			phase: "map"
		};
		const run = base.runs[id] || {
			step: 0,
			answers: {},
			draft: {}
		};
		return {
			...base,
			phase: "explore",
			active: id,
			runs: {
				...base.runs,
				[id]: run
			}
		};
	};
	switch (a.type) {
		case "START": return {
			...s,
			phase: "intro"
		};
		case "CONTINUE": {
			if (!s.introSeen) return {
				...s,
				phase: "intro"
			};
			const ch = s.active && !s.completed.includes(s.active) ? CHAPTERS.find((x) => x.id === s.active) : nextChapter(s);
			return ch ? explore(s, ch.id) : {
				...s,
				phase: "map"
			};
		}
		case "INTRO_DONE": return s.phase === "intro" ? explore({
			...s,
			introSeen: true
		}, (nextChapter(s) || CHAPTERS[0]).id) : s;
		case "EXPLORE":
			if (!s.introSeen || chapterStatus(s, a.id) !== "available" || ![
				"map",
				"result",
				"explore"
			].includes(s.phase)) return s;
			return explore(s, a.id);
		case "ARRIVE":
			if (s.phase !== "explore" || a.id !== s.active || !c) return s;
			return {
				...s,
				phase: fullRun(c, r) ? "result" : r.answers[t.id] ? "feedback" : "chapter"
			};
		case "OPEN": {
			if (!s.introSeen || chapterStatus(s, a.id) === "locked" || ![
				"map",
				"result",
				"explore"
			].includes(s.phase)) return s;
			const ch = CHAPTERS.find((x) => x.id === a.id), run = s.runs[a.id] || {
				step: 0,
				answers: {},
				draft: {}
			};
			return {
				...s,
				active: a.id,
				phase: s.completed.includes(a.id) || fullRun(ch, run) ? "result" : run.answers[ch.tasks[run.step].id] ? "feedback" : "chapter",
				runs: {
					...s.runs,
					[a.id]: run
				}
			};
		}
		case "LEAVE": return [
			"chapter",
			"feedback",
			"result"
		].includes(s.phase) && c && !s.completed.includes(c.id) ? {
			...s,
			phase: "explore"
		} : [
			"chapter",
			"feedback",
			"result"
		].includes(s.phase) ? {
			...s,
			phase: "map"
		} : s;
		case "DELIVERY_CHOICE":
			if (s.phase !== "explore" || !t?.stopsAt || r.draft?.[t.id]?.delivered !== 2 || !t.options.some((o) => o.id === a.choice)) return s;
			return setRun({
				...r,
				draft: {
					...r.draft,
					[t.id]: {
						...r.draft[t.id],
						choice: a.choice
					}
				}
			});
		case "DELIVER": {
			if (s.phase !== "explore" || !t?.stopsAt || r.answers[t.id]) return s;
			const d = r.draft?.[t.id] || {}, n = Math.min(t.stops.length, (Number.isInteger(d.delivered) ? d.delivered : 0) + 1);
			if (n === 3 && !t.options.some((o) => o.id === d.choice)) return s;
			const answer = {
				...d,
				delivered: n
			}, done = n >= t.stops.length && validAnswer(t, answer);
			return {
				...setRun({
					...r,
					draft: {
						...r.draft,
						[t.id]: answer
					},
					answers: done ? {
						...r.answers,
						[t.id]: answer
					} : r.answers
				}),
				phase: done ? "feedback" : n >= t.stops.length ? "chapter" : "explore"
			};
		}
		case "DRAFT": return s.phase === "chapter" && a.taskId === t?.id ? setRun({
			...r,
			draft: {
				...r.draft,
				[t.id]: a.answer
			}
		}) : s;
		case "SUBMIT": return s.phase === "chapter" && a.taskId === t?.id && validAnswer(t, a.answer) ? {
			...setRun({
				...r,
				answers: {
					...r.answers,
					[t.id]: a.answer
				}
			}),
			phase: "feedback"
		} : s;
		case "NEXT": {
			if (s.phase !== "feedback" || !validAnswer(t, r.answers[t.id])) return s;
			if (r.step >= c.tasks.length - 1) return {
				...s,
				phase: "result"
			};
			const following = c.tasks[r.step + 1];
			return {
				...setRun({
					...r,
					step: r.step + 1
				}),
				phase: following.at && !s.completed.includes(c.id) ? "explore" : "chapter"
			};
		}
		case "FINISH": {
			if (s.phase !== "result" || !fullRun(c, r)) return s;
			const done = {
				...s,
				completed: CHAPTERS.filter((ch) => s.completed.includes(ch.id) || ch.id === c.id).map((ch) => ch.id)
			};
			const next = nextChapter(done);
			return next ? explore(done, next.id) : {
				...done,
				phase: "map"
			};
		}
		case "MAP": return s.introSeen ? {
			...s,
			phase: "map"
		} : s;
		case "HOME": return {
			...s,
			phase: "cover"
		};
		default: return s;
	}
}
//#endregion
//#region src/TaskPanel.jsx
function readTaskProgress() {
	try {
		return sanitizeCampaign(JSON.parse(localStorage.getItem("shekou-campaign-v1") || "null"));
	} catch {
		return sanitizeCampaign(null);
	}
}
function TaskPanel({ react, state, onClose, onContinue }) {
	const h = react.createElement;
	const s = state || readTaskProgress(), current = CHAPTERS.find((c) => c.id === s.active && !s.completed.includes(c.id)) || nextChapter(s);
	const run = current ? s.runs[current.id] : null, step = run?.step || 0, task = current?.tasks[step];
	const target = current ? exploreTarget(current, step, run?.draft?.[task.id]) : null;
	const panel = react.useRef(null);
	react.useEffect(() => {
		const previous = document.activeElement, root = panel.current;
		root?.querySelector("button")?.focus();
		const key = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "Tab") {
				const buttons = [...root.querySelectorAll("button:not(:disabled)")], first = buttons[0], last = buttons.at(-1);
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		};
		window.addEventListener("keydown", key);
		return () => {
			window.removeEventListener("keydown", key);
			previous?.focus?.();
		};
	}, []);
	return /* @__PURE__ */ h("div", {
		className: "task-panel-backdrop",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		}
	}, /* @__PURE__ */ h("section", {
		ref: panel,
		className: "task-panel",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "任务"
	}, /* @__PURE__ */ h("button", {
		className: "task-panel-close",
		onClick: onClose,
		"aria-label": "关闭任务"
	}, "×"), /* @__PURE__ */ h("div", { className: "task-panel-body" }, /* @__PURE__ */ h("span", { className: "task-panel-kicker" }, "这段旅程，正在发生"), /* @__PURE__ */ h("h2", null, "任务"), /* @__PURE__ */ h("div", { className: "task-progress" }, /* @__PURE__ */ h("span", null, "已完成章节"), /* @__PURE__ */ h("strong", null, s.completed.length, /* @__PURE__ */ h("small", null, " / 6"))), current ? /* @__PURE__ */ h("div", { className: "task-current" }, /* @__PURE__ */ h("span", null, "当前目标 · 第 ", current.no, " 章"), /* @__PURE__ */ h("h3", null, task.title), /* @__PURE__ */ h("p", null, target?.lead || current.lead), /* @__PURE__ */ h("div", { className: "task-destination" }, "◎ ", target?.label || current.title)) : /* @__PURE__ */ h("div", { className: "task-current" }, /* @__PURE__ */ h("h3", null, "六段故事，都已走过。"), /* @__PURE__ */ h("p", null, "你可以沿街继续探索，也可以回看旅程。")), /* @__PURE__ */ h("ol", { className: "task-chapter-progress" }, CHAPTERS.map((c) => {
		const status = chapterStatus(s, c.id), done = Object.keys(s.runs[c.id]?.answers || {}).length;
		return /* @__PURE__ */ h("li", {
			key: c.id,
			className: status
		}, /* @__PURE__ */ h("b", null, status === "completed" ? "✓" : c.no), /* @__PURE__ */ h("span", null, c.title), /* @__PURE__ */ h("small", null, status === "locked" ? "未开启" : done + " / " + c.tasks.length));
	})), /* @__PURE__ */ h("button", {
		className: "task-continue",
		onClick: () => onContinue(current?.id)
	}, current ? "前往当前任务" : "回看六章旅程", " ", /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "↗")))));
}
//#endregion
//#region src/GameHud.jsx
function GameHud({ react, engine, onMap, taskState, onContinueTask }) {
	const h = react.createElement, Fragment = react.Fragment;
	const [data, setData] = react.useState(null);
	const [tasksOpen, setTasksOpen] = react.useState(false);
	react.useEffect(() => {
		const read = () => setData(engine?.getMapData?.() || null);
		read();
		const timer = setInterval(read, 200);
		return () => clearInterval(timer);
	}, [engine]);
	const p = data?.player || [
		0,
		0,
		17
	], heading = -(data?.heading || 0) * 180 / Math.PI;
	const footprint = (b, i) => /* @__PURE__ */ h("rect", {
		key: i,
		x: b.min[0],
		y: b.min[2],
		width: b.max[0] - b.min[0],
		height: b.max[2] - b.min[2],
		rx: ".25",
		fill: b.kind === "boat" ? "#d3c792" : b.kind === "village" ? "#b3a17c" : "#607b67",
		stroke: "#d6d7af",
		strokeWidth: ".25"
	});
	const closeTasks = () => {
		setTasksOpen(false);
		engine?.pause(false);
	};
	return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("aside", {
		className: "game-hud",
		"aria-label": "地图与任务"
	}, /* @__PURE__ */ h("button", {
		className: "hud-minimap",
		onClick: onMap,
		title: "展开完整地图",
		"aria-label": "展开完整地图，北向上"
	}, /* @__PURE__ */ h("span", { className: "minimap-disc" }, /* @__PURE__ */ h("svg", {
		viewBox: `${p[0] - 34} ${p[2] - 34} 68 68`,
		"aria-hidden": "true"
	}, /* @__PURE__ */ h("rect", {
		x: p[0] - 34,
		y: p[2] - 34,
		width: "68",
		height: "68",
		fill: "#345e60"
	}), data?.areas.map((b, i) => /* @__PURE__ */ h("rect", {
		key: i,
		x: b.min[0],
		y: b.min[2],
		width: b.max[0] - b.min[0],
		height: b.max[2] - b.min[2],
		fill: "#b1b995"
	})), data?.compact && /* @__PURE__ */ h("path", {
		d: "M0 -45V43M-33 10H34M-28 -45V43",
		stroke: "#e7dbb6",
		strokeWidth: "3"
	}), data?.footprints.map(footprint), data?.points.map((b) => /* @__PURE__ */ h("circle", {
		key: b.id,
		cx: b.point[0],
		cy: b.point[2],
		r: ".8",
		fill: "#eee1a5"
	})), /* @__PURE__ */ h("circle", {
		cx: p[0],
		cy: p[2],
		r: "4.5",
		fill: "#243f4088"
	}), /* @__PURE__ */ h("path", {
		d: "M0 -3.8L2.7 2.7L0 1.4L-2.7 2.7Z",
		transform: `translate(${p[0]},${p[2]}) rotate(${heading})`,
		fill: "#fff1bf",
		stroke: "#77532d",
		strokeWidth: ".45"
	}))), /* @__PURE__ */ h("span", {
		className: "compass-n",
		"aria-hidden": "true"
	}, "北"), /* @__PURE__ */ h("span", {
		className: "compass-e",
		"aria-hidden": "true"
	}, "东"), /* @__PURE__ */ h("span", {
		className: "compass-s",
		"aria-hidden": "true"
	}, "南"), /* @__PURE__ */ h("span", {
		className: "compass-w",
		"aria-hidden": "true"
	}, "西")), /* @__PURE__ */ h("nav", {
		className: "hud-icons",
		"aria-label": "地图与任务入口"
	}, /* @__PURE__ */ h("button", {
		type: "button",
		onClick: onMap,
		title: "地图",
		"aria-label": "地图"
	}, /* @__PURE__ */ h("img", {
		src: asset("/images/ui/hud-journey.png"),
		alt: ""
	})), /* @__PURE__ */ h("button", {
		type: "button",
		onClick: () => {
			setTasksOpen(true);
			engine?.pause(true);
		},
		title: "任务",
		"aria-label": "任务"
	}, /* @__PURE__ */ h("img", {
		src: asset("/images/ui/hud-journal.png"),
		alt: ""
	})))), tasksOpen && /* @__PURE__ */ h(TaskPanel, {
		react,
		state: taskState,
		onClose: closeTasks,
		onContinue: (id) => {
			closeTasks();
			onContinueTask?.(id);
		}
	}));
}
//#endregion
//#region src/DistrictMap.jsx
var MAP_DESTINATIONS = [
	{
		id: "quarry",
		name: "微波山",
		no: "01",
		left: 72,
		top: 11,
		width: 18,
		height: 17
	},
	{
		id: "quay",
		name: "顺岸码头",
		no: "02",
		left: 25,
		top: 29,
		width: 18,
		height: 17
	},
	{
		id: "mill",
		name: "大成面粉厂",
		no: "03",
		left: 51,
		top: 20,
		width: 17,
		height: 18
	},
	{
		id: "office",
		name: "蛇口工业区大厦",
		no: "04",
		left: 26,
		top: 68,
		width: 18,
		height: 18
	},
	{
		id: "housing",
		name: "职工生活区",
		no: "05",
		left: 78,
		top: 27,
		width: 17,
		height: 16
	},
	{
		id: "press",
		name: "蛇口通讯",
		no: "06",
		left: 63,
		top: 42,
		width: 16,
		height: 16
	},
	{
		id: "hall",
		name: "职工礼堂",
		no: "07",
		left: 69,
		top: 62,
		width: 16,
		height: 16
	},
	{
		id: "commerce",
		name: "招商大厦",
		no: "08",
		left: 85,
		top: 57,
		width: 13,
		height: 24
	}
];
function DistrictMap({ react, engine, onNavigate }) {
	const h = react.createElement, data = engine?.getMapData?.();
	if (!data) return /* @__PURE__ */ h("p", { role: "status" }, "街区地图正在准备…");
	const available = new Set(data.points.map((p) => p.id));
	return /* @__PURE__ */ h("section", {
		className: "current-district-guide",
		"aria-label": "蛇口街区导览"
	}, /* @__PURE__ */ h("div", { className: "current-map-art" }, /* @__PURE__ */ h("img", {
		src: asset("/images/shekou-district-map-current.png"),
		alt: "蛇口八地点手绘地图：微波山、顺岸码头、大成面粉厂、蛇口工业区大厦、职工生活区、蛇口通讯、职工礼堂、招商大厦"
	}), MAP_DESTINATIONS.map((p) => /* @__PURE__ */ h("button", {
		type: "button",
		key: p.id,
		className: "map-pin " + p.id,
		style: {
			left: p.left + "%",
			top: p.top + "%",
			width: p.width + "%",
			height: p.height + "%"
		},
		"aria-label": p.no + " " + p.name + "，沿路前往",
		title: "前往" + p.name,
		disabled: !available.has(p.id),
		onClick: () => onNavigate(p.id)
	}, /* @__PURE__ */ h("span", null, "前往", p.name, " ↗")))), /* @__PURE__ */ h("div", { className: "current-map-caption" }, /* @__PURE__ */ h("span", null, "点击图中地点，沿街前往"), available.has("village") && /* @__PURE__ */ h("button", {
		type: "button",
		onClick: () => onNavigate("village")
	}, "前往山麓村落 ↗")));
}
//#endregion
//#region src/CampaignApp.jsx
var fallbackPins = [
	[20, 65],
	[70, 22],
	[27, 45],
	[75, 43],
	[65, 66],
	[52, 35]
];
function mapLabelPositions(pins, { width, height, bottom }) {
	const w = width <= 1e3 ? 44 : 132, h = 44, gap = 8, placed = [];
	const left = width < 640 ? width * .46 : Math.min(430, width * .32), right = width - w - 12, top = 100;
	return CHAPTERS.map((ch, i) => {
		const pin = pins.find((p) => p.id === ch.id), point = pin?.visible ? [pin.x, pin.y] : fallbackPins[i];
		const x = Math.max(left, Math.min(right, point[0] * width / 100 - w / 2));
		const y = Math.max(top, Math.min(bottom - h - gap, point[1] * height / 100 - h));
		let best = null;
		for (let row = 0; row <= Math.floor((bottom - top - h - gap) / 16); row++) for (let col = 0; col <= Math.floor((right - left) / 16); col++) {
			const p = {
				x: left + col * 16,
				y: top + row * 16
			};
			if (placed.some((q) => p.x < q.x + w + gap && p.x + w + gap > q.x && p.y < q.y + h + gap && p.y + h + gap > q.y)) continue;
			const distance = (p.x - x) ** 2 + (p.y - y) ** 2;
			if (!best || distance < best.distance) best = {
				...p,
				distance
			};
		}
		const p = best || {
			x,
			y
		};
		placed.push(p);
		return {
			left: p.x,
			top: p.y
		};
	});
}
var PAPER_W = 668, PAPER_H = 1043;
var paperFit = () => Math.max(.1, Math.min(1, (innerWidth - 28) / PAPER_W, (innerHeight - 32) / PAPER_H));
var staged = (c, t) => [
	"voices",
	"newsroom",
	"quarry"
].includes(c.id) || t?.id === "contract";
function readSave() {
	try {
		return sanitizeCampaign(JSON.parse(localStorage.getItem(SAVE_KEY)));
	} catch {
		return initialCampaign();
	}
}
function Lock({ react }) {
	const h = react.createElement;
	return /* @__PURE__ */ h("svg", {
		width: "16",
		height: "18",
		viewBox: "0 0 16 18",
		"aria-hidden": "true"
	}, /* @__PURE__ */ h("path", {
		d: "M4 7V5a4 4 0 0 1 8 0v2M2 7h12v9H2z",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5"
	}), /* @__PURE__ */ h("path", {
		d: "M8 10v3",
		stroke: "currentColor",
		strokeWidth: "1.5"
	}));
}
var sourceList = (ids) => [ids].flat().filter((id) => SOURCES[id]).map((id) => SOURCES[id]);
function Parchment({ react, label, onClose, action, children, wide, speaker }) {
	const h = react.createElement;
	const [scale, setScale] = react.useState(paperFit), body = react.useRef(null);
	react.useEffect(() => {
		const resize = () => setScale(paperFit());
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, []);
	react.useEffect(() => {
		body.current?.scrollTo?.(0, 0);
		body.current?.querySelector("h2")?.focus({ preventScroll: true });
	}, [label]);
	return /* @__PURE__ */ h("div", {
		className: "campaign-modal pc-modal" + (scale < .72 ? " pc-compact" : "") + (speaker ? " pc-with-speaker" : ""),
		role: "dialog",
		"aria-modal": "true",
		"aria-label": label,
		onKeyDown: (e) => {
			if (e.key === "Escape" && onClose) {
				e.stopPropagation();
				onClose();
			}
		}
	}, speaker && CAST[speaker] && /* @__PURE__ */ h("aside", {
		className: "pc-portrait",
		"aria-label": CAST[speaker].name
	}, /* @__PURE__ */ h("img", {
		src: asset("/images/characters/" + CAST[speaker].portrait),
		alt: CAST[speaker].name
	}), /* @__PURE__ */ h("b", null, CAST[speaker].name), /* @__PURE__ */ h("span", null, CAST[speaker].role)), /* @__PURE__ */ h("div", {
		className: "pc-layout",
		style: {
			width: PAPER_W * scale,
			height: PAPER_H * scale
		}
	}, /* @__PURE__ */ h("div", {
		className: "pc-stage",
		style: {
			transform: `scale(${scale})`,
			"--pc-scale": scale
		}
	}, /* @__PURE__ */ h("div", { className: "pc-paper" }, /* @__PURE__ */ h("img", {
		src: asset("/images/figma-letter/paper.png"),
		width: "622",
		height: "877",
		alt: "",
		draggable: "false"
	})), /* @__PURE__ */ h("div", {
		ref: body,
		className: "pc-body" + (wide ? " wide" : "")
	}, children), onClose && /* @__PURE__ */ h("button", {
		type: "button",
		className: "pc-close",
		onClick: onClose,
		"aria-label": "合上纸页，回到街区",
		title: "合上（Esc）"
	}, /* @__PURE__ */ h("img", {
		src: asset("/images/figma-letter/close.png"),
		width: "93",
		height: "93",
		alt: "",
		draggable: "false"
	})), action && /* @__PURE__ */ h("button", {
		type: "button",
		className: "pc-continue",
		disabled: action.disabled,
		onClick: action.onClick
	}, /* @__PURE__ */ h("img", {
		src: asset("/images/figma-letter/continue-paper.png"),
		width: "533",
		height: "178",
		alt: "",
		draggable: "false"
	}), /* @__PURE__ */ h("span", null, action.label)))));
}
function Media({ react, items, onZoom }) {
	const h = react.createElement;
	return /* @__PURE__ */ h("div", { className: "pc-media" }, items.map((m) => m.video ? /* @__PURE__ */ h("figure", { key: m.video }, /* @__PURE__ */ h("video", {
		controls: true,
		playsInline: true,
		preload: "metadata",
		poster: m.poster && asset(m.poster),
		src: asset(m.video)
	}), /* @__PURE__ */ h("figcaption", null, m.caption)) : /* @__PURE__ */ h("figure", { key: m.image }, /* @__PURE__ */ h("button", {
		type: "button",
		onClick: () => onZoom(m),
		"aria-label": "放大查看：" + m.caption
	}, /* @__PURE__ */ h("img", {
		src: asset(m.image),
		alt: m.caption,
		loading: "lazy"
	})), /* @__PURE__ */ h("figcaption", null, m.caption))));
}
function Sources({ react, ids }) {
	const h = react.createElement;
	const list = sourceList(ids);
	return list.length ? /* @__PURE__ */ h("div", { className: "pc-sources" }, /* @__PURE__ */ h("span", null, "资料来源"), list.map((s) => /* @__PURE__ */ h("a", {
		key: s.url + s.title,
		href: s.url,
		target: "_blank",
		rel: "noreferrer"
	}, s.title, " ↗"))) : null;
}
function Conversation({ react, lines, scene }) {
	const h = react.createElement;
	return /* @__PURE__ */ h("section", {
		className: "pc-conversation",
		"aria-label": "人物对话"
	}, scene && /* @__PURE__ */ h("p", { className: "pc-scene-line" }, scene), lines.map((line, i) => {
		const actor = CAST[line.speaker];
		return /* @__PURE__ */ h("div", {
			className: "pc-speech",
			key: i
		}, /* @__PURE__ */ h("header", null, actor?.portrait && /* @__PURE__ */ h("img", {
			className: "pc-speaker-thumb",
			src: asset("/images/characters/" + actor.portrait),
			alt: ""
		}), /* @__PURE__ */ h("b", null, actor?.name || line.speaker), /* @__PURE__ */ h("span", null, actor?.role)), /* @__PURE__ */ h("p", null, line.text));
	}));
}
function Choices({ react, options, value, onPick }) {
	const h = react.createElement;
	return /* @__PURE__ */ h("div", {
		className: "pc-choices",
		role: "radiogroup",
		"aria-label": "选择你的回应"
	}, options.map((o, i) => /* @__PURE__ */ h("button", {
		type: "button",
		key: o.id,
		role: "radio",
		"aria-checked": value === o.id,
		className: value === o.id ? "on" : "",
		onClick: () => onPick(o.id)
	}, /* @__PURE__ */ h("span", { className: "pc-no" }, [
		"一",
		"二",
		"三",
		"四",
		"五"
	][i]), /* @__PURE__ */ h("span", { className: "pc-label" }, o.label), /* @__PURE__ */ h("span", {
		className: "pc-box",
		"aria-hidden": "true"
	}, value === o.id ? "✓" : ""))));
}
function TaskPage({ react, c, run, task, draft, onDraft, state }) {
	const h = react.createElement, Fragment = react.Fragment;
	const [videoError, setVideoError] = react.useState(false);
	const seen = Array.isArray(draft.seen) ? draft.seen : [], order = Array.isArray(draft.order) ? draft.order : [], route = Array.isArray(draft.route) ? draft.route : [];
	const loads = Number.isInteger(draft.loads) ? draft.loads : 55, delivered = Number.isInteger(draft.delivered) ? draft.delivered : 0;
	const set = (values) => onDraft({
		...draft,
		...values
	}), w = wageBonus(loads);
	return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("span", { className: "pc-eyebrow" }, "第 ", c.no, " 章 · ", c.title, " · ", run.step + 1, " / ", c.tasks.length), /* @__PURE__ */ h("h2", {
		className: "pc-title",
		tabIndex: "-1"
	}, task.title), /* @__PURE__ */ h(Conversation, {
		react,
		scene: task.story?.scene,
		lines: conversationFor(task, state)
	}), task.clues && /* @__PURE__ */ h("div", { className: "pc-clues" }, task.clues.map(([id, label, text]) => /* @__PURE__ */ h("button", {
		type: "button",
		key: id,
		"aria-expanded": seen.includes(id),
		className: seen.includes(id) ? "open" : "",
		onClick: () => !seen.includes(id) && set({ seen: [...seen, id] })
	}, /* @__PURE__ */ h("b", null, seen.includes(id) ? "✓" : "＋", " ", label), seen.includes(id) && /* @__PURE__ */ h("span", null, text))), /* @__PURE__ */ h("small", null, "已查看 ", seen.length, " / ", task.clues.length, " 条线索")), task.kind === "wage" && /* @__PURE__ */ h("div", { className: "pc-wage" }, /* @__PURE__ */ h("label", { htmlFor: "campaign-loads" }, "今天运了 ", /* @__PURE__ */ h("strong", null, loads), " 车"), /* @__PURE__ */ h("input", {
		id: "campaign-loads",
		type: "range",
		min: "55",
		max: "100",
		step: "1",
		value: loads,
		onInput: (e) => set({ loads: Number(e.target.value) }),
		onChange: (e) => set({ loads: Number(e.target.value) })
	}), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("span", null, "定额内 55 车 × 2 分"), /* @__PURE__ */ h("b", null, "1.10 元")), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("span", null, "超额 ", loads - 55, " 车 × 4 分"), /* @__PURE__ */ h("b", null, w.extra, " 元")), /* @__PURE__ */ h("p", { className: "sum" }, /* @__PURE__ */ h("span", null, "当日奖金"), /* @__PURE__ */ h("b", null, w.total, " 元"))), task.kind === "slogan" && /* @__PURE__ */ h("div", { className: "pc-slogan" }, /* @__PURE__ */ h("div", {
		className: "slots",
		"aria-live": "polite"
	}, task.answer.map((_, i) => /* @__PURE__ */ h("span", {
		key: i,
		className: order[i] ? "on" : ""
	}, order[i] || "　"))), /* @__PURE__ */ h("div", { className: "pieces" }, task.pieces.map((p) => /* @__PURE__ */ h("button", {
		type: "button",
		key: p,
		disabled: order.includes(p),
		onClick: () => set({ order: [...order, p] })
	}, p))), /* @__PURE__ */ h("button", {
		type: "button",
		className: "pc-ink-link",
		disabled: !order.length,
		onClick: () => set({ order: order.slice(0, -1) })
	}, "撤回上一块"), order.length === 4 && !validAnswer(task, { order }) && /* @__PURE__ */ h("p", {
		className: "pc-hint",
		role: "status"
	}, "再读一遍，顺序还可以调整。")), task.kind === "delivery" && /* @__PURE__ */ h("div", { className: "pc-delivery" }, /* @__PURE__ */ h("ol", null, task.stops.map(([place, title], i) => /* @__PURE__ */ h("li", {
		key: place,
		className: i < delivered ? "done" : ""
	}, i < delivered ? "✓" : i + 1, " ", place, " · ", title))), delivered < task.stops.length ? /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("p", { className: "pc-letter" }, task.stops[delivered][2]), /* @__PURE__ */ h("button", {
		type: "button",
		className: "pc-ink-link",
		onClick: () => set({ delivered: delivered + 1 })
	}, "记录签收，下一封 →")) : /* @__PURE__ */ h("p", { className: "pc-hint" }, "五封信都送到了。回到报社，你准备怎样处理工人的意见？")), task.kind === "route" && /* @__PURE__ */ h("div", { className: "pc-route" }, /* @__PURE__ */ h("div", { className: "places" }, task.places.map(([id, name]) => /* @__PURE__ */ h("button", {
		type: "button",
		key: id,
		"aria-pressed": route.includes(id),
		className: route.includes(id) ? "on" : "",
		disabled: route.length === 3 && !route.includes(id),
		onClick: () => set({ route: route.includes(id) ? route.filter((x) => x !== id) : [...route, id] })
	}, /* @__PURE__ */ h("b", null, route.includes(id) ? route.indexOf(id) + 1 : "＋"), name))), /* @__PURE__ */ h("p", {
		className: "pc-hint",
		"aria-live": "polite"
	}, route.length ? route.map((id) => task.places.find((p) => p[0] === id)[1]).join(" → ") : "选三处地方，按顺序组成你的讲述。")), task.kind === "video" && /* @__PURE__ */ h("div", { className: "pc-video" }, !videoError ? /* @__PURE__ */ h("video", {
		controls: true,
		playsInline: true,
		preload: "metadata",
		poster: asset("/images/campaign/02-quarry.png"),
		onError: () => setVideoError(true)
	}, /* @__PURE__ */ h("source", {
		src: asset("/videos/campaign/" + task.video),
		type: "video/mp4"
	}), /* @__PURE__ */ h("track", {
		kind: "captions",
		src: asset("/videos/campaign/archive-blast-full.vtt"),
		srcLang: "zh",
		label: "文字摘要"
	})) : /* @__PURE__ */ h("p", { role: "status" }, "影像暂时无法播放，可以继续。")), task.options && (task.kind !== "delivery" || delivered === task.stops.length) && /* @__PURE__ */ h(Choices, {
		react,
		options: task.options,
		value: draft.choice,
		onPick: (choice) => set({ choice })
	}));
}
var submitLabel = (t) => t.kind === "video" ? "看完了，继续" : t.kind === "slogan" ? "挂起这句标语" : t.kind === "route" ? "确认讲述路线" : t.kind === "wage" ? "记下这张计工单" : t.kind === "observe" ? "收好线索，继续" : "就这样决定";
var answerOf = (t, d) => ["reading", "video"].includes(t.kind) ? { read: true } : t.kind === "wage" ? { loads: Number.isInteger(d.loads) ? d.loads : 55 } : d;
function CampaignApp({ react, Cover, Letter, Ballot, buildWorld }) {
	const h = react.createElement, Fragment = react.Fragment;
	const [state, dispatch] = react.useReducer(campaignReducer, null, readSave);
	const [ready, setReady] = react.useState(false), [worldError, setWorldError] = react.useState(""), [saveError, setSaveError] = react.useState(false), [archive, setArchive] = react.useState(false), [concept, setConcept] = react.useState(false), [pins, setPins] = react.useState([]);
	const [story, setStory] = react.useState(null), [stopCard, setStopCard] = react.useState(null), [card, setCard] = react.useState(null), [zoom, setZoom] = react.useState(null);
	const [mapOpen, setMapOpen] = react.useState(false);
	const resumedFromTasks = react.useRef(false);
	react.useEffect(() => {
		if (ready && !resumedFromTasks.current && new URLSearchParams(location.search).get("continue") === "1") {
			resumedFromTasks.current = true;
			dispatch({ type: state.introSeen ? "CONTINUE" : "START" });
		}
	}, [ready]);
	const [mapBox, setMapBox] = react.useState({
		width: innerWidth,
		height: innerHeight,
		bottom: innerHeight * .6
	});
	react.useLayoutEffect(() => {
		if (state.phase !== "map") return;
		const measure = () => setMapBox({
			width: innerWidth,
			height: innerHeight,
			bottom: document.querySelector(".campaign-chapter-list")?.getBoundingClientRect().top || innerHeight * .6
		});
		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, [state.phase]);
	const mapLabels = react.useMemo(() => state.phase === "map" ? mapLabelPositions(pins, mapBox) : [], [
		pins,
		mapBox,
		state.phase
	]);
	const host = react.useRef(null), engine = react.useRef(null), stateRef = react.useRef(state), arriveRef = react.useRef(() => {}), autoArrive = react.useRef(false), lastSeen = react.useRef("");
	stateRef.current = state;
	const c = CHAPTERS.find((ch) => ch.id === state.active), run = state.runs[state.active], task = c?.tasks[run?.step || 0];
	const draft = task && run?.draft?.[task.id] || {};
	const chapterView = [
		"chapter",
		"feedback",
		"result"
	].includes(state.phase), exploring = state.phase === "explore" && !!c;
	const target = c && run ? exploreTarget(c, run.step, run.draft?.[task.id]) : null;
	const whitebox = new URLSearchParams(location.search).get("stage") === "whitebox";
	react.useEffect(() => {
		try {
			localStorage.setItem(SAVE_KEY, JSON.stringify(state));
			setSaveError(false);
		} catch {
			setSaveError(true);
		}
	}, [state]);
	arriveRef.current = () => {
		const s = stateRef.current;
		if (s.phase !== "explore") return;
		const ch = CHAPTERS.find((x) => x.id === s.active), r = s.runs[s.active];
		if (!ch || !r) return;
		const t = ch.tasks[r.step], d = r.draft?.[t.id], goal = exploreTarget(ch, r.step, d);
		autoArrive.current = false;
		if (goal.stop !== void 0 && !r.answers[t.id] && (d?.delivered || 0) < t.stops.length) setStopCard(goal.stop);
		else dispatch({
			type: "ARRIVE",
			id: s.active
		});
	};
	react.useEffect(() => {
		let live = true;
		try {
			engine.current = buildWorld(host.current, {
				onReady: () => {
					if (live) setReady(true);
				},
				onSceneReady: () => {
					if (live) setReady((v) => v === true ? "loaded" : true);
				},
				onFrame: (frame) => {
					if (!live) return;
					const phase = stateRef.current.phase;
					if (phase === "map") setPins(frame.campaignPins || []);
					if (phase === "explore") {
						setStory(frame.story || null);
						if (autoArrive.current && frame.story && frame.story.distance < 1.3) arriveRef.current();
					}
				},
				onRequestStory: () => arriveRef.current(),
				onRequestEnter: () => {},
				onRequestDocument: () => {},
				onRequestBallot: () => {},
				onRequestExit: () => {}
			});
		} catch (e) {
			console.error(e);
			setWorldError("三维场景暂时不可用，已切换为场景图，你仍可完成故事。");
			setReady(true);
		}
		return () => {
			live = false;
			engine.current?.dispose();
			engine.current = null;
		};
	}, []);
	const delivered = Number.isInteger(draft.delivered) ? draft.delivered : 0;
	const sceneKey = state.phase === "map" ? "map" : exploring ? `explore:${c.id}:${run.step}:${delivered}:${stopCard ?? ""}` : chapterView && c ? staged(c, task) ? `scene:${c.id}:${task?.id}` : `hold:${c.id}` : "cover";
	react.useEffect(() => {
		const w = engine.current;
		if (!w) return;
		const resumeWalking = autoArrive.current;
		w.start();
		autoArrive.current = false;
		if (sceneKey === "map") w.sceneView("aerial");
		else if (exploring) if (stopCard !== null) w.hold();
		else {
			w.explore({
				id: c.id,
				x: target.x,
				z: target.z
			});
			if (resumeWalking) autoArrive.current = w.walkToStory();
		}
		else if (chapterView && c) if (staged(c, task)) w.campaignScene(c.id, task?.id);
		else w.hold();
	}, [sceneKey, ready]);
	react.useEffect(() => {
		engine.current?.pause(["cover", "intro"].includes(state.phase) || archive || concept || !!zoom || mapOpen);
	}, [
		state.phase,
		archive,
		concept,
		zoom,
		mapOpen,
		ready
	]);
	react.useEffect(() => {
		if (!mapOpen) return;
		const close = (e) => {
			if (e.key === "Escape") setMapOpen(false);
		};
		window.addEventListener("keydown", close);
		return () => window.removeEventListener("keydown", close);
	}, [mapOpen]);
	react.useEffect(() => {
		if (state.phase !== "explore") {
			setStory(null);
			setStopCard(null);
		}
	}, [state.phase]);
	react.useEffect(() => {
		if (!exploring || !run || run.step !== 0 || Object.keys(run.answers).length) return;
		const key = c.id;
		if (lastSeen.current === key) return;
		lastSeen.current = key;
		setCard(c.id);
	}, [state.phase, state.active]);
	react.useEffect(() => {
		if (!card) return;
		const timer = setTimeout(() => setCard(null), 5200);
		return () => clearTimeout(timer);
	}, [card]);
	react.useEffect(() => {
		if (!exploring) setCard(null);
	}, [exploring]);
	react.useEffect(() => {
		const escape = (e) => {
			if (e.key === "Escape") {
				setArchive(false);
				setConcept(false);
				setZoom(null);
				setStopCard(null);
			}
		};
		window.addEventListener("keydown", escape);
		return () => window.removeEventListener("keydown", escape);
	}, []);
	react.useEffect(() => {
		if (!archive && !concept) return;
		const previous = document.activeElement, dialog = document.querySelector(".campaign-modal[data-notes]"), nodes = () => [...dialog.querySelectorAll("button:not(:disabled),a[href],summary,[tabindex=\"0\"]")];
		nodes()[0]?.focus();
		const trap = (e) => {
			if (e.key !== "Tab") return;
			const items = nodes(), first = items[0], last = items[items.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last?.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first?.focus();
			}
		};
		dialog.addEventListener("keydown", trap);
		return () => {
			dialog.removeEventListener("keydown", trap);
			previous?.focus?.();
		};
	}, [archive, concept]);
	const ballotOpen = state.phase === "chapter" && task?.id === "ballot" && draft.npcReady;
	react.useEffect(() => {
		if (!ballotOpen) return;
		const key = (e) => {
			const s = stateRef.current, t = CHAPTERS.find((x) => x.id === s.active)?.tasks[s.runs[s.active]?.step || 0];
			if (t?.id !== "ballot" || e.target?.tagName === "INPUT") return;
			const d = s.runs[s.active].draft?.ballot || {};
			if ([
				"1",
				"2",
				"3"
			].includes(e.key)) {
				e.preventDefault();
				dispatch({
					type: "DRAFT",
					taskId: "ballot",
					answer: {
						...d,
						choice: t.options[Number(e.key) - 1].id
					}
				});
			} else if (e.key === "Enter" && !e.defaultPrevented && validAnswer(t, d)) {
				e.preventDefault();
				dispatch({
					type: "SUBMIT",
					taskId: "ballot",
					answer: d
				});
			}
		};
		window.addEventListener("keydown", key);
		return () => window.removeEventListener("keydown", key);
	}, [ballotOpen]);
	const go = (id) => dispatch({
		type: chapterStatus(state, id) === "completed" ? "OPEN" : "EXPLORE",
		id
	});
	const autoWalk = () => {
		const w = engine.current;
		if (w && !worldError && w.walkToStory()) autoArrive.current = true;
		else arriveRef.current();
	};
	const links = (ch) => /* @__PURE__ */ h("div", { className: "campaign-sources" }, ch.sources.map((id) => /* @__PURE__ */ h("a", {
		key: id,
		href: SOURCES[id].url,
		target: "_blank",
		rel: "noreferrer"
	}, SOURCES[id].title, " ↗")));
	const statusText = (ch, status) => status === "locked" ? `完成第${CHAPTERS.findIndex((x) => x.id === ch.id)}章后解锁` : status === "completed" ? "已完成 · 回看" : state.runs[ch.id] ? "继续故事" : "可以开始";
	const leave = () => dispatch({ type: "LEAVE" });
	const followingTask = c && run ? c.tasks[run.step + 1] : null;
	const afterChapter = c ? nextChapter({ completed: [...new Set([...state.completed, c.id])] }) : null;
	const prevChapter = c ? CHAPTERS[CHAPTERS.findIndex((x) => x.id === c.id) - 1] : null;
	const near = exploring && story && story.distance < 2.6 && stopCard === null;
	let page = null;
	if (chapterView && c && task) {
		const answer = run.answers[task.id];
		if (state.phase === "chapter" && ["ballot", "read"].includes(task.id) && !draft.npcReady) page = /* @__PURE__ */ h(Parchment, {
			react,
			label: task.title,
			speaker: task.story.speaker,
			onClose: leave,
			action: {
				label: task.story.action,
				onClick: () => dispatch({
					type: "DRAFT",
					taskId: task.id,
					answer: {
						...draft,
						npcReady: true
					}
				})
			}
		}, /* @__PURE__ */ h("h2", {
			className: "pc-title",
			tabIndex: "-1"
		}, task.title), /* @__PURE__ */ h(Conversation, {
			react,
			scene: task.story.scene,
			lines: conversationFor(task, state)
		}));
		else if (state.phase === "chapter" && task.id === "ballot") page = /* @__PURE__ */ h("div", {
			className: "campaign-modal pc-modal",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "选票"
		}, /* @__PURE__ */ h(Ballot, {
			react,
			candidates: task.options.map((o) => ({
				id: o.id,
				name: o.label.split(" · ")[0],
				policy: o.label.split(" · ")[1]
			})),
			choice: task.options.find((o) => o.id === draft.choice),
			casting: false,
			onChoose: (candidate) => dispatch({
				type: "DRAFT",
				taskId: "ballot",
				answer: {
					...draft,
					choice: candidate.id
				}
			}),
			onCast: () => dispatch({
				type: "SUBMIT",
				taskId: "ballot",
				answer: draft
			}),
			onLeave: leave
		}));
		else if (state.phase === "chapter" && task.id === "read") page = /* @__PURE__ */ h("div", {
			className: "campaign-modal pc-modal",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "来信"
		}, /* @__PURE__ */ h(Letter, {
			react,
			onClose: () => dispatch({
				type: "SUBMIT",
				taskId: "read",
				answer: { read: true }
			})
		}));
		else if (state.phase === "chapter") {
			const a = answerOf(task, draft);
			page = /* @__PURE__ */ h(Parchment, {
				react,
				label: task.title,
				speaker: task.story?.speaker,
				onClose: leave,
				action: {
					label: submitLabel(task),
					disabled: !validAnswer(task, a),
					onClick: () => dispatch({
						type: "SUBMIT",
						taskId: task.id,
						answer: a
					})
				}
			}, /* @__PURE__ */ h(TaskPage, {
				key: task.id,
				react,
				c,
				run,
				task,
				draft,
				state,
				onDraft: (value) => dispatch({
					type: "DRAFT",
					taskId: task.id,
					answer: value
				})
			}));
		} else if (state.phase === "feedback" && answer) {
			const kind = historyMatch(task, answer), rv = task.reveal, last = run.step === c.tasks.length - 1;
			const banner = kind === "match" ? task.story?.historyLabel || "你和当年的人，做了同样的决定" : kind === "other" ? "历史上，走的是另一条路" : rv?.banner || "史料里的这一刻";
			const response = responseFor(task, answer);
			page = /* @__PURE__ */ h(Parchment, {
				react,
				label: task.title + " · 回响",
				speaker: response.speaker,
				onClose: leave,
				action: {
					label: last ? "收进手记" : followingTask?.at ? "动身：" + followingTask.at.label : "继续：" + followingTask.title,
					onClick: () => dispatch({ type: "NEXT" })
				}
			}, /* @__PURE__ */ h("span", { className: "pc-eyebrow" }, "第 ", c.no, " 章 · ", task.title), /* @__PURE__ */ h("h2", {
				className: "pc-title",
				tabIndex: "-1"
			}, CAST[response.speaker]?.name), task.options && /* @__PURE__ */ h("p", { className: "pc-player-line" }, "我：", task.options.find((o) => o.id === answer.choice)?.label), /* @__PURE__ */ h(Conversation, {
				react,
				lines: [response]
			}), task.kind === "wage" && /* @__PURE__ */ h("p", { className: "pc-mine" }, answer.loads, " 车 · 当日奖金 ", wageBonus(answer.loads).total, " 元"), rv && /* @__PURE__ */ h("details", {
				key: task.id,
				className: "pc-reveal " + kind,
				open: kind === "match"
			}, /* @__PURE__ */ h("summary", null, kind === "match" ? /* @__PURE__ */ h("span", { className: "pc-seal" }, banner) : "翻看当年的记录"), /* @__PURE__ */ h("p", { className: "pc-text" }, kind === "match" ? rv.match : kind === "other" ? rv.other : rv.text), rv.after && /* @__PURE__ */ h("p", { className: "pc-text" }, rv.after), /* @__PURE__ */ h(Media, {
				react,
				items: rv.media,
				onZoom: setZoom
			}), /* @__PURE__ */ h(Sources, {
				react,
				ids: rv.source
			})));
		} else if (state.phase === "result") page = /* @__PURE__ */ h(Parchment, {
			react,
			label: c.title + " · 本章回响",
			onClose: leave,
			action: {
				label: afterChapter ? `前往第 ${afterChapter.no} 章 · ${afterChapter.title}` : "收好全部手记，回到地图",
				onClick: () => dispatch({ type: "FINISH" })
			}
		}, /* @__PURE__ */ h("span", { className: "pc-eyebrow" }, "第 ", c.no, " 章 · 本章回响"), /* @__PURE__ */ h("h2", {
			className: "pc-title",
			tabIndex: "-1"
		}, c.title), /* @__PURE__ */ h("ol", { className: "pc-records" }, c.tasks.map((t) => /* @__PURE__ */ h("li", { key: t.id }, /* @__PURE__ */ h("b", null, t.title), /* @__PURE__ */ h("span", null, run.answers[t.id] && responseFor(t, run.answers[t.id]).text), run.answers[t.id] && historyMatch(t, run.answers[t.id]) === "match" && /* @__PURE__ */ h("em", null, t.story?.historyLabel || "与史实同向")))), /* @__PURE__ */ h("details", { className: "pc-history" }, /* @__PURE__ */ h("summary", null, "当年的记录"), /* @__PURE__ */ h("p", { className: "pc-text" }, c.history), /* @__PURE__ */ h(Sources, {
			react,
			ids: c.sources
		})));
	}
	const stopTask = exploring && task?.stops && stopCard !== null ? task : null;
	const stopStory = stopTask ? DELIVERY_STORIES[stopCard] : null;
	return /* @__PURE__ */ h("main", {
		className: "world-game campaign-game " + (state.phase === "cover" ? "landing" : "playing"),
		"data-campaign-phase": state.phase
	}, /* @__PURE__ */ h("div", {
		ref: host,
		className: "campaign-world",
		"aria-label": "蛇口故事三维场景"
	}), worldError && /* @__PURE__ */ h("img", {
		className: "campaign-scene-fallback",
		src: asset("/images/campaign/" + (c?.image || "01-arrival") + ".png"),
		alt: "对应章节的场景概念图"
	}), /* @__PURE__ */ h("div", { className: "campaign-shade" }), state.phase === "cover" && /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h(Cover, {
		createElement: h,
		ready: !!ready,
		error: "",
		onStart: () => dispatch({ type: "START" })
	}), state.introSeen && /* @__PURE__ */ h("button", {
		className: "campaign-resume",
		onClick: () => dispatch({ type: "CONTINUE" })
	}, "继续旅程 · 已完成 ", state.completed.length, " / 6 章 →")), state.phase === "intro" && /* @__PURE__ */ h(StoryIntro, {
		react,
		onComplete: () => dispatch({ type: "INTRO_DONE" })
	}), !["cover", "intro"].includes(state.phase) && /* @__PURE__ */ h(Fragment, null, !chapterView && /* @__PURE__ */ h(GameHud, {
		react,
		engine: engine.current,
		onMap: () => setMapOpen(true),
		taskState: state,
		onContinueTask: (id) => {
			if (exploring) autoWalk();
			else if (id) dispatch({
				type: "EXPLORE",
				id
			});
			else dispatch({ type: "MAP" });
		}
	}), /* @__PURE__ */ h("header", { className: "campaign-header" }, /* @__PURE__ */ h("button", {
		className: "campaign-brand",
		onClick: () => dispatch({ type: "HOME" }),
		"aria-label": "返回首页"
	}, /* @__PURE__ */ h("span", null, "蛇口"), /* @__PURE__ */ h("strong", null, "造城记")), /* @__PURE__ */ h("div", { className: "campaign-location" }, /* @__PURE__ */ h("span", null, state.phase === "map" ? "沿着故事，走进蛇口" : `第 ${c?.no} 章 · ${c?.date}`), /* @__PURE__ */ h("b", null, state.phase === "map" ? "章节地图" : c?.title)), /* @__PURE__ */ h("nav", null, (chapterView || exploring) && /* @__PURE__ */ h("button", { onClick: () => dispatch({ type: "MAP" }) }, "章节地图"), /* @__PURE__ */ h("button", { onClick: () => setArchive(true) }, "旅途手记"), whitebox && /* @__PURE__ */ h("b", { className: "whitebox-label" }, "白模检查"))), state.phase === "map" && /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("section", { className: "campaign-map-intro" }, /* @__PURE__ */ h("span", { className: "campaign-eyebrow" }, "SHEKOU / A CITY IN THE MAKING"), /* @__PURE__ */ h("h1", { tabIndex: "-1" }, "一座城，", /* @__PURE__ */ h("br", null), "六段亲历。"), /* @__PURE__ */ h("p", null, "从海边的一封信开始。", /* @__PURE__ */ h("br", null), "走到发光的地方，故事就会展开。"), /* @__PURE__ */ h("div", { className: "campaign-total" }, /* @__PURE__ */ h("span", null, String(state.completed.length).padStart(2, "0")), " / 06 章已完成")), /* @__PURE__ */ h("div", {
		className: "campaign-map-pins",
		"aria-label": "地图上的故事地点"
	}, CHAPTERS.map((ch, i) => {
		const status = chapterStatus(state, ch.id);
		return /* @__PURE__ */ h("button", {
			key: ch.id,
			disabled: status === "locked",
			className: "campaign-map-pin " + status,
			style: mapLabels[i],
			onClick: () => go(ch.id),
			"aria-label": `${ch.no} ${ch.title} ${statusText(ch, status)}`
		}, /* @__PURE__ */ h("span", null, status === "locked" ? /* @__PURE__ */ h(Lock, { react }) : ch.no), /* @__PURE__ */ h("b", null, ch.title));
	})), /* @__PURE__ */ h("section", {
		className: "campaign-chapter-list",
		"aria-label": "按顺序解锁的六个章节"
	}, CHAPTERS.map((ch, i) => {
		const status = chapterStatus(state, ch.id);
		return /* @__PURE__ */ h("button", {
			key: ch.id,
			disabled: status === "locked",
			onClick: () => go(ch.id),
			className: "chapter-card " + status,
			"aria-label": `第${i + 1}章 ${ch.title} ${statusText(ch, status)}`
		}, /* @__PURE__ */ h("img", {
			src: asset("/images/campaign/" + ch.image + ".png"),
			alt: ""
		}), /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("span", { className: "chapter-no" }, ch.no), /* @__PURE__ */ h("h2", null, ch.title), /* @__PURE__ */ h("p", null, ch.subtitle), /* @__PURE__ */ h("small", null, status === "locked" && /* @__PURE__ */ h(Lock, { react }), " ", statusText(ch, status), " ", status !== "locked" && "→")));
	}))), exploring && target && /* @__PURE__ */ h(Fragment, null, story?.visible && stopCard === null && /* @__PURE__ */ h("div", {
		className: "explore-marker" + (near ? " near" : ""),
		style: {
			left: story.x + "%",
			top: story.y + "%"
		},
		"aria-hidden": "true"
	}, /* @__PURE__ */ h("b", null, target.label), /* @__PURE__ */ h("span", null, Math.round(story.distance), " 米"), /* @__PURE__ */ h("i", null)), near && /* @__PURE__ */ h("button", {
		className: "explore-prompt",
		onClick: () => arriveRef.current()
	}, /* @__PURE__ */ h("kbd", null, "E"), target.stop !== void 0 ? "递交信件" : "走近 · " + target.label), stopCard === null && /* @__PURE__ */ h("section", {
		className: "explore-hud",
		"aria-live": "polite"
	}, /* @__PURE__ */ h("span", { className: "pc-eyebrow" }, "第 ", c.no, " 章 · ", c.title, target.stop !== void 0 ? ` · 送信 ${target.stop + 1} / ${task.stops.length}` : ""), /* @__PURE__ */ h("p", null, target.lead || c.lead), /* @__PURE__ */ h("div", { className: "explore-row" }, /* @__PURE__ */ h("span", { className: "explore-goal" }, "◎ ", target.label, story ? ` · ${Math.round(story.distance)} 米` : ""), /* @__PURE__ */ h("button", { onClick: autoWalk }, worldError ? "直接前往" : "自动前往")), /* @__PURE__ */ h("small", null, "WASD / 方向键行走 · 拖动旋转视角 · Shift 快走 · 走进光圈按 E")), card === c.id && /* @__PURE__ */ h("div", {
		className: "chapter-titlecard",
		role: "status",
		onClick: () => setCard(null)
	}, prevChapter && state.completed.includes(prevChapter.id) && /* @__PURE__ */ h("span", { className: "bridge" }, "第 ", prevChapter.no, " 章「", prevChapter.title, "」已收进手记"), /* @__PURE__ */ h("small", null, "第 ", c.no, " 章 · ", c.date), /* @__PURE__ */ h("h1", null, c.title), /* @__PURE__ */ h("p", null, c.subtitle))), /* @__PURE__ */ h("footer", { className: "campaign-footer" }, /* @__PURE__ */ h("span", null, saveError ? "进度暂时无法写入本机，请保持此页面打开" : "进度保存在这台设备"), /* @__PURE__ */ h("span", null, worldError || "走进现场 · 作出选择 · 遇见史实"))), page, mapOpen && /* @__PURE__ */ h("div", {
		className: "world-note-back hud-full-map",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "蛇口完整地图"
	}, /* @__PURE__ */ h("article", { className: "world-note map-note" }, /* @__PURE__ */ h("button", {
		className: "note-close",
		"aria-label": "关闭地图",
		onClick: () => setMapOpen(false)
	}, "关闭 ×"), /* @__PURE__ */ h(DistrictMap, {
		react,
		engine: engine.current,
		onNavigate: (id) => {
			setMapOpen(false);
			autoArrive.current = false;
			engine.current?.pause(false);
			engine.current?.walkTo(id);
		}
	}), /* @__PURE__ */ h("button", {
		className: "map-chapters-link",
		onClick: () => {
			setMapOpen(false);
			dispatch({ type: "MAP" });
		}
	}, "查看六章旅程 →"))), stopTask && /* @__PURE__ */ h(Parchment, {
		react,
		label: "送信 · " + stopTask.stops[stopCard][0],
		speaker: stopStory.speaker,
		onClose: () => setStopCard(null),
		action: {
			label: stopStory.action,
			disabled: stopCard === 2 && !stopTask.options.some((o) => o.id === draft.choice),
			onClick: () => {
				setStopCard(null);
				dispatch({ type: "DELIVER" });
			}
		}
	}, /* @__PURE__ */ h("span", { className: "pc-eyebrow" }, "第 ", c.no, " 章 · 五封信 · 第 ", stopCard + 1, " 封"), /* @__PURE__ */ h("h2", {
		className: "pc-title",
		tabIndex: "-1"
	}, stopTask.stops[stopCard][1]), /* @__PURE__ */ h(Conversation, {
		react,
		scene: stopStory.scene,
		lines: deliveryConversation(stopCard, draft.choice)
	}), stopCard === 2 && /* @__PURE__ */ h(Choices, {
		react,
		options: stopTask.options,
		value: draft.choice,
		onPick: (choice) => dispatch({
			type: "DELIVERY_CHOICE",
			choice
		})
	}), /* @__PURE__ */ h("ol", { className: "pc-delivery-mini" }, stopTask.stops.map(([place], i) => /* @__PURE__ */ h("li", {
		key: place,
		className: i < stopCard ? "done" : i === stopCard ? "now" : ""
	}, i < stopCard ? "✓" : i + 1, " ", place)))), zoom && /* @__PURE__ */ h("div", {
		className: "campaign-modal pc-zoom",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": zoom.caption,
		onClick: () => setZoom(null)
	}, /* @__PURE__ */ h("figure", null, /* @__PURE__ */ h("img", {
		src: asset(zoom.image),
		alt: zoom.caption
	}), /* @__PURE__ */ h("figcaption", null, zoom.caption, " · 点击任意处关闭"))), archive && /* @__PURE__ */ h("div", {
		className: "campaign-modal",
		"data-notes": true,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "旅途手记"
	}, /* @__PURE__ */ h("article", null, /* @__PURE__ */ h("button", {
		className: "campaign-close",
		onClick: () => setArchive(false)
	}, "关闭 ×"), /* @__PURE__ */ h("span", { className: "campaign-eyebrow" }, "FIELD NOTES"), /* @__PURE__ */ h("h2", null, "旅途手记"), /* @__PURE__ */ h("p", null, "已完成 ", state.completed.length, " / 6 章。游戏体验与史料记载分开保存。"), state.completed.length ? CHAPTERS.filter((ch) => state.completed.includes(ch.id)).map((ch) => /* @__PURE__ */ h("details", { key: ch.id }, /* @__PURE__ */ h("summary", null, ch.no, " ", ch.title), /* @__PURE__ */ h("p", null, ch.history), links(ch))) : /* @__PURE__ */ h("p", null, "从第一章开始，你的经历会留在这里。"), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("p", { className: "campaign-small" }, "六张场景参考图与四张材质贴图为 AI 辅助生成；三维场景是艺术重构。人物对话为剧情改编，非历史逐字引语；来信、候选人与个人选择不作为历史档案。历史照片沿用六月版资料并标注来源；民主选举影像为情境影像，非原始档案；开山影片沿用旧版素材，精确镜头来源仍待核对。"))), concept && c && /* @__PURE__ */ h("div", {
		className: "campaign-modal concept-modal",
		"data-notes": true,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "场景参考图"
	}, /* @__PURE__ */ h("article", null, /* @__PURE__ */ h("button", {
		className: "campaign-close",
		onClick: () => setConcept(false)
	}, "关闭 ×"), /* @__PURE__ */ h("img", {
		src: asset("/images/campaign/" + c.image + ".png"),
		alt: c.title + "场景参考图"
	}), /* @__PURE__ */ h("p", null, c.title, " · AI 场景设计参考，非实际游戏截图。场景按此逐步搭建与渲染。"))));
}
//#endregion
//#region src/storyIntro.js
var SCENES = [
	{
		bg: asset("/images/history/prologue-map-bg.png"),
		bgStyle: {
			filter: "sepia(0.15) brightness(0.7)",
			transformOrigin: "50% 50%"
		},
		lines: [
			"1979年。",
			"十年浩劫刚刚结束，百废待兴。",
			"一个古老的国家，决定打开尘封已久的大门。"
		]
	},
	{
		bg: asset("/images/history/prologue-map-bg.png"),
		bgStyle: {
			filter: "sepia(0.15) brightness(0.6)",
			transform: "scale(1.6)",
			transformOrigin: "62% 68%"
		},
		lines: [
			"深圳以南，有一个半岛。",
			"三面环山，一面朝海。名叫蛇口。",
			"没有公路，没有工厂。只有荒草、蚊虫，和几条渔船。"
		]
	},
	{
		bg: asset("/images/history/wasteland-1970s.jpg"),
		bgStyle: { filter: "sepia(0.35) brightness(0.55) contrast(1.1)" },
		lines: [
			"北京一纸批文，划了2.14平方公里给招商局。",
			"\"你们自己去闯。中央不给钱。\"",
			"所有人都觉得，这是一个不可能完成的任务。"
		]
	},
	{
		isDialogue: true,
		bg: asset("/images/history/wasteland-1970s.jpg"),
		bgStyle: { filter: "sepia(0.2) brightness(0.3) blur(3px)" },
		portrait: asset("/images/history/yuan-geng-portrait.jpg"),
		speaker: "袁庚",
		lines: [
			"但有一个人不这么想。",
			"他叫袁庚，六十二岁，刚从秦城监狱放出来。",
			"\"中央给了我们一块地。怎么建，我说了算。\"",
			"\"——你，来当我的参谋。\""
		]
	}
];
function StoryIntro({ react: React, onComplete }) {
	const { createElement: h, useReducer, useEffect, useRef, useState } = React;
	const root = useRef(null);
	const completing = useRef(false);
	const [leaving, setLeaving] = useState(false);
	const [reducedMotion] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
	const [state, dispatch] = useReducer((current, action) => {
		const scene = SCENES[current.scene];
		const line = scene.lines[current.line];
		if (action === "ready") return {
			...current,
			ready: true
		};
		if (action === "tick") return {
			...current,
			chars: Math.min(line.length, current.chars + 1)
		};
		if (action === "done") return {
			...current,
			done: true
		};
		if (action !== "next" || !current.ready || current.done) return current;
		if (current.chars < line.length) return {
			...current,
			chars: line.length
		};
		if (current.line + 1 < scene.lines.length) return {
			...current,
			line: current.line + 1,
			chars: 0
		};
		if (current.scene + 1 < SCENES.length) return {
			scene: current.scene + 1,
			line: 0,
			chars: 0,
			ready: false,
			done: false
		};
		return {
			...current,
			done: true
		};
	}, {
		scene: 0,
		line: 0,
		chars: 0,
		ready: false,
		done: false
	});
	const scene = SCENES[state.scene];
	const line = scene.lines[state.line];
	useEffect(() => {
		root.current?.focus();
	}, []);
	useEffect(() => {
		const timer = setTimeout(() => dispatch("ready"), reducedMotion ? 50 : 1200);
		return () => clearTimeout(timer);
	}, [state.scene, reducedMotion]);
	useEffect(() => {
		if (!state.ready || state.done || leaving) return;
		const full = state.chars >= line.length;
		const last = state.scene === SCENES.length - 1 && state.line === scene.lines.length - 1;
		const punctuation = /[。，、：；！？—]/.test(line[state.chars - 1] || "") ? 160 : 0;
		const timer = setTimeout(() => dispatch(full ? last ? "done" : "next" : reducedMotion ? "next" : "tick"), full ? 1100 : reducedMotion ? 0 : (scene.isDialogue ? 52 : 38) + punctuation);
		return () => clearTimeout(timer);
	}, [
		state,
		line,
		scene,
		leaving,
		reducedMotion
	]);
	useEffect(() => {
		if (!leaving) return;
		const timer = setTimeout(onComplete, reducedMotion ? 0 : 650);
		return () => clearTimeout(timer);
	}, [
		leaving,
		onComplete,
		reducedMotion
	]);
	const finish = (event) => {
		event?.stopPropagation();
		if (completing.current) return;
		completing.current = true;
		setLeaving(true);
	};
	const advance = (event) => {
		if (event.target.closest("button") || leaving) return;
		if (event.type === "keydown") {
			if (![
				" ",
				"Enter",
				"ArrowRight"
			].includes(event.key)) return;
			event.preventDefault();
		}
		dispatch("next");
	};
	return h("section", {
		ref: root,
		className: `story-intro ${scene.isDialogue ? "is-dialogue" : ""} ${leaving ? "is-leaving" : ""}`,
		tabIndex: -1,
		"aria-label": "故事引入",
		onClick: advance,
		onKeyDown: advance,
		"data-story-scene": state.scene + 1
	}, [
		h("img", {
			key: `bg-${state.scene}`,
			className: "story-intro-background",
			src: scene.bg,
			alt: "",
			style: scene.bgStyle
		}),
		h("div", {
			key: "shade",
			className: "story-intro-shade"
		}),
		h("button", {
			key: "skip",
			type: "button",
			className: "story-intro-skip",
			onClick: finish,
			disabled: leaving,
			"aria-label": "跳过故事引入，走进蛇口街区"
		}, "跳过 ▸"),
		scene.isDialogue && h("div", {
			key: "portrait",
			className: "story-intro-portrait"
		}, h("img", {
			src: scene.portrait,
			alt: scene.speaker
		})),
		h("div", {
			key: "caption",
			className: "story-intro-caption"
		}, [scene.isDialogue && state.line > 1 && h("div", {
			key: "speaker",
			className: "story-intro-speaker"
		}, scene.speaker), h("p", {
			key: "line",
			"aria-label": line
		}, [line.slice(0, state.chars), state.chars < line.length && h("span", {
			key: "cursor",
			className: "story-intro-cursor",
			"aria-hidden": true
		})])]),
		state.done && h("button", {
			key: "enter",
			type: "button",
			className: "story-intro-enter",
			disabled: leaving,
			onClick: finish
		}, "展开蛇口地图 →"),
		h("div", {
			key: "progress",
			className: "story-intro-progress",
			"aria-label": `故事引入 ${state.scene + 1} / ${SCENES.length}`
		}, SCENES.map((_, index) => h("span", {
			key: index,
			className: index === state.scene ? "active" : ""
		}))),
		h("small", {
			key: "note",
			className: "story-intro-note"
		}, "历史情境演绎 · 对话为游戏叙事")
	]);
}
//#endregion
export { CampaignApp, DistrictMap, DistrictReview, GameHud, StoryIntro };
