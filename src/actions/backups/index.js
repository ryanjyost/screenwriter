import { Backups, Lines } from '../../services';
import { Helpers } from '../../lib';

export function saveBackup() {
	const content = Lines.getEditor().innerHTML.toString();
	Backups.save(content);
}

export function restoreBackup(backup) {
	const html = Helpers.stringToHTML(backup);
	for (let line of Array.from(html.children)) {
		const node = Lines.createNewLineNodeFromNode(line);
		Lines.getEditor().appendChild(node);
	}
}
