import {
	typescript,
} from '@signpostmarv/eslint-config';

import parser from '@typescript-eslint/parser';

// eslint-disable-next-line imports/no-default-export
export default  [
	{
		languageOptions: {
			parser,
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	},
	...typescript,
	{
		files: ['**/*.ts'],
		ignores: ['**/*.d.ts', '**/*.js', '**/*.mjs'],
	},
	{
		rules: {
			'imports/no-default-export': "off",
		},
	},
];
