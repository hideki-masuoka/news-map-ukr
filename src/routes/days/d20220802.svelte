<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220802.json';

	const pageTitle = '2022年8月2日';
	const tweetdata = getFromDate('20220802', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
