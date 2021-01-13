import { v4 as uuid } from 'uuid';
import Store from '../../store';
import { Helpers } from '../../lib';
import { Cursor, Lines } from '../../services';
import { handleEnterKey } from './lineEventHandlers';

export function createNewLineNode(type = 'action', innerHTML = '') {
	const line = document.createElement('div');
	line.classList.add('line');
	line.classList.add(type);
	line.innerHTML = !innerHTML && type === 'parens' ? '()' : innerHTML;
	line.setAttribute('id', uuid());

	line.addEventListener('click', clickLineHandler);
	line.addEventListener('blur', blurLineHandler);
	line.addEventListener('keydown', keydownHandler);
	line.addEventListener(
		'focus',
		function (e) {
			const { target } = e;
			if (target.classList.contains('line')) {
				Store.activeLine.updateFromNode(target);
			}
		},
		true
	);

	return line;
}

export function createNewLineNodeFromNode(node) {
	const type = Helpers.getLineTypeFromNode(node);
	return createNewLineNode(type, node.innerHTML);
}

function keydownHandler(e) {
	const { target: line } = e;

	function handleDeleteKey() {
		const selection = getSelection();
		const previousLineContent = line.previousSibling.textContent.trim();

		// just delete normally
		if (!selection.atStart) return;

		// we are taking over in this bitch
		e.preventDefault();

		function deleteEmptyLine() {
			if (line.previousSibling) {
				Lines.focusLine(line.previousSibling);
				line.remove();
			} else {
				Lines.focusLine(line);
			}
		}

		function moveLineUpAndRemovePrevious() {
			const previousLine = document.getElementById(line.previousSibling.id);
			previousLine.remove();
		}

		function combineCurrentAndPrevious() {
			const prevLine = document.getElementById(line.previousSibling.id);
			prevLine.innerHTML += line.innerHTML;
			line.remove();

			Lines.focusLine(prevLine, 5);
		}

		if (!line.innerHTML) {
			deleteEmptyLine();
		} else if (!previousLineContent && selection.atStart) {
			moveLineUpAndRemovePrevious();
		} else if (selection.atStart && line.previousSibling) {
			combineCurrentAndPrevious();
		}
	}

	function handleGenericKey(e) {
		// console.log({ e });
	}

	switch (e.key) {
		case 'Enter':
			handleEnterKey(e, createNewLineNode)();
			break;
		case 'Backspace':
			handleDeleteKey(e);
			break;
		default:
			handleGenericKey(e);
			break;
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
