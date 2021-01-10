<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment} />

<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		background-color: #f9f9f1;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 100vh;
		min-width: fit-content;
		/*font-family: CourierPrime, Courier, monospace, NotoSerifSC, 'Noto Serif SC';*/
		letter-spacing: -0.3px;
		line-height: 1;
		text-align: left;
	}
</style>
