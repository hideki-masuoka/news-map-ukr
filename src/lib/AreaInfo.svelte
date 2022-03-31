<script>
	import { areaData, selectedArea, currentTweetId } from '$lib/area.js';

	const areaSelect = (id) => {
		$selectedArea = id;
		$currentTweetId = 'group-donbas' === id ? id : null;
	};
</script>

<div class="area-info">
	{#each Object.entries($areaData) as [key, item]}
		{#if !('UA-UKR' === key)}
			<div class="area-item d-gui-chips text-xs">
				<button class="area-select" title={key} on:click={areaSelect(key)}>
					<svg fill="currentColor" stroke="none" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
						/></svg
					>
					{item.name}
				</button>
			</div>
		{/if}
	{/each}
	<div class="area-item">&nbsp;</div>
</div>

<style lang="windicss">
	.area-info {
		@apply hidden;
		@screen md {
			@apply flex;
		}
		@apply mt-4 flex-wrap gap-x-4 gap-y-2 justify-left;

		svg {
			@apply inline;
		}
		  .area-item {
          transition: all 0.125s ease-out;
			@apply d-gui-box-pull-sm;
			&:active {
				@apply d-gui-box-push-sm;
			}
		}
		.area-item:last-child {
			flex-grow: 1;
			box-shadow: none;
		}
		.area-select {
		}
	}
</style>
