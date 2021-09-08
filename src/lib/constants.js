export const lineTypes = [
	{ key: 'slugline', label: 'Scene', icon: 'fas fa-image' },
	{ key: 'action', label: 'Action', icon: 'fas fa-running' },
	{ key: 'character', label: 'Character', icon: 'fas fa-user' },
	{ key: 'dialogue', label: 'Dialogue', icon: 'fas fa-comment' },
	{ key: 'parens', label: 'Parens', icon: '( )' },
	{ key: 'transition', label: 'Transition', icon: 'fas fa-exchange-alt' },
	{
		secondary: true,
		key: 'startAct',
		label: 'New Act',
		icon: 'fas fa-angle-double-right',
	},
	{
		secondary: true,
		key: 'endAct',
		label: 'End Act',
		icon: 'fas fa-angle-double-left',
	},
];

export const textStyles = [
	{ key: 'bold', label: 'Bold', icon: 'fas fa-bold', element: 'b' },
	{ key: 'italic', label: 'Italic', icon: 'fas fa-italic', element: 'i' },
	{
		key: 'underline',
		label: 'Underline',
		icon: 'fas fa-underline',
		element: 'u',
	},
];

export const textStylesReference = textStyles.reduce((acc, curr) => {
	acc[curr.key] = curr;
	return acc;
}, {});
