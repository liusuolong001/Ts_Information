# Ts 强类型语言

[1.-------------------------环境]
#环境搭建
npm install typescript -g
tsc --version 检查版本

#node环境运行Ts文件 
安装ts-node 且依赖两个包
npm insall ts-node -g
npm install tslinb @type/node -g
运行命令 
ts-node ./Typescript基础类型.ts
<!-- 项目中通过webpack搭建运行 -->

[2.---------------------------基础知识]
#类型 Ts中定义类型为小写:
string: Typescript中提供的字符串类型
String: Javascript字符串中的包装类

#类型推导
 <!-- let 声明一个表示符,直接进行赋值,会更具赋值的类型自动推导出表示符的类型注解 -->
 <!-- const 直接进行赋值,类型推导的是字面量类型 -->
let name = "Hello TypeScript";  <!-- let string -->
const house = "China"; <!--const 字面量类型 -->


#函数中类型
<!-- 定义typescript中的函数时,都要明确指定参数类型  返回值类型可以明确指定也可以进行类型推导 void标识没有返回值 -->
function sum(n: number, o: number): number {
  return n + o;
}

#匿名函数的参数
const names: string[] = ["Ts", "React"];
<!-- // 匿名函数是否需要添加类型注解吗？最好不要添加 但是添加了也不会报错  -->[更具上下文自动推导类型]
names.forEach(function (it, index, arr) {
  console.log(it);
});

#函数类型对于传入的参数？
type IFoo  = (n1:number,n2:number) => number
const foo:IFoo = (n:number) => {
  return n
}
<!-- 函数类型对于多传入的参数会自动忽略 如n2类型自动忽略 -->

#函数可选参数
<!-- 可选类型放入后面 -->
<!-- ?代表可选参数-->
<!-- 本质是联合类型 此处为number | undefined -->
function foo(n1:number,n2?:number):number{
  return n1
}

#函数可选参数参数默认值
<!-- 当可选参数有默认值时 可以传入undefined -->
function foo(n1: number, n2 = 100) {
  return n1;
}
foo(10, undefined);

#类型别名type 接口声明interface
<!-- 针对对象类型时 -->
<!-- type 赋值的方式 -->
type IType = {
  x:number
  y:number
  z?:number
}
<!-- interface 声明的方式 -->
interface IType{
  x:number
  y:number
  z?:number
}
[区别???]
[区别一：type 类型范围更广 interface只能用来声明对象]
[区别二：声明对象时 type不能同时声明多个相同名称的类型 interface可以多次声明多个相同名称的并且会自动合并]

[type特性]

[interface特性] 
#接口继承
interface IFoo {
  name: string;
}
interface IBar extends IFoo {
  age: number;
}
const bar: IBar = {
  name: "string",
  age: 18,
};

#类型断言
<!-- // 类型断言  断言只能转化成更加具体的类型 -->
const image = document.querySelector(".img") as HTMLImageElement;

#非空类型断言
<!--  !确定有fun这个标识符代表他有值 跳过ts编译阶段对他的检测 -->
Info.fun!.name = "React";

#函数中的this默认类型 (this类型-内置工具 系统课coderwhy)
没有任何配置时 this类型为any

#严格字面量赋值
interface IBar {
  name: string;
  age: number;
}
const bar = {
  name: "Ts",
  age: 19,
  height: 1.99,
};
<!-- IBar没有height的类型注解但是 bai还是可以传给info赋值
解释现象
ts第一次创建的对象字面量为新鲜的 对于新鲜的有严格的类型检测 必须完全满足类型要求 之后进行重新赋值就没有严格的类型检测了 -->
const info: IBar = bar;

# 抽象类 鸭子模型 索引签名 ???


[3.---------------------------Typescript类型]
#Ts中类型
{
  [Js Ts共有类型]
  string
  number
  boolean
  array
  object
  symbol
  null
  undefined
  
  [Ts独特类型]
  any
  unkonw
  void
  never
  tuple
  联合类型
  交叉类型
  函数重载
  枚举类型
  索引类型
  泛型
  映射类型 (常在框架中使用)
  条件类型
}

# Typescript number类型
不区分number类型(整数(int)浮点数(double)统一为number类型) Java中区分

#数组类型
const names: string[] = ["Ts", "React"]; <!--  1.string[]:数组类型,数组中只能存放字符串类型 (数组常用) -->
const nums: Array<number> = [1, 2, 3]; <!--  2.Array<number>:泛型的写法-->

#对象类型
 <!-- 不能使用Object 从ts的角度来说不报错但是 赋值的时候是个空对象类型 取值时取不出来里面的字段 最好通过interface type 声明类型 -->
let Info1: Object = {
  name: "capgemini",
};
console.log(Info1.name);<!-- 编译不通过 -->

<!-- Object类型 使用Type进行类型注解 -->
type InfoType = {
  name: string;
};
let Info: InfoType = {
  name: "Ts"
};

#对象类型索引签名 (索引类型)
interface IInfoMethod {
   <!-- 通过字符串索引去获取一个值 也是字符串  -->
   <!-- 语法就是从names中取出TS  如:info[0]:"TS" info['name']:"TS" -->
   <!-- 声明多个索引签名时 且index只能是string number两种类型 且不能使用 string｜number 联合类型书写(ts不支持但不报错) -->
  [index: number]: string;
  [index: string]: any;   <!-- [index: string]: string报错 :any类型不报错 因为names还有forEach map属性返回时函数类型等...... -->
}
const names: IInfoMethod[] = ['TS','React','JS']


#any类型和unknow类型的区别
any类型做任何操作都是合法 <!-- 可以任意赋值 string,any,array-->
unknow类型做任何操作都是不合法  <!-- 不可以任意赋值 (安全一点的any类型 )-->
const name: unknown = "react";
name = "yinhao";  <!-- 报错 -->

#void类型
<!-- 定义函数类型 没有返回值时默认是void -->
<!-- 如果返回值是void类型  可以返回undefined(ts编译器中可以这么做而已) -->
function sum(n: number, o: number): void {
  console.log(n, o);
}
[应用场景  多用于函数]
type FooType = () => void;
const foo: FooType = () => {};

[了解!! 当根据上下文推导出来的返回类型是void类型时 不强制要求不能返回任何东西]
names.forEach((it) => {
  return it   <!-- 可以返回 ts语法准许 -->
})

#never类型 
应用场景
1.实际开发中自己很少使用never类型进行类型注解

2.封装框架/工具库的时候会用少部分用到never demo => 09_never类型的使用

#元组类型
const info: [number, string, number] = [19, "typescript", 19];<!--  元组类型结构中可以存放不同的数据类型,取出来的item也有明确的类型 -->

function useState(count: number): [number, (counter: number) => void] { <!--  封装useState 在函数中使用原组类型比较多 -->
  let x = count;
  function setCount(counter: number) {
    x = counter;
  }
  return [x, setCount];
}

const [count, setCount] = useState(10);

#联合类型
<!-- name类型为string 或者 number -->
const name:string|number = 'TS'

#交叉类型
<!--两种（多种)类型需要同时满足 -->
interface IKun {
  name: string;
  age: number;
}

interface ICode {
  fun: () => void;
}
<!--  应用场景 多用于多个对象 -->
const info: IKun & ICode = {
  name: "Ts",
  age: 29,
  fun: function () {
    console.log("xxx");
  },
};

#字面量类型
type IMethod = "get" | "post";
<!-- method的类型只能是get 或者 post -->
function request(url:string,method:IMethod) {
}

#函数类型 
type ICalcType = (num: number) => number;

#函数类型的函数签名
interface IBar {
  name: string;
  (num: number): number; <!-- 函数签名  -->
}

<!-- 开发中如何选择 -->
<!-- 如果只是描述函数类型本身(函数可以被调用),使用函数类型表达式
如果在描述函数作为对象可以被调用,同时也有其他属性,使用函数调用签名 -->


#函数的重载 (了解)
<!--  1.编写重载签名 -->
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
<!-- 通用函数不能调用 -->
function add(n1, n2) {
  return n1 + n2;
}

#函数重载 #联合类型
[联合类型与函数重载都能实现一个功能时 推荐使用联合类型]

#枚举类型
<!-- 定义枚举类型 -->
enum Diretion {
  UP,
}

#映射类型
<!--  映射类型 相当于拷贝一份IFoo类型在原来的类型上进行改变 只能用type声明  本质使用了i的联合类型和泛型 -->
type MapIFoo<T> = {
  <!-- 索引类型 -->
  <!--  T ='string' | () => void -->
  <!-- 添加readonly ?表明person每个类型都有readonly ?-->
 【 (readonly [i in keyof T]?: T[i] === +readonly [i in keyof T] +?: T[i]) 全部去除则使用减 (-readonly [i in keyof T] -?: T[i])】
  readonly [i in keyof T]?: T[i];
};


#条件类型
输入类型和输出类型之间的关系
类似于Js中的三元运算符
type IBar extends IotherType ? IBar : IotherType

[4.-------------------------泛型]

#泛型的基本使用
function bar<T>(n: T): T {
  return n;
}
bar<string>("TS");

#泛型传入多个参数
function foo<T,E>(n1:T,n2:E):void {
  conslog.log(n1)
}
foo<number,string>(10,'TS')

#泛型接口的使用
interface IInfo<T = number> {
  age: number;
  name: T;
}
const info: IInfo<string> = {
  age: 19,
  name: "TS",
};

#泛型类的使用
class Person<T = string, E = number> {
  name: T;
  age: E;
  constructor(name: T, age: E) {
    this.name = name;
    this.age = age;
  }
}
const p1 = new Person<string, number>("TS", 19);

#泛型约束
interface ILength {
  length: number;
}
<!-- 使用return的值还保留原来的类型 --> [T extends ILength]
function getLength<T extends ILength>(n: T): T {
  return n;
}
const i = getLength<string[]>(["Ts", "React"]);

#泛型参数使用约束
interface Ikun {
  name: string;
  age: number;
}
const info: Ikun = {
  name: "TS",
  age: 19,
};
<!-- // keyof 获取info里面key的值 'key'|'age'|'height' extends意思是必须的Ikun里面的其中之一 -->
function bar<T, O extends keyof T>(i: T, n: O) {
  return i[n];
}
const i = bar(info, "age");<!--  i为number -->
console.log(i);

interface IFoo {
  name: string;
  eating: () => void;
}

type person = MapIFoo<IFoo>;

[5.---------------------------类]
#类的成员修饰符
public 公共的
private 私有的 只有在类的内部访问
protected; 本身及子类才能访问

class Person {
  <!-- Ts中声明成员属性 -->
  private name: string;
  age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this.age = age;
  }

 <!-- 私有的 只有在类的内部访问 外部访问不了 子类也不能访问 -->
  private eating(){
    console.log("capgemini");
  }

  <!-- set get 对访问进行拦截操作 -->
  set name(v: string) {
    {
      this._name = v;
    }
  }
  get name() {
    return this._name;
  }
}

const p1 = new Person("Ts", 18);
p1.name = "react";
console.log(p1.name);

#类的参数属性使用 语法糖 
<!-- 将public private 写入constructor中 -->
class Person {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log("this");
  }
}
const p1 = new Person("Ts", 19);

#类的接口实现
interface IFoo {
  name: string;
  age: number;
  eating: () => void;
}

<!-- implements 接口类实现 -->
class Person implements IFoo {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log("eating sb capgemini");
  }
}
const p1 = new Person("Ts", 18);
const p2 = new Person("React", 20);
p1.eating();
<!--  好处 声明多个person的时候类型共用 -->
console.log(p2.name);

[6.---------------------------Ts模块化]

#导入类型推荐加上type
<!-- 最后在浏览器转化成js代码的时候方便移除类型检测的代码 -->
import {type IBar} from './main.ts'

#.d.ts 只用于类型声明的文件夹(不写逻辑代码)

#为自己的变量定义类型声明
declare const name：string

#declare声明模块
declare module '模块名' {}

#declare声明文件模块 如图jpg jpeg png
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

#tsconfig.json
tsconfig.json 该目录是Typescript项目的根目录
作用一: 编译的时候如何去编译Typescript代码和进行类型检测
{
  1.编译成什么版本的js代码
  2.是否允许不明确的this
  3.是否允许any的隐式类型
}