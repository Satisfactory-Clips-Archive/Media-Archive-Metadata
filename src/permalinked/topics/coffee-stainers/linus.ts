import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Linus = [
	SchemaGenerators.withContext(CoffeeStainer('Linus Sjöholm', {
		jobTitle: 'Video Editor',
	})),
];

export default Linus;
