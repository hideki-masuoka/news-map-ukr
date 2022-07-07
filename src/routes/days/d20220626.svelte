<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220626.json';

	const pageTitle = '2022年6月26日';
	const tweetdata = getFromDate('20220626', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
