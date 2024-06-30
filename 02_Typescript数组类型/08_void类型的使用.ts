// 函数中void类型
// void表示没有返回值
// 如果返回值是void类型我们  可以返回undefined(ts编译器中可以这么做而已)
function sum(n: number, o: number): void {
  console.log(n, o);
}

const res = sum(1, 3);
console.log(res);

// 应用场景 多用于函数
type FooType = () => void;
const foo: FooType = () => {};

// 举个例子
type FnType = (number?: []) => void;

function foo1(fn: FnType) {
  setTimeout(() => {
    fn();
  }, 1000);
} 

foo1(() => {});

export {};
