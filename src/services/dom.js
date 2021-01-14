function appendNode(node, container) {
	container = container || document.getElementById('editor');
	container.appendChild(node);
}

function insertNodeAfter(node, anchorNode) {
	anchorNode.parentNode.insertBefore(node, anchorNode.nextSibling);
}

function insertNodeBefore(node, anchorNode) {
	anchorNode.parentNode.insertBefore(node, anchorNode);
}

function getEditor() {
	return document.getElementById('editor');
}

function isNodeEditor(node) {
	return node.id === 'editor';
}

function isNodeLine(node) {
	return node.classList.contains('line');
}

function getSelection() {
	const selection = window.getSelection();

	const clone = {};
	for (let p in selection) {
		if (typeof selection[p] !== 'function') {
			clone[p] = selection[p];
		}
	}

	const textContent = selection.anchorNode.textContent;
	const contentLength = textContent.length;
	const cursorPosition = selection.anchorOffset;

	const content = {
		length: contentLength,
		beforeCursor: textContent.slice(0, cursorPosition),
		afterCursor: textContent.slice(cursorPosition),
	};

	const startNode = selection.anchorNode.parentNode;
	const endNode = selection.extentNode.parentNode;

	return {
		selection,
		...clone,
		content,
		atStart:
			selection.type.toLowerCase() === 'caret' && !selection.anchorOffset,
		atEnd: selection.anchorOffset === contentLength,
		multipleLines: startNode.id !== endNode.id,
		startNode,
		endNode,
	};
}

const defaultExport = {
	getEditor,
	insertNodeAfter,
	insertNodeBefore,
	appendNode,
	getSelection,
	isNodeEditor,
	isNodeLine,
};

export default defaultExport;
