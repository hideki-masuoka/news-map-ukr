<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220514.json';

	const pageTitle = '2022年5月14日';
	const tweetdata = getFromDate('20220514', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
