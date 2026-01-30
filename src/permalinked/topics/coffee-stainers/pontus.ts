import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Pontus = [
	SchemaGenerators.withContext(CoffeeStainer('Pontus Lundén', {
		jobTitle: 'UI Graphics',
	})),
];
