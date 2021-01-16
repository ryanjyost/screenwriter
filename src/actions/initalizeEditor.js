import { format } from 'date-fns';
import DeviceDetector from 'device-detector-js';
import { Lines, Dom, Cursor, History } from '../services';
import { restoreBackup, saveBackup, appendNewLine } from './shared';
import Dispatch from './dispatch';
import Store from '../store';

export function initializeEditor() {
	const backup = window.localStorage.getItem('backup');
	const editor = Dom.getEditor();

	if (backup) {
		restoreBackup(backup);
	} else {
		const time = format(new Date(), 'h:mm a');
		const deviceToDisplay = getDeviceToDisplay(window.navigator.userAgent);
		const now = new Date();
		let slugTime;
		const hours = now.getHours();
		if (hours > 18 || hours < 4) {
			slugTime = 'Night';
		} else {
			slugTime = 'Day';
		}

		appendNewLine('slugline', `<b>INT. UNKNOWN - ${slugTime}</b>`);
		appendNewLine(
			'action',
			`A genius SCREENWRITER stares at ${deviceToDisplay}, on a quest to find the free screenwriting software of their dreams.`
		);
		appendNewLine('action', `The clock strikes ${time}.`);
		appendNewLine('slugline', '<b>ON SCREEN</b>');
		appendNewLine(
			'action',
			`The free screenwriting software of your dreams...`
		);
		appendNewLine(
			'action',
			`<b>SCREENPLAYER</b>. Built by a normal dude named RYAN (27).`
		);
		appendNewLine('character', `Ryan`);
		appendNewLine(
			'dialogue',
			`This page is already your first project on Screenplayer.`
		);
		appendNewLine(
			'action',
			`The screenwriter plays around with their new script, checking out the refreshingly minimalistic features.`
		);

		// a screenwriter stares at their computer, on screen is screenplayer.io, this is your first script. Seriously, this is editable. I'm ryan, founder of screenplayer
	}

	const lastLine = editor.lastChild;
	Lines.focusLine(lastLine, () => Cursor.placeCursorAtEnd(lastLine.id));

	// focus the closest element
	editor.addEventListener('click', function (e) {
		const selection = Dom.getSelection();

		if (Dom.isNodeEditor(e.target)) {
			if (!selection.multipleLines) _focusClosestLine(e);
		} else {
			Lines.focusLine(e.target);
		}
	});

	window.addEventListener('beforeunload', function () {
		// saveBackup();
	});
	window.addEventListener('keydown', _windowKeydownEventListener);

	let intervalId;
	let isMouseDown = false;
	let didBlur = false;

	window.addEventListener('mouseup', function (e) {
		if (intervalId) clearInterval(intervalId);

		isMouseDown = false;
		didBlur = false;
	});

	window.addEventListener('mousedown', function (e) {
		const selection = Dom.getSelection();
		isMouseDown = true;

		intervalId = setInterval(() => {
			if (isMouseDown && !didBlur && selection.type === 'Range') {
				const activeLine = Store.get('activeLine');
				const node = document.getElementById(activeLine.id);

				Lines.blurLine(node);
				didBlur = true;
			}
		}, 100);
	});

	History.initialize();
}

function _windowKeydownEventListener(e) {
	const { key, target, metaKey } = e;
	const isLine = Dom.isNodeLine(target);

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
	Cursor.placeCursorAtEnd(closestLine.id);
}

function getDeviceToDisplay(userAgent) {
	const deviceDetector = new DeviceDetector();
	const device = deviceDetector.parse(userAgent);

	const type = `${
		device.device.type === 'desktop'
			? 'computer'
			: device.device.type || 'device'
	}`;

	if (!device.device.brand) {
		return `a ${type}`;
	}

	const flipSideText = `The reader ROTATES their phone so that it's horizontal, easier to read.`;

	return `${
		['a', 'e', 'i', 'o', 'u'].includes(device.device.brand[0].toLowerCase())
			? 'an'
			: 'a'
	} ${device.device.brand || ''} ${type}`;
}
