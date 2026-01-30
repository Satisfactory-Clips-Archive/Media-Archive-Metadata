import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Mark = [
	SchemaGenerators.withContext(CoffeeStainer('Mark Hofma', {
		jobTitle: 'Game Designer',
	})),
];
