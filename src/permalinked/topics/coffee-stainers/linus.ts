import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Linus = [
	SchemaGenerators.withContext(CoffeeStainer('Linus Sjöholm', {
		jobTitle: 'Video Editor',
	})),
];

export default Linus;
