<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220718.json';

	const pageTitle = '2022年7月18日';
	const tweetdata = getFromDate('20220718', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
