import {
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Dylan Kelly', {
		"jobTitle": "Programmer",
		"url": [
			"https://twitter.com/SnyggLich"
		]
	})),
];
