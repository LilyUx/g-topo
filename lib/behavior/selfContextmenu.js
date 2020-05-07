import G6 from '@antv/g6'
import modifyCSS from '@antv/dom-util/lib/modify-css';
import createDom from '@antv/dom-util/lib/create-dom';

G6.registerBehavior('self-contextmenu', {
	getDefaultCfg() {
		return {
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
		};
	},
	getEvents() {
		return {
			'canvas:contextmenu': 'onCanvasContextmenu',
			'node:contextmenu': 'onNodeContextmenu',
			'edge:contextmenu': 'onEdgeContextmenu',
			'click': 'onGraphClick',
		}
	},
	onGraphClick() {
		this.hideContextMenu()
	},
	onCanvasContextmenu(e) {
		// TODO
		if (!this.shouldBegin(e)) {
			return;
		}
		this.showContextMenu(e, 'onCanvasContextmenu');
	},
	onEdgeContextmenu(e) {
		// TODO
		const { item } = e;
		if (!this.shouldBegin(e)) {
			return;
		}
		this.currentTarget = item;
		this.showContextMenu(e, 'onEdgeContextmenu');
		this.graph.emit('tooltipchange', { item: e.item, action: 'show' });
	},
	onNodeContextmenu(e) {
		// TODO
		const { item } = e;
		if (!this.shouldBegin(e)) {
			return;
		}
		this.currentTarget = item;
		this.showContextMenu(e, 'onNodeContextmenu');
		this.graph.emit('tooltipchange', { item: e.item, action: 'show' });
	},
	showContextMenu(e, type) {
		let menu;
		switch (type) {
			case 'onCanvasContextmenu':
				menu = this.contextMenu.canvas
				break;
			case 'onNodeContextmenu':
				menu = this.contextMenu.node
				break;
			case 'onEdgeContextmenu':
				menu = this.contextMenu.edge
				break;
		}
		let { container } = this;
		
		if (!container) {
			container = this.createContextMenu(this.graph.get('canvas'));
			this.container = container;
		}
		let str = '';
		for (let i =0; i < menu.length; i++) {
			str += '<div class="g6-contextmenu-item" onclick="handleContextMenu(\'' + menu[i].type + '\')" id='+ menu[i].type + '}>' + menu[i].text + '</div>'
		}
		container.innerHTML = str;
		this.updatePosition(e);
	},
	createContextMenu(canvas) {
		const el = canvas.get('el');
		el.style.position = 'relative';
		const container = createDom(`<div class="g6-contextmenu"></div>`);
		el.parentNode.appendChild(container);
		modifyCSS(container, {
			position: 'absolute',
			visibility: 'visible',
		});
		this.width = canvas.get('width');
		this.height = canvas.get('height');
		this.container = container;
		return container;
	},
	hideContextMenu() {
		modifyCSS(this.container, {
			visibility: 'hidden',
		});
	},
	updatePosition(e) {
		let x = e.canvasX;
		let y = e.canvasY;
		const left = `${x}px`;
		const top = `${y}px`;
		modifyCSS(this.container, { left, top, visibility: 'visible' });
	}
})