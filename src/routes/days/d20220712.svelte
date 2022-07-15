<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220712.json';

	const pageTitle = '2022年7月12日';
	const tweetdata = getFromDate('20220712', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
