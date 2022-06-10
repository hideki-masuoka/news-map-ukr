<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220609.json';

	const pageTitle = '2022年6月9日';
	const tweetdata = getFromDate('20220609', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
