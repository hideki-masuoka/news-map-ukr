<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import Modal from 'svelte-simple-modal';
	import { bind } from 'svelte-simple-modal/src/Modal.svelte';
	import ListMonthly from '$lib/ListMonthly.svelte';
	import { SITE_META } from '$lib/siteMeta.js';

	const modal = writable(null);
	const openmenu = (num) => modal.set(bind(ListMonthly, { monthNum: num }));

	let nav;
	let toggleNavDrawer;
	let drawerVisible = false;

	const handleToggleDrawer = () => {
		drawerVisible = !drawerVisible;
	};

	onMount(() => {
		drawerVisible = toggleNavDrawer.getBoundingClientRect().width === 0 ? true : false;
	});
</script>

<header class="site-header" bind:this={nav}>
	<div class="header-contents">
		<div class="header-title">
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					stroke="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-10 h-10 text-white p-2 bg-stone-500 rounded-full"
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
		{#if drawerVisible}
			<nav class="header-nav" transition:fly={{ x: -120 }}>
				<Modal show={$modal}>
					<strong>2022年：</strong>
					<button
						on:click={() => {
							openmenu(2);
						}}
						class="menu-button"
					>
						2月
					</button>
					<button
						on:click={() => {
							openmenu(3);
						}}
						class="menu-button">3月</button
					>
					<button
						on:click={() => {
							openmenu(4);
						}}
						class="menu-button">4月</button
					>

					<button
						on:click={() => {
							openmenu(5);
						}}
						class="menu-button">5月</button
					>
					<button
						on:click={() => {
							openmenu(6);
						}}
						class="menu-button">6月</button
					>
					<button
						on:click={() => {
							openmenu(7);
						}}
						class="menu-button">7月</button
					>
					<button
						on:click={() => {
							openmenu(8);
						}}
						class="menu-button">8月</button
					>
					<button
						on:click={() => {
							openmenu(9);
						}}
						class="menu-button">9月</button
					>
					<button
						on:click={() => {
							openmenu(10);
						}}
						class="menu-button">10月</button
					>
					<button
						on:click={() => {
							openmenu(11);
						}}
						class="menu-button">11月</button
					>
					<button
						on:click={() => {
							openmenu(12);
						}}
						class="menu-button">12月</button
					>
					<a class="menu-button" href="/glossary/">用語集</a>
				</Modal>
				<a
					class="header-external-link"
					href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%8A%E3%81%AE%E5%9C%B0%E6%96%B9%E8%A1%8C%E6%94%BF%E5%8C%BA%E7%94%BB"
					title="ウクライナの地方行政区画 - Wikipedia"
					target="_blank"
					rel="noreferrer"
				>
					ウクライナの地方行政区画
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-4 h-4 ml-1"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
			</nav>
		{/if}
	</div>
</header>

<style lang="windicss">
	.site-header {
		@apply text-stone-600 body-font;

		.header-contents {
			@apply container mx-auto flex flex-wrap p-2 flex-col items-center;
			@screen md {
				@apply p-5 flex-row;
			}
		}

		.header-title {
			@apply flex title-font items-left w-full text-stone-900 mb-2;
			@screen md {
				@apply w-auto mb-0;
			}

			svg {
				@apply inline-block w-8 h-8;
				@screen md {
					@apply w-10 h-10;
				}
			}

			.site-title {
				@apply text-base ml-1;
				@screen md {
					@apply text-xl;
				}
			}
		}

		.header-nav {
			@apply flex flex-wrap items-center justify-start gap-2 text-base mb-0 px-4 py-0;

			@screen md {
				flex-grow: 1;
				@apply justify-start mr-0 ml-4 py-1 pl-4 gap-0;
			}
			.menu-button {
				transition: all 0.125s ease-out;
				@apply rounded-full font-bold text-stone-500 text-md;
				@screen md {
					@apply mr-5;
				}
			}
		}

		.header-external-link {
			transition: all 0.125s ease-out;
			@apply inline-flex items-center rounded-full py-2 px-4 font-bold text-stone-500 mt-0 mb-4;
			@screen md {
				@apply mt-0 mb-0 ml-auto mr-0;
			}
		}

		.toggle-nav-drawer {
			@apply block text-stone-500 ml-auto mr-0 p-1 w-8 h-8 rounded-full d-gui-box-pull-sm active:d-gui-box-push-sm;
			@screen md {
				@apply hidden;
			}
			svg {
				@apply w-full h-full block m-auto;
			}
		}
	}
</style>
