<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220427.json';

	const pageTitle = 'News';
	const tweetdata = getFromDate('20220427', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />

<style>
</style>
