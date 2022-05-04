import { writable } from 'svelte/store';
import groupedArea from '$lib/json/groupedArea.json';

//現在のツイートで示されるエリアIDの配列
export const tweetedAreas = writable([]);

// ツイートIDを受け取ってエリアIDの配列を返す
const getGroupedAreas = (id) => {
	let arr = [];
	if ((groupedArea[id] ?? false) && Array.isArray(groupedArea[id])) {
		arr = groupedArea[id];
	}
	return arr;
};

// エリアIDををセットする
const addTweetedArea = (id, area) => {
	let grouped = getGroupedAreas(id);
	let tmp = [];
	tweetedAreas.subscribe((arr) => {
		tmp = arr;
	});
	if (0 < grouped.length) {
		Array.prototype.push.apply(tmp, grouped);
	} else {
		tmp.push(area);
	}
	tweetedAreas.set(tmp);
};

// エリアIDの重複を解消する
const uniqueTweetedAreas = () => {
	let tmp = [];
	tweetedAreas.subscribe((arr) => {
		tmp = [...new Set(arr)];
	});
	tweetedAreas.set(tmp);
};

const ksort = (a, b) => {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
};

export const getFromDate = async (date, data) => {
	let arr = [];
	const jsonData = await import('../json/tweet.json');
	const alltweet = jsonData.default ?? {};
	tweetedAreas.set([]);
	Object.entries(alltweet)
		.sort(ksort)
		.forEach(([k, obj]) => {
			if (date === obj.date) {
				arr.push({
					id: k,
					area: obj.area,
					embed: data[k] ?? {}
				});
				addTweetedArea(k, obj.area);
			}
		});
	uniqueTweetedAreas();
	return arr;
};
