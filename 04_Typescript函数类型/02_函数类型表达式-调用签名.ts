type ICalcType = (num: number) => number;

// 函数表达式
const foo: ICalcType = (num: number): number => {
  return num;
};

foo(20);

// 函数签名
interface IBar {
  name: string;
  age: number;
  (num: number): number;
}

const bar: IBar = (num: number): number => {
  return num;
};

bar.name = "Ts";
bar.age = 20;
bar(10);

// 开发中如何选择
// 如果只是描述函数类型本身(函数可以被调用),使用函数类型表达式
// 如果在描述函数作为对象可以被调用,同时也有其他属性,使用函数调用签名

export {};
