<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220406.json';

	const pageTitle = '2022年4月6日';
	const tweetdata = getFromDate('20220406', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
