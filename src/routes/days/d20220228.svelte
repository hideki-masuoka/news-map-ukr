<script>
	import DaysPage from '$lib/DaysPage.svelte';

	const pageTitle = '2022年2月28日';

	const tweetdata = [
		{
			id: '1498016670174138371',
			area: 'UA-32'
		},
		{
			id: '1498075146736881670',
			area: 'UA-32'
		},
		{
			id: '1498070440043966465',
			area: 'UA-32-kyiv'
		},
		{
			id: '1498067937760096261',
			area: 'UA-14'
		}
	];
</script>

<DaysPage {tweetdata} {pageTitle} />
