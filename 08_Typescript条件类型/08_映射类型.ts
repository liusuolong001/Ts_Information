// 映射类型 相当于拷贝一份IFoo类型在原来的类型上进行改变 只能用type类型
// 使用了i联合类型的泛型
type MapIFoo<T> = {
  // T 'string' | 'number' | () => void
  // 索引类型 i 循环 T 中key值 在return
  [i in keyof T]: T[i];
};

interface IFoo {
  name: string;
  age: number;
  eating: () => void;
}

type person = MapIFoo<IFoo>;

const info: person = {
  name: "TS",
  age: 32,
  eating: function () {
    console.log("YS");
  },
};

export {};
