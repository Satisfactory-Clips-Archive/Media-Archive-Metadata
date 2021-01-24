import glob from 'glob';

export default (await Promise.all(
	glob.sync('./src/permalinked/**/*.js').map(async (path) => {
		return [
			path.replace(
			/^\.\/src\/permalinked/,
			''
			).replace(/\.js$/, '/'),
			(await import(path)).default,
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
