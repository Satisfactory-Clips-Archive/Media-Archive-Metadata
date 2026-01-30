import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Mark = [
	SchemaGenerators.withContext(CoffeeStainer('Mark Hofma', {
		jobTitle: 'Game Designer',
	})),
];

export default Mark;
