import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Etienne = [
	SchemaGenerators.withContext(CoffeeStainer('Etienne Rocipon', {
		jobTitle: 'Programmer',
	})),
];

export default Etienne;
