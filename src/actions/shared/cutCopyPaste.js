import { Cursor, Lines, Clipboard } from '../../services';

export function cutMultipleLines(selection) {
	Clipboard.write();

	Lines.focusLine(topNode, () => {
		Cursor.placeCursor(topNode.id, selection.topTextBeforeCursor.length);
	});
}

export function cutTextSelection(selection) {
	console.log({ selection });
}
