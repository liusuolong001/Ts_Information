class Person {
  private _name;

  constructor(name: string) {
    this._name = name;
  }

  // set get 对访问进行拦截操作
  set name(v: string) {
    {
      this._name = v;
    }
  }
  get name() {
    return this._name;
  }
}

const p1 = new Person("Ts");
p1.name = "react";
console.log(p1.name);

export {};
