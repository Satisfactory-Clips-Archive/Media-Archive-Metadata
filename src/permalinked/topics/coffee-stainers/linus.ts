import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Linus Sjöholm', {
		jobTitle: 'Video Editor',
	})),
];
