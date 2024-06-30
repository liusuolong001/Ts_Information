interface IBar {
  name?: string;
  readonly age: number;
  address: string;
}

type MapBar<T> = {
  // 索引类型
  // 可以添加?所有变成可选 也可以添加readonly将所有类型变为只读
  // +readonly [prop in keyof T]+?: T[prop]; 默认为+号 -号将所有? readonly删除
  -readonly [prop in keyof T]-?: T[prop];
};

type IBarInfo = MapBar<IBar>;
const barInfo: IBarInfo = {
  name: "TS",
  age: 10,
  address: "XX",
};

console.log(barInfo);

export {};
