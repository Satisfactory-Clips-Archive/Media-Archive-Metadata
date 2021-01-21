const data = require('./index');
const {writeFileSync:write} = require('fs');

write(
	'./dist/index.json',
	JSON.stringify(
		data,
		null,
		"\t"
	)
);

console.log('done');
