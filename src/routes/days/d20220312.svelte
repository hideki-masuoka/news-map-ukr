<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220312.json';

	const pageTitle = '2022年3月12日';
	const tweetdata = getFromDate('20220312', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
