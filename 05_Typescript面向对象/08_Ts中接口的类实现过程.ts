interface IFoo {
  name: string;
  age: number;

  eating: () => void;
}

// 接口类实现
class Person implements IFoo {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log("eating sb capgemini");
  }
}

const p1 = new Person("Ts", 18);
const p2 = new Person("React", 20);
p1.eating();
// 好处 声明多个person的时候类型公用
console.log(p2.name);

export {};
