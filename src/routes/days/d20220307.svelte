<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';

	const pageTitle = '2022年3月7日';
	const tweetdata = getFromDate('20220307');
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
