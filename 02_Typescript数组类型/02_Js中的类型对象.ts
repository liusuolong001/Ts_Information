// 不能使用Object 从ts的角度来说不报错但是 赋值的时候是个空对象类型 取值时取不出来里面的字段 最好通过interface type 声明类型
// let Info1: Object = {
//   name: "capgemini",
// };
// console.log(Info1.name);

// Object类型 使用Type进行类型注解
type InfoType = {
  name: string;
  age: number;
};

let Info: InfoType = {
  name: "Ts",
  age: 28,
};

console.log(Info);

export {};
