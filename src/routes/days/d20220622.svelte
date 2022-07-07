<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220622.json';

	const pageTitle = '2022年6月22日';
	const tweetdata = getFromDate('20220622', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
