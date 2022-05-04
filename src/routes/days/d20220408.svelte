<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220408.json';

	const pageTitle = '2022年4月8日';
	const tweetdata = getFromDate('20220408', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
