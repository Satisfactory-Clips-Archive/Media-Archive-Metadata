import {
	CoffeeStainer,
} from '../../../utils.js';
import {
	Simon_Saga,
} from '../../../common/youtube.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Simon Begby', {
		"jobTitle": "VFX Artist",
		"subjectOf": [
			Simon_Saga,
		],
		"url": [
			"https://twitter.com/SBegby"
		]
	})),
];
