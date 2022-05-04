<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220405.json';

	const pageTitle = '2022年4月5日';
	const tweetdata = getFromDate('20220405', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
