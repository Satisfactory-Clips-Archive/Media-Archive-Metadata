const {sync:glob} = require('glob');

module.exports = glob('./src/permalinked/**/*.js').reduce(
	(out, current) => {
		const path = current.replace(
			/^\.\/src\/permalinked/,
			''
		).replace(/\.js$/, '/');

		out[path] = require(current);

		return out;
	},
	{}
);
