class Person<T, E> {
  name: T;
  age: E;
  constructor(name: T, age: E) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person<string, number>("TS", 19);
console.log(p1.name);
console.log(p1.age);

export {};
