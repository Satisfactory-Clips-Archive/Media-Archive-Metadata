import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
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
