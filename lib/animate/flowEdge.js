import G6 from '@antv/g6'
// lineDash 的差值，可以在后面提供 util 方法自动计算
const dashArray = [
  [0,1],
  [0,2],
  [1,2],
  [0,1,1,2],
  [0,2,1,2],
  [1,2,1,2],
  [2,2,1,2],
  [3,2,1,2],
  [4,2,1,2]
];

const lineDash = [4, 2, 1, 2];
const interval = 9; // lineDash 的和
G6.registerEdge('flow-edge', {
  afterDraw(cfg, group) {
    // 获得该边的第一个图形，这里是边的 path
    const shape = group.get('children')[0];
    // 获得边的 path 的总长度
    const length = shape.getTotalLength();
    let totalArray = [];
    // 计算出整条线的 lineDash
    for (var i = 0; i < length; i += interval) {
      totalArray = totalArray.concat(lineDash);
    }
    
    let index = 0;
    // 边 path 图形的动画
    shape.animate({
      // 动画重复
      repeat: true,
      // 每一帧的操作，入参 ratio：这一帧的比例值（Number）。返回值：这一帧需要变化的参数集（Object）。
      // eslint-disable-next-line no-unused-vars
      onFrame(radio) {
        const cfg = {
          lineDash: dashArray[index].concat(totalArray)
        };
        // 每次移动 1
        index = (index + 1) % interval;
        // 返回需要修改的参数集，这里只修改了 lineDash
        return cfg;
      }
    }, 3000);  // 一次动画的时长为 3000
  }
}, 'cubic');   // 该自定义边继承了内置三阶贝塞尔曲线边 cubic