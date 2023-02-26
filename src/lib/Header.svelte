<script>
	import { onMount } from 'svelte';
	import { SITE_META } from '$lib/siteMeta.js';
	import Clock from '$lib/Clock.svelte';

	import { AppBar } from '@skeletonlabs/skeleton';

	let toggleNavDrawer;
	let drawerVisible = false;

	const handleToggleDrawer = () => {
		drawerVisible = !drawerVisible;
	};

	onMount(() => {
		//drawerVisible = toggleNavDrawer.getBoundingClientRect().width === 0 ? true : false;
	});
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="header-title">
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					stroke="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-10 h-10 p-2 bg-white rounded-full inline"
					viewBox="0 0 24 24"
				>
					<path
						d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,
               22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,
               16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,
               0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M14,6.11L8,
               4V15.89L9,16.24V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,
               19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,
               2L14,4.1L19.34,2H19.5A0.5,0.5 0 0,1 20,2.5V11.81C18.83,10.69 17.25,
               10 15.5,10C15,10 14.5,10.06 14,10.17V6.11Z"
					/></svg
				>
				<span class="site-title">{$SITE_META.title}</span>
			</a>
			<button class="toggle-nav-drawer" bind:this={toggleNavDrawer} on:click={handleToggleDrawer}>
				<svg viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M10.5,12A1.5,1.5 0 0,1 12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,
               1 12,13.5A1.5,1.5 0 0,1 10.5,12M10.5,16.5A1.5,1.5 0 0,1 12,15A1.5,
               1.5 0 0,1 13.5,16.5A1.5,1.5 0 0,1 12,18A1.5,1.5 0 0,1 10.5,16.5M10.5,
               7.5A1.5,1.5 0 0,1 12,6A1.5,1.5 0 0,1 13.5,7.5A1.5,1.5 0 0,1 12,9A1.5,
               1.5 0 0,1 10.5,7.5M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,
               10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,
               8 0 0,0 20,12A8,8 0 0,0 12,4Z"
					/></svg
				>
			</button>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="headline">
		<Clock />
	</svelte:fragment>
</AppBar>

<style lang="scss">
</style>
