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
import { Dom } from '../services';

const nonHistoryActions = ['toggleToolbar'];

export default function dispatch(type, payload) {
	let snapshotBefore, snapshotAfter;

	if (!nonHistoryActions.includes(type)) {
		snapshotBefore = Dom.getEditor().innerHTML;
		console.log({ snapshotBefore });
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
}
