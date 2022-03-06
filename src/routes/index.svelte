<script>
	import DaysPage from '$lib/DaysPage.svelte';

	const pageTitle = 'News';

	const tweetdata = [
		{
			id: '1500370932262596610',
			area: 'UA-14'
		}
	];
</script>

<DaysPage {tweetdata} {pageTitle} />
