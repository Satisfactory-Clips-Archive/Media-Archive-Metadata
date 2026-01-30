import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Dylan = [
	SchemaGenerators.withContext(CoffeeStainer('Dylan Kelly', {
		"jobTitle": "Programmer",
		"url": [
			"https://twitter.com/SnyggLich",
		],
	})),
];

export default Dylan;
