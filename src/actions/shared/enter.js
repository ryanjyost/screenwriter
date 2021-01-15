import { Cursor, Dom, Lines } from '../../services';

export function enterAtStartOfLine(node) {
	console.log('start of line');
	const lineType = Lines.getLineTypeFromNode(node);
	const newLine = Lines.createNewLineNode(lineType, node.innerHTML);
	Dom.insertNodeAfter(newLine, node);
	Lines.focusLine(newLine, () => Cursor.placeCursorAtStart(newLine.id));

	node.innerHTML = '';
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
