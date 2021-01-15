import { Cursor, Dom, Lines } from '../../services';

export function enterAtStartOfLine(node) {
	const lineType = Lines.getLineTypeFromNode(node);
	const newLine = Lines.createNewLineNode(lineType, node.innerHTML);
	Dom.insertNodeAfter(newLine, node);
	Lines.focusLine(newLine);

	node.innerHTML = '';

	setTimeout(() => {
		Cursor.placeCursorAtStart();
	}, 10);
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
		selection.startLine.textAfterCursor
	);

	node.innerHTML = selection.startLine.textBeforeCursor;
	Dom.insertNodeAfter(newLine, node);
	Lines.focusLine(newLine);
}
