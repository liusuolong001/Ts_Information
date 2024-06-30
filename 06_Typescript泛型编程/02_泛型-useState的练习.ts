function useState<T>(n: T): [T, (newState: T) => void] {
  let state = n;
  function setState(newState: T) {
    state = newState;
  }
  return [state, setState];
}

const [count, setState] = useState<number>(10);
console.log(count);

export {};
