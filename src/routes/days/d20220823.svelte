<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220823.json';

	const pageTitle = '2022年8月23日';
	const tweetdata = getFromDate('20220823', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
