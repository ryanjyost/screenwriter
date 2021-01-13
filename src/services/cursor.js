function placeCursorAtEnd(line) {
	console.log('at end');
	return placeCursor(line);
}

function placeCursorAtStart(line) {
	console.log('at start');
	return placeCursor(line, 0);
}

const defaultExport = {
	placeCursorAtEnd,
	placeCursorAtStart,
};

export default defaultExport;

function placeCursor(line, position) {
	if (!line) {
		line = document.activeElement;
	}

	if (
		typeof window.getSelection != 'undefined' &&
		typeof document.createRange != 'undefined'
	) {
		const range = document.createRange();
		range.setStart(line, position);

		// range.selectNodeContents(line);

		if (typeof position === 'undefined') {
			// put at end by default
			range.collapse(false);
		} else {
			range.collapse(true);
		}

		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}
}
