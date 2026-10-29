// Original SVG exports from Desktop/蛇口/选票点击逻辑.
const BASE = new URL('../images/figma-ballot/', import.meta.url);
const UI = new URL('../images/figma-letter/', import.meta.url);
const ROWS = [316, 405, 489];
const POLICY_ART = [
  { file: 'policy-reformer.svg', panel: 'policy-panel-5.svg', width: 405, height: 25 },
  { file: 'policy-moderate.svg', panel: 'policy-panel-6.svg', width: 483, height: 26 },
  { file: 'policy-conservative.svg', panel: 'policy-panel-8.svg', width: 456, height: 25 },
];
const fit = () => {
  const scale = Math.max(.1, Math.min(1, (innerWidth - 28) / 683, (innerHeight - 32) / 1040));
  return { scale, insetTooltips: innerWidth < 1167 * scale + 28 };
};

export function FigmaBallot({ react: React, candidates, choice, casting, onChoose, onCast, onLeave }) {
  const h = React.createElement;
  const [layout, setLayout] = React.useState(fit);
  const [hovered, setHovered] = React.useState(null);
  const [focused, setFocused] = React.useState(null);
  React.useEffect(() => {
    const resize = () => setLayout(fit());
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  const img = (file, width, height, style, ui = false) => h('img', {
    key: file, src: new URL(file, ui ? UI : BASE).href,
    width, height, style, alt: '', draggable: false,
  });
  const selected = candidates.findIndex(c => c.id === choice?.id);
  const active = hovered ?? focused;
  const policy = active === null ? null : POLICY_ART[active];
  return h('section', {
    className: `figma-ballot-overlay${casting ? ' is-casting' : ''}`,
    'aria-label': '职工代表选举', 'aria-busy': casting,
  }, h('div', { className: 'figma-ballot-layout', style: { width: 683 * layout.scale, height: 1040 * layout.scale } },
    h('div', { className: 'figma-ballot-stage', style: { transform: `scale(${layout.scale})` } }, [
      h('div', { key: 'paper', className: 'figma-ballot-paper' }, img('sheet-4.svg', 639, 799)),
      h('h1', { key: 'title', className: 'figma-ballot-sr' }, '职工代表选举'),
      h('fieldset', { key: 'choices', className: 'figma-ballot-choices', role: 'radiogroup', disabled: casting }, [
        h('legend', { key: 'legend', className: 'figma-ballot-sr' }, '请选择你认为合适的候选人'),
        ...candidates.map((candidate, index) => h('button', {
          key: candidate.id, type: 'button', role: 'radio',
          className: 'figma-ballot-candidate', style: { top: ROWS[index] + 20 },
          'aria-label': `${candidate.name}，${candidate.policy}`,
          'aria-checked': selected === index,
          'aria-describedby': active === index ? 'figma-ballot-policy' : undefined,
          onClick: () => onChoose(candidate),
          onMouseLeave: () => setHovered(null),
          onFocus: event => setFocused(event.currentTarget.matches(':focus-visible') ? index : null),
          onBlur: () => setFocused(null),
          onKeyDown: event => { if (event.key === 'Enter' || event.key === ' ') event.stopPropagation(); },
        }, h('span', {
          className: 'figma-ballot-name-hover', 'aria-hidden': true,
          onMouseEnter: () => setHovered(index),
          onMouseLeave: () => setHovered(null),
        }))),
      ]),
      // A viewport onto the original checked SVG reuses its red ink mark.
      // The source SVG and its paths are unchanged.
      selected >= 0 && h('div', {
        key: 'check', className: 'figma-ballot-check', 'aria-hidden': true,
        'data-selected-candidate': candidates[selected].id,
        style: { top: 342 + [0, 89, 173][selected] },
      }, img('sheet-8.svg', 639, 799, { position: 'absolute', left: -490, top: -322 })),
      h('button', {
        key: 'close', type: 'button', className: 'figma-ballot-close',
        onClick: onLeave, disabled: casting, 'aria-label': '放下选票', title: '放下选票（Esc）',
      }, img('close.png', 93, 93, undefined, true)),
      h('button', {
        key: 'submit', type: 'button', className: 'figma-ballot-submit',
        onClick: onCast, disabled: selected < 0 || casting,
        onKeyDown: event => { if (event.key === 'Enter' || event.key === ' ') event.stopPropagation(); },
      }, [img('continue-paper.png', 533, 178, undefined, true), h('span', { key: 'label' }, casting ? '正在投票…' : '折好选票，投入票箱')]),
      h('p', { key: 'hint', className: 'figma-ballot-hint' }, '1 / 2 / 3 选择 · Enter 投票'),
      policy && h('div', {
        key: 'policy', id: 'figma-ballot-policy', className: 'figma-ballot-policy', role: 'tooltip',
        style: { left: layout.insetTooltips ? 45 : 376, top: layout.insetTooltips ? 610 : ROWS[active] + 20 },
      }, [
        img(policy.panel, 549, 58),
        img(policy.file, policy.width, policy.height, { position: 'absolute', left: (549 - policy.width) / 2, top: (58 - policy.height) / 2 }),
        h('span', { key: 'readable', className: 'figma-ballot-sr' }, candidates[active].policy),
      ]),
    ])));
}
