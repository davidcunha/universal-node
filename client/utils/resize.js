let timeout;

export default (resizeCallback) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  timeout = window.requestAnimationFrame(() => {
    resizeCallback();
  });
};
