<script>
	export let yearString = '2022';
	export let monthString = '2';
	export let firstDay = '1';
	export let lastDay;

	const prefix = '/days/d';
	const getHref = (day) => {
		return prefix + yearString + monthString.padStart(2, '0') + day.toString().padStart(2, '0');
	};

	const range = (start, stop, step) =>
		Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
</script>

<h2 class="title" id="link{yearString}{monthString}">{yearString}年{monthString}月</h2>
<ul>
	{#each range(Number(firstDay), Number(lastDay), 1) as i}
		<li>
			<a href={getHref(i)}>{i}日</a>
		</li>
	{/each}
</ul>

<style lang="windicss">
	.title {
		@apply font-bold mb-4;
	}
	ul {
		@apply flex flex-wrap gap-4 my-4;
	}
	li {
		@apply text-center;
		a {
			@apply text-blue-600;
		}
	}
</style>
