// 方法1：call实现继承,父类一旦存在方法那么子类无法继承
function Parent1(){
  this.name = "Parent1"
}
function Child1(){
  Parent1.call(this);
  this.type = "Child1";
}
console.log(new Child1);

// 方法2: 原型链实现继承，
function Parent2() {
  this.name = 'parent2';
  this.play = [1, 2, 3]
}
function Child2() {
  this.type = 'child2';
}
Child2.prototype = new Parent2();

console.log(new Child2());


// 弊端：明明我只改变了s1的play属性，为什么s2也跟着变了呢？很简单，因为两个实例使用的是同一个原型对象
var s1 = new Child2();
var s2 = new Child2();
s1.play.push(4);
console.log(s1.play, s2.play); // [1,2,3,4] [1,2,3,4]

// 方法3: 组合继承
function Parent3 () {
  this.name = 'parent3';
  this.play = [1, 2, 3];
}
function Child3() {
  Parent3.call(this);
  this.type = 'child3';
}
Child3.prototype = new Parent3();
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play); // [1,2,3,4] [1,2,3]

// 方法4
function Parent4 () {
  this.name = 'parent4';
  this.play = [1, 2, 3];
}
function Child4() {
  Parent4.call(this);
  this.type = 'child4';
}
Child4.prototype = Parent4.prototype;

// 面试版
function Parent5 () {
  this.name = 'parent5';
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;