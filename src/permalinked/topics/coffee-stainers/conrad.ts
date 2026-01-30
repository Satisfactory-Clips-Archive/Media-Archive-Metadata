import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Conrad = [
	SchemaGenerators.withContext(CoffeeStainer('Conrad Stroebel', {
		jobTitle: 'Game Designer',
	})),
];
