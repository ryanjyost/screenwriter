import { Lines, Dom } from '../services';
import Store from '../store';
import { restoreBackup } from './backups';
import { appendNewLine } from './lines';

export function initializeEditor() {
	const backup = window.localStorage.getItem('backup');

	if (backup) {
		restoreBackup(backup);
	} else {
		appendNewLine('slugline', 'INT. UNKNOWN - DAY');
	}

	// focus the closest element
	Dom.getEditor().addEventListener('click', function (e) {
		// console.log(e);
		let closestLine = null;

		Array.from(Lines.getEditor().children).map((child) => {
			// console.log({ child });
		});
	});

	window.addEventListener('beforeunload', function () {
		// saveBackup();
	});
}
