/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-15 01:33:08
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-15 02:01:21
 */

import { price } from "./utils/format";

/**
 * @description: 加上type编译器完全不需要语法解析直接删除;编译速度更快
 * 不加也不影响
 * @return {*}
 */
// import type { IType } from "./utils/type";
import { type IType } from "./utils/type";

const o: IType = {
  name: "yinhao",
  age: 18,
};

price.foo("name");

export {};
