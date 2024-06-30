// unknown  类型上进行任何操作都是不合法的 不知道他是什么类型无法赋值(安全一点nay)
const name: unknown = "react";
// name = "yinhao"; //报错

console.log(name);

export {};
