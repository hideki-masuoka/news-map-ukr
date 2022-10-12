import { error } from '@sveltejs/kit';

//export const prerender = true;

const LIB = '../../../lib';

const getContents = async (slugName) => {
    const IMPORTFILE = LIB + '/json/daily/oembe' + slugName + '.json';
    let jsonData = {};
    try {
        jsonData = await import(IMPORTFILE);
        jsonData = jsonData.default;
    } catch (e) {
        console.log(IMPORTFILE);
        throw error(404, 'Data Not found');
    }
    //console.log(jsonData);
	  return jsonData;
};

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const id = url.searchParams.get('id') ?? false;
    const jsonData = await getContents(id);

    if (!id) {
        throw error(404, 'data not found');
    }

    return new Response(String(JSON.stringify(jsonData)));
}
