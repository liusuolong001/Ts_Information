// 函数参数 参数默认值
// 当为可选类型时 可以传入undefined
function foo(n1: number, n2?: number) {
  return n1;
}

foo(10, undefined);

export {};
