<script>
	import { onMount } from 'svelte';
	import { Constants } from '../lib';
	import { activeLine } from '../store';
	import { initializeEditor, saveBackup, focusLine, changeActiveLineType } from '../actions';

	let windowInnerWidth;
	let editorRect;
	let toolbarOpen = true;
	let currentLineTypeInfo;

	const handleLineTypeClick = (newLineTypeKey) => () => {
		changeActiveLineType(newLineTypeKey);
	};

	function toggleToolbar() {
		toolbarOpen = !toolbarOpen;
		focusLine($activeLine.node);
	}

	onMount(() => {
		editorRect = document.getElementById('editor').getBoundingClientRect();

		initializeEditor();

		window.addEventListener('resize', function () {
			editorRect = document.getElementById('editor').getBoundingClientRect();
		});

		// save
		document.addEventListener('keydown', function (e) {
			const { key, metaKey } = e;
			if (key === 's' && metaKey) {
				e.preventDefault();
				saveBackup();
			}
		});
	});

	$: currentLineTypeInfo = Constants.lineTypes.find(
		(lt) => lt.key === $activeLine.type
	);
</script>

<svelte:window bind:innerWidth={windowInnerWidth} />

{#if $activeLine && $activeLine.type && editorRect}
	<div
		id="quickKeys"
		style={`top: ${$activeLine.rect.top - 8}px; left: calc(${
			editorRect.left || 0
		}px + ${0.75}in)`}
	>
		{#if toolbarOpen}
			<button
				id="closeToolbarButton"
				title="Close}"
				class={`lineTypeButton`}
				on:click|once={toggleToolbar}>
				<i class="fas fa-times" id="closeToolbarIcon" />
			</button>

			<hr />
			{#each Constants.lineTypes as { key, label, icon, iconSize }}
				<button
					id={`typeButton-${key}`}
					title={label}
					class={`lineTypeButton ${
						key === $activeLine.type ? 'currentLineType' : ''
					}`}
					on:click={handleLineTypeClick(key)}>
					{#if icon.includes('f')}
						<i class={icon} />
					{:else}
						<span class="icon"><b>{icon}</b></span>
					{/if}
				</button>
			{/each}
		{:else}
			<button
				id={`typeButton-${currentLineTypeInfo.key}`}
				title={currentLineTypeInfo.label}
				class={`lineTypeButton`}
				on:click={toggleToolbar}>
				{#if currentLineTypeInfo.icon.includes('f')}
					<i class={currentLineTypeInfo.icon} />
				{:else}
					<span class="icon"><b>{currentLineTypeInfo.icon}</b></span>
				{/if}
			</button>
		{/if}
	</div>
{/if}

<div id="editor">
	<!--    <div class="action line" contenteditable="true">This is an action line.</div>-->
	<!--    <div class="character line" contenteditable="true">Character</div>-->
	<!--    <div class="parens line" contenteditable="true">tired</div>-->
	<!--    <div class="dialogue line" contenteditable="true">I am saying dialogue.</div>-->
</div>

<style>
	#quickKeys {
		position: absolute;
		/*box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);*/
		width: 45px;
		z-index: 1;
		border-radius: 2px;
		padding: 2px 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		/*border: 1px solid rgba(28, 39, 50, 0.2);*/
		/*background-color: rgba(28, 39, 50, 0.9);*/
	}

	#quickKeys hr {
		border-color: rgba(28, 39, 50, 0.1);
		margin: 0px 0px 5px 0px;
		width: 100%;
	}

	#closeToolbar {
		color: rgba(0, 0, 0, 0.5);
	}

	#closeToolbarIcon {
		font-size: 16px;
	}

	.lineTypeButton {
		display: flex;
		align-items: center;
		padding: 0px 5px;
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		text-align: center;
		justify-content: center;
		width: 35px;
		height: 30px;
		margin: 0px 0px;
		border-radius: 2px;
		font-size: 16px;
		color: rgba(28, 39, 50, 0.3);
	}

	#typeButton-action {
		font-size: 21px;
	}

	#typeButton-transition {
		font-size: 18px;
	}

	/*.lineTypeButton:hover {*/
	/*	!*background-color: rgba(155, 66, 227, 0.1);*!*/
	/*	color: rgba(155, 66, 227, 0.8) !important;*/
	/*}*/

	.lineTypeButton:hover i,
	.lineTypeButton:hover .icon {
		color: rgba(155, 66, 227, 0.5) !important;
	}

	#quickKeys i,
	#quickKeys .icon {
	}

	.currentLineType i,
	.currentLineType .icon {
		/*color: #fff !important;*/
		color: rgb(155, 66, 227) !important;
	}

	.currentLineType:hover:not(:focus) i,
	.currentLineType:hover:not(:focus) .icon {
		color: rgb(155, 66, 227) !important;
	}

	/*#editor {*/
	/*	width: 8.5in;*/
	/*	!*width: 100%;*!*/
	/*	min-height: 100vh;*/
	/*	margin: auto;*/
	/*	padding-top: 1in;*/
	/*	padding-bottom: 1in;*/
	/*	padding-left: 1.5in;*/
	/*	padding-right: 1in;*/
	/*	font-size: 16px;*/
	/*	font-family: CourierPrime, Courier, monospace, NotoSerifSC, 'Noto Serif SC';*/
	/*	border: 1px solid #ccc;*/
	/*	!*color: rgba(0, 0, 0, 1);*!*/
	/*	!*font-weight: bold;*!*/
	/*}*/

	/*.link {*/
	/*	color: red !important;*/
	/*}*/

	/*.link:visited {*/
	/*	color: #551a8b !important;*/
	/*}*/

	/*.inactive {*/
	/*	display: none !important;*/
	/*}*/

	/*.cursor-fade {*/
	/*}*/

	/*.active,*/
	/*.line:focus {*/
	/*	background-color: rgba(60, 192, 245, 0.1);*/
	/*	outline: none;*/
	/*}*/

	/*.line {*/
	/*	min-height: 16px;*/
	/*}*/

	/*.line:focus {*/
	/*	outline: none;*/
	/*}*/

	/*.slugline {*/
	/*	font-weight: bold;*/
	/*	text-transform: uppercase;*/
	/*	min-width: 100%;*/
	/*}*/

	/*.slugline:not(:first-child) {*/
	/*	margin-top: 32px;*/
	/*}*/

	/*.character {*/
	/*	text-transform: uppercase;*/
	/*	margin-top: 16px;*/
	/*	white-space: pre-wrap;*/
	/*	margin-left: 2in;*/
	/*	margin-right: 0.25in;*/
	/*}*/

	/*.dialogue {*/
	/*	white-space: pre-wrap;*/
	/*	margin-left: 1in;*/
	/*	margin-right: 1.55in;*/
	/*}*/

	/*.action {*/
	/*	margin-top: 16px;*/
	/*}*/

	/*.parens {*/
	/*	margin-left: 1.5in;*/
	/*	margin-right: 1.95in;*/
	/*}*/

	/*.parens::before {*/
	/*	content: '(';*/
	/*}*/
	/*.parens::after {*/
	/*	content: ')';*/
	/*}*/
</style>
