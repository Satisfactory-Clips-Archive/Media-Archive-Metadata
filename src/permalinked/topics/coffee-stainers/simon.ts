import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	Simon_Saga,
} from '../../../common/youtube.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

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
