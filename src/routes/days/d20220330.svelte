<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220330.json';

	const pageTitle = '2022年3月30日';
	const tweetdata = getFromDate('20220330', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
