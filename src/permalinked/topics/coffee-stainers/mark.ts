import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Mark = [
	SchemaGenerators.withContext(CoffeeStainer('Mark Hofma', {
		jobTitle: 'Game Designer',
	})),
];

export default Mark;
