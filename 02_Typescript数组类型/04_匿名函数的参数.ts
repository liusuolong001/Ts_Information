// 匿名函数的参数

const names: string[] = ["Ts", "React"];

// 匿名函数是否需要添加类型注解吗？最好不要添加 但是添加了也不会报错
names.forEach(function (it, index, arr) {
  console.log(it);
});

export {};
