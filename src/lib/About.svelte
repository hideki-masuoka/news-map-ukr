<script>
	import { SITE_META } from '$lib/siteMeta.js';
</script>

<div class="about-text">
	<h2>About</h2>
	<p>{$SITE_META.description1}</p>
	<p>{$SITE_META.description2}</p>
	<hr />
	<p class="text-sm text-right">
		※さらに詳細を知るには、
		<a
			href="https://wartoday.info"
			target="_blank"
			rel="noreferrer"
			title="ロシアの大規模なウクライナ侵攻事件に関する情報を掲載したインタラクティブマップ"
			>wartoday.info</a
		>
		もしくは<a href="https://liveuamap.com" target="_blank" rel="noreferrer"
			>Live Universal Awareness Map</a
		>
		をチェックしてみてください。
	</p>
</div>

<style lang="scss">
	.about-text {
		@apply mt-4;

		h2 {
			@apply text-xl font-bold;
		}
		hr {
			@apply my-2;
		}
		a {
			color: #0000ff;
			@apply font-bold;
			&:hover {
				opacity: 0.75;
			}
		}
	}
</style>
