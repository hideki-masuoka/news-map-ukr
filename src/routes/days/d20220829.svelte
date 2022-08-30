<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220829.json';

	const pageTitle = '2022年8月29日';
	const tweetdata = getFromDate('20220829', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
