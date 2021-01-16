import {
	toggleToolbar,
	changeActiveLineType,
	enterAtStartOfLine,
	enterAtEndOfLine,
	enterInsideOfLine,
	backspaceInEmptyLine,
	backspaceInLineWithContentNoPreviousLineContent,
	backspaceContentIntoPreviousLine,
	backspaceMultipleLines,
} from './shared';
import { Dom, History } from '../services';

const nonHistoryActions = ['toggleToolbar'];

export default function dispatch(type, payload) {
	let before, after;

	if (!nonHistoryActions.includes(type)) {
		before = Dom.getEditor().innerHTML;
	}

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

		case 'backspaceMultipleLines':
			backspaceMultipleLines(payload);
			break;

		default:
			break;
	}

	after = Dom.getEditor().innerHTML;

	History.saveRecord({
		before,
		after,
	});

	console.log({ before, after });
}
