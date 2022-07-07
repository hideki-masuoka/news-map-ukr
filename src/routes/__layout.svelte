<script>
	import { dev } from '$app/env';
	import 'virtual:windi.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	const USE_GTM = false;
</script>

<svelte:head>
	{#if !dev}
		<script
			data-goatcounter="https://hansendo.goatcounter.com/count"
			async
			src="//gc.zgo.at/count.js"></script>
		{#if USE_GTM}
			<!-- Google Tag Manager -->
			<script>
				(function (w, d, s, l, i) {
					w[l] = w[l] || [];
					w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
					var f = d.getElementsByTagName(s)[0],
						j = d.createElement(s),
						dl = l != 'dataLayer' ? '&l=' + l : '';
					j.async = true;
					j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
					f.parentNode.insertBefore(j, f);
				})(window, document, 'script', 'dataLayer', 'GTM-NLRVFJK');
			</script>
			<!-- End Google Tag Manager -->
		{/if}
	{/if}
</svelte:head>

<Header />

<slot />

<Footer />

<style lang="windicss">
	:global(body) {
		@apply bg-stone-50;
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
