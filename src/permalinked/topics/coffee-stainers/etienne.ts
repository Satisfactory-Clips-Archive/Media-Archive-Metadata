import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Etienne = [
	SchemaGenerators.withContext(CoffeeStainer('Etienne Rocipon', {
		jobTitle: 'Programmer',
	})),
];

export default Etienne;
