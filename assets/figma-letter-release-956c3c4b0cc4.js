// Figma 查看信件: MVtyMNVzOvalOwkdisb5R0 / 2045:58.
const BASE = new URL('../images/figma-letter/', import.meta.url);
const WIDTH = 668, HEIGHT = 1043;
const LETTER = '“厂里的变化越来越快。我们关心的不只是生产，也关心住处、食堂和每天的生活。工人的意见，能不能有一个被认真听见的地方？”';
const fit = () => Math.max(.1, Math.min(1, (innerWidth - 28) / WIDTH, (innerHeight - 32) / HEIGHT));

export function FigmaLetter({ react: React, onClose }) {
  const h = React.createElement;
  const [scale, setScale] = React.useState(fit);
  const close = React.useRef(null), continueButton = React.useRef(null);
  React.useEffect(() => {
    const resize = () => setScale(fit());
    const previous = document.activeElement;
    window.addEventListener('resize', resize);
    close.current?.focus({ preventScroll: true });
    return () => {
      window.removeEventListener('resize', resize);
      if (previous?.isConnected) previous.focus({ preventScroll: true });
    };
  }, []);
  const image = (name, node, width, height, style = {}) => h('img', {
    key: name, src: new URL(name, BASE).href, alt: '', width, height, style,
    draggable: false, 'data-figma-node': node,
  });
  const hidden = text => h('span', { key: 'readable-text', className: 'figma-letter-sr' }, text);
  const trapTab = event => {
    if (event.key !== 'Tab') return;
    if (event.shiftKey && document.activeElement === close.current) {
      event.preventDefault(); continueButton.current?.focus();
    } else if (!event.shiftKey && document.activeElement === continueButton.current) {
      event.preventDefault(); close.current?.focus();
    }
  };
  return h('div', {
    className: 'figma-letter-layout',
    style: { width: WIDTH * scale, height: HEIGHT * scale },
  }, h('article', {
    className: 'figma-letter', 'data-figma-node': '2045:58',
    'aria-labelledby': 'figma-letter-title', onKeyDown: trapTab,
    style: { transform: `scale(${scale})` },
  }, [
    h('div', { key: 'paper', className: 'figma-letter-paper' }, image('paper.png', '2045:46', 622, 877)),
    h('h2', { key: 'title', id: 'figma-letter-title', className: 'figma-letter-title' }, [
      image('title.svg', '2045:47', 351, 35), hidden('一封等待回应的来信'),
    ]),
    h('p', { key: 'body', className: 'figma-letter-body' }, [
      image('body.svg', '2045:48', 336, 237), hidden(LETTER),
    ]),
    h('button', {
      key: 'close', ref: close, type: 'button', className: 'figma-letter-close',
      'aria-label': '关闭信件', title: '关闭信件（Esc）', onClick: onClose,
    }, image('close.png', '2045:51', 93, 93)),
    h('button', {
      key: 'continue', ref: continueButton, type: 'button', className: 'figma-letter-continue',
      'aria-label': '收好文件，继续看看', onClick: onClose,
    }, [
      image('continue-paper.png', '2045:55', 533, 178),
      image('continue-label.svg', '2045:57', 249, 28, { position: 'absolute', left: 141.14794921875, top: 76.759765625 }),
    ]),
  ]));
}
