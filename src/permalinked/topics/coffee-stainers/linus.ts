import {
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Linus Sjöholm', {
		jobTitle: 'Video Editor',
	})),
];
