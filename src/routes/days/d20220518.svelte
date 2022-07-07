<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220518.json';

	const pageTitle = '2022年5月18日';
	const tweetdata = getFromDate('20220518', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
