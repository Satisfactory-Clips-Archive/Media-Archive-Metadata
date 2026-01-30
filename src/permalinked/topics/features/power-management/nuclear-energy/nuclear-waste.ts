import {
	WebPageAboutSatisfactory,
} from '../../../../../utils.ts';
import {
	Uranium_Waste,
// eslint-disable-next-line imports/no-internal-modules
} from '../../../../../common/wiki-images.ts';

import {
	SchemaGenerators,
} from '../../../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Nuclear Waste', {
		"image": [
			Uranium_Waste,
		],
	})),
];
