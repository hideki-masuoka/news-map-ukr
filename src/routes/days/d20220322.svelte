<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220322.json';

	const pageTitle = '2022年3月22日';
	const tweetdata = getFromDate('20220322', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
