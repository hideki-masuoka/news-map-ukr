<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220819.json';

	const pageTitle = '2022年8月19日';
	const tweetdata = getFromDate('20220819', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
