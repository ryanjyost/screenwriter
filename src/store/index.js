import { writable } from 'svelte/store';
import { get } from 'svelte/store';

export const activeLine = writable({ node: null, type: null, rect: null });

const refs = {
	activeLine,
};

const store = {
	get: (key) => get(refs[key]),
	set: (key, payload) => refs[key].set(payload),
	activeLine: {
		update: (updated) => activeLine.set(updated),
		setType: (type) => activeLine.update((old) => ({ ...old, type })),
	},
};

export default store;
