import { Backups, Dom, Lines } from '../../services';
import { Helpers } from '../../lib';

export * from './enterInsideLine';
export * from './backspaceInsideLine';

export function toggleToolbar() {
	Lines.focusLine();
}

export function changeActiveLineType(newLineType) {
	Lines.changeActiveLineType(newLineType);
}

export function appendNewLine(type, innerHTML) {
	const newLine = Lines.createNewLineNode(type, innerHTML);
	Dom.appendNode(newLine);
	Lines.focusLine(newLine);
}

export function saveBackup() {
	const content = Dom.getEditor().innerHTML.toString();
	Backups.save(content);
}

export function restoreBackup(backup) {
	const html = Helpers.stringToHTML(backup);
	for (let line of Array.from(html.children)) {
		const node = Lines.createNewLineNodeFromNode(line);
		Dom.getEditor().appendChild(node);
	}
}
