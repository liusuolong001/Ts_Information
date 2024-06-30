// 交叉类型 两种(多种)类型要同时满足
interface IKun {
  name: string;
  age: number;
}

interface ICode {
  fun: () => void;
}
// 应用场景 多用于多个对象
const info: IKun & ICode = {
  name: "Ts",
  age: 29,
  fun: function () {
    console.log("xxx");
  },
};

export {};
