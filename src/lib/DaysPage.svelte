<script>
	import { page } from '$app/stores';
	import { DateTime } from 'luxon';
	import OEmbedTweet from '$lib/tweet/OEmbedTweet.svelte';
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
	canonical={$SITE_META.hosting + $page.url.pathname}
	openGraph={{
		url: $SITE_META.hosting + $page.url.pathname,
		title: pageTitle + '|' + $SITE_META.title,
		description: $SITE_META.description1 + $SITE_META.description2,
		images: [
			{
				url: $SITE_META.hosting + '/og-image.png',
				width: 800,
				height: 537,
				alt: 'Map UKR'
			}
		],
		site_name: $SITE_META.title
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: pageTitle + '|' + $SITE_META.title,
		description: $SITE_META.description1 + $SITE_META.description2,
		image: $SITE_META.hosting + '/og-image.png',
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
	<div class="page-title">
		<h1>{pageTitle}</h1>
		{#await tweetdata then tweetdata}
			<span class="tweet-counter">({tweetdata.length} Tweet)</span>
		{/await}
	</div>
	<div class="clock">
		<strong class="text-stone-800">現在時刻</strong>
		<span class="text-stone-700 pl-4"
			><span class="text-xs md:text-sm">日本時間</span>{TimeJP.toFormat(
				"LLL'月'dd'日' HH:mm"
			)}</span
		>
		<span class="text-stone-700 pl-4"
			><span class="text-xs md:text-sm">現地時間</span>{TimeUA.toFormat(
				"LLL'月'dd'日' HH:mm"
			)}</span
		>
	</div>
	<section class="map-ukr">
		<MapUKR />
		<AreaInfo />
	</section>
	<section class="tweet-list">
		{#if 'Glossary' === embed}
			<slot name="glossaly" />
		{:else}
			{#await tweetdata then tweetdata}
				<OEmbedTweet {tweetdata} />
			{/await}
		{/if}
	</section>
	<section class="site-about">
		<About />
	</section>
</main>

<style lang="scss">
	:global(body) {
		@apply bg-gradient-to-t from-stone-300;
	}
	.days-page {
		grid-template-areas:
			'clock clock'
			'title title'
			'tweet tweet'
			'map map'
			'about about';

		@apply container m-auto px-2 grid gap-y-1 gap-x-4;

		@screen md {
			grid-template-areas:
				'clock title'
				'map tweet'
				'about tweet';
			grid-template-columns: 1fr 32em;

			@apply px-5;
		}

		.page-title {
			grid-area: title;
			@apply text-base text-stone-700 flex;

			h1 {
				@apply font-bold;
				@screen md {
					@apply text-2xl;
				}
			}

			.tweet-counter {
				@apply inline-block ml-auto mr-0 pr-2 self-end;
			}
		}
	}
	.clock {
		grid-area: clock;
		@apply text-xs flex flex-row pb-2;

		@screen md {
			@apply text-base;
		}

		span {
			@apply block;
			@screen md {
				@apply inline;
			}
		}
	}
	.map-ukr {
		grid-area: map;
	}
	.tweet-list {
		grid-area: tweet;
		max-height: 50vh;
		box-shadow: inset -4px -4px 12px rgba(255, 255, 255, 0.5),
			inset 4px 4px 12px rgba(0, 0, 0, 0.125);
		@apply overflow-y-scroll overflow-x-hidden pt-4 pb-48 px-2 rounded-lg;

		@screen md {
			max-height: 80vh;
			@apply pl-4;
		}
	}
	.site-about {
		grid-area: about;
	}
</style>
