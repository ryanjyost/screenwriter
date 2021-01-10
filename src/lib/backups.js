import * as Helpers from './helpers';
import * as Editor from './editor';

export function save() {
	window.localStorage.setItem(
		'backup',
		`${Editor.getEditor().innerHTML.toString()}`
	);
}

export function restore(backup) {
	const html = Helpers.stringToHTML(backup);
	for (let line of Array.from(html.children)) {
		console.log({ line });
		Editor.createNewLineFromNode(line);
	}
}

export function init() {
	const backup = window.localStorage.getItem('backup');

	if (backup) restore(backup);
}
