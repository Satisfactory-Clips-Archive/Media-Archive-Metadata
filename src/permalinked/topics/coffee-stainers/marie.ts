import {
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Marie Kauffeldt', {
		jobTitle: 'Lead 3D Artist',
	})),
];
