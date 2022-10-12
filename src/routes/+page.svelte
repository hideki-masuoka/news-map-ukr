<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220901.json';
	import { base } from '$app/paths';

	const pageTitle = 'News';
	const tweetdata = getFromDate('20220901', jsonData);
</script>

<a href="{base}/days/d20220802/">a</a>

<DaysPage {pageTitle} {tweetdata} embed={false} />

<style>
</style>
