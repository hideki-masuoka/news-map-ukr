<script>
	import { onMount, afterUpdate } from 'svelte';
	import { areaData, selectedArea, currentTweetId } from '$lib/area.js';

	export let tweetdata = [];

	let isLoaded = {};
	let tweetContainer;

	const getAreaName = (id) => {
		if (($areaData[id] ?? false) && ($areaData[id].name ?? false)) {
			return $areaData[id].name;
		}
		return '';
	};

	const handleViewArea = (area, id) => {
		$selectedArea = area;
		$currentTweetId = id;
	};

	/*
	 * 埋め込みツイートを有効にする
	 */
	const handleLoadTweet = async (event, targetId) => {
		let thisTweet = document.getElementById(targetId);
		let targetTweet = thisTweet.getElementsByClassName('twitter-tweet-noembed');
		if (0 < targetTweet.length) {
			targetTweet[0].classList.replace('twitter-tweet-noembed', 'twitter-tweet');
			await twttr.widgets.load();
			thisTweet.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
			thisTweet.classList.add('tweet-loaded');
			event.target.closest('.switch-embed').disabled = true;
		}
		return thisTweet;
	};

	onMount(() => {
		tweetContainer = document.getElementsByClassName('tweet-list')[0];
	});

	afterUpdate(() => {
		//twttr.widgets.load();
	});
</script>

<div class="embedTweets">
	{#each tweetdata as item}
		<div id="twt{item.id}" class="tweetItem">
			<button class="view-area d-gui-chips" on:click={handleViewArea(item.area, item.id)}>
				<svg
					class="button"
					fill="currentColor"
					stroke="none"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
					/></svg
				>
				<strong>{getAreaName(item.area)}</strong>
			</button>
			{#if isLoaded[item.id]}
				<div class="tweetLoading">Loading...</div>
			{/if}
			<div class="tweet-content d-gui-box">
				{#if item.embed.html ?? false}
					{@html item.embed.html.replace('twitter-tweet', 'twitter-tweet-noembed')}
				{:else}
					<div class="twitter-tweet-noembed">
						<p>not found</p>
					</div>
				{/if}
				<div class="tweet-hr">
					<button
						class="switch-embed"
						on:click|once={(e) => {
							handleViewArea(item.area, item.id);
							handleLoadTweet(e, 'twt' + item.id);
						}}
					>
						<svg width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								stroke="none"
								d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
							/></svg
						>
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="windicss">
	.embedTweets {
		@apply container m-auto w-full pr-4;
	}
	.tweetItem {
		@apply flex-grow flex-shrink mb-8;

		.tweetLoading {
			min-width: 300px;
			color: #999;
			@apply text-center font-bold;
		}
		.switch-embed {
			color: #1d9bf0;
			&:disabled {
				color: #999;
			}
		}
		svg {
			@apply inline;
		}
		.view-area {
			transition: all 0.125s ease-out;
			@apply mb-4 d-gui-box-pull-sm;
			&:active {
				@apply d-gui-box-push-sm;
			}
		}
	}

	.tweet-hr {
		color: #ccc;
		@apply text-center;
	}

	.tweet-content {
		border: 0 solid #ccc;
		border-radius: 0.5em;
		@apply m-auto pb-4 px-2 mb-4 ml-4;
	}
	:global(blockquote.twitter-tweet) {
		opacity: 0;
		transition: opacity 1s;
	}
	:global(.twitter-tweet) {
		@apply m-auto;
	}
	:global(.twitter-tweet-noembed) {
		@apply text-right font-bold text-sm rounded-md bg-stone-50 bg-gradient-to-r from-stone-200 p-2 mx-0 md:mx-4 mb-0 flex flex-wrap flex-col overflow-x-auto;

		:global(a) {
			color: blue;
			@apply font-bold block ml-auto mr-0;
		}

		:global(p) {
			@apply text-base text-left font-normal;
		}

		:global(p a) {
			color: blue;
			@apply font-normal inline;
		}
	}
</style>
