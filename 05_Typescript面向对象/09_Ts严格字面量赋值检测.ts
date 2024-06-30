// 严格字面量赋值检测
interface IBar {
  name: string;
  age: number;
}
const bar = {
  name: "Ts",
  age: 19,
  height: 1.99,
};
// IBar没有height的类型注解但是 bai还是可以传给info赋值
// 解释现象
// ts第一次创建的对象字面量为新鲜的 对于新鲜的有严格的类型检测 必须完全满足类型要求 之后进行重新赋值就没有严格的类型检测了
const info: IBar = bar;
console.log(info);

export {};
