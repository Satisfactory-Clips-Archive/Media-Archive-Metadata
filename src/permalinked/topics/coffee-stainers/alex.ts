import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Alex = [
	SchemaGenerators.withContext(CoffeeStainer('Alexander Bukhonov', {
		jobTitle: 'Localization',
	})),
];

export default Alex;
