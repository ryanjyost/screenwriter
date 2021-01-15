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
	selection.selection.deleteFromDocument();

	let topNode = selection.startNode;
	let bottomNode = selection.endNode;

	if (topNode.offsetTop > bottomNode.offsetTop) {
		topNode = selection.endNode;
	}

	Lines.focusLine(topNode);

	if (selection.startAtTop) {
		Cursor.placeCursor(null, { pos: selection.anchorOffset });
	}
}
