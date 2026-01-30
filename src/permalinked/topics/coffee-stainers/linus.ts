import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Linus = [
	SchemaGenerators.withContext(CoffeeStainer('Linus Sjöholm', {
		jobTitle: 'Video Editor',
	})),
];
