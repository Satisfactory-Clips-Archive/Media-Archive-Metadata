import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	Simon_Saga,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../common/youtube.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
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
