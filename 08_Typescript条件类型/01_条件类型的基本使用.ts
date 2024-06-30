// 条件类型的基本使用
// type IBar extends IotherType ?IBar :IotherType
// 只能是number 或者 string类型 并且返回值就进行三元运算判断
function add<T extends number | string>(n1: T, n2: T): T extends number ? number : string;
// 通用函数
function add(n1, n2) {
  return n1 + n2;
}
const a = add<number>(10, 20);
const b = add<string>("sb", "capgemini");
console.log(a);

export {};
