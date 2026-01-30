import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Gnutt = [
	SchemaGenerators.withContext(CoffeeStainer('Gnutt Halvordsson', {
		jobTitle: 'IT Guru',
	})),
];

export default Gnutt;
