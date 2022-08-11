<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220808.json';

	const pageTitle = '2022年8月8日';
	const tweetdata = getFromDate('20220808', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
