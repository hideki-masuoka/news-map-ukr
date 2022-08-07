<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220805.json';

	const pageTitle = '2022年8月5日';
	const tweetdata = getFromDate('20220805', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
