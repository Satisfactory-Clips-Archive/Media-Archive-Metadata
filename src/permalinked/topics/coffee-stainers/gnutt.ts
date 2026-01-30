import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Gnutt = [
	SchemaGenerators.withContext(CoffeeStainer('Gnutt Halvordsson', {
		jobTitle: 'IT Guru',
	})),
];

export default Gnutt;
