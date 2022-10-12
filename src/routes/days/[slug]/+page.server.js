//export const prerender = true;

import { error } from '@sveltejs/kit';

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
    console.log(jsonData);
	return jsonData;
};

const getContent2 = async (slugname) => {
    const api = '/days/api/?id=' + slugname;
    const res = fetch(api, {
        method: 'GET'
    })
        .then(response =>{
            if(!response.ok) {
                throw new Error('no');
            }
            return response.json();
        })
        .then(json => {
            return json;
        })
        .catch(e => {
            return false;
        });
    return res;
}

import fs from 'fs';

const getContent3 = async (slugName) => {
    const IMPORTFILE = './src/lib/json/daily/oembe' + slugName + '.json';
    const string = fs.readFileSync(IMPORTFILE, "utf-8");
    return JSON.parse(string);
};

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
	    let jsonData = await getContent3(params.slug);
//      let jsonData = {};
	    let dateText = params.slug.replace('d', '');
		return {
			contents: jsonData,
			dateText: dateText
		};
	} catch (e) {
	    throw error(404, 'Not found');
  }
}
