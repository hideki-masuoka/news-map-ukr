//export const prerender = true;

import { error } from '@sveltejs/kit';
import fs from 'fs';

const LIB = './src/lib';

const getContents = async (slugName) => {
	const IMPORTFILE = LIB + '/json/daily/oembe' + slugName + '.json';
	const string = fs.readFileSync(IMPORTFILE, 'utf-8');
	return JSON.parse(string);
};

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		let jsonData = await getContents(params.slug);
		let dateText = params.slug.replace('d', '');
		return {
			contents: jsonData,
			dateText: dateText,
			title:
				dateText.substring(0, 4) +
				'年' +
				dateText.substring(4, 6) +
				'月' +
				dateText.substring(6) +
				'日'
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
}
