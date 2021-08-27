function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
// 已知有三个颜色的灯--红灯3秒亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次，如何让三个灯不断交替重复亮灯
// 方法1:可以使用callback实现
const task = (timer, light, callback) => {
  setTimeout(() => {
    if (light === "red") {
      red();
    } else if (light === "green") {
      green();
    } else if (light === "yellow") {
      yellow();
    }
    callback();
  }, timer);
};
const step = () => {
  task(3000, "red", () => {
    task(2000, "green", () => {
      task(1000, "yellow", step); // 黄灯亮的回调里又再次调用了 step 方法 以完成循环亮灯
    });
  });
};
step();
// 方法2:用 promise 实现
const task = (timer, light) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });
const step = () => {
  task(3000, "red")
    .then(() => task(2000, "green"))
    .then(() => task(2100, "yellow"))
    .then(step);
};
step();
// 方法3:用 async/await 实现
const taskRunner = async () => {
  await task(3000, "red");
  await task(2000, "green");
  await task(2100, "yellow");
  taskRunner();
};
taskRunner();
