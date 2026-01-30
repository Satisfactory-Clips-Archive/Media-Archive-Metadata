import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Neshkor', {
		alternateName: [
			'Michiel Werring',
		],
		jobTitle: 'World Designer',
	})),
];
