import {
	WebPageAboutSatisfactory,
} from '../../../../../utils.js';
import {
	Uranium_Waste,
} from '../../../../../common/wiki-images.js';
import {
	SchemaGenerators,
} from '../../../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Nuclear Waste', {
		"image": [
			Uranium_Waste,
		],
	})),
];
