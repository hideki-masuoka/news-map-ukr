<script>
	export let listTitle = '';
	export let listDays = 1;
	export let listMonth = '';

	import { getContext } from 'svelte';
	import { base } from '$app/paths';
	const { close } = getContext('simple-modal');

	const toDayStr = (num) => {
		return String(num + 1).padStart(2, '0');
	};
	const modalClose = () => {
		//		close();
	};
</script>

<strong>{listTitle}</strong>
<ul class="monthly">
	{#each [...Array(Number(listDays)).keys()] as dayNum}
		<li class="d-gui-chips button-select-day">
			<svg fill="currentColor" viewBox="0 0 24 24"
				><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg
			>
			<a target="_self" href="{base}/days/{listMonth}{toDayStr(dayNum)}/" on:click={modalClose}
				>{toDayStr(dayNum)}日</a
			>
		</li>
	{/each}
	<li class="d-gui-spacer">&nbsp;</li>
</ul>

<style lang="scss">
	.monthly {
		@apply flex flex-wrap justify-left gap-x-2 gap-y-2 rounded-md mt-2 d-gui-box-push-sm p-2 bg-stone-100;
		@screen md {
			@apply p-4;
		}
	}
	.button-select-day {
		transition: all 0.25s ease-out;
		@apply d-gui-box-sm text-xs;
		&:active {
			@apply d-gui-box-push-sm;
		}
		@screen md {
			@apply text-base;
		}
	}
</style>
