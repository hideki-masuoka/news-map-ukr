<script>
	import { getContext } from 'svelte';
	const { close } = getContext('simple-modal');

	export let monthNum = 2;
	const toDayStr = (num) => {
		return String(num + 1).padStart(2, '0');
	};
	const modalClose = () => {
		close();
	};
</script>

{#if 2 === monthNum}
	<strong>2022年2月</strong>
	<ul class="monthly">
		{#each [23, 24, 25, 26, 27] as dayNum}
			<li class="d-gui-chips button-select-day">
				<svg fill="currentColor" viewBox="0 0 24 24"
					><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg
				>
				<a href="/days/d202202{toDayStr(dayNum)}/" on:click={modalClose}>{toDayStr(dayNum)}日</a>
			</li>
		{/each}
		<li class="d-gui-spacer">&nbsp;</li>
	</ul>
{:else if 3 === monthNum}
	<strong>2022年3月</strong>
	<ul class="monthly">
		{#each [...Array(31).keys()] as dayNum}
			<li class="d-gui-chips button-select-day">
				<svg fill="currentColor" viewBox="0 0 24 24"
					><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg
				>
				<a href="/days/d202203{toDayStr(dayNum)}/" on:click={modalClose}>{toDayStr(dayNum)}日</a>
			</li>
		{/each}
		<li class="d-gui-spacer">&nbsp;</li>
	</ul>
{:else if 4 === monthNum}
	<strong>2022年4月</strong>
	<ul class="monthly">
		{#each [...Array(8).keys()] as dayNum}
			<li class="d-gui-chips button-select-day">
				<svg fill="currentColor" viewBox="0 0 24 24"
					><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg
				>
				<a href="/days/d202204{toDayStr(dayNum)}/" on:click={modalClose}>{toDayStr(dayNum)}日</a>
			</li>
		{/each}
		<li class="d-gui-spacer">&nbsp;</li>
	</ul>
{:else}
	<p>Not Found</p>
{/if}

<style lang="windicss">
	.monthly {
		@apply flex flex-wrap justify-left gap-x-2 gap-y-1;
	}
	.button-select-day {
		transition: all 0.25s ease-out;
		@apply d-gui-box-pull-sm active:d-gui-box-push-sm;
	}
</style>
