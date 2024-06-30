interface IBar {
  name: string;
  age: number;
  address: string;
}

type MapBar<T> = {
  // 索引类型
  // 可以添加?所有变成可选 也可以添加readonly将所有类型变为只读
  readonly [prop in keyof T]?: T[prop];
};

type IBarInfo = MapBar<IBar>;
const barInfo: IBarInfo = {
  name: "TS",
  age: 10,
  address: "XX",
};

console.log(barInfo);

export {};
