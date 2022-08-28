<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220827.json';

	const pageTitle = '2022年8月27日';
	const tweetdata = getFromDate('20220827', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
