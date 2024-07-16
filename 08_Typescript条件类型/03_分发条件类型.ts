/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2023-12-14 10:00:47
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-16 12:32:34
 */

// 分发条件类型 当INumber传入一个联合类型这个条件类型会被应用到联合类型的每个成语number[]|string[]
type INumber<T> = T extends any ? T[] : never;

type newType = INumber<number | string>;
export {};
