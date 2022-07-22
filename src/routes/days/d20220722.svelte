<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220722.json';

	const pageTitle = '2022年7月21日';
	const tweetdata = getFromDate('20220722', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
