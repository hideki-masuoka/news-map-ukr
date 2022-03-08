<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220306.json';

	const pageTitle = '2022年3月6日';
	const tweetdata = getFromDate('20220306', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
