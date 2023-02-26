<script>
	import { DateTime } from 'luxon';

	const TimeJP = DateTime.now().reconfigure({ locale: 'jp', outputCalendar: 'japanese' });
	const TimeUA = DateTime.now()
		.reconfigure({ locale: 'jp', outputCalendar: 'japanese' })
		.setZone('EET');
</script>

<div class="clock">
	<strong class="clock-title">現在時刻</strong>
	<span class="pl-4"
		><span class="text-xs md:text-sm">日本時間</span>{TimeJP.toFormat("LLL'月'dd'日' HH:mm")}</span
	>
	<span class="pl-4"
		><span class="text-xs md:text-sm">現地時間</span>{TimeUA.toFormat("LLL'月'dd'日' HH:mm")}</span
	>
</div>

<style lang="scss">
	.clock-title {
		@apply hidden;
		@screen md {
			@apply visible inline;
		}
	}
</style>