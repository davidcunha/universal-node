export default {
  rem(fontSize, browserContext = 16) {
    return `${fontSize / browserContext}rem`;
  },
  truncate(width = '100%') {
    return `
      width: ${width};
      max-width: ${width};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
  },
  fullWidthWithoutScrollbar() {
    return 'calc(100vw - (100vw - 100%))';
  },
  toSeconds(miliseconds) {
    return `${miliseconds / 1000}s`;
  },
};
