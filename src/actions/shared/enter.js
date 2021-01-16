import { Cursor, Dom, Lines } from '../../services';

export function enterAtStartOfLine(node) {
	const currentLine = document.getElementById(node.id);
	const lineType = Lines.getLineTypeFromNode(node);
	const newLine = Lines.createNewLineNode(lineType);
	Dom.insertNodeBefore(newLine, node);
	Lines.focusLine(currentLine, () => Cursor.placeCursorAtStart(currentLine.id));
}

export function enterAtEndOfLine(node) {
	const currentLineType = Lines.getLineTypeFromNode(node);
	const nextType = Lines.getNextLineType(currentLineType);
	const newLine = Lines.createNewLineNode(nextType, undefined, node);
	Dom.insertNodeAfter(newLine, node);
	Lines.focusLine(newLine);
}

export function enterInsideOfLine(node) {
	const currentLineType = Lines.getLineTypeFromNode(node);
	const nextLineType = Lines.getNextLineType(currentLineType);

	const selection = Dom.getSelection();

	const newLine = Lines.createNewLineNode(
		nextLineType,
		selection.topTextAfterCursor
	);

	node.innerHTML = selection.topTextBeforeCursor;
	Dom.insertNodeAfter(newLine, node);
	Lines.focusLine(newLine);
}
