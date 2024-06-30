// 类的成员修饰符

class Person {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private eating() {
    console.log("capgemini");
  }
}

const p1 = new Person("Ts", 18);
p1.name = "React";
p1.age = 20; // 只读属性不能修改
// p1.eating(); 外界访问不了

export {};

export {};
