const {sync:glob} = require('glob');
const {writeFileSync:write} = require('fs');

write(
	'./dist/index.json',
	JSON.stringify(
		glob('./src/permalinked/**/*.js').reduce(
			(out, current) => {
				const path = current.replace(
					/^\.\/src\/permalinked/,
					''
				).replace(/\.js$/, '/');

				out[path] = require(current);

				return out;
			},
			{}
		),
		null,
		"\t"
	)
);

console.log('done');
