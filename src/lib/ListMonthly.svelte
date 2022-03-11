<script>
	export let monthNum = 2;
	const toDayStr = (num) => {
		return String(num + 1).padStart(2, '0');
	};
</script>

{#if 2 === monthNum}
	<strong>2022年2月</strong>
	<ul class="monthly">
		<li><a href="/days/d20220228/">28日</a></li>
	</ul>
{:else if 3 === monthNum}
	<strong>2022年3月</strong>
	<ul class="monthly">
		{#each [...Array(10).keys()] as dayNum}
			<li>
				<a href="/days/d202203{toDayStr(dayNum)}/">{toDayStr(dayNum)}日</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>Not Found</p>
{/if}

<style lang="windicss">
	.monthly {
		@apply flex flex-wrap justify-evenly;

		li {
			@apply flex-grow flex-shrink;

			a {
				&:hover {
					opacity: 0.75;
				}
				&:before {
					content: '▶';
					display: inline;
					padding-right: 0.5em;
				}
			}
		}
	}
</style>
