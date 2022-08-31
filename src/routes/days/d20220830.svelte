<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220830.json';

	const pageTitle = '2022年8月30日';
	const tweetdata = getFromDate('20220830', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
