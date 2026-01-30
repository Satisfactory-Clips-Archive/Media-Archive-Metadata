import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Gustav = [
	SchemaGenerators.withContext(CoffeeStainer('Gustav Löfstedt', {
		alternateName: [
			'G2',
		],
		jobTitle: 'Lead Programmer',
	})),
];
