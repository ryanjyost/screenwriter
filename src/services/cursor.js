function placeCursorAtEnd(lineId) {
	return placeCursor(lineId);
}

function placeCursorAtStart(lineId) {
	return placeCursor(lineId, 0);
}

const defaultExport = {
	placeCursorAtEnd,
	placeCursorAtStart,
	placeCursor,
};

export default defaultExport;

function placeCursor(lineId, position) {
	if (
		typeof window.getSelection != 'undefined' &&
		typeof document.createRange != 'undefined'
	) {
		let line = document.getElementById(lineId);

		// Creates range object
		const range = document.createRange();

		// Creates object for selection
		const selection = window.getSelection();

		if (!line) {
			line = document.activeElement;
		}

		if (position && position > 0) {
			const range = document.createRange();
			const selection = window.getSelection();

			range.setStart(line.firstChild, position);
			range.collapse(true);

			selection.removeAllRanges();
			selection.addRange(range);
		}

		if (typeof position === 'undefined') {
			position = line.innerText.length;
		}

		// Set start position of range
		try {
			range.setStart(line.childNodes[0], position);
		} catch (e) {
			try {
				range.setStart(line, position);
			} catch (e) {
				range.setStart(line, 0);
			}
		}

		// Collapse range within its boundary points
		// Returns boolean
		range.collapse(true);

		// Remove all ranges set
		selection.removeAllRanges();

		// Add range with respect to range object.
		selection.addRange(range);

		// Set cursor on focus
		// line.focus();
	} else if (typeof document.body.createTextRange != 'undefined') {
		const textRange = document.body.createTextRange();
		textRange.moveToElementText(line);
		textRange.collapse(params.atStart);
		textRange.select();
	}
}
