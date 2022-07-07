<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220607.json';

	const pageTitle = '2022年6月7日';
	const tweetdata = getFromDate('20220607', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
