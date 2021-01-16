import Store from '../store';
import { lineTypes } from '../lib/constants';
import { v4 as uuid } from 'uuid';
import Dom from './dom';

function updateActiveLine(node) {
	node.classList.add('active');

	Store.set('activeLine', {
		node,
		id: node.id,
		type: getLineTypeFromNode(node),
		rect: document.activeElement.getBoundingClientRect(),
	});
}

function focusLine(node, callback) {
	console.log('focus line');
	if (!node) {
		const activeLine = Store.get('activeLine');
		node = document.getElementById(activeLine.id);

		if (!node) return;
	}

	if (!Dom.isNodeLine(node)) {
		// clicked a <b>, etc.
		const parentNode = document.getElementById(node.parentNode.id);
		updateActiveLine(parentNode);
		parentNode.classList.add('active');
	} else {
		updateActiveLine(node);
		node.classList.add('active');
	}

	node.setAttribute('contenteditable', 'true');
	// node.focus();

	// setTimeout(() => {
	// 	try {
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }, 5);

	setTimeout(() => {
		callback && callback();
	}, 10);
}

function blurLine(node) {
	if (!node) {
		const activeLine = Store.get('activeLine');
		node = document.getElementById(activeLine.id);

		if (!node) return;
	}

	node.blur();

	setTimeout(() => {
		node.setAttribute('contenteditable', 'false');
		node.classList.remove('active');

		console.log('REMOVE CLASS', node);

		// [...node.childList].map((child) => {
		// 	console.log({ child });
		// });
	}, 10);
}

function changeActiveLineType(newType) {
	const activeLine = Store.get('activeLine');
	const node = document.getElementById(activeLine.node.id);
	node.classList.remove(activeLine.type);
	node.classList.add(newType);

	Store.activeLine.setType(newType);
	focusLine(node);
}

function changeLineType(node, newType) {
	const currentType = getLineTypeFromNode(node);
	const line = document.getElementById(node.id);
	line.classList.remove(currentType);
	line.classList.add(newType);

	if (!line.textContent) {
		setTimeout(() => {
			line.textContent = '';
		}, 1);
	}
}

function getLineTypeFromNode(node) {
	return [...node.classList].find((c) => {
		return lineTypes.find((lt) => lt.key === c);
	});
}

function getNextLineType(currLineType) {
	let nextType = 'action';

	switch (currLineType) {
		case 'slugline':
			nextType = 'action';
			break;
		case 'action':
			nextType = 'action';
			break;
		case 'character':
		case 'parens':
			nextType = 'dialogue';
			break;
		case 'dialogue':
			nextType = 'character';
			break;
		default:
			nextType = 'action';
	}

	return nextType;
}

function getNextLineTypeTabKey(type) {
	let nextType = 'action';

	switch (type) {
		case 'slugline':
			nextType = 'action';
			break;
		case 'action':
			nextType = 'character';
			break;
		case 'character':
			nextType = 'dialogue';
			break;
		case 'dialogue':
			nextType = 'parens';
			break;
		case 'parens':
			nextType = 'slugline';
			break;
		default:
			nextType = 'action';
	}

	return nextType;
}

function createNewLineNode(type = 'action', innerHTML = '') {
	const line = document.createElement('div');
	line.classList.add('line');
	line.classList.add(type);
	line.innerHTML = innerHTML;
	line.setAttribute('id', uuid());
	line.setAttribute('tabindex', '0');
	line.setAttribute('contenteditable', 'false');

	// line.addEventListener(
	// 	'focus',
	// 	function (e) {
	// 		if (Dom.isNodeLine(e.target)) updateActiveLine(e.target);
	// 	},
	// 	true
	// );

	line.addEventListener(
		'blur',
		function (e) {
			console.log('BLUR', e.target);
			if (Dom.isNodeLine(e.target)) {
				// console.log('IS LINE');
				const line = document.getElementById(e.target.id);
				line.classList.remove('active');
				line.setAttribute('contenteditable', 'false');
			} else {
				console.log('NOT LINE');
				const line = document.getElementById(e.target.parentNode.id);
				line.classList.remove('active');
				line.setAttribute('contenteditable', 'false');
				console.log({ line });
			}
		},
		true
	);

	line.addEventListener('mouseup', function (e) {
		// const selection = Dom.getSelection();
		// if (!selection.multipleLines) {
		// 	e.target.setAttribute('contenteditable', 'true');
		// }
	});

	return line;
}

function createNewLineNodeFromNode(node) {
	const type = getLineTypeFromNode(node);
	return createNewLineNode(type, node.innerHTML);
}

const defaultExport = {
	focusLine,
	blurLine,
	changeLineType,
	changeActiveLineType,
	getLineTypeFromNode,
	updateActiveLine,
	getNextLineType,
	getNextLineTypeTabKey,
	createNewLineNode,
	createNewLineNodeFromNode,
};

export default defaultExport;

function focusLineHandler(e) {}

function blurLineHandler(e) {
	const { target } = e;
}
