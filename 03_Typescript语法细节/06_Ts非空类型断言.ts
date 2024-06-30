// 非空类型断言！

interface IType {
  name: string;
  fun?: {
    name: string;
  };
}

const Info: IType = {
  name: "TS",
};

// !确定有fun这个标识符代表他有值 跳过ts编译阶段对他的检测
Info.fun!.name = "React";

export {};
