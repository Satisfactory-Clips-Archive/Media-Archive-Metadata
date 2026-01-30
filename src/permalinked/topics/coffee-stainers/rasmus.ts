import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Rasmus = [
	SchemaGenerators.withContext(CoffeeStainer('Rasmus Knutsson', {
		jobTitle: 'Programmer',
	})),
];

export default Rasmus;
