// 函数的重载
// 1.编写重载签名
function foo(n1: string): number;
function foo(n1: any[]): number;

function foo(n1): number {
  return n1;
}
foo("Ts");
foo(["Ts", "React", "Number"]);

// 联合类型
function bar(n1: string | any[]) {
  return n1.length;
}
bar("Ts");
bar(["Ts", "React", "Number"]);

// 联合类型与函数重载都能实现一个功能时 推荐使用联合类型

export {};
