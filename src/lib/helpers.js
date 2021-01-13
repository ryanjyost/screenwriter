import { lineTypes } from './constants';

export function stringToHTML(str) {
	// If DOMParser is supported, use it
	const support = (function () {
		if (!window.DOMParser) return false;
		const parser = new DOMParser();
		try {
			parser.parseFromString('x', 'text/html');
		} catch (err) {
			return false;
		}
		return true;
	})();

	if (support) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(str, 'text/html');
		return doc.body;
	}

	// Otherwise, fallback to old-school method
	const dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
}

export function getLineTypeFromNode(node) {
	return [...node.classList].find((c) => {
		return lineTypes.find((lt) => lt.key === c);
	});
}
