<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { getFromDate } from '$lib/tweet/getTweet.js';
	import jsonData from '$lib/json/daily/oembed20220517.json';

	const pageTitle = '2022年5月17日';
	const tweetdata = getFromDate('20220517', jsonData);
</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
