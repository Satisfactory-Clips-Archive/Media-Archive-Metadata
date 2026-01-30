import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Marie = [
	SchemaGenerators.withContext(CoffeeStainer('Marie Kauffeldt', {
		jobTitle: 'Lead 3D Artist',
	})),
];

export default Marie;
