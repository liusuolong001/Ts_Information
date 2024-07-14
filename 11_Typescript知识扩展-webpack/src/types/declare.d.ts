/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-15 04:42:47
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-15 04:57:09
 */

/**
 * 声明自定义变量/函数/类(全局变量的时候)
 */
declare const name: string;
declare function foo(n: number): number;
declare class Person {
  name: string;
  age: number;
  constructor(name, age);
}

/**
 * 声明文件模块 *代表所有png
 */
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.vue";

/**
 * 当ts中使用cdn导入包时使用命名空间
 */
declare namespace $ {
  export function ajax(setting: any): any;
}
