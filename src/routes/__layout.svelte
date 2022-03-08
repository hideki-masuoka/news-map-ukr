<script>
	import 'virtual:windi.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<slot />

<Footer />

<style>
	:global(a:hover) {
		opacity: 0.75;
	}
</style>
