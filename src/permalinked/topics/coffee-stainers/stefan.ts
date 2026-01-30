import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Stefan = [
	SchemaGenerators.withContext(CoffeeStainer('Stefan Hanna', {
		jobTitle: [
			'CEO',
			'Co-founder',
		],
		url: [
			'https://twitter.com/stefan_hanna',
		],
	})),
];

export default Stefan;
