import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Stefan = [
	SchemaGenerators.withContext(CoffeeStainer('Stefan Hanna', {
		jobTitle: [
			'CEO',
			'Co-founder'
		],
		url: [
			'https://twitter.com/stefan_hanna',
		],
	})),
];
