class Person {
  //Ts中声明成员属性
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Ts", 18);
console.log(p1.name);
console.log(p1.age);

export {};
