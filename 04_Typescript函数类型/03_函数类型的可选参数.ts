// 可选参数 默认函数
function foo(n1: number, n2?: number) {
  return n1;
}

foo(10);

// 箭头函数
const bar = (n1: number, n2: number) => {
  return n1;
};
bar(20, 50);

export {};
