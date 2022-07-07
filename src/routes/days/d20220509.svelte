<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220509.json';

	const pageTitle = '2022年5月9日';
	const tweetdata = getFromDate('20220509', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
