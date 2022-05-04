<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220407.json';

	const pageTitle = '2022年4月7日';
	const tweetdata = getFromDate('20220407', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
