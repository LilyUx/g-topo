import G6 from '@antv/g6'
// 放大、变小动画
G6.registerNode('zoom-animate-node', {
  afterDraw(cfg, group) {
    // 获取该节点上的第一个图形
    const shape = group.get('children')[0];
    // 该图形的动画
    shape.animate({
      // 动画重复
      repeat: true,
      // 每一帧的操作，入参 ratio：这一帧的比例值（Number）。返回值：这一帧需要变化的参数集（Object）。
      onFrame(ratio) {
        // 先变大、再变小
        const diff = ratio <=0.5 ? ratio * 10 : (1 - ratio) * 10;
        let radius = cfg.size;
        if (isNaN(radius)) radius = radius[0];
        // 返回这一帧需要变化的参数集，这里只包含了半径
        return {
          r: radius / 2 + diff
        }
      }
    }, 3000, 'easeCubic'); // 一次动画持续的时长为 3000，动画效果为 'easeCubic'
  }
}, 'circle'); // 该自定义节点继承了内置节点 'circle'，除了被复写的 afterDraw 方法外，其他按照 'circle' 里的函数执行。