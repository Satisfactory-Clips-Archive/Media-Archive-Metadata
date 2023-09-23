import {
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Gustav Löfstedt', {
		alternateName: [
			'G2',
		],
		jobTitle: 'Lead Programmer',
	})),
];
