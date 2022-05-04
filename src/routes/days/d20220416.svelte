<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220416.json';

	const pageTitle = '2022年4月16日';
	const tweetdata = getFromDate('20220416', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
