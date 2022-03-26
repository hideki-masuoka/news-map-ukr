<script>
	import 'virtual:windi.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<slot />

<Footer />

<style lang="windicss">
	:global(body) {
		@apply bg-stone-100;
	}
	:global(a:hover, button:hover) {
		opacity: 0.75;
	}

	:global(button:disabled) {
		cursor: not-allowed;
	}

	:global(.d-gui-spacer) {
		flex-grow: 1;
	}
</style>
