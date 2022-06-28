<script>
	import ListMonthlyComponent from '$lib/components/ListMonthlyComponent.svelte';
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
	<ListMonthlyComponent listTitle="2022年3月" listDays="31" listMonth="d202203" />
{:else if 4 === monthNum}
	<ListMonthlyComponent listTitle="2022年4月" listDays="30" listMonth="d202204" />
{:else if 5 === monthNum}
	<ListMonthlyComponent listTitle="2022年5月" listDays="31" listMonth="d202205" />
{:else if 6 === monthNum}
	<ListMonthlyComponent listTitle="2022年6月" listDays="27" listMonth="d202206" />
{:else}
	<p>Not Found</p>
{/if}

<style lang="windicss">
	.monthly {
		@apply flex flex-wrap justify-left gap-x-2 gap-y-2 rounded-md mt-2 d-gui-box-push-sm p-2 md:p-4 bg-stone-100;
	}
	.button-select-day {
		transition: all 0.25s ease-out;
		@apply d-gui-box-sm active:d-gui-box-push-sm text-xs md:text-base;
	}
</style>
