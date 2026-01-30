import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	Simon_Saga,
// eslint-disable-next-line imports/no-internal-modules
} from '../../../common/youtube.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Simon = [
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

export default Simon;
