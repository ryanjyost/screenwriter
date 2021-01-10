import { v4 as uuid } from 'uuid';
import Store from '../../stores';

export const lineTypes = [
	{ key: 'slugline', label: 'Scene', icon: 'fas fa-image' },
	{ key: 'action', label: 'Action', icon: 'fas fa-running', iconSize: 24 },
	{ key: 'character', label: 'Character', icon: 'fas fa-user' },
	{ key: 'parens', label: 'Parens', icon: '( )' },
	{ key: 'dialogue', label: 'Dialogue', icon: 'fas fa-comment' },
];

export function getEditor() {
	return document.getElementById('editor');
}

export function focusLine(node) {
	setTimeout(() => {
		node.focus();
		node.setAttribute('contenteditable', 'true');
		placeCursorAtEnd(node);
	}, 10);
}

export function createNewLine(type = 'action', innerHTML = '') {
	const line = document.createElement('div');
	line.classList.add('line');
	line.classList.add(type);
	line.innerHTML = innerHTML;
	line.setAttribute('contenteditable', 'true');
	line.setAttribute('id', uuid());

	line.addEventListener('click', clickLineHandler);
	line.addEventListener('blur', blurLineHandler);
	line.addEventListener('keydown', enterHandler);

	getEditor().appendChild(line);

	focusLine(line);
}

export function createNewLineFromNode(node) {
	const type = getLineTypeFromNode(node);
	const innerHTML = node.innerHTML;

	createNewLine(type, innerHTML);
}

export function changeActiveLineType(newType) {
	const activeLine = Store.getValue('activeLine');
	const node = document.getElementById(activeLine.node.id);
	node.classList.remove(activeLine.type);
	node.classList.add(newType);

	Store.activeLine.setType(newType);
	focusLine(node);
}

function enterHandler(e) {
	if (e.key === 'Enter') {
		const { target } = e;
		target.blur();
		target.innerHTML = target.innerHTML.trim();

		const lineType = getLineTypeFromNode(target);
		let nextType = 'action';
		switch (lineType) {
			case 'slugline':
				nextType = 'action';
				break;
			case 'character':
				nextType = 'dialogue';
				break;
			case 'dialogue':
				nextType = 'character';
				break;
			default:
				nextType = 'action';
		}

		createNewLine('action');
	}
}

function clickLineHandler(e) {
	const { target } = e;
	target.setAttribute('contenteditable', 'true');
	target.focus();
}

function blurLineHandler(e) {
	const { target } = e;
	target.setAttribute('contenteditable', 'false');
}

function placeCursorAtEnd(line, atStart) {
	if (
		typeof window.getSelection != 'undefined' &&
		typeof document.createRange != 'undefined'
	) {
		const range = document.createRange();
		range.selectNodeContents(line);
		range.collapse(atStart);
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (typeof document.body.createTextRange != 'undefined') {
		const textRange = document.body.createTextRange();
		textRange.moveToElementText(line);
		textRange.collapse(atStart);
		textRange.select();
	}
}

export function getLineTypeFromNode(node) {
	return [...node.classList].find((c) => {
		return lineTypes.find((lt) => lt.key === c);
	});
}
