const baseLayout = {                // Object，可选，布局的方法及其配置项，默认为 random 布局。
	type: 'force',         // 指定为力导向布局
	preventOverlap: true,  // 防止节点重叠
	linkDistance: 300,
	nodeStrength: -30,
	edgeStrength: 0.1
	// nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
}

export {
	baseLayout
}