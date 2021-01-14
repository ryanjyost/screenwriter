function placeCursorAtEnd(line) {
	return placeCursor(line, { pos: line.innerText.length });
}

function placeCursorAtStart(line) {
	return placeCursor(line, { atStart: true });
}

const defaultExport = {
	placeCursorAtEnd,
	placeCursorAtStart,
	placeCursor,
};

export default defaultExport;

function placeCursor(
	line,
	params = { atStart: true, atEnd: false, pos: null }
) {
	if (!line) {
		line = document.activeElement;
	}

	if (
		typeof window.getSelection != 'undefined' &&
		typeof document.createRange != 'undefined'
	) {
		const range = document.createRange();
		const selection = window.getSelection();

		if (params.pos) {
			line = line.childNodes[0];
			range.setStart(line, params.pos);
			range.collapse(true);
			selection.removeAllRanges();
			selection.addRange(range);
		} else {
			// start or end
			range.selectNodeContents(line);
			range.collapse(params.atStart || !params.atEnd);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	} else if (typeof document.body.createTextRange != 'undefined') {
		const textRange = document.body.createTextRange();
		textRange.moveToElementText(line);
		textRange.collapse(params.atStart);
		textRange.select();
	}
}
