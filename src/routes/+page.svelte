<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';

	export let data;

	const pageTitle = 'News';
	const tweetdata = getFromDate(data.CurrentDay, data.JsonData, true);
</script>

<DaysPage {pageTitle} {tweetdata} embed={false} />
