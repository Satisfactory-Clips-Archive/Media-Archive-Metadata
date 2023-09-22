import {glob} from 'glob';
import {readFile, writeFile} from 'fs/promises';

for (const file of await glob('./src/**/*.js')) {
	const contents = ((await readFile(file)) + '');

	await writeFile(file, contents.replaceAll('	', '\t'));
}
