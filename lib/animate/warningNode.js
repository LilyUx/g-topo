import G6 from '@antv/g6'
// 放大、变小动画
G6.registerNode('warning-node', {
	afterDraw(cfg, group) {
		const size = cfg.size;
		let x, y, position;
		position = cfg.position;
		switch (position) {
			case 'top':
				x = - size / 2 + 21;
				y = - size / 2 - 12;
				break;
			case 'bottom':
				x = - size / 2 + 21;
				y = - size / 2 + 60;
				break;
			case 'left':
				x = - size / 2 - 12;
				y = - size / 2 + 16;
				break;
			case 'right':
				x = size / 2;
				y = - size / 2 + 16;
				break;
			default:
				x = size / 2 - 16;
				y = - size / 2 - 6;
				break
		}
		// 添加告警图标
		group.addShape('image', {
			attrs: {
				x: x,
				y: y,
				width: 20,
				height: 20,
				img: require('../../assets/warning.png')
			}
		})
	}
}, 'circle'); // 该自定义节点继承了内置节点 'circle'，除了被复写的 afterDraw 方法外，其他按照 'circle' 里的函数执行。