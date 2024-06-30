// never 类型 (了解)

// 当多人开发 封装框架或者方法/工具库 只写了string和number的类型逻辑 未写boolean逻辑使用never类型提醒书写boolean逻辑 (应用场景)
function handleMessage(name: string | number | boolean) {
  switch (typeof name) {
    case "string":
      console.log(name.length);
      break;
    case "number":
      console.log(name);
      break;
    default:
      const check: never = name;
  }
}

handleMessage("Res");
handleMessage(23);
handleMessage(false);

export {};
