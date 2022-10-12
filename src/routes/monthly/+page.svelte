<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import MonthlyLinks from '$lib/components/MonthlyLinks.svelte';

	const pageTitle = '月別リンク';

	const linkList = [
		{ m: '3', last: '31' },
		{ m: '4', last: '30' },
		{ m: '5', last: '31' },
		{ m: '6', last: '30' },
		{ m: '7', last: '31' },
		{ m: '8', last: '31' },
		{ m: '9', last: '30' },
		{ m: '10', last: '11' }
	];
</script>

<DaysPage {pageTitle} embed={'Glossary'}>
	<svelte:fragment slot="glossaly">
		<div class="glossary-wrap">
			<div class="glossary-item">
				<div class="glossary-content">
					<MonthlyLinks yearString="2022" monthString="2" firstDay="24" lastDay="28" />
				</div>
				{#each linkList as data}
					<div class="glossary-content">
						<MonthlyLinks yearString="2022" monthString={data.m} lastDay={data.last} />
					</div>
				{/each}
			</div>
		</div>
	</svelte:fragment>
</DaysPage>

<style lang="windicss">
	.glossary-wrap {
		@apply container m-auto w-full pr-4;
	}
	.glossary-item {
		@apply flex-grow flex-shrink mb-8;

		svg {
			@apply inline;
		}
		.view-area {
			@apply mb-4 d-gui-box-pull-sm;
			&:active {
				@apply d-gui-box-push-sm;
			}
		}
	}

	.glossary-hr {
		color: #ccc;
		@apply text-center;
	}

	.glossary-content {
		border: 1px solid #ccc;
		border-radius: 0.5em;
		@apply m-auto px-4 py-2 mb-4 ml-4 d-gui-box;
		.glossary-title {
			@apply font-bold text-lg;
		}
		.glossary-link {
			color: blue;
			@apply text-right;
		}
	}
</style>
