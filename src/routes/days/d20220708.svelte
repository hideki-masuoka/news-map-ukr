<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220708.json';

	const pageTitle = '2022年7月8日';
	const tweetdata = getFromDate('20220708', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
