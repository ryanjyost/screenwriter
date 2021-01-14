import { Cursor, Lines } from '../../services';

export function backspaceInEmptyLine(node) {
	console.log({ node });
	if (node.previousSibling) {
		Lines.focusLine(node.previousSibling);
		Cursor.placeCursorAtEnd(node.previousSibling);
		node.remove();
	} else {
		Lines.focusLine(node);
	}
}

export function backspaceInLineWithContentNoPreviousLineContent(node) {
	console.log({ node });
	const previousLine = document.getElementById(node.previousSibling.id);
	previousLine.remove();
	Lines.updateActiveLine(node);
}

export function backspaceContentIntoPreviousLine(node) {
	console.log({ node });
	const prevLine = document.getElementById(node.previousSibling.id);
	const preLineTextBeforeUpdate = prevLine.innerText.toString();

	prevLine.innerHTML += node.innerHTML;

	node.remove();

	Lines.focusLine(prevLine);
	Cursor.placeCursor(prevLine, { pos: preLineTextBeforeUpdate.length });
}
