<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220305.json';

	const pageTitle = '2022年3月5日';
	const tweetdata = getFromDate('20220305', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
