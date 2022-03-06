<script>
	import DaysPage from '$lib/DaysPage.svelte';

	const pageTitle = '2022年3月4日';

	const tweetdata = [
		{
			id: '1499618165260759042',
			area: 'UA-14'
		},
		{
			id: '1499531592770932741',
			area: 'UA-65'
		},
		{
			id: '1499714112586141706',
			area: 'UA-63'
		},
		{
			id: '1499716294198939653',
			area: 'UA-32'
		},
		{
			id: '1499716296858087424',
			area: 'UA-32'
		},
		{
			id: '1499723834231980041',
			area: 'UA-32'
		},
		{
			id: '1499760934847488001',
			area: 'UA-09'
		},
		{
			id: '1499761977861853186',
			area: 'UA-74'
		},
		{
			id: '1499765531318099973',
			area: 'UA-23'
		},
		{
			id: '1499768890863366160',
			area: 'UA-65'
		},
		{
			id: '1499769043980623873',
			area: 'UA-12'
		},
		{
			id: '1499738899752574981',
			area: 'UA-65'
		},
		{
			id: '1499739730698719244',
			area: 'UA-63'
		},
		{
			id: '1499745361774141441',
			area: 'UA-32'
		},
		{
			id: '1499747782940311557',
			area: 'UA-23'
		}
	];
</script>

<DaysPage {tweetdata} {pageTitle} />
