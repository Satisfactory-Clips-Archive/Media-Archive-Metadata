import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Alex = [
	SchemaGenerators.withContext(CoffeeStainer('Alexander Bukhonov', {
		jobTitle: 'Localization',
	})),
];
