// 函数的重载
// 1.编写重载签名
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
// 通用函数
function add(n1, n2) {
  return n1 + n2;
}
add(10, 20);
add("sb", "capgemini");
// 通用函数不能调用
// add({ name: "Ts" }, 10);
// add("Ts", 10);

export {};
