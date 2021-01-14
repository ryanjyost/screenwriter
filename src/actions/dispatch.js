import {
	toggleToolbar,
	changeActiveLineType,
	enterAtStartOfLine,
	enterAtEndOfLine,
	enterInsideOfLine,
	backspaceInEmptyLine,
	backspaceInLineWithContentNoPreviousLineContent,
	backspaceContentIntoPreviousLine,
} from './shared';

export default function dispatch(type, payload) {
	switch (type) {
		case 'toggleToolbar':
			toggleToolbar();
			break;

		case 'changeActiveLineType':
			changeActiveLineType(payload);
			break;

		case 'enterAtStartOfLine':
			enterAtStartOfLine(payload);
			break;

		case 'enterAtEndOfLine':
			enterAtEndOfLine(payload);
			break;

		case 'enterInsideOfLine':
			enterInsideOfLine(payload);
			break;

		case 'backspaceInEmptyLine':
			backspaceInEmptyLine(payload);
			break;

		case 'backspaceInLineWithContentNoPreviousLineContent':
			backspaceInLineWithContentNoPreviousLineContent(payload);
			break;

		case 'backspaceContentIntoPreviousLine':
			backspaceContentIntoPreviousLine(payload);
			break;

		default:
			break;
	}
}
