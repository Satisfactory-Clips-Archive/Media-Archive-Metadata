import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Neshkor = [
	SchemaGenerators.withContext(CoffeeStainer('Neshkor', {
		alternateName: [
			'Michiel Werring',
		],
		jobTitle: 'World Designer',
	})),
];
