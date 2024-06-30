interface IInfo<T = number> {
  age: number;
  name: T;
}

const info: IInfo<string> = {
  age: 19,
  name: "TS",
};

export {};
