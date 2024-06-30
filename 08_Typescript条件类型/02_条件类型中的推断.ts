// 取出函数类型的返回值
type calcType = (n1: number, n2: number) => number;

function foo() {
  return "TS";
}

//获取一个函数的返回值类型:内置钩子
type calcReturnType = ReturnType<calcType>;
type fooReturnType = ReturnType<typeof foo>;

export {};
