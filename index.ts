import {
	glob,
} from 'node:fs/promises';

import {
	resolve,
} from 'node:path';

import type {
	SchemaObject,
// eslint-disable-next-line imports/no-internal-modules
} from './src/SchemaTypes.ts';

const data: {
	[key: string]: [
		SchemaObject<string>,
		...SchemaObject<string>[],
	],
} = {};

for await (
	const filepath of glob(`${import.meta.dirname}/src/permalinked/**/*.ts`)
) {
	data[
		resolve(filepath)
			.replace(import.meta.dirname, '')
			.replace(/[/\\]/g, '/')
			.replace(/^\/src\/permalinked\//, '/')
			.replace(/\.js$/, '/')
	] = (
		(await import(filepath) as {
			default: [
				SchemaObject<string>,
				...SchemaObject<string>[],
			],
		}).default
	);
}

export {
	data,
};
