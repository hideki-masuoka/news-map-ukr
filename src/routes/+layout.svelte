<script>
	//import '../app.css';
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../global.scss';
	import { dev } from '$app/environment';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { GOAT_COUNTER, USE_GTM } from '$lib/siteMeta.js';

	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	{#if !dev}
		<script data-goatcounter={GOAT_COUNTER} async src="//gc.zgo.at/count.js"></script>
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


<AppShell>
	<svelte:fragment slot="pageHeader"><Header /></svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>

