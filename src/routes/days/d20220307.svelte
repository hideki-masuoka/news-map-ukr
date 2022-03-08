<script>
	import DaysPage from '$lib/DaysPage.svelte';

	const pageTitle = '2022年3月7日';

	const tweetdata = [
		{
			id: '1500758982578905088',
			area: 'UA-09',
			embed: {
				url: 'https://twitter.com/UKRINFORM/status/1500758982578905088',
				author_name: 'Ukrinform',
				author_url: 'https://twitter.com/UKRINFORM',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="uk" dir="ltr"\u003EОбстріл військами РФ Рубіжного: одна людина загинула, четверо поранені\u003Ca href="https://t.co/wqf0JZO8L0"\u003Ehttps://t.co/wqf0JZO8L0\u003C/a\u003E \u003Ca href="https://t.co/UdLt8kVGtW"\u003Epic.twitter.com/UdLt8kVGtW\u003C/a\u003E\u003C/p\u003E&mdash; Ukrinform (@UKRINFORM) \u003Ca href="https://twitter.com/UKRINFORM/status/1500758982578905088?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500766094931468288',
			area: 'UA-74',
			embed: {
				url: 'https://twitter.com/UKRINFORM/status/1500766094931468288',
				author_name: 'Ukrinform',
				author_url: 'https://twitter.com/UKRINFORM',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="uk" dir="ltr"\u003EУ Чернігові шукають людей під завалами обстріляної школи\u003Ca href="https://t.co/oOm2bNiD8P"\u003Ehttps://t.co/oOm2bNiD8P\u003C/a\u003E \u003Ca href="https://t.co/xGVjZJeOYP"\u003Epic.twitter.com/xGVjZJeOYP\u003C/a\u003E\u003C/p\u003E&mdash; Ukrinform (@UKRINFORM) \u003Ca href="https://twitter.com/UKRINFORM/status/1500766094931468288?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500779409300934661',
			area: 'UA-32-kyiv',
			embed: {
				url: 'https://twitter.com/afpbbcom/status/1500779409300934661',
				author_name: 'AFPBB News',
				author_url: 'https://twitter.com/afpbbcom',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003Eウクライナ志願兵カップル、戦火の結婚式 \u003Ca href="https://t.co/9HQ1HNkGtI"\u003Epic.twitter.com/9HQ1HNkGtI\u003C/a\u003E\u003C/p\u003E&mdash; AFPBB News (@afpbbcom) \u003Ca href="https://twitter.com/afpbbcom/status/1500779409300934661?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500780584603369476',
			area: 'UA-32',
			embed: {
				url: 'https://twitter.com/Ukrinform_JP/status/1500780584603369476',
				author_name: 'ウクルインフォルム日本語版',
				author_url: 'https://twitter.com/Ukrinform_JP',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003Eロシア侵略軍、ホストメリ町長を射殺\u003Cbr\u003E\u003Cbr\u003E記事本文\u003Ca href="https://t.co/TgHoYiXSpz"\u003Ehttps://t.co/TgHoYiXSpz\u003C/a\u003E \u003Ca href="https://t.co/dObgmHmHzQ"\u003Epic.twitter.com/dObgmHmHzQ\u003C/a\u003E\u003C/p\u003E&mdash; ウクルインフォルム日本語版 (@Ukrinform_JP) \u003Ca href="https://twitter.com/Ukrinform_JP/status/1500780584603369476?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500785156260564994',
			area: 'UA-32',
			embed: {
				url: 'https://twitter.com/afpbbcom/status/1500785156260564994',
				author_name: 'AFPBB News',
				author_url: 'https://twitter.com/afpbbcom',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003Eがれきと遺体の間を走り西へ ある一家の避難 ウクライナ\u003Ca href="https://t.co/kglBqFLc3F"\u003Ehttps://t.co/kglBqFLc3F\u003C/a\u003E\u003C/p\u003E&mdash; AFPBB News (@afpbbcom) \u003Ca href="https://twitter.com/afpbbcom/status/1500785156260564994?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500674821033967616',
			area: 'UA-46',
			embed: {
				url: 'https://twitter.com/ReutersJapan/status/1500674821033967616',
				author_name: 'ロイター',
				author_url: 'https://twitter.com/ReutersJapan',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003Eウクライナ人のカップル、ボフダンさんとイリナさんは、ロシアによる侵攻が続く中でも、結婚式を中止しないことを決めた。 \u003Ca href="https://t.co/labY11NKDc"\u003Epic.twitter.com/labY11NKDc\u003C/a\u003E\u003C/p\u003E&mdash; ロイター (@ReutersJapan) \u003Ca href="https://twitter.com/ReutersJapan/status/1500674821033967616?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500638647816757251',
			area: 'UA-23',
			embed: {
				url: 'https://twitter.com/Reuters/status/1500638647816757251',
				author_name: 'Reuters',
				author_url: 'https://twitter.com/Reuters',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="en" dir="ltr"\u003ERussia is tightening its grip on Ukraine nuclear plant, says U.N. watchdog \u003Ca href="https://t.co/rGQDZzg8gE"\u003Ehttps://t.co/rGQDZzg8gE\u003C/a\u003E \u003Ca href="https://t.co/c2XGNtK9x8"\u003Epic.twitter.com/c2XGNtK9x8\u003C/a\u003E\u003C/p\u003E&mdash; Reuters (@Reuters) \u003Ca href="https://twitter.com/Reuters/status/1500638647816757251?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500640629243662343',
			area: 'UA-05',
			embed: {
				url: 'https://twitter.com/afpbbcom/status/1500640629243662343',
				author_name: 'AFPBB News',
				author_url: 'https://twitter.com/afpbbcom',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003Eロシア軍、中西部の空港攻撃 ウクライナ大統領\u003Ca href="https://t.co/M4TPGepLI6"\u003Ehttps://t.co/M4TPGepLI6\u003C/a\u003E\u003C/p\u003E&mdash; AFPBB News (@afpbbcom) \u003Ca href="https://twitter.com/afpbbcom/status/1500640629243662343?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500649936400142339',
			area: 'UA-23',
			embed: {
				url: 'https://twitter.com/Reuters/status/1500649936400142339',
				author_name: 'Reuters',
				author_url: 'https://twitter.com/Reuters',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="en" dir="ltr"\u003E‘They&#39;re so young’: More than 200 children, from teenagers to toddlers, evacuated from an orphanage in Ukraine&#39;s Zaporizhzhia crossed into Poland, where they are being housed in makeshift dormitories \u003Ca href="https://t.co/wIwyB6dbsA"\u003Ehttps://t.co/wIwyB6dbsA\u003C/a\u003E \u003Ca href="https://t.co/8TRd0DGlSz"\u003Epic.twitter.com/8TRd0DGlSz\u003C/a\u003E\u003C/p\u003E&mdash; Reuters (@Reuters) \u003Ca href="https://twitter.com/Reuters/status/1500649936400142339?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500653301137739777',
			area: 'UA-14',
			embed: {
				url: 'https://twitter.com/ReutersJapan/status/1500653301137739777',
				author_name: 'ロイター',
				author_url: 'https://twitter.com/ReutersJapan',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003E動画：ロシアが民間人を「意図的に攻撃」と米政府、マリウポリ市民の避難進まず　\u003Ca href="https://twitter.com/hashtag/%E3%82%A6%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%8A?src=hash&amp;ref_src=twsrc%5Etfw"\u003E#ウクライナ\u003C/a\u003E \u003Ca href="https://t.co/N0u2csnwkc"\u003Epic.twitter.com/N0u2csnwkc\u003C/a\u003E\u003C/p\u003E&mdash; ロイター (@ReutersJapan) \u003Ca href="https://twitter.com/ReutersJapan/status/1500653301137739777?ref_src=twsrc%5Etfw"\u003EMarch 7, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500613621751025666',
			area: 'UA-32',
			embed: {
				url: 'https://twitter.com/ReutersJapan/status/1500613621751025666',
				author_name: 'ロイター',
				author_url: 'https://twitter.com/ReutersJapan',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003E動画：ロイターカメラのそばで砲撃、住宅街を取材中　\u003Ca href="https://twitter.com/hashtag/%E3%82%A6%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%8A?src=hash&amp;ref_src=twsrc%5Etfw"\u003E#ウクライナ\u003C/a\u003E ・イルピン \u003Ca href="https://t.co/2ZIAsxap7N"\u003Epic.twitter.com/2ZIAsxap7N\u003C/a\u003E\u003C/p\u003E&mdash; ロイター (@ReutersJapan) \u003Ca href="https://twitter.com/ReutersJapan/status/1500613621751025666?ref_src=twsrc%5Etfw"\u003EMarch 6, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500613236265263108',
			area: 'UA-63',
			embed: {
				url: 'https://twitter.com/UKRINFORM/status/1500613236265263108',
				author_name: 'Ukrinform',
				author_url: 'https://twitter.com/UKRINFORM',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="uk" dir="ltr"\u003EЗСУ визволили Чугуїв на Харківщині - Генштаб\u003Ca href="https://t.co/yxerQ2l2cH"\u003Ehttps://t.co/yxerQ2l2cH\u003C/a\u003E \u003Ca href="https://t.co/z2PSRhb3Bt"\u003Epic.twitter.com/z2PSRhb3Bt\u003C/a\u003E\u003C/p\u003E&mdash; Ukrinform (@UKRINFORM) \u003Ca href="https://twitter.com/UKRINFORM/status/1500613236265263108?ref_src=twsrc%5Etfw"\u003EMarch 6, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500558964727160833',
			area: 'UA-74',
			embed: {
				url: 'https://twitter.com/UKRINFORM/status/1500558964727160833',
				author_name: 'Ukrinform',
				author_url: 'https://twitter.com/UKRINFORM',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="uk" dir="ltr"\u003EРосійські війська обстрілюють всі мікрорайони Чернігова\u003Ca href="https://t.co/qjStvvZl1m"\u003Ehttps://t.co/qjStvvZl1m\u003C/a\u003E \u003Ca href="https://t.co/tNgkpmhtDF"\u003Epic.twitter.com/tNgkpmhtDF\u003C/a\u003E\u003C/p\u003E&mdash; Ukrinform (@UKRINFORM) \u003Ca href="https://twitter.com/UKRINFORM/status/1500558964727160833?ref_src=twsrc%5Etfw"\u003EMarch 6, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500557661032656904',
			area: 'UA-65',
			embed: {
				url: 'https://twitter.com/UKRINFORM/status/1500557661032656904',
				author_name: 'Ukrinform',
				author_url: 'https://twitter.com/UKRINFORM',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="uk" dir="ltr"\u003EЖителі села Чонгар вийшли на мітинг проти загарбників з вимогою забиратися з Криму\u003Ca href="https://t.co/VUg4R9UJwQ"\u003Ehttps://t.co/VUg4R9UJwQ\u003C/a\u003E \u003Ca href="https://t.co/innpdFZPqS"\u003Epic.twitter.com/innpdFZPqS\u003C/a\u003E\u003C/p\u003E&mdash; Ukrinform (@UKRINFORM) \u003Ca href="https://twitter.com/UKRINFORM/status/1500557661032656904?ref_src=twsrc%5Etfw"\u003EMarch 6, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		},

		{
			id: '1500556877222064131',
			area: 'UA-14',
			embed: {
				url: 'https://twitter.com/Reuters/status/1500556877222064131',
				author_name: 'Reuters',
				author_url: 'https://twitter.com/Reuters',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="en" dir="ltr"\u003EFrom bombarded basement, Mariupol mayor tries to help besieged residents flee \u003Ca href="https://t.co/3jWI78idwy"\u003Ehttps://t.co/3jWI78idwy\u003C/a\u003E \u003Ca href="https://t.co/BXdqPbmFTs"\u003Epic.twitter.com/BXdqPbmFTs\u003C/a\u003E\u003C/p\u003E&mdash; Reuters (@Reuters) \u003Ca href="https://twitter.com/Reuters/status/1500556877222064131?ref_src=twsrc%5Etfw"\u003EMarch 6, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
				width: 280,
				height: null,
				type: 'rich',
				cache_age: '3153600000',
				provider_name: 'Twitter',
				provider_url: 'https://twitter.com',
				version: '1.0'
			}
		}
	];
</script>

<DaysPage {tweetdata} {pageTitle} embed="{false}" />
