<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';

	const pageTitle = 'News';
	const tweetdata = getFromDate('20220308');
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
