import { writable } from 'svelte/store';
import { get } from 'svelte/store';

export const activeLine = writable({ node: null, type: null, rect: null });

const refs = {
	activeLine,
};

const store = {
	getValue: (prop) => get(refs[prop]),
	activeLine: {
		update: (updated) => activeLine.set(updated),
		setType: (type) => activeLine.update((old) => ({ ...old, type })),
	},
};

export default store;
