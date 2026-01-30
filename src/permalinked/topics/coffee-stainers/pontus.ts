import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Pontus = [
	SchemaGenerators.withContext(CoffeeStainer('Pontus Lundén', {
		jobTitle: 'UI Graphics',
	})),
];

export default Pontus;
