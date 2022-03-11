<script>
	import { selectedArea, currentTweetId } from '$lib/area.js';
	import groupedArea from '$lib/json/groupedArea.json';
	import MapBase from '$lib/map/MapBase.svelte';
	import MapOverlay from '$lib/map/MapOverlay.svelte';

	const switchSelectedArea = (id) => {
		if ('UA-UKR' === id) {
			id = false;
		}
		if (id) {
			let target = document.getElementById(id);

			target.classList.toggle('selected-area');
			return true;
		}
		return false;
	};

	const switchSelectedAreas = (id, tweetId) => {
		let areaIds = [];
		if ((groupedArea[tweetId] ?? false) && Array.isArray(groupedArea[tweetId])) {
			areaIds = groupedArea[tweetId];
		} else {
			areaIds.push(id);
		}
		areaIds.forEach((val) => {
			switchSelectedArea(val);
		});
	};

	const clearSelectedArea = () => {
		if (typeof document === 'undefined') {
			return false;
		}
		let uaMap = document.getElementById('overlay');
		if (uaMap) {
			let pathList = uaMap.getElementsByTagName('path');
			Object.entries(pathList).forEach(([, element]) => {
				element.classList.remove('selected-area');
			});
		}
	};

	$: {
		clearSelectedArea();
		switchSelectedAreas($selectedArea, $currentTweetId);
		$currentTweetId = null;
	}
</script>

<section class="map-ukr">
	<span class="selected-area" style="display:none;">&nbsp;</span>
	<svg
		version="1.1"
		id="Ukraine"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		width="1545.703px"
		height="1038.492px"
		viewBox="0 0 1545.703 1038.492"
		enable-background="new 0 0 1545.703 1038.492"
		xml:space="preserve"
	>
		<rect
			fill-rule="evenodd"
			clip-rule="evenodd"
			fill="#E0E0E0"
			width="1545.703"
			height="1038.492"
		/>
		<MapBase />
		<MapOverlay />
	</svg>
</section>

<style lang="windicss">
	.map-ukr {
		@apply container m-auto;

		svg {
			@apply w-full h-auto;
		}
	}
	:global(.selected-area) {
		opacity: 0.75 !important;
		fill: #ffff00 !important;
	}
	:global(#dnipro-ua.selected-area) {
		fill: #0000ff !important;
	}
</style>
