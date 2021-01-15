import { Cursor, Lines, Dom } from '../../services';

export function backspaceInEmptyLine(node) {
	if (node.previousSibling) {
		Lines.focusLine(node.previousSibling);
		Cursor.placeCursorAtEnd(node.previousSibling);
		node.remove();
	} else {
		Lines.focusLine(node);
	}
}

export function backspaceInLineWithContentNoPreviousLineContent(node) {
	const previousLine = document.getElementById(node.previousSibling.id);
	previousLine.remove();
	Lines.updateActiveLine(node);
}

export function backspaceContentIntoPreviousLine(node) {
	const prevLine = document.getElementById(node.previousSibling.id);
	const preLineTextBeforeUpdate = prevLine.innerText.toString();

	prevLine.innerHTML += node.innerHTML;

	node.remove();

	Lines.focusLine(prevLine);
	Cursor.placeCursor(prevLine, { pos: preLineTextBeforeUpdate.length });
}

export function backspaceMultipleLines(selection) {
	console.log({ selection });
	selection.selection.deleteFromDocument();

	let topNode = selection.startNode,
		bottomNode = selection.endNode,
		topLine = selection.startLine,
		bottomLine = selection.endLine;

	if (topNode.offsetTop > bottomNode.offsetTop) {
		topNode = selection.endNode;
		bottomNode = selection.startNode;
		topLine = selection.endLine;
		bottomLine = selection.startLine;
	}

	// TODO method to get position depends on sstart end situation, just use range both times maybe
	const remainingTopNodeText = topLine.textBeforeCursor;

	// const range = window.getSelection().getRangeAt(0);
	// selection.endNode.focus();
	// const selectionAfterDelete = window.getSelection();
	// console.log({ selection, selectionAfterDelete });

	// need to clean up end node, place cursor, focus
	// const { target } = e;
	//
	// const selection = Dom.getSelection();
	// console.log('MULTIPE LINES', {selection, range});
	// let startLine, endLine;
	// const node = document.getElementById(selection.endNode);
	Lines.focusLine(topNode);
	Cursor.placeCursorAtEnd(topNode);
}
