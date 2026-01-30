import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Neshkor = [
	SchemaGenerators.withContext(CoffeeStainer('Neshkor', {
		alternateName: [
			'Michiel Werring',
		],
		jobTitle: 'World Designer',
	})),
];

export default Neshkor;
