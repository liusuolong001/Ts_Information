interface IInfo {
  name: string;
  age: number;
  address: string;
}

const info: IInfo = {
  name: "TS",
  age: 19,
  address: "capgemini",
};

interface IInfoMethod {
  // 通过字符串索引去获取一个值 也是字符串
  // 语法就是从Info中取出TS  例如 info['name']:"TS"
  [key: string]: string;
}
function getInfo(n: any): IInfoMethod {
  return n;
}

const i = getInfo(info["address"]);
console.log(i);
 
export {};
