import { error } from '@sveltejs/kit';

const LIB = '../../../lib';

const getContents = async (slugName) => {
    let jsonData = await import(LIB + '/json/daily/oembe' + slugName + '.json');
    return jsonData;
};

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

	let jsonData = getContents(params.slug);
    let dateText = params.slug.replace('d', '');

	  if(jsonData) {
        return {
            contents: jsonData,
            dateText: dateText
        };
    }
	throw error(404, 'Not found');
}
