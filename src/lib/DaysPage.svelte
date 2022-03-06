<script>
	import { DateTime } from 'luxon';
	import EmbedTweet from '$lib/embedTweet.svelte';
	import MapUKR from '$lib/MapUKR.svelte';
	import AreaInfo from '$lib/AreaInfo.svelte';
	import About from '$lib/About.svelte';
	import { SITE_META } from '$lib/siteMeta.js';

	export let tweetdata = [];
	export let pageTitle = '';

	const TimeJP = DateTime.now().reconfigure({ locale: 'jp', outputCalendar: 'japanese' });
	const TimeUA = DateTime.now()
		.reconfigure({ locale: 'jp', outputCalendar: 'japanese' })
		.setZone('EET');
</script>

<svelte:head>
	<title>
		{pageTitle}|{$SITE_META.title}
	</title>
</svelte:head>

<main class="days-page">
	<h1>{pageTitle}</h1>
	<div class="clock">
		現在時刻 ■日本時間【{TimeJP.toFormat("LLL'月'dd'日' HH:mm")}】 ■現地時間【{TimeUA.toFormat(
			"LLL'月'dd'日' HH:mm"
		)}】
	</div>
	<section class="map-ukr">
		<MapUKR />
		<AreaInfo />
		<About />
	</section>
	<section class="tweet-list">
		<EmbedTweet {tweetdata} />
	</section>
</main>

<style>
	.days-page {
		grid-template-areas:
			'clock title'
			'map tweet';

		@apply container m-auto px-5 grid gap-x-5 gap-y-1;

		h1 {
			grid-area: title;
			@apply font-bold text-2xl;
		}
	}
	.clock {
		grid-area: clock;
	}
	.map-ukr {
		grid-area: map;
	}
	.tweet-list {
		grid-area: tweet;
		max-height: 100vh;
		@apply overflow-y-scroll;
	}
</style>
