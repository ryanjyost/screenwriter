import { Helpers } from '../../../lib';
import { Cursor, Lines } from '../../../services';

export const handleEnterKey = (e, createNewLineNode) => () => {
	e.preventDefault();
	const { target: line } = e;

	const content = line.innerHTML.trim();
	const isEmpty = !content.length;
	const selection = getSelection();

	const lineType = Helpers.getLineTypeFromNode(line);
	let nextType = 'action';
	let shouldCreateNewLine = true;
	let contentToKeep;

	// returning the current line to the next next
	if (selection.atStart && !!content) {
		createNewLineNode(lineType, line.innerHTML, line);
		line.innerHTML = '';
		setTimeout(() => {
			Cursor.placeCursorAtStart();
		}, 50);

		return;
	}

	function case_slugline() {
		nextType = 'action';
	}

	switch (lineType) {
		case 'slugline':
			case_slugline();
			break;
		case 'action':
			nextType = isEmpty ? 'character' : 'action';
			shouldCreateNewLine = !isEmpty;
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

	if (shouldCreateNewLine) {
		line.blur();
		const newLine = createNewLineNode(nextType, undefined, line);
		Lines.focusLine();
	} else {
		console.log('change');
		Lines.changeLineType(line, nextType);
	}
};
