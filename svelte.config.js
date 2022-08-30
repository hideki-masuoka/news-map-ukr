//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html',
			precompress: true
		}),
		prerender: {
			default: true,
			enabled: true
		},
		trailingSlash: 'always',
		vite: {
			plugins: [WindiCSS()]
		}
	}
};

export default config;
