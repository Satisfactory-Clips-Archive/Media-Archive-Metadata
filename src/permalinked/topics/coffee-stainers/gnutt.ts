import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Gnutt = [
	SchemaGenerators.withContext(CoffeeStainer('Gnutt Halvordsson', {
		jobTitle: 'IT Guru',
	})),
];
