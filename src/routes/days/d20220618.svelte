<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220618.json';

	const pageTitle = '2022年6月18日';
	const tweetdata = getFromDate('20220618', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
