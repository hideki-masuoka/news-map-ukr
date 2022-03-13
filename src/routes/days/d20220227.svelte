<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220227.json';

	const pageTitle = '2022年2月27日';
	const tweetdata = getFromDate('20220227', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
