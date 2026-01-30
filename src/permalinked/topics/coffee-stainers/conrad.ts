import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Conrad = [
	SchemaGenerators.withContext(CoffeeStainer('Conrad Stroebel', {
		jobTitle: 'Game Designer',
	})),
];

export default Conrad;
