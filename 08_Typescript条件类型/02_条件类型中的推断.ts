/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2023-12-14 10:00:47
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-16 12:23:07
 */
// 取出函数类型的返回值
type calcType = (n1: number, n2: number) => number;

function foo() {
  return "TS";
}

/**
 * 	...args：这是一个 rest 参数 语法，表示函数可以接受任意数量的参数。args 将成为一个包含所有传入参数的数组。
 * 类型体操的题目 infer类型推导
 */
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;

//获取一个函数的返回值类型:内置钩子
type calcReturnType = MyReturnType<calcType>;
type fooReturnType = ReturnType<typeof foo>;

export {};
