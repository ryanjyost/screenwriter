<script>
	import { onMount, onDestroy } from 'svelte';
	import { activeLine } from '../stores';
	import { Editor, Backups } from '../lib';

	let windowInnerWidth;
	let editorRect;

	const handleLineTypeClick = (lineTypeKey) => () => {
		Editor.changeActiveLineType(lineTypeKey);
	};

	onMount(() => {
		editorRect = document.getElementById('editor').getBoundingClientRect();

		if (window.localStorage.getItem('backup')) {
			Backups.init();
		} else {
			Editor.createNewLine('slugline');
		}

		document.addEventListener(
			'focus',
			function (e) {
				const { target } = e;
				if (target.classList.contains('line')) {
					activeLine.set({
						node: target,
						type: Editor.getLineTypeFromNode(target),
						rect: document.activeElement.getBoundingClientRect(),
					});
				}
			},
			true
		);

		window.addEventListener('resize', function () {
			editorRect = document.getElementById('editor').getBoundingClientRect();
		});

		window.addEventListener('beforeunload', function(){
			// Backups.save()
		});

		// save
		document.addEventListener('keydown', function (e) {
			const { key, metaKey } = e;
			if (key === 's' && metaKey) {
				e.preventDefault();
				Backups.save();
			}
		});
	});
</script>

<svelte:window bind:innerWidth={windowInnerWidth} />

{#if $activeLine && $activeLine.type && editorRect}
	<div
		id="quickKeys"
		style={`top: ${$activeLine.rect.top}px; left: calc(${
			editorRect.left || 0
		}px + ${0.75}in)`}
	>
		{#each Editor.lineTypes as { key, label, icon, iconSize }}
			<button class="lineType" on:click={handleLineTypeClick(key)}>
				{#if icon.includes('f')}
					<i class={icon} style={`font-size: ${iconSize || 18}px`} />
				{:else}
					<span class="icon" style={`font-size: ${iconSize || 18}px`}
						><b>{icon}</b></span
					>
				{/if}
			</button>
		{/each}
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
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		width: 45px;
		z-index: 1;
		border-radius: 3px;
		padding: 5px;
		background-color: rgba(28, 39, 50, 0.9);
	}

	.lineType {
		font-size: 10px;
		display: flex;
		align-items: center;
		padding: 10px 5px;
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		text-align: center;
		justify-content: center;
		width: 35px;
		height: 35px;
	}

	.lineType:hover {
		background-color: rgba(28, 39, 50, 1);
	}

	#quickKeys i,
	#quickKeys .icon {
		font-size: 22px;
		color: #fff;
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
