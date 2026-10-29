// Figma MVtyMNVzOvalOwkdisb5R0, node 2039:36 (2056 × 1157).
// Reuse the running game's React instance and its existing begin handler.
const ASSETS = new URL('../images/figma-start/', import.meta.url);
const position = (x, y, width, height, parentWidth = 2056, parentHeight = 1157) => ({
  left: `${x / parentWidth * 100}%`,
  top: `${y / parentHeight * 100}%`,
  width: `${width / parentWidth * 100}%`,
  height: `${height / parentHeight * 100}%`,
});

export function FigmaStartScreen({ createElement: h, ready, error, onStart }) {
  const image = (name, node, className, style, alt = '') => h('img', {
    key: node,
    src: new URL(name, ASSETS).href,
    'data-figma-node': node,
    className,
    style,
    alt,
    draggable: false,
  });
  return h('section', {
    className: 'figma-cover',
    'aria-label': '蛇口造城记 · 游戏开始界面',
    'data-figma-node': '2039:36',
  }, [
    h('div', { key: 'stage', className: 'figma-cover-stage' }, [
      image('harbor.png', '2038:13', 'figma-cover-art figma-cover-background',
        position(0, 0, 2056, 1157)),
      image('logo-compact.png', '2038:22', 'figma-cover-art',
        position(1820, 29, 195, 195)),
      image('wordmark-back.png', '2038:24', 'figma-cover-art',
        position(49.821533203125, 172, 715.1785278320312, 238.3928680419922)),
      image('wordmark-front.png', '2038:25', 'figma-cover-art',
        position(40, 179.14306640625, 693.3035278320312, 231.25001525878906), '蛇口造城记'),
      h('button', {
        key: 'start',
        type: 'button',
        className: 'figma-cover-start',
        style: position(1266, 794, 533, 178),
        'aria-label': '开始游戏',
        'aria-describedby': !ready || error ? 'figma-start-status' : undefined,
        disabled: !ready || Boolean(error),
        onClick: onStart,
      }, [
        image('start-parchment.png', '2038:31', 'figma-cover-art',
          position(0, 0, 533, 178, 533, 178)),
        // Exported vector text preserves the original HYBiRanJinShi lettering.
        // Its ink bounds differ from the Figma text box (306 × 96).
        image('start-label.svg', '2038:27', 'figma-cover-art figma-cover-start-label',
          position(103.7998046875, 61.09619140625, 296.3203125, 60.7998046875, 533, 178)),
      ]),
    ]),
    (!ready || error) && h('div', {
      key: 'status', id: 'figma-start-status', className: 'figma-cover-status',
      role: error ? 'alert' : 'status',
    }, error ? [error, h('button', {
      key: 'retry', type: 'button', onClick: () => location.reload(),
    }, '重新加载')] : '正在准备三维场景…'),
  ]);
}
