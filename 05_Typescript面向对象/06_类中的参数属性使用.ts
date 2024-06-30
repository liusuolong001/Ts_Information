// 类的参数属性 语法糖的写法
class Person {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log("this");
  }
}

const p1 = new Person("Ts", 19);

export {};
