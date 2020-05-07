# GTopo
> 	基于antv@g6封装的拓扑图插件，适用于网络拓扑图

> 	version: 1.0.2

> 	Author: LilyXu

## Feature
1. 封装了多种类型的节点和连线
	- zoomNode

		![img](https://github.com/LilyUx/g-topo/blob/master/doc/zoomNode.gif)
		
		`type: 'zoom-node'`

	- warningNode

		![img](https://github.com/LilyUx/g-topo/blob/master/doc/warningNode.png)

		`type: 'warning-node'`

	- playWarnNode
		
		![img](https://github.com/LilyUx/g-topo/blob/master/doc/playWarnNode.gif)

		`type: 'play-warn-node'`

	- flowEdge

		![img](https://github.com/LilyUx/g-topo/blob/master/doc/flowEdge.gif)

		`type: 'flow-edge'`

	- flowInfoEdge

		![img](https://github.com/LilyUx/g-topo/blob/master/doc/flowInfoEdge.gif)

		`type: 'flow-info-edge'`

	- flowWarnEdge

		![img](https://github.com/LilyUx/g-topo/blob/master/doc/flowWarnEdge.gif)

		`type: 'flow-warn-edge'`

2. 封装了自定义behavior-（self-contextmenu）右键菜单

	![img](https://github.com/LilyUx/g-topo/blob/master/doc/self-contextmenu.gif)
	
	* contextMenu可进行自定义
	
	`

		mode: {
			default: [
				{
					type: 'self-contextmenu',
					contextMenu: {
						canvas: [
							{ type: 'addNode', text: 'add-node'}, 
							{ type: 'addEdge', text: 'add-edge'}],
						node: [
							{ type: 'updateNode', text: 'update-node'}, 
							{ type: 'deleteNode', text: 'delete-node'}],
						edge: [
							{ type: 'updateEdge', text: 'update-edge'}, 
							{ type: 'deleteEdge', text: 'delete-edge'}],
					}
				}
			]
		}

	`

3. 封装了G6的一些比较繁琐的配置，也可基于需求修改配置文件

## Use
1. `npm install g-topo --save` or  `yarn add g-topo`

2. 使用插件必须传入一个dom元素，例如：

      	`  import GTopo from 'g-topo'
			const network = new GTopo('#mountNode')
		`

## Options
* 构造函数，construtor必须接收一个参数，当前绑定的dom元素，可选参数config。

	`const network = new GTopo('#mountNode', config)`

	config是一个对象，和G6的graph配置项api保持一致，只是进行了整合，可根据自身风格传参:
	
	`	
		
		{
			renderer // 渲染方式，支持canvas和svg，默认svg
			fitView  // 是否开启画布自适应。开启后图自动适配画布大小
			fitViewPadding // fitView 为 true 时生效。图适应画布时，指定四周的留白。
			groupByTypes // 各种元素是否在一个分组内
			autoPaint // 当图中元素更新，或视口变换时，是否自动重绘。
			minZoom // 最大缩放比例
			maxZoom // 最大缩放比例
			pixelRatio // 像素比率
			animate 是否启用全局动画
			defaultNode // 默认状态下节点的配置
			defaultEdge // 默认状态下边的配置
			nodeStateStyles // 各个状态下节点的样式
			edgeStateStyles // 各个状态下边的样式
			layout // 默认是力导向布局， 传{}radom布局
			modes // 默认有drag-node、tooltip、edge-tooltip、brush-select、zoom-canvas、self-contextmenu
			plugins // 数组, []表示没有默认，默认有minimap, grid
		}
	`

* 方法
	1. `renderData(data)` 读取数据并渲染图
		
		data的数据格式为：
		
		`

			data: {
				nodes: [],
				edges: []
			}
		
		`
	2. `updateData(data)` 更新数据
	3. `refreshData()` 刷新数据
	4. `updateLayout(cfg)` 更新layout布局，参数为layout的配置项
	5. `clear()` 清除画布元素
	6. `destory()` 销毁画布
	7. `addBehaviors(behaviors, modes)` 添加behavior
	8. `removeBehaviors(behaviors, modes)` 删除behavior
	7. `changeSize(width, height)` 改变画布大小
	7. `addPlugin(plugin)` 添加指定的插件
	7. `removePlugin(plugin)` 移除指定的插件
	7. `downloadImage` 移除指定的插件
	7. `setItemState(item, state, enabled)` 设置元素状态
	7. `clearItemStates(item, states)` 清除元素状态，可以一次性清除多个状态
	7. `refreshPositions()` 当节点位置发生变化时，刷新所有节点位置，并重计算边的位置
	7. `handleEvent(type, event, cb)` 画布、节点、连线的操作 type支持canvas、node、edge， event：支持click、mouseover等
	7. `getNodePosition()` 获取所有节点的位置信息
