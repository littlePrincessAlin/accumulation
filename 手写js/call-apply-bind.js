// 1、call
// 用法：
function A(a, b) {
  return a, b;
}

let obj = { name: "lilin" };
A.call(obj, 1, 2);

// 写个例子 start
//变更函数调用者示例
function foo() {
  console.log(this.name);
}
// 测试
const obj = {
  name: "写代码像蔡徐抻",
};
obj.foo = foo; // 变更foo的调用者
obj.foo(); // '写代码像蔡徐抻'

// end

//实现一个call方法：
// 原理：利用 context.xxx = self obj.xx = func-->obj.xx()
Function.prototype.myCall = function (context = window, ...args) {
  // this-->func  context--> obj  args--> 传递过来的参数

  // 声明一个独有的Symbol属性, 防止key覆盖已有属性
  let key = Symbol("key");
  // this指向调用call的对象,即我们要改变this指向的函数
  context[key] = this;
  // let args = [...arguments].slice(1)   //第一个参数为obj所以删除,伪数组转为数组

  let result = context[key](...args); // 执行当前函数
  delete context[key]; // 不删除会导致context属性越来越多
  return result;
};

// 2、apply
Function.prototype.myApply = function (context = window, ...args) {
  // this-->func  context--> obj  args--> 传递过来的参数

  // 在context上加一个唯一值不影响context上的属性
  let key = Symbol("key");
  context[key] = this; // context为调用的上下文,this此处为函数，将这个函数作为context的方法
  // let args = [...arguments].slice(1)   //第一个参数为obj所以删除,伪数组转为数组

  let result = context[key](args); // 这里和call传参不一样
  delete context[key]; // 不删除会导致context属性越来越多
  return result;
};

// 使用
function f(a, b) {
  console.log(a, b);
  console.log(this.name);
}
let obj = {
  name: "张三",
};
f.myApply(obj, [1, 2]); //arguments[1]

// 3、bind
Function.prototype.myBind = function (context, ...outerArgs) {
  // this->func context->obj outerArgs->[10,20]
  let self = this;

  // 返回一个函数
  return function F(...innerArgs) {
    //返回了一个函数，...innerArgs为实际调用时传入的参数
    // 考虑new的方式
    if (self instanceof F) {
      return new self(...outerArgs, ...innerArgs);
    }
    // 把func执行，并且改变this即可
    return self.apply(context, [...outerArgs, ...innerArgs]); //返回改变了this的函数，参数合并
  };
};

// 例子
document.body.addEventListener("click", func.bind(obj, 10, 20));

function func(params) {}
// 注意： bind之后不能再次修改this的执行，bind多次后执行，函数this还是指向第一次bind的对象
