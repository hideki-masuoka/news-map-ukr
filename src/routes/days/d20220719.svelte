<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220719.json';

	const pageTitle = '2022年7月19日';
	const tweetdata = getFromDate('20220719', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
