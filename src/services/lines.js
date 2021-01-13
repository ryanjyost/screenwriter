import { Helpers } from '../lib';
import Store from '../store';

function focusLine(node) {
	if (!node) return;
	setTimeout(() => {
		try {
			node.focus();
			node.setAttribute('contenteditable', 'true');
		} catch (e) {
			console.log(e);
		}
	}, 10);
}

// function renderLine(node, anchorNode, shouldRenderAfterAnchor = true) {
// 	const editor = getEditor();
// 	if(anchorNode){
// 		return shouldRenderAfterAnchor ? Dom.insert
// 	}
// }

function changeActiveLineType(newType) {
	const activeLine = Store.getValue('activeLine');
	const node = document.getElementById(activeLine.node.id);
	node.classList.remove(activeLine.type);
	node.classList.add(newType);

	if (!node.innerHTML && newType === 'parens') {
		node.innerHTML = '()';
	}

	Store.activeLine.setType(newType);
	focusLine(node);
}

function changeLineType(node, newType) {
	const currentType = Helpers.getLineTypeFromNode(node);
	const line = document.getElementById(node.id);
	line.classList.remove(currentType);
	line.classList.add(newType);

	const { textContent } = node;

	if (!line.textContent) {
		setTimeout(() => {
			line.textContent = '';
		}, 1);
	}
}

function getSelection() {
	const selection = window.getSelection();

	return {
		selection,
		atStart: selection.rangeCount < 2 && !selection.anchorOffset,
		atEnd: selection.rangeCount - 1 === selection.anchorOffset,
	};
}

const defaultExport = {
	focusLine,
	changeLineType,
	// createNewLineNode,
	// createNewLineNodeFromNode,
	changeActiveLineType,
};

export default defaultExport;
