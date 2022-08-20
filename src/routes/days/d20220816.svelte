<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220816.json';

	const pageTitle = '2022年8月16日';
	const tweetdata = getFromDate('20220816', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
