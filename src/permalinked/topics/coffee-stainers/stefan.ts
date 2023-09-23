import {
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

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
