interface Ikun {
  name: string;
  age: number;
  height: number;
}

const info: Ikun = {
  name: "TS",
  age: 19,
  height: 1.99,
};
// keyof 获取info里面key的值 'key'|'age'|'height' extends意思是必须的Ikun里面的其中之一
function bar<T, O extends keyof T>(i: T, n: O) {
  return i[n];
}
const i = bar(info, "age");
console.log(i);

export {};
