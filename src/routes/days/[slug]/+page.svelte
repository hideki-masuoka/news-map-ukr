<script>
	export let data;

	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';

	const pageTitle = data.title;
	//console.log(data.contents);
	//const tweetdata = data.TweetData;
	const tweetdata = getFromDate(data.dateText, data.contents, true);
	//  const tweetdata = getFromDate(data.dateText, contentsJson);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
