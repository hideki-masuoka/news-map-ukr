<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220728.json';

	const pageTitle = '2022年7月28日';
	const tweetdata = getFromDate('20220728', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
