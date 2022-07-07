<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220616.json';

	const pageTitle = '2022年6月16日';
	const tweetdata = getFromDate('20220616', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
