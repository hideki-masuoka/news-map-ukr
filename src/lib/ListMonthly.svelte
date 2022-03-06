<script>
	export let monthNum = 2;
</script>

{#if 2 === monthNum}
	<strong>2022年2月</strong>
	<ul class="monthly">
		<li><a href="/days/d20220228">28日</a></li>
	</ul>
{:else if 3 === monthNum}
	<strong>2022年3月</strong>
	<ul class="monthly">
		<li>
			<a href="/days/d20220304">04日</a>
		</li>
		<li>
			<a href="/days/d20220305">05日</a>
		</li>
	</ul>
{:else}
	<p>Not Found</p>
{/if}

<style>
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
