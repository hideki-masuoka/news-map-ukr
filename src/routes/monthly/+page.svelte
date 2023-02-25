<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import MonthlyLinks from '$lib/components/MonthlyLinks.svelte';
	import { MonthlyLinkList } from '$lib/siteMeta.js';

	const pageTitle = '月別リンク';
</script>

<DaysPage {pageTitle} embed={'Glossary'}>
	<svelte:fragment slot="glossaly">
		<div class="glossary-wrap">
			<div class="glossary-item">
				<div class="glossary-content">
					<MonthlyLinks yearString="2022" monthString="2" firstDay="24" lastDay="28" />
				</div>
				{#each MonthlyLinkList.y2022 as data}
					<div class="glossary-content">
						<MonthlyLinks yearString="2022" monthString={data.m} lastDay={data.last} />
					</div>
				{/each}
				{#each MonthlyLinkList.y2023 as data}
					<div class="glossary-content">
						<MonthlyLinks yearString="2023" monthString={data.m} lastDay={data.last} />
					</div>
				{/each}
			</div>
		</div>
	</svelte:fragment>
</DaysPage>

<style lang="scss">
	.glossary-wrap {
		@apply container m-auto w-full pr-4;
	}
	.glossary-item {
		@apply flex-grow flex-shrink mb-8;
	}

	.glossary-content {
		border: 1px solid #ccc;
		border-radius: 0.5em;
		@apply m-auto px-4 py-2 mb-4 ml-4 d-gui-box;
	}
</style>
