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
	console.log('backspaceContentIntoPreviousLine');
	const prevLine = document.getElementById(node.previousSibling.id);
	const preLineTextBeforeUpdate = prevLine.innerText.toString();

	prevLine.innerHTML += node.innerHTML;

	node.remove();

	Lines.focusLine(prevLine, () =>
		Cursor.placeCursor(prevLine, preLineTextBeforeUpdate.length)
	);
}

export function backspaceMultipleLines(selection) {
	selection.selection.deleteFromDocument();

	const { topNode, bottomNode } = selection;

	topNode.innerHTML =
		selection.topTextBeforeCursor + selection.bottomTextAfterCursor;

	bottomNode.remove();

	Lines.focusLine(topNode, () => {
		if (selection.startAtTop) {
			Cursor.placeCursor(topNode.id, selection.anchorOffset);
		}
	});
}
