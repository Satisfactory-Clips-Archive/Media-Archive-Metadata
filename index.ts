import {
	glob,
} from 'glob';

import {
	resolve,
} from 'path';

import {
	pathToFileURL,
} from 'url';

export default (await Promise.all(
	glob.sync(
		import.meta.dirname
		+ '/src/permalinked/**/*.js'
	).map(async (path) => {
		return [
			resolve(path).replace(
				import.meta.dirname,
			''
			).replace(/[\/\\]/g, '/').replace(
				/^\/src\/permalinked\//,
				'/'
			).replace(/\.js$/, '/'),
			(await import(pathToFileURL(path))).default,
		];
	})
)).reduce(
	(out, current) => {
		const [path, json] = current;

		out[path] = json;

		return out;
	},
	{}
);
