function save(backup) {
	window.localStorage.setItem('backup', backup);
}

const defaultExport = {
	save,
};

export default defaultExport;
