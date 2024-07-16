/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-15 01:33:20
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-15 20:33:50
 */

/**
 * @description: 命名空间存在于ts早期时:称之为内部模块;目的 将一个模块内部在进行作用于划分,防止命名冲突
 * 外部要使用此文件需要将namespace以及函数都export【推荐esmodule】
 * @return {*}
 */
export namespace price {
  export function foo(i) {
    console.log(i);
  }
}

export namespace data {
  function foo(i) {
    console.log(i);
  }
}
