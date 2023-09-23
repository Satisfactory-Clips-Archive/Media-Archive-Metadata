import {
	CoffeeStainer,
} from '../../../utils.js';
import {
	yt_UT9iNA3WGT4,
} from '../../../common/youtube.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Anna Richter', {
		jobTitle: '3D Artist',
		subjectOf: [
			yt_UT9iNA3WGT4,
		],
	})),
];
