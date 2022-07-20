import { dev } from '$app/env';
import { readable } from 'svelte/store';

export const SITE_META = readable({
	title: 'ニュースマップ：ウクライナ',
	description1: 'これはウクライナに関する報道ツイートを地図上の地域にマッピングしたものです。',
	description2:
		'地理情報はWikipedia、ニュース・ソースはTwitterをそれぞれ参照し、手動で追加しています。',
	repo: 'https://github.com/hideki-masuoka/news-map-ukr',
	hosting: 'https://news-map-ukr.web.app',
	lastupdate: '2022-07-20 23:43'
});

export const GOAT_COUNTER = dev ? '' : import.meta.env.VITE_GOAT_COUNTER;
export const USE_GTM = 'true' === import.meta.env.VITE_USE_GOOGLE_TAG_MANAGER ? true : false;
