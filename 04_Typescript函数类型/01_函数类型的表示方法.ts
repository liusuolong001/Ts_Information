type ICalcType = (num: number) => number;

function foo(calc: ICalcType) {
  const i = 10;
  const calcNum = calc(i);
  console.log(calcNum);
}

function bar(n: number) {
  return n + 10; 
}
foo(bar);

export {};
