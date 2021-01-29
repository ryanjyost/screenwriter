import { Cursor, Lines, Dom } from '../../services';

export function backspaceInEmptyLine(node) {
	if (node.previousSibling) {
		Lines.focusLine(node.previousSibling, () => Cursor.placeCursorAtEnd());

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

	Lines.focusLine(prevLine, () =>
		Cursor.placeCursor(prevLine, preLineTextBeforeUpdate.length)
	);
}

export function backspaceMultipleLines(selection) {
	Dom.deleteLinesFromSelection(selection);

	const { topNode } = selection;

	Lines.focusLine(topNode, () => {
		Cursor.placeCursor(topNode.id, selection.topTextBeforeCursor.length);
	});
}
