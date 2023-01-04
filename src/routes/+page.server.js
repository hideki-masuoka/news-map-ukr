import { error } from '@sveltejs/kit';
import { CurrentDay } from '$lib/siteMeta.js';
//import { getFromDate } from '$lib/tweet/getTweet.js';
import fs from 'fs';

const LIB = './src/lib';

const getContents = async (slugName) => {
	const IMPORTFILE = LIB + '/json/daily/oembe' + slugName + '.json';
	const string = fs.readFileSync(IMPORTFILE, 'utf-8');
	return JSON.parse(string);
};

/*
const getTweetData = async () => {
    let jsonData = await getContents('d' + CurrentDay);
    return getFromDate(CurrentDay, jsonData, true);
};
*/

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		return {
			CurrentDay: CurrentDay,
			JsonData: await getContents('d' + CurrentDay)
			//            "TweetData": await getTweetData()
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
}
