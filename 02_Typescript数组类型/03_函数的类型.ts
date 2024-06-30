// 函数类型
// 定义typescript中的函数时,都要明确指定参数类型
// 返回值类型可以明确指定也可以进行类型推导 void标识没有返回值
function sum(n: number, o: number): number {
  return n + o;
}

const res = sum(1, 3);
console.log(res);
export {};
