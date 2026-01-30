import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Pontus = [
	SchemaGenerators.withContext(CoffeeStainer('Pontus Lundén', {
		jobTitle: 'UI Graphics',
	})),
];

export default Pontus;
