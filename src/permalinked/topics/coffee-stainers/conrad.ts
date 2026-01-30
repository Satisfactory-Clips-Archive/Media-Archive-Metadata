import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Conrad = [
	SchemaGenerators.withContext(CoffeeStainer('Conrad Stroebel', {
		jobTitle: 'Game Designer',
	})),
];

export default Conrad;
