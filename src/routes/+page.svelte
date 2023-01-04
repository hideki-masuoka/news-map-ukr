<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20230103.json';
	import { base } from '$app/paths';

	export let data;

	const pageTitle = 'News';
	const tweetdata = getFromDate(data.CurrentDay, jsonData, true);
	//const tweetdata = data.TweetData;

	//console.log(data.TweetData);
</script>

<DaysPage {pageTitle} {tweetdata} embed={false} />

<style>
</style>
