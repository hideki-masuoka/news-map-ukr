import { readable } from 'svelte/store';

export const SITE_META = readable({
	title: 'ニュースマップ：ウクライナ',
	description1:
		'これはウクライナのニュースを読むときに、どの地域のことを指しているのかが分かるようにしたものです。',
	description2:
		'ニュース・ソースはTwitter、地図はWikipediaをそれぞれ参照し、手動で追加しています。',
	repo: 'https://github.com/hideki-masuoka/news-map-ukr',
	hosting: 'https://news-map-ukr.web.app',
	lastupdate: '2022-03-15 00:17'
});
