// 函数类型和对象类型的使用
type PointType = { x: number; y: number; z?: number };
function Point(point: PointType) {
  console.log(point.x);
  console.log(point.y);
}

Point({ x: 2, y: 2, z: 9 });

export {};
