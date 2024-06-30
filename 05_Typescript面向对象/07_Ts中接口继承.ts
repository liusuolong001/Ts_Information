// 接口继承
interface IFoo {
  name: string;
}

interface IBar extends IFoo {
  age: number;
}

const bar: IBar = {
  name: "string",
  age: 18,
};
export {};
