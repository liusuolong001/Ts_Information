// 类的成员修饰符
// public 公共的
// private 私有的 只有在类的内部访问
// protected; 本身及子类才能访问

class Person {
  //Ts中声明成员属性
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private eating() {
    console.log("capgemini"); 
  }
}

const p1 = new Person("Ts", 18);
// p1.eating(); 外界访问不了

export {};
