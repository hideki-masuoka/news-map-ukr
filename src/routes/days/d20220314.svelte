<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220314.json';

	const pageTitle = '2022年3月14日';
	const tweetdata = getFromDate('20220314', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
