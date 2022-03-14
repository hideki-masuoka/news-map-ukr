<script>
	import { page } from '$app/stores';
	import { assets } from '$app/paths';
	import { DateTime } from 'luxon';
	import OEmbedTweet from '$lib/tweet/OEmbedTweet.svelte';
	import EmbedTweet from '$lib/tweet/embedTweet.svelte';
	import MapUKR from '$lib/map/MapUKR.svelte';
	import AreaInfo from '$lib/AreaInfo.svelte';
	import About from '$lib/About.svelte';
	import { SITE_META } from '$lib/siteMeta.js';

	import { MetaTags } from 'svelte-meta-tags';

	export let tweetdata = [];
	export let pageTitle = '';
	export let embed = true;

	const TimeJP = DateTime.now().reconfigure({ locale: 'jp', outputCalendar: 'japanese' });
	const TimeUA = DateTime.now()
		.reconfigure({ locale: 'jp', outputCalendar: 'japanese' })
		.setZone('EET');
</script>

<MetaTags
	openGraph={{
		url: $page.url,
		title: pageTitle + '|' + $SITE_META.title,
		description: $SITE_META.description1 + $SITE_META.description2,
		images: [
			{
				url: assets + '/og-image.png',
				width: 800,
				height: 537,
				alt: 'Map UKR'
			}
		],
		site_name: $SITE_META.title
	}}
	twitter={{
		handle: '@handle',
		site: '@site',
		cardType: 'summary_large_image',
		title: pageTitle + '|' + $SITE_META.title,
		description: $SITE_META.description1 + $SITE_META.description2,
		image: assets + '/og-image.png',
		imageAlt: 'Map UKR'
	}}
/>

<svelte:head>
	<title>
		{pageTitle}|{$SITE_META.title}
	</title>
	<script>
		window.twttr = (function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0],
				t = window.twttr || {};
			if (d.getElementById(id)) return t;
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js, fjs);

			t._e = [];
			t.ready = function (f) {
				t._e.push(f);
			};

			return t;
		})(document, 'script', 'twitter-wjs');
	</script>
</svelte:head>

<main class="days-page">
	<h1>{pageTitle}</h1>
	<div class="clock">
		現在時刻
		<span>■日本時間【{TimeJP.toFormat("LLL'月'dd'日' HH:mm")}】</span>
		<span>■現地時間【{TimeUA.toFormat("LLL'月'dd'日' HH:mm")}】</span>
	</div>
	<section class="map-ukr">
		<MapUKR />
		<AreaInfo />
	</section>
	<section class="tweet-list">
		{#if 'Glossary' === embed}
			<slot name="glossaly" />
		{:else if true === embed}
			<EmbedTweet {tweetdata} />
		{:else}
			<OEmbedTweet {tweetdata} />
		{/if}
	</section>
	<section class="site-about">
		<About />
	</section>
</main>

<style lang="windicss">
	.days-page {
		grid-template-areas:
			'clock map'
			'title map'
			'tweet tweet'
			'about about';

		@screen md {
			grid-template-areas:
				'clock title'
				'map tweet'
				'about tweet';
		}

		@apply container m-auto px-5 grid gap-x-5 gap-y-1;

		h1 {
			grid-area: title;
			@apply font-bold text-base;
			@screen md {
				@apply text-2xl;
			}
		}
	}
	.clock {
		grid-area: clock;
		@apply text-xs;

		@screen md {
			@apply text-base;
		}

		span {
			@apply block md:inline;
		}
	}
	.map-ukr {
		grid-area: map;
	}
	.tweet-list {
		grid-area: tweet;
		max-height: 50vh;
		@apply overflow-y-scroll;

		@screen md {
			max-height: 80vh;
		}
	}
	.site-about {
		grid-area: about;
	}
</style>
