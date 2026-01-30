import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Gustav Löfstedt', {
		alternateName: [
			'G2',
		],
		jobTitle: 'Lead Programmer',
	})),
];
