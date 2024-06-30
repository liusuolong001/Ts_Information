// 泛型的基本使用
function bar<T>(n: T): T {
  return n;
}

bar<string>("TS");
bar<number>(12);

export {};
