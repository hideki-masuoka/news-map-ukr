<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220510.json';

	const pageTitle = '2022年5月10日';
	const tweetdata = getFromDate('20220510', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
