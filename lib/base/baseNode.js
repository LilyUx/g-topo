const baseNode = {
	type: 'circle',
	size: 60,
	labelCfg: {
		position: 'bottom',
		offset: 5,
		style: {
			fill: '#2c3e50'
		}
	}
}

const baseNodeStateStyles = {
	hover: {                // hover 状态为 true 时的样式
		fill: '#d3adf7'
	},
	running: {              // running 状态为 true 时的样式
		stroke: 'steelblue'
	}
}

export {
	baseNode,
	baseNodeStateStyles
};