<script>
export let data;

import DaysPage from '$lib/DaysPage.svelte';
import { getFromDate } from '$lib/tweet/getTweet.js';

const pageTitle = data.dateText;
const tweetdata = getFromDate(data.dateText, data.contents.default);

</script>

<DaysPage {tweetdata} {pageTitle} embed={false} />
