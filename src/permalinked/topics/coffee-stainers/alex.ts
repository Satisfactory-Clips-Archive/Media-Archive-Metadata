import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Alex = [
	SchemaGenerators.withContext(CoffeeStainer('Alexander Bukhonov', {
		jobTitle: 'Localization',
	})),
];

export default Alex;
