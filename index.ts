import {
	glob,
} from 'glob';

import {
	dirname,
	resolve,
} from 'path';

import {
	fileURLToPath,
	pathToFileURL,
} from 'url';

export default (await Promise.all(
	glob.sync(
		dirname(
			fileURLToPath(
				import.meta.url
			)
		)
		+ '/src/permalinked/**/*.js'
	).map(async (path) => {
		return [
			resolve(path).replace(
				dirname(
					fileURLToPath(
						import.meta.url
					)
				),
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
