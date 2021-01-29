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

	// save selection props so that they aren't references
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

	const endNode =
		selection.focusNode && selection.focusNode.id
			? selection.focusNode
			: selection.focusNode && selection.focusNode.parentNode;

	let topNode = startNode,
		bottomNode = endNode;

	if (topNode && bottomNode && topNode.offsetTop > bottomNode.offsetTop) {
		topNode = endNode;
		bottomNode = startNode;
	} else if (!topNode) {
		topNode = bottomNode;
	} else if (!bottomNode) {
		bottomNode = topNode;
	}

	const topLineContent = topNode ? topNode.textContent : '';
	const bottomLineContent = bottomNode.textContent;

	const topContentLength = topLineContent.length;
	const bottomContentLength = bottomLineContent.length;
	const topLineCursorPosition = selection.anchorOffset;
	const bottomLineCursorPosition = selection.focusOffset;

	// console.log({ selection, topLineContent, topLineCursorPosition });

	let topTextBeforeCursor = topNode.textContent.slice(0, topLineCursorPosition);
	let topTextAfterCursor = topNode.textContent.slice(topLineCursorPosition);

	let bottomTextBeforeCursor = bottomNode.textContent.slice(
		0,
		bottomLineCursorPosition
	);
	let bottomTextAfterCursor = bottomNode.textContent.slice(
		bottomLineCursorPosition
	);

	const multipleLines = topNode.id !== bottomNode.id;

	const selectedText = selection.toString();
	const selectedTextByLine = selectedText.split(/\r?\n/);

	if (multipleLines) {
		const selectedTextTop = selectedTextByLine[0];
		const selectedTextBottom =
			selectedTextByLine[selectedTextByLine.length - 1];

		topTextAfterCursor = selectedTextTop;
		topTextBeforeCursor = topLineContent.slice(
			0,
			topLineContent.length - topTextAfterCursor.length
		);

		bottomTextBeforeCursor = selectedTextByLine[selectedTextByLine.length - 1];
		bottomTextAfterCursor = bottomLineContent.slice(
			bottomTextBeforeCursor.length
		);
	}

	// console.log({
	// 	selection,
	// 	...clone,
	// 	topLineContent,
	// 	topTextAfterCursor,
	// 	topTextBeforeCursor,
	// 	bottomLineContent,
	// 	bottomTextBeforeCursor,
	// 	bottomTextAfterCursor,
	// 	atStart: !selection.anchorOffset,
	// 	atEnd: selection.anchorOffset === topContentLength,
	// 	multipleLines,
	// 	startNode,
	// 	endNode,
	// 	topNode,
	// 	bottomNode,
	// 	startAtTop: topNode && topNode.id === startNode.id,
	// 	selectedText,
	// });

	return {
		selection,
		...clone,
		topLineContent,
		topTextAfterCursor,
		topTextBeforeCursor,
		bottomLineContent,
		bottomTextBeforeCursor,
		bottomTextAfterCursor,
		atStart: !selection.anchorOffset,
		atEnd: selection.anchorOffset === topContentLength,
		multipleLines,
		startNode,
		endNode,
		topNode,
		bottomNode,
		startAtTop: topNode && topNode.id === startNode.id,
		selectedText,
	};
}

function deleteLinesFromSelection(selection) {
	selection.selection.deleteFromDocument();

	const { topNode, bottomNode } = selection;

	topNode.innerHTML =
		selection.topTextBeforeCursor + selection.bottomTextAfterCursor;

	bottomNode.remove();
}

const defaultExport = {
	getEditor,
	insertNodeAfter,
	insertNodeBefore,
	appendNode,
	getSelection,
	isNodeEditor,
	isNodeLine,
	deleteLinesFromSelection,
};

export default defaultExport;
