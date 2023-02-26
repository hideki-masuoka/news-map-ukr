<script>
	import { page } from '$app/stores';
	import OEmbedTweet from '$lib/tweet/OEmbedTweet.svelte';
	import MapUKR from '$lib/map/MapUKR.svelte';

	import AreaInfo from '$lib/AreaInfo.svelte';
	import About from '$lib/About.svelte';
	import { SITE_META } from '$lib/siteMeta.js';

	import { MetaTags } from 'svelte-meta-tags';

	export let tweetdata = [];
	export let pageTitle = '';
	export let embed = true;

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

<div class="days-page">
<div class="page-title">
		<h1>{pageTitle}</h1>
		{#await tweetdata then tweetdata}
			<span class="tweet-counter">({tweetdata.length} Tweets)</span>
		{/await}
	</div>
	<div class="page-nav">
		<a class="menu-button" href="/">TOP</a>
		<a class="menu-button" href="/monthly/#link20222">2022年</a>
<a class="menu-button" href="/monthly/#link20231">2023年</a>
<a class="menu-button" href="/glossary/">用語集</a>
</div>
	<section class="map-ukr">
		<MapUKR />
		<div class="text-right py-2">
			<a
			class="header-external-link"
			href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%8A%E3%81%AE%E5%9C%B0%E6%96%B9%E8%A1%8C%E6%94%BF%E5%8C%BA%E7%94%BB"
			title="ウクライナの地方行政区画 - Wikipedia"
			target="_blank"
			rel="noreferrer"
		>
			ウクライナの地方行政区画
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-4 h-4 ml-1 inline"
				viewBox="0 0 24 24"
			>
				<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
			</svg>
		</a>
		</div>
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
</div>

<style lang="scss">
	:global(body) {
		//@apply bg-gradient-to-t from-stone-300;
	}
	.days-page {
		grid-template-areas:
			'title title'
			'tweet tweet'
			'map map'
			'about about';

		@apply  m-auto px-2 py-4 grid gap-y-1 gap-x-4;


		@screen md {
			grid-template-areas:
				'map title'
				'map tweet'
				'about tweet';
			grid-template-columns: 1fr 32em;

			@apply px-5;
		}

		@screen 2xl {
			grid-template-columns: 1fr 64em;
		}

		.page-title {
			grid-area: title;
			@apply text-base text-stone-700 flex mt-0 px-4;

			h1 {
				@apply font-bold;
				@screen md {
					@apply text-2xl;
				}
			}

			.tweet-counter {
				@apply inline-block ml-2 mb-0 mt-2 pr-2 align-bottom;
			}
		}

		.page-nav {
			grid-area: title;
			height: 1.5em;
			@apply text-right mt-8;
			a {
				@apply chip variant-ghost-primary text-black font-bold;
			}
		}
	}
	.map-ukr {
		grid-area: map;
	}
	.tweet-list {
		grid-area: tweet;
		max-height: 50vh;
		@apply overflow-y-scroll overflow-x-hidden mt-2 pt-2 pb-48 px-2 rounded-lg;

		@screen md {
			max-height: 80vh;
			@apply pl-4;
		}

	}
	.site-about {
		grid-area: about;
	}
</style>
