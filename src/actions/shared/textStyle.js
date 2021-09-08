import { Dom } from '../../services';
import { Constants } from '../../lib';
import Store from '../../store';

// TODO
export function changeFullLineTextStyle(newStyle) {
	const selection = Dom.getSelection();
	const activeLine = Store.get('activeLine');
	const node = document.getElementById(activeLine.id);

	if (!node) return;

	const newStyleElement = Constants.textStylesReference[newStyle].element;

	if (!node.children.length) {
		node.innerHTML = `<${newStyleElement}>${node.innerHTML}</${newStyleElement}>`;
	}

	console.log({ newStyleElement, node });
}
