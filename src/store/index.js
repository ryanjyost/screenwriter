import { writable } from 'svelte/store';
import { get } from 'svelte/store';
import { Helpers } from '../lib';

export const activeLine = writable({ node: null, type: null, rect: null });

const refs = {
	activeLine,
};

const store = {
	getValue: (prop) => get(refs[prop]),
	activeLine: {
		update: (updated) => activeLine.set(updated),
		updateFromNode: (node) => {
			activeLine.set({
				node,
				type: Helpers.getLineTypeFromNode(node),
				rect: document.activeElement.getBoundingClientRect(),
			});
		},
		setType: (type) => activeLine.update((old) => ({ ...old, type })),
	},
};

export default store;
