const debounce = (func, wait) => {
  let timer = 0;

  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

// 优化 先触发式防抖
const debounce = (fn, wait) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    !timer && fn.apply(this, args);

    timer = setTimeout(function () {
      timer = null;
    }, wait);
  };
}
