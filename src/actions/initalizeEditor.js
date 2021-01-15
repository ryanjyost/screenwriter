import { Lines, Dom, Cursor } from '../services';
import { restoreBackup, saveBackup, appendNewLine } from './shared';
import Dispatch from './dispatch';
import Store from '../store';

export function initializeEditor() {
	const backup = window.localStorage.getItem('backup');
	const editor = Dom.getEditor();

	if (backup) {
		restoreBackup(backup);
	} else {
		appendNewLine('slugline', 'INT. UNKNOWN - DAY');
		// a screenwriter stares at their computer, on screen is screenplayer.io, this is your first script. Seriously, this is editable. I'm ryan, founder of screenplayer
	}

	// focus the closest element
	editor.addEventListener('click', function (e) {
		const selection = Dom.getSelection();

		if (Dom.isNodeEditor(e.target)) {
			if (!selection.multipleLines) _focusClosestLine(e);
		}
	});

	window.addEventListener('beforeunload', function () {
		// saveBackup();
	});
	window.addEventListener('keydown', _windowKeydownEventListener);

	let isMouseDown = false;
	let intervalId;
	let didBlur = false;

	window.addEventListener('mouseup', function (e) {
		const selection = Dom.getSelection();
		isMouseDown = false;
		clearInterval(intervalId);
		didBlur = false;
	});

	window.addEventListener('mousedown', function (e) {
		const selection = Dom.getSelection();
		isMouseDown = true;

		intervalId = setInterval(() => {
			if (!didBlur) {
				const activeLine = Store.get('activeLine');
				const node = document.getElementById(activeLine.id);

				Lines.blurLine(node);

				didBlur = true;
			}
		}, 50);
	});

	_cleanup();
}

function _windowKeydownEventListener(e) {
	const { key, target, metaKey } = e;
	const isLine = Dom.isNodeLine(target);
	console.log({ e });

	const metaKeyPairs = ['s'];

	if (metaKey && metaKeyPairs.includes(key)) {
		switch (key) {
			case 's':
				e.preventDefault();
				metaKey && saveBackup();
				break;
			default:
				break;
		}
	}

	switch (key) {
		case 'Enter':
			isLine && _handleEnterKey(e);
			break;
		case 'Backspace':
			console.log('backspace');
			_handleBackspaceKey(e);
			break;
		case 'Tab':
			isLine && _handleTabKey(e);
			break;
		case 'ArrowUp':
			isLine && _handleUpArrow(e);
			break;
		case 'ArrowDown':
			isLine && _handleDownArrow(e);
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
	const { target: line } = e;
	const selection = Dom.getSelection();

	if (selection.type === 'Range' && selection.multipleLines) {
		return Dispatch('backspaceMultipleLines', selection);
	} else if (selection.type === 'Range') {
		return;
	}

	// just delete normally
	if (!selection.atStart) return;
	if (!line.previousSibling) return;

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
