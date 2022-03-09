<script>
	import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
	import ListMonthly from '$lib/ListMonthly.svelte';
	import { SITE_META } from '$lib/siteMeta.js';

	const modal = writable(null);
	const openmenu = (num) => modal.set(bind(ListMonthly, { monthNum: num }));
</script>

<header class="site-header">
	<div class="header-contents">
		<a href="/" class="header-title">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				stroke="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
				viewBox="0 0 24 24"
			>
				<path
					d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M14,6.11L8,4V15.89L9,16.24V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2H19.5A0.5,0.5 0 0,1 20,2.5V11.81C18.83,10.69 17.25,10 15.5,10C15,10 14.5,10.06 14,10.17V6.11Z"
				/></svg
			>
			<span class="ml-3 text-xl">{$SITE_META.title}</span>
		</a>
		<nav class="header-nav">
			<Modal show={$modal}>
				<button
					on:click={() => {
						openmenu(2);
					}}
					class="mr-5 hover:text-gray-900"
				>
					2022年2月
				</button>
				<button
					on:click={() => {
						openmenu(3);
					}}
					class="mr-5 hover:text-gray-900">2022年3月</button
				>
				<a class="mr-5 hover:text-gray-900" href="/glossary/">用語集</a>
			</Modal>
		</nav>
		<a
			class="header-external-link"
			href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%8A%E3%81%AE%E5%9C%B0%E6%96%B9%E8%A1%8C%E6%94%BF%E5%8C%BA%E7%94%BB"
			title="ウクライナの地方行政区画 - Wikipedia"
			target="_blank"
			rel="noopener"
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
	</div>
</header>

<style lang="windicss">
	.site-header {
		@apply text-gray-600 body-font;

		.header-contents {
			@apply container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center;
		}

		.header-title {
			@apply flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0;
		}

		.header-nav {
			@apply md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center;
		}

		.header-external-link {
			@apply inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-2 md:mt-0;
		}
	}
</style>
