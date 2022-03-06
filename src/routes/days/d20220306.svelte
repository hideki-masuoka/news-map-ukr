<script>
	import DaysPage from '$lib/DaysPage.svelte';

	const pageTitle = '2022年3月6日';

	const tweetdata = [
		{
			id: '1500553290135834631',
			area: 'UA-65'
		},
		{
			id: '1500536657631748099',
			area: 'UA-14'
		},
		{
			id: '1500467578472439810',
			area: 'UA-05'
		},
		{
			id: '1500442645151330306',
			area: 'UA-14'
		},
		{
			id: '1500409222735056901',
			area: 'UA-32-kyiv'
		},
		{
			id: '1500400492698079234',
			area: 'UA-UKR'
		},
		{
			id: '1500517841019232256',
			area: 'UA-14'
		},
		{
			id: '1500493909859782657',
			area: 'UA-32'
		},
		{
			id: '1500438594934439937',
			area: 'UA-14'
		},
		{
			id: '1500433566236389376',
			area: 'UA-UKR'
		},
		{
			id: '1500327814469406725',
			area: 'UA-32'
		},
		{
			id: '1500493980907319304',
			area: 'UA-14'
		},
		{
			id: '1500487365881733125',
			area: 'UA-32'
		},
		{
			id: '1500486615302553605',
			area: 'UA-14'
		},
		{
			id: '1500456920267776007',
			area: 'UA-51'
		}
	];
</script>

<DaysPage {tweetdata} {pageTitle} />
