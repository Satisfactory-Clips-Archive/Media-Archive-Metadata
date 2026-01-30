import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	yt_UT9iNA3WGT4,
} from '../../../common/youtube.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Anna Richter', {
		jobTitle: '3D Artist',
		subjectOf: [
			yt_UT9iNA3WGT4,
		],
	})),
];
