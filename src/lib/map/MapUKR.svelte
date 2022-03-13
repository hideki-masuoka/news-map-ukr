<script>
	import { selectedArea, currentTweetId } from '$lib/area.js';
	import groupedArea from '$lib/json/groupedArea.json';
	import MapBase from '$lib/map/MapBase.svelte';
	import MapOverlay from '$lib/map/MapOverlay.svelte';

	import { assets } from '$app/paths';

	const ukr_map = assets + '/Ukraine_adm_location_map.svg';
	const ukr_map_name = assets + '/Ukraine_adm_location_map_areaname.svg';
	const ukr_map_alt = 'ウクライナの地方行政区画地図';

	const switchSelectedArea = (id) => {
		if ('UA-UKR' === id) {
			id = false;
		}
		if (id) {
			let target = document.getElementById(id);

			if (target.classList) {
				target.classList.toggle('selected-area');
			}
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
				if (element.classList) {
					element.classList.remove('selected-area');
				}
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
	<img class="map-base" src={ukr_map} alt={ukr_map_alt} />
	<svg
		class="map-overlay"
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
		<MapOverlay />
	</svg>
	<img class="map-name" src={ukr_map_name} alt={ukr_map_alt} />
</section>

<style lang="windicss">
	.map-ukr {
		grid-template-area: 'map';
		@apply container grid m-auto;

		svg {
			@apply w-full h-auto;
		}
		.map-base {
			grid-area: map;
		}
		.map-overlay {
			grid-area: map;
		}
		.map-name {
			grid-area: map;
			@apply hidden md:inline;
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
