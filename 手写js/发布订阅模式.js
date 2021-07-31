/**
 * event bus 是node各个模块的基石、前端组件通信手段、订阅-发布设计模式
 */

class Subscribe {
  constructor() {
    this.pond = {};
  }
  add(target, fn) {
    let pond = this.pond;

    if (!pond[target]) {
      pond[target] = [];
    }

    pond[target].includes(fn) ? null : pond[target].push(fn);
  }
  remove(target, fn) {
    if (this.pond[target]) {
      this.pond[target] = this.pond[target].filter((item) => item != fn);
    }
  }

  fire(target) {
    this.pond[target].forEach((item) => {
      item.call(this);
    });
  }
}
