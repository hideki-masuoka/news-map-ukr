<script>
	import { onMount, afterUpdate } from 'svelte';
	import { areaData, selectedArea } from '$lib/area.js';

	export let tweetdata = [];

	let isLoaded = {};

	const getAreaName = (id) => {
		if (($areaData[id] ?? false) && ($areaData[id].name ?? false)) {
			return $areaData[id].name;
		}
		return '';
	};

	onMount(() => {
		tweetdata.forEach(async (item) => {
			let target = document.getElementById('twt' + item.id);
			isLoaded[item.id] = true;
			await window.twttr.widgets.createTweet(item.id, target, {
				width: 280,
				align: 'center',
				cards: 'hidden',
				conversation: 'none'
			});
			isLoaded[item.id] = false;
		});
	});

	afterUpdate(() => {
		//twttr.widgets.load();
	});
</script>

<div class="embedTweets">
	{#each tweetdata as item}
		<div id="twt{item.id}" class="tweetItem">
			<button
				class="view-area"
				on:click={() => {
					$selectedArea = item.area;
				}}
			>
				<strong>{getAreaName(item.area)}</strong>

				<svg fill="currentColor" stroke="none" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
					/></svg
				>
			</button>
			{#if isLoaded[item.id]}
				<div class="tweetLoading">Loading...</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.embedTweets {
		@apply container m-auto w-full flex flex-wrap gap-4;
	}
	.tweetItem {
		@apply flex-grow flex-shrink;

		.tweetLoading {
			min-width: 300px;
			color: #999;
			@apply text-center font-bold;
		}
		svg {
			@apply inline;
		}
		.view-area {
			&:hover {
				opacity: 0.75;
			}
		}
	}
</style>
