import { Lines, Dom, Cursor } from '../services';
import { restoreBackup, saveBackup, appendNewLine } from './shared';
import Dispatch from './dispatch';

export function initializeEditor() {
	const backup = window.localStorage.getItem('backup');
	const editor = Dom.getEditor();

	if (backup) {
		restoreBackup(backup);
	} else {
		// TODO run animation for welcome or something
		appendNewLine('slugline', 'INT. UNKNOWN - DAY');
	}

	// focus the closest element
	editor.addEventListener('click', function (e) {
		const selection = Dom.getSelection();

		if (Dom.isNodeEditor(e.target)) {
			if (!selection.multipleLines) _focusClosestLine(e);
		}
	});

	window.addEventListener('mouseup', function (e) {
		console.log({ e });
		const selection = Dom.getSelection();
		console.log({ selection });
	});

	window.addEventListener('beforeunload', function () {
		// saveBackup();
	});

	window.addEventListener('keydown', _windowKeydownListener);
	editor.addEventListener('keydown', _editorKeydownEventListener);

	_cleanup();
}

function _windowKeydownListener(e) {
	const { key, metaKey } = e;
	const keysToListenTo = ['s'];

	if (keysToListenTo.includes(key) && metaKey) {
		e.preventDefault();

		switch (key) {
			case 's':
				saveBackup();
				break;

			default:
				break;
		}
	}
}

function _editorKeydownEventListener(e) {
	const { key, target } = e;
	const isLine = Dom.isNodeLine(target);

	if (!isLine) return;

	switch (key) {
		case 'Enter':
			_handleEnterKey(e);
			break;
		case 'Backspace':
			_handleBackspaceKey(e);
			break;
		case 'Tab':
			_handleTabKey(e);
			break;
		case 'ArrowUp':
			_handleUpArrow(e);
			break;
		case 'ArrowDown':
			_handleDownArrow(e);
			break;
		default:
			break;
	}
}

function _handleUpArrow(e) {
	e.preventDefault();
	const prevSibling = e.target.previousSibling;
	if (prevSibling) {
		Lines.focusLine(prevSibling);
	}
}

function _handleDownArrow(e) {
	e.preventDefault();
	const nextSibling = e.target.nextSibling;
	if (nextSibling) {
		Lines.focusLine(nextSibling);
	}
}

function _handleTabKey(e) {
	if (e.target.innerText) return;

	e.preventDefault();
	const currentType = Lines.getLineTypeFromNode(e.target);
	const nextType = Lines.getNextLineTypeTabKey(currentType);
	Dispatch('changeActiveLineType', nextType);
}

function _handleBackspaceKey(e) {
	console.log('BACKSPACE');
	const { target: line } = e;
	const selection = Dom.getSelection();

	console.log({ selection, line });

	// just delete normally
	if (!selection.atStart) return;
	console.log('at start');
	if (selection.type === 'Range') return;
	console.log('not range');
	if (!line.previousSibling) return;
	console.log('has prev sibling');

	e.preventDefault();

	const previousLineContent =
		line.previousSibling && line.previousSibling.textContent;

	if (!line.innerHTML) {
		Dispatch('backspaceInEmptyLine', line);
	} else if (!previousLineContent && selection.atStart) {
		Dispatch('backspaceInLineWithContentNoPreviousLineContent', line);
	} else if (selection.atStart && line.previousSibling) {
		Dispatch('backspaceContentIntoPreviousLine', line);
	}
}

function _handleEnterKey(e) {
	e.preventDefault();
	const { target: line } = e;

	const content = e.target.innerHTML;
	const isEmpty = !content.length;
	const lineType = Lines.getLineTypeFromNode(line);

	const selection = Dom.getSelection();

	if (isEmpty && lineType !== 'action') {
		Dispatch('changeActiveLineType', 'action');
	} else if (selection.atStart && !isEmpty) {
		Dispatch('enterAtStartOfLine', line);
	} else if (selection.atEnd) {
		Dispatch('enterAtEndOfLine', line);
	} else {
		Dispatch('enterInsideOfLine', line);
	}
}

function _focusClosestLine(e) {
	const { y } = e;
	let closestLine = null;

	for (let child of Array.from(editor.children)) {
		const { offsetTop } = child;
		if (offsetTop + 8 > y) {
			closestLine = child;
			break;
		}

		closestLine = child;
	}

	Lines.focusLine(closestLine);
	Cursor.placeCursorAtEnd(closestLine);
}

function _cleanup() {
	const lastLine = editor.lastChild;
	Lines.focusLine(lastLine);
	Cursor.placeCursorAtEnd(lastLine);
}
