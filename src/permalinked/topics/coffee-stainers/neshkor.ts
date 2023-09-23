import {
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Neshkor', {
		alternateName: [
			'Michiel Werring',
		],
		jobTitle: 'World Designer',
	})),
];
