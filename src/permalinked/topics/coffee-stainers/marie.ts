import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Marie = [
	SchemaGenerators.withContext(CoffeeStainer('Marie Kauffeldt', {
		jobTitle: 'Lead 3D Artist',
	})),
];

export default Marie;
