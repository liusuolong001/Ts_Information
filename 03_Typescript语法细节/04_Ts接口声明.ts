// 接口声明 interface
interface IType {
  x: number;
  y: number;
  z?: number;
}
const info: IType = {
  x: 20,
  y: 10,
  z: 10,
};
console.log(info);

export {};
