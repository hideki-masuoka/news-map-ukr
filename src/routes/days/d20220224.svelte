<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220224.json';

	const pageTitle = '2022年2月24日';
	const tweetdata = getFromDate('20220224', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
