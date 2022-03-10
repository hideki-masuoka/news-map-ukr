import alltweet from '$lib/json/tweet.json';
//import details from '$lib/json/oembed.json';

const ksort = (a, b) => {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
};

export const getFromDate = (date, data) => {
	let arr = [];
	Object.entries(alltweet)
		.sort(ksort)
		.forEach(([k, obj]) => {
			if (date === obj.date) {
				arr.push({
					id: k,
					area: obj.area,
					embed: data[k] ?? {}
				});
			}
		});
	return arr;
};
