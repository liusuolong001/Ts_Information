interface ILength {
  length: number;
}

// (T extends ILength) 泛型继承类型约束
function getLength<T extends ILength>(n: T): T {
  return n;
}

const i = getLength<string[]>(["Ts", "React"]);
const n = getLength<string>("TS");

export {};
