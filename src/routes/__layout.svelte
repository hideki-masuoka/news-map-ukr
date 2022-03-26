<script>
	import 'virtual:windi.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<slot />

<Footer />

<style lang="windicss">
	:global(a:hover, button:hover) {
		opacity: 0.75;
	}

	:global(button:disabled) {
		cursor: not-allowed;
	}

	:global(.d-gui-chips) {
		@apply rounded-full py-1 px-4 mb-1 bg-stone-100;
		&:hover {
			opacity: 0.75;
		}
		:global(svg) {
			@apply bg-stone-300 rounded-1/2 -ml-2 my-1 p-1 w-6 h-6 inline;
		}
	}

	:global(.d-gui-spacer) {
		flex-grow: 1;
	}
</style>
