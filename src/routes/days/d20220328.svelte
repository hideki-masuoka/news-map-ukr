<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220328.json';

	const pageTitle = '2022年3月28日';
	const tweetdata = getFromDate('20220328', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
