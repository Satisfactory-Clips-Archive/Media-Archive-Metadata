import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Dylan Kelly', {
		"jobTitle": "Programmer",
		"url": [
			"https://twitter.com/SnyggLich"
		]
	})),
];
