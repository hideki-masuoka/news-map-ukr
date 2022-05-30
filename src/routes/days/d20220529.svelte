<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220529.json';

	const pageTitle = '2022年5月29日';
	const tweetdata = getFromDate('20220529', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
