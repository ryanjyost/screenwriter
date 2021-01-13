function appendNode(node, container) {
	container = container || document.getElementById('editor');
	container.appendChild(node);
}

function insertNodeAfter(node, anchorNode) {
	anchorNode.parentNode.insertBefore(node, anchorNode.nextSibling);
}

function insertNodeBefore(node, anchorNode) {
	anchorNode.parentNode.insertBefore(node, anchorNode);
}

function getEditor() {
	return document.getElementById('editor');
}

const defaultExport = {
	getEditor,
	insertNodeAfter,
	insertNodeBefore,
	appendNode,
};

export default defaultExport;
