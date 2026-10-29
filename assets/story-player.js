export const CANDIDATES = [
  { id: 'reformer', name: '张国栋', role: '原工程科副科长', mark: '革新', idea: '让愿意做事的人，有机会把事情做成。', policy: '深化计件工资改革，推行竞聘上岗。', consequence: '效率与机会', reply: '把更多机会交给愿意尝试的人，也让改革的风险得到认真讨论。' },
  { id: 'moderate', name: '陈慧芳', role: '工会副主席', mark: '民生', idea: '城市向前走的时候，也要照顾每一个人。', policy: '兼顾生产效率与工人福利，改善社区生活。', consequence: '生活与保障', reply: '把工人的住房、福利与日常生活，带回城市发展的议程。' },
  { id: 'conservative', name: '刘德明', role: '党委组织科科长', mark: '秩序', idea: '让每一步探索，都有可以遵循的规则。', policy: '完善组织管理，为改革建立明确的边界。', consequence: '规则与责任', reply: '为探索建立清晰的规则，让权责与发展的脚步相互配合。' },
];
export const PLACES = [
  { id: 'harbor', no: '01', name: '顺岸码头', en: 'THE HARBOUR', x: .22, y: .48, title: '潮水把远方带来。', body: '汽笛从海面传来。货轮靠岸，工人换班，一座新城的日常从这里开始。', note: '码头连接开山、建设与工资改革。在完整游戏中，你在这里作出的决定将影响生产和工人的生活。' },
  { id: 'hall', no: '02', name: '职工礼堂', en: 'THE ASSEMBLY HALL', x: .47, y: .31, title: '这一次，听见每个人。', body: '木椅已经摆好，选票还没有落下。门后，是一场关于这座城市未来的讨论。', note: '在本段体验中，你将阅读三位候选人的主张，并亲手投入一张选票。' },
  { id: 'press', no: '03', name: '蛇口通讯社', en: 'THE NEWSROOM', x: .69, y: .53, title: '让一封信，走得更远。', body: '油墨还没有干。一封工人来信摊在编辑桌上，等待被阅读，也等待回应。', note: '报社连接城市里的不同声音。完整游戏已有送信故事；下一阶段将把投递、阅读和编辑连入同一个世界。' },
  { id: 'office', no: '04', name: '行政办公楼', en: 'THE OFFICE', x: .78, y: .29, title: '每一份文件，都通向生活。', body: '窗外是工地，桌上是等待批复的文件。纸上的一个决定，很快就会抵达城里的某个角落。', note: '办公室连接合同、制度与城市资源。完整游戏中已有合同签署和政策选择。' },
];
export const STORAGE_KEY = 'shekou-spatial-chapter-v1';
export function readProgress() {
  try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY)); return CANDIDATES.some(c => c.id === data?.vote) ? data : null; } catch { return null; }
}
