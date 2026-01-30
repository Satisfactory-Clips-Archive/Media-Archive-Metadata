import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
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
