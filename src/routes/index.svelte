<script>
	import DaysPage from '$lib/DaysPage.svelte';

	const pageTitle = 'News';

	const tweetdata = [
		{
			id: '1500638647816757251',
			area: 'UA-23'
		},
		{
			id: '1500640629243662343',
			area: 'UA-05'
		},
		{
			id: '1500649936400142339',
			area: 'UA-23'
		},
		{
			id: '1500653301137739777',
			area: 'UA-14'
		},
		{
			id: '1500613621751025666',
			area: 'UA-32'
		},
		{
			id: '1500613236265263108',
			area: 'UA-63'
		},
		{
			id: '1500558964727160833',
			area: 'UA-74'
		},
		{
			id: '1500557661032656904',
			area: 'UA-65'
		},
		{
			id: '1500556877222064131',
			area: 'UA-14'
		}
	];
</script>

<DaysPage {tweetdata} {pageTitle} />
