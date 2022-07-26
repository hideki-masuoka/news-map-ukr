<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220724.json';

	const pageTitle = '2022年7月24日';
	const tweetdata = getFromDate('20220724', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
