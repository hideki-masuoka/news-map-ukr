<script>
	import DaysPage from '$lib/DaysPage.svelte';
	import { areaData, selectedArea, currentTweetId } from '$lib/area.js';
	import { tweetedAreas } from '$lib/tweet/getTweet.js';

	$tweetedAreas = [];

	const pageTitle = '用語集';

	const getAreaName = (id) => {
		if (($areaData[id] ?? false) && ($areaData[id].name ?? false)) {
			return $areaData[id].name;
		}
		return '';
	};

	const URL_ROOT = 'https://ja.wikipedia.org/wiki/';
	const URL_ROOT_EN = 'https://en.wikipedia.org/wiki/';

	const getWikipediaURL = (id, lang) => {
		return 'en' === lang ? URL_ROOT_EN + id : URL_ROOT + id;
	};

	const handleViewArea = (area, group) => {
		$selectedArea = area;
		$currentTweetId = group;
	};

	const items = {
		Melitopol: {
			title: 'メリトポリ',
			area: 'UA-23',
			description:
				'ウクライナ南東部のザポリージャ州にある都市／この都市は「クリミアへの玄関口」と呼ばれ、2014年にロシアがクリミアを占領する前は、半島に向かう旅客列車の80％が都市を通過し、夏の間、道路交通は1日あたり45,000台に達しました',
			lang: 'en'
		},
		'%E3%83%9E%E3%83%AA%E3%82%A6%E3%83%9D%E3%83%AA': {
			title: 'マリウポリ',
			area: 'UA-14',
			description: 'ウクライナ東部のドネツィク州にある都市'
		},
		Sievierodonetsk: {
			title: 'セベロドネツク',
			area: 'UA-09',
			description: 'ルハーンシク州の都市',
			lang: 'en'
		},
		'%E3%83%89%E3%83%B3%E3%83%90%E3%82%B9': {
			title: 'ドンバス地方',
			area: 'group-donbas',
			group: 'group-donbas',
			description: '今日用いられる最も一般的な定義はウクライナのドネツィク州とルハーンシク州を指す'
		},
		'%E3%83%89%E3%83%8B%E3%82%A8%E3%83%97%E3%83%AB%E5%B7%9D': {
			title: 'ドニエプル川',
			area: 'dnipro-ua',
			description:
				'ロシアから始まって、ベラルーシを経てウクライナに流れ黒海に注ぐ川／日本語表記は、他にドネプル川、ドニェプル川、ドニェープル川などが見られる'
		},
		'%E3%82%A4%E3%83%AB%E3%83%94%E3%83%B3': {
			title: 'イルピン',
			area: 'UA-32',
			description: 'キーウ州のイルピニ川沿いに位置する都市'
		},
		'Bucha,_Kyiv_Oblast': {
			  title: 'ブチャ',
			  area: 'UA-32',
			  description: 'キーウ州にある都市',
			  lang: 'en'
		},
		  Enerhodar: {
			    title: 'エネルホダル',
			    area: 'UA-23',
			    description: 'ザポリージャ州の北西部にある都市',
			    lang: 'en'
		  },

		  '%E3%83%9B%E3%82%B9%E3%83%88%E3%83%BC%E3%83%A1%E3%83%AA%E7%A9%BA%E6%B8%AF': {
			title: 'ホストーメリ空港(アントノフ国際空港)',
			area: 'UA-32',
			description: 'キエフ州ホストーメリ市にある国際貨物空港'
		},
		'An-225_(%E8%88%AA%E7%A9%BA%E6%A9%9F)': {
			title: 'An-225 ムリーヤ',
			area: 'UA-32',
			description:
				'世界最大の飛行機／2022年3月4日、ロシア国営テレビによって機体が完全に破壊されていることが確認された'
		},
		'%E3%82%B6%E3%83%9D%E3%83%AA%E3%83%BC%E3%82%B8%E3%83%A3%E5%8E%9F%E5%AD%90%E5%8A%9B%E7%99%BA%E9%9B%BB%E6%89%80':
			{
				title: 'ザポリージャ原子力発電所',
				area: 'UA-23',
				description:
					'世界で3番目に大きな原子力発電所／ウクライナ中央部、ドニエプル川のカホフカ貯水池の岸に存在する'
			},
		'%E3%83%81%E3%82%A7%E3%83%AB%E3%83%8E%E3%83%96%E3%82%A4%E3%83%AA%E5%8E%9F%E5%AD%90%E5%8A%9B%E7%99%BA%E9%9B%BB%E6%89%80':
			{
				title: 'チェルノブイリ原子力発電所',
				area: 'UA-32',
				description:
					'1986年4月26日に4号炉が爆発するチェルノブイリ原子力発電所事故が発生し、欧州だけでなく全世界に影響を及ぼした'
			}
	};
</script>

<DaysPage {pageTitle} embed={'Glossary'}>
	<svelte:fragment slot="glossaly">
		<div class="glossary-wrap">
			{#each Object.entries(items) as [key, item]}
				<div id="gls{key}" class="glossary-item">
					<button
						class="view-area d-gui-chips"
						on:click={() => {
							handleViewArea(item.area, item.group ?? null);
						}}
					>
						<svg fill="currentColor" stroke="none" width="24" height="24" viewBox="0 0 24 24"
							><path
								d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
							/></svg
						>
						<strong>{getAreaName(item.area)}</strong>
					</button>
					<dl class="glossary-content">
						<dt class="glossary-title">{item.title}</dt>
						<dd class="glossary-text">{item.description}</dd>
						<dd class="glossary-link">
							<a href={getWikipediaURL(key, item.lang ?? 'jp')} target="_blank" rel="noopener"
								>Wikipediaで表示</a
							>
						</dd>
						<dd class="glossary-hr">
							<svg width="24" height="24" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									stroke="none"
									d="M14.97,18.95L12.41,12.92C11.39,14.91 10.27,17 9.31,18.95C9.3,18.96 8.84,18.95 8.84,18.95C7.37,15.5 5.85,12.1 4.37,8.68C4.03,7.84 2.83,6.5 2,6.5C2,6.4 2,6.18 2,6.05H7.06V6.5C6.46,6.5 5.44,6.9 5.7,7.55C6.42,9.09 8.94,15.06 9.63,16.58C10.1,15.64 11.43,13.16 12,12.11C11.55,11.23 10.13,7.93 9.71,7.11C9.39,6.57 8.58,6.5 7.96,6.5C7.96,6.35 7.97,6.25 7.96,6.06L12.42,6.07V6.47C11.81,6.5 11.24,6.71 11.5,7.29C12.1,8.53 12.45,9.42 13,10.57C13.17,10.23 14.07,8.38 14.5,7.41C14.76,6.76 14.37,6.5 13.29,6.5C13.3,6.38 13.3,6.17 13.3,6.07C14.69,6.06 16.78,6.06 17.15,6.05V6.47C16.44,6.5 15.71,6.88 15.33,7.46L13.5,11.3C13.68,11.81 15.46,15.76 15.65,16.2L19.5,7.37C19.2,6.65 18.34,6.5 18,6.5C18,6.37 18,6.2 18,6.05L22,6.08V6.1L22,6.5C21.12,6.5 20.57,7 20.25,7.75C19.45,9.54 17,15.24 15.4,18.95C15.4,18.95 14.97,18.95 14.97,18.95Z"
								/>
							</svg>
						</dd>
					</dl>
				</div>
			{/each}
		</div>
	</svelte:fragment>
</DaysPage>

<style lang="windicss">
	.glossary-wrap {
		@apply container m-auto w-full pr-4;
	}
	.glossary-item {
		@apply flex-grow flex-shrink mb-8;

		svg {
			@apply inline;
		}
		.view-area {
			@apply mb-4 d-gui-box-pull-sm;
			&:active {
				@apply d-gui-box-push-sm;
			}
		}
	}

	.glossary-hr {
		color: #ccc;
		@apply text-center;
	}

	.glossary-content {
		border: 1px solid #ccc;
		border-radius: 0.5em;
		@apply m-auto px-4 py-2 mb-4 ml-4 d-gui-box;
		.glossary-title {
			@apply font-bold text-lg;
		}
		.glossary-link {
			color: blue;
			@apply text-right;
		}
	}
</style>
