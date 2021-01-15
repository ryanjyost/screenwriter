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

	const startNode =
		selection.anchorNode && selection.anchorNode.id
			? selection.anchorNode
			: selection.anchorNode && selection.anchorNode.parentNode;

	const startLineContentLength = startNode.textContent.length;
	const startLineCursorPosition = selection.anchorOffset;

	const endNode =
		selection.focusNode && selection.focusNode.id
			? selection.focusNode
			: selection.focusNode.parentNode;

	const endLineContentLength = endNode.textContent.length;
	let endLineCursorPosition = selection.focusOffset;

	const multipleLines = startNode.id !== endNode.id;
	//
	// if (multipleLines) {
	// 	const range = window.getSelection().getRangeAt(0);
	// 	endNode.focus();
	// 	const selectionAfterDelete = window.getSelection();
	// 	console.log({ selection, selectionAfterDelete });
	// }

	const startLine = {
		length: startLineContentLength,
		textBeforeCursor: startNode.textContent.slice(0, startLineCursorPosition),
		textAfterCursor: startNode.textContent.slice(startLineCursorPosition),
	};

	const endLine = {
		length: endLineContentLength,
		textBeforeCursor: endNode.textContent.slice(0, endLineCursorPosition),
		textAfterCursor: endNode.textContent.slice(endLineCursorPosition),
	};

	let topNode = startNode,
		bottomNode = endNode,
		topLine = startLine,
		bottomLine = endLine;

	if (topNode.offsetTop > bottomNode.offsetTop) {
		topNode = selection.endNode;
		bottomNode = selection.startNode;
		topLine = selection.endLine;
		bottomLine = selection.startLine;
	}

	return {
		selection,
		...clone,
		atStart: !selection.anchorOffset,
		atEnd: selection.anchorOffset === startLineContentLength,
		multipleLines,
		startNode,
		endNode,
		startLine,
		endLine,
		topNode,
		bottomNode,
		topLine,
		bottomLine,
		startAtTop: topNode && topNode.id === startNode.id,
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
