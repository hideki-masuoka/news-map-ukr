<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220226.json';

	const pageTitle = '2022年2月26日';
	const tweetdata = getFromDate('20220226', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
