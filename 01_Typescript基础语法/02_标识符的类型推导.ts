// 类型推导
// let 声明一个表示符,直接进行赋值,会更具赋值的类型自动推导出表示符的类型注解
// const 直接进行赋值,类型推导的是字面量类型
let name = "Hello TypeScript";
let age = 18;
let height = 1.88;

const house = "China";

console.log(name, age, height, house);
export {};
