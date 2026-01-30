import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Rasmus = [
	SchemaGenerators.withContext(CoffeeStainer('Rasmus Knutsson', {
		jobTitle: 'Programmer',
	})),
];
