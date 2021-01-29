function hasPermission(result) {
	return result.state === 'granted' || result.state === 'prompt';
}

function write(text) {
	navigator.clipboard.writeText(text).then(
		function () {
			console.log('Copied to clipboard');
		},
		function () {
			console.error('Save to clipboard failed.');
		}
	);
}

const defaultExport = {
	write,
	hasPermission,
};

export default defaultExport;
