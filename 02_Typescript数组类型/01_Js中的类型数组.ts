// 数组类型
// 1.string[]:数组类型,数组中只能存放字符串类型 (数组常用)
// 2.Array<number>:泛型的写法
const names: string[] = ["Ts", "React"];
names.push("Vue3");

console.log(names);

const nums: Array<number> = [1, 2, 3];
console.log(nums);

export {};
