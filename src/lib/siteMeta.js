import { dev } from '$app/environment';
import { readable } from 'svelte/store';

export const SITE_META = readable({
	title: 'ニュースマップ：ウクライナ',
	description1: 'これはウクライナに関する報道ツイートを地図上の地域にマッピングしたものです。',
	description2:
		'地理情報はWikipedia、ニュース・ソースはTwitterをそれぞれ参照し、手動で追加しています。',
	repo: 'https://github.com/hideki-masuoka/news-map-ukr',
	hosting: 'https://news-map-ukr.web.app',
	lastupdate: '2023-06-11 12:55'
});

export const GOAT_COUNTER = dev ? '' : import.meta.env.VITE_GOAT_COUNTER;
export const USE_GTM = 'true' === import.meta.env.VITE_USE_GOOGLE_TAG_MANAGER ? true : false;

export const MonthlyLinkList = {
	y2022: [
		{ m: '3', last: '31' },
		{ m: '4', last: '30' },
		{ m: '5', last: '31' },
		{ m: '6', last: '30' },
		{ m: '7', last: '31' },
		{ m: '8', last: '31' },
		{ m: '9', last: '30' },
		{ m: '10', last: '31' },
		{ m: '11', last: '30' },
		{ m: '12', last: '31' }
	],
	y2023: [
		{ m: '1', last: '31' },
		{ m: '2', last: '28' },
		{ m: '3', last: '31'},
		{ m: '4', last: '30'},
		{ m: '5', last: '31'},
		{ m: '6', last: '8'}
	]
};

export const CurrentDay = '20230609';
