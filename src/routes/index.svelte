<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220515.json';

	const pageTitle = 'News';
	const tweetdata = getFromDate('20220515', jsonData);
</script>

<DaysPage {pageTitle} {tweetdata} embed={false} />

<style>
</style>
