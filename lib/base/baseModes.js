const baseModes = {
	default: [{
		type: 'drag-node',
		enableDelegate: true
	},{
		type: 'tooltip',
		formatText(model) {
			return `这是${model.label}`;
		}
	}, {
		type: 'edge-tooltip',
		formatText(model) {
			return `这是${model.id}`;
		}
	}, {
		type: 'brush-select',
		trigger: 'drag'
	}, 'self-contextmenu', 'zoom-canvas' ]
}

export {
    baseModes
}