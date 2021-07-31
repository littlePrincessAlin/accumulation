const throttle = (func, wait) => {
  let lastTime = 0;

  return function(...args) {
    let now = +new Date();

    if(now - lastTime > wait){
      lastTime = now;
      func.apply(this, args);
    }
  }
}

// 先触发式节流
function throttle(fn, wait) {
  let timeout; 
  return function () {
    if (!timeout) { 
      fn.apply(this, arguments)
      timeout = setTimeout(() => {
        timeout = null;
      }, wait)
    }
  }
}