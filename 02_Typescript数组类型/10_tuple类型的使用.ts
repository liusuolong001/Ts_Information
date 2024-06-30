// tuple 元组类型

// 元组类型结构中可以存放不同的数据类型,取出来的item也有明确的类型
const info: [number, string, number] = [19, "typescript", 19];
console.log(info[1].length);

// 在函数中使用原组类型比较多
function useState(count: number): [number, (counter: number) => void] {
  let x = count;
  function setCount(counter: number) {
    x = counter;
  }
  return [x, setCount];
}

const [count, setCount] = useState(10);
setCount(100);

export {};
