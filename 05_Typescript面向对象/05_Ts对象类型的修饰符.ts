//type 和 interface 中也可以添加修饰符
// ?可选 readonly只读
type IFoo = {
  name?: string;
  readonly age: number;
};
const foo: IFoo = {
  name: "Ts",
  age: 19,
};
foo.age = 90;

interface IBar {
  name?: string;
  readonly age: number;
}
const bar: IBar = {
  name: "React",
  age: 19,
};
bar.age = 10;

export {};
