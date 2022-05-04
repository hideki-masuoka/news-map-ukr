<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220409.json';

	const pageTitle = '2022年4月9日';
	const tweetdata = getFromDate('20220409', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
