/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2023-12-14 10:00:47
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-16 13:54:00
 */
interface Ikun {
  name: string;
  age: number;
  eating: () => void;
}

/**
 * 内置工具
 * Partial将所有类型变成可选
 * Required(...)必选
 * Readonly(...)只读
 */
type IkunOption1 = Partial<Ikun>;
type IkunOption2 = Required<Ikun>;
type IkunOption3 = Readonly<Ikun>;

// 映射类型-类型体操 下面方法实现
type IType<T> = {
  readonly [i in keyof T]?: T[i];
};
type IkunOption4 = IType<Ikun>;

/**
 * Record返回一个新对象
 * IBar对象中key值
 * Ikun赋给key的类型
 */

// key值不是info或者info1两个都需要独有特写
type IBar = "info2" | "info1";
type Ikuns = Record<IBar, Ikun>;
const Ikunp: Ikuns = {
  info1: {
    name: "xx",
    age: 17,
    eating() {},
  },
  info2: {
    name: "xx",
    age: 17,
    eating() {},
  },
};

/**
 * Pick取出来属性(对象类型)
 * Ikun所有类型
 * name从Ikun里面取出name的属性
 *
 * Omit过滤属性(对象类型)
 * Ikun所有类型
 * name从Ikun里面过滤name的属性
 */

type IPick = Pick<Ikun, "name">;
type IOmit = Omit<Ikun, "name">;

/**
 * Exclude过滤属性(联合类型)
 * Ikun所有类型
 * sing从Ikun001里面过滤name的属性
 *
 * Extract提取属性(联合类型)
 * Ikun所有类型
 * sing从Ikun001里面提取name的属性
 */
type Ikun001 = "sing" | "dance" | "rap";

type IExclude = Exclude<Ikun001, "sing">;
type IExtract = Extract<Ikun001, "sing">;

/**
 * NonNullable过滤属性null或者undefined(联合类型)
 */
type Ikun002 = "sing" | "dance" | "rap" | null | undefined;
type INonNullable = NonNullable<Ikun002>;

export {};
