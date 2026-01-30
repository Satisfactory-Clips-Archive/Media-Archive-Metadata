import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Etienne = [
	SchemaGenerators.withContext(CoffeeStainer('Etienne Rocipon', {
		jobTitle: 'Programmer',
	})),
];
