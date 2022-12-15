<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20221215.json';
	import { base } from '$app/paths';

	const pageTitle = 'News';
	const tweetdata = getFromDate('20221215', jsonData, true);
</script>

<DaysPage {pageTitle} {tweetdata} embed={false} />

<style>
</style>
