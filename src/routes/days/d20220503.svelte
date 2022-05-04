<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220503.json';

	const pageTitle = '2022年5月3日';
	const tweetdata = getFromDate('20220503', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
