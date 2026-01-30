import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Rasmus = [
	SchemaGenerators.withContext(CoffeeStainer('Rasmus Knutsson', {
		jobTitle: 'Programmer',
	})),
];

export default Rasmus;
