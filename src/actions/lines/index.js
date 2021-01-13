import { Lines, Dom } from '../../services';
import { createNewLineNode } from '../shared';

export function appendNewLine(type, innerHTML) {
	const newLine = createNewLineNode(type, innerHTML);
	Dom.appendNode(newLine);
}

export function focusLine(node) {
	Lines.focusLine(node);
}

export function changeActiveLineType(newLineTypeKey) {
	Lines.changeActiveLineType(newLineTypeKey);
}
