import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Marie = [
	SchemaGenerators.withContext(CoffeeStainer('Marie Kauffeldt', {
		jobTitle: 'Lead 3D Artist',
	})),
];
