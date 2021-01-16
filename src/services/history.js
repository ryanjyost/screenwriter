function initialize() {
	if (!localStorage.getItem('history')) {
		localStorage.setItem('history', '[]');
	}
}

function setHistory(newHistory) {
	localStorage.setItem('history', JSON.stringify(newHistory));
}

function getHistory() {
	return JSON.parse(localStorage.getItem('history') || []);
}

function saveRecord(record) {
	const history = getHistory();

	history.unshift({ ...record, ts: new Date().toISOString() });

	setHistory(history);
}

const defaultExport = {
	initialize,
	saveRecord,
	getHistory,
};

export default defaultExport;
