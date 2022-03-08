<script>
	import DaysPage from '$lib/DaysPage.svelte';

	const pageTitle = 'News';

	const tweetdata = [
		{
			id: '1501072973746380800',
			area: 'UA-18',
			embed: {
				url: 'https://twitter.com/UKRINFORM/status/1501072973746380800',
				author_name: 'Ukrinform',
				author_url: 'https://twitter.com/UKRINFORM',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="uk" dir="ltr"\u003EРятувальники ліквідували пожежу на нафтобазі у Черняхові на Житомирщині \u003Ca href="https://t.co/DEaCYbjYG9"\u003Ehttps://t.co/DEaCYbjYG9\u003C/a\u003E \u003Ca href="https://t.co/9VT64gFeKJ"\u003Epic.twitter.com/9VT64gFeKJ\u003C/a\u003E\u003C/p\u003E&mdash; Ukrinform (@UKRINFORM) \u003Ca href="https://twitter.com/UKRINFORM/status/1501072973746380800?ref_src=twsrc%5Etfw"\u003EMarch 8, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
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
			id: '1501031199271268357',
			area: 'UA-32',
			embed: {
				url: 'https://twitter.com/Reuters/status/1501031199271268357',
				author_name: 'Reuters',
				author_url: 'https://twitter.com/Reuters',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="en" dir="ltr"\u003EResidents carrying small children and pets flee the town of Irpin, near the Ukrainian capital of Kyiv, as Russian troops advance \u003Ca href="https://t.co/Pb3QPu6ezy"\u003Ehttps://t.co/Pb3QPu6ezy\u003C/a\u003E \u003Ca href="https://t.co/HiEjx4WgKp"\u003Epic.twitter.com/HiEjx4WgKp\u003C/a\u003E\u003C/p\u003E&mdash; Reuters (@Reuters) \u003Ca href="https://twitter.com/Reuters/status/1501031199271268357?ref_src=twsrc%5Etfw"\u003EMarch 8, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
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
			id: '1501014743200702464',
			area: 'UA-63',
			embed: {
				url: 'https://twitter.com/ReutersJapan/status/1501014743200702464',
				author_name: 'ロイター',
				author_url: 'https://twitter.com/ReutersJapan',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003E動画：地面に巨大な穴、通りはがれきで埋まる　爆撃続く東部ハリコフ \u003Ca href="https://t.co/hsLCm6usPE"\u003Epic.twitter.com/hsLCm6usPE\u003C/a\u003E\u003C/p\u003E&mdash; ロイター (@ReutersJapan) \u003Ca href="https://twitter.com/ReutersJapan/status/1501014743200702464?ref_src=twsrc%5Etfw"\u003EMarch 8, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
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
			id: '1501006575447719937',
			area: 'UA-59',
			embed: {
				url: 'https://twitter.com/UKRINFORM/status/1501006575447719937',
				author_name: 'Ukrinform',
				author_url: 'https://twitter.com/UKRINFORM',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="uk" dir="ltr"\u003EУ Сумах російські загарбники скинули бомбу на житлові будинки, серед загиблих - діти\u003Ca href="https://t.co/UHsy1jhaOZ"\u003Ehttps://t.co/UHsy1jhaOZ\u003C/a\u003E \u003Ca href="https://t.co/9alHmvZRZq"\u003Epic.twitter.com/9alHmvZRZq\u003C/a\u003E\u003C/p\u003E&mdash; Ukrinform (@UKRINFORM) \u003Ca href="https://twitter.com/UKRINFORM/status/1501006575447719937?ref_src=twsrc%5Etfw"\u003EMarch 8, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
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
			id: '1500992950595166208',
			area: 'UA-32',
			embed: {
				url: 'https://twitter.com/afpbbcom/status/1500992950595166208',
				author_name: 'AFPBB News',
				author_url: 'https://twitter.com/afpbbcom',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="ja" dir="ltr"\u003E首都郊外で「白兵戦」も ウクライナ・ロシア両軍\u003Ca href="https://t.co/oAdw3dQZhF"\u003Ehttps://t.co/oAdw3dQZhF\u003C/a\u003E\u003C/p\u003E&mdash; AFPBB News (@afpbbcom) \u003Ca href="https://twitter.com/afpbbcom/status/1500992950595166208?ref_src=twsrc%5Etfw"\u003EMarch 8, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
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
			id: '1500987126221004802',
			area: 'UA-UKR',
			embed: {
				url: 'https://twitter.com/UKRINFORM/status/1500987126221004802',
				author_name: 'Ukrinform',
				author_url: 'https://twitter.com/UKRINFORM',
				html: '\u003Cblockquote class="twitter-tweet" align="center" data-width="280" data-dnt="true"\u003E\u003Cp lang="uk" dir="ltr"\u003EРосійські війська продовжують наступ в напрямках на Дніпро та Запоріжжя - Генштаб\u003Ca href="https://t.co/tRX8KfcILi"\u003Ehttps://t.co/tRX8KfcILi\u003C/a\u003E \u003Ca href="https://t.co/GHDvZkXOsf"\u003Epic.twitter.com/GHDvZkXOsf\u003C/a\u003E\u003C/p\u003E&mdash; Ukrinform (@UKRINFORM) \u003Ca href="https://twitter.com/UKRINFORM/status/1500987126221004802?ref_src=twsrc%5Etfw"\u003EMarch 8, 2022\u003C/a\u003E\u003C/blockquote\u003E\n',
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

<DaysPage {tweetdata} {pageTitle} embed={false} />
