import { readable } from 'svelte/store';

export const SITE_META = readable({
	title: 'ニュースマップ：ウクライナ',
	description1: 'これはウクライナに関する報道ツイートを地図上の地域にマッピングしたものです。',
	description2:
		'地理情報はWikipedia、ニュース・ソースはTwitterをそれぞれ参照し、手動で追加しています。',
	repo: 'https://github.com/hideki-masuoka/news-map-ukr',
	hosting: 'https://news-map-ukr.web.app',
	lastupdate: '2022-04-14 18:14'
});
