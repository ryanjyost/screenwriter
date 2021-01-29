<script>
	import { onMount } from 'svelte';
	import { Constants } from '../lib';
	import { activeLine } from '../store';
	import Dispatch, { initializeEditor } from '../actions';

	let windowInnerWidth;
	let editorRect;
	let toolbarOpen = true;
	let currentLineTypeInfo;
	let showQuickKeys;

	const handleLineTypeClick = (newLineTypeKey) => () => {
		Dispatch('changeActiveLineType', newLineTypeKey);
	};

	const handleTextStyleClick = (newTextStyle) => () => {
		Dispatch('changeFullLineTextStyle', newTextStyle);
	};

	function handleToggleToolbar() {
		toolbarOpen = !toolbarOpen;
		Dispatch('toggleToolbar');
	}

	onMount(() => {
		editorRect = document.getElementById('editor').getBoundingClientRect();
		window.addEventListener('resize', function () {
			editorRect = document.getElementById('editor').getBoundingClientRect();
		});

		initializeEditor();
	});

	$: currentLineTypeInfo = Constants.lineTypes.find(
		(lt) => lt.key === $activeLine.type
	);

	// $: console.log({activeLine: $activeLine});

	$: showQuickKeys =
		$activeLine && $activeLine.rect && $activeLine.rect.top && editorRect;
</script>

<svelte:window bind:innerWidth={windowInnerWidth} />

{#if showQuickKeys}
	<div
		id="quickKeys"
		style={`top: ${$activeLine.rect.top - 8}px; left: calc(${
			editorRect.left || 0
		}px + ${0.75}in)`}
	>
		{#if toolbarOpen}
			<button
				id="closeToolbarButton"
				title="Close"
				class={`lineTypeButton`}
				on:click|once={handleToggleToolbar}>
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

			<hr />

			{#each Constants.textStyles as { key, label, icon, iconSize }}
				<button
					id={`textStyleButton-${key}`}
					title={label}
					class="textStyleButton"
					on:click={handleTextStyleClick(key)}>
					<i class={icon} />
				</button>
			{/each}
		{:else}
			<button
				id={`typeButton-${currentLineTypeInfo.key}`}
				title={currentLineTypeInfo.label}
				class={`lineTypeButton`}
				on:click={handleToggleToolbar}>
				{#if currentLineTypeInfo.icon.includes('f')}
					<i class={currentLineTypeInfo.icon} />
				{:else}
					<span class="icon"><b>{currentLineTypeInfo.icon}</b></span>
				{/if}
			</button>
		{/if}
	</div>
{/if}

<div id="editor" />

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

	.lineTypeButton,
	.textStyleButton {
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

	.lineTypeButton:hover i,
	.lineTypeButton:hover .icon,
	.textStyleButton:hover i,
	.textStyleButton:hover .icon {
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
</style>
