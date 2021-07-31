let isDone: boolean = false;
let binaryNumber: number = 0b111;
let u: undefined = undefined;
let n: null = null;

let aaa: any = null;

let bbb: number | string = 123; // 联合类型

let array: number[] = [1];

// tuple元组类型，限制了数组的元素个数以及元素类型
let x: [string, number] = ["hello", 10];

// interface关键字来约束对象的属性个数以及类型; ? 可选; readonly关键词加在前面
interface lilin {
  readonly id: number;
  name: string;
  age?: number;
}

let lilin: lilin = {
  id: 11,
  name: "lilin",
  age: 10,
};

// lilin.id = 22;

//
// function add(x: number, y: number, z?: number): number {
//   return x + y;
// }
const add = function (x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
};

const add2: (x: number, y: number, z?: number) => number = add;

// let str = 'str'; str = 123; 这时候会报错，在没有指定类型的时候，ts会自动推测类型

// 面向对象：封装、集成、多态
class Animal {
  name: string;
  static categoies: string[] = ["mammal", "bird"];
  static isAnimal(a) {
    return a instanceof Animal;
  }
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

console.log(Animal.categoies); // ['mammal','bird'];
const catt = new Animal("catt");
console.log(Animal.isAnimal(catt)); // true

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog("cat");
console.log(dog.run()); // 继承父类run的方法

class Cat extends Animal {
  constructor(props) {
    super(props); // 继承
    console.log(this.name);
  }
  run() {
    return `miao` + super.run();
  }
}

const maomao = new Cat("maomap");
console.log(maomao.run());

// 修饰符 public、
// public : 可以修改访问
// private: 子类无法访问
// protected: 只有子女可以访问；
// readonly: 只能读，不能修改；
// static： 静态属性

// 两个类有相同的“蓝图”比如上面有同样的方法
interface Radio {
  switchRadio(): void;
}
interface Battery {
  checkBatteryStatus();
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}
class Car implements Radio {
  switchRadio() {}
}
class CellPhone implements RadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}

enum Direction {
  // Up = 10, 如果手动赋值的话，接下来的会依次+1 或者你也可以给每一项，赋值为字符串等等
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up); // 0
console.log(Direction[0]); // 'Up'

enum Direction1 {
  Up1 = "Up1",
  Down1 = "Down1",
  Left1 = "Left1",
  Right1 = "Right1",
}
const value = "Up1";
if (value === Direction1.Up1) {
}

// generics 泛型
// 传入类型和返回类型一样，在使用的时候指定类型
function echo<T>(arg: T): T {
  return arg;
}
const str: string = "asfds";
const result = echo(str);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const result2 = swap(["string", 123]);

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arrs = echoWithArr([1, 2, 3]);
// 约束泛型，使用extends继承interface，让传入值有一些约束条件
// 告诉echoWithLength 这个函数在传入的参数必须有length属性
interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const str2 = echoWithLength("str");
const obj = echoWithLength({ length: 1 });
const arr2 = echoWithLength([12345, 1234]);

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}
const queue = new Queue<number>();
queue.push(1);
// queue.push('str'); // 报错
console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed()); // toFixed是数字方法，所以执行的时候会报错
const queue1 = new Queue<string>();
queue1.push("str");
console.log(queue1.pop().length);

interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 1234, value: "sdf" };

let array2: Array<number> = [6, 2, 1];

function plus(a: number, b: number): number {
  return a + b;
}
const a = plus;

interface Iplus<T> {
  (a: T, b: T): T;
}
const b: Iplus<number> = plus;

// 类型别名
type PlusType = (x: number, y: number) => number;
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: PlusType = sum;
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// 类型断言: 你比代码更了解类型, 联合类型不能断言成以外的类型
function getLength(input: string | number): number {
  // const str = input as String;
  // if (str.length) {
  //   return str.length;
  // } else {
  //   const number = input as Number;
  //   return number.toString().length;
  // }

  if((<string>input).length){
    return (<string>input).length;
  }else {
    return input.toString().length;
  }
}

// 声明文件: 第三方库的声明文件引入 xxx.d.ts
declare var JQuery:(selection: string) => any;
// tsconfig: 
{
  
}