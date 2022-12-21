<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20221220.json';
	import { base } from '$app/paths';

	const pageTitle = 'News';
	const tweetdata = getFromDate('20221220', jsonData, true);
</script>

<DaysPage {pageTitle} {tweetdata} embed={false} />

<style>
</style>
