<script>
	import EmbedTweet from '$lib/embedTweet.svelte';
	import MapUKR from '$lib/MapUKR.svelte';

	export let tweetdata = [];
</script>

<main class="days-page">
	<section class="map-ukr">
		<MapUKR />
	</section>
	<section class="tweet-list">
		<EmbedTweet {tweetdata} />
	</section>
</main>

<style>
	.days-page {
		@apply container m-auto grid grid-cols-2 gap-4;
	}
	.tweet-list {
		max-height: 100vh;
		@apply overflow-y-scroll;
	}
</style>
