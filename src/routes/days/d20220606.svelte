<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220605.json';

	const pageTitle = '2022年6月5日';
	const tweetdata = getFromDate('20220605', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
