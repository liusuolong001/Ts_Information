// 字面量类型

// 应用场景 封装axios时 定义方法
type IMethod = "get" | "post";
interface IRequest {
  url: string;
  method: IMethod;
}

const requestInfo: IRequest = {
  url: "http://www.baidu.com",
  method: "get",
};

function request(url: string, method: IMethod) {
  console.log(url);
  console.log(method);
}

request(requestInfo.url, requestInfo.method);

// 解决方案一 类型断言将 string 类型断言成 字面量类型
// request(requestInfo.url, requestInfo.method as IMethod);

// 解决方案二 将requestInfo 全部变成字面量类型
// const requestInfo = {
//   url: "http://www.baidu.com",
//   method: "get",
// } as const;

export {};
