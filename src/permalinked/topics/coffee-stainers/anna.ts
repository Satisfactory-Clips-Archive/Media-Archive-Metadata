import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	yt_UT9iNA3WGT4,
// eslint-disable-next-line imports/no-internal-modules
} from '../../../common/youtube.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Anna = [
	SchemaGenerators.withContext(CoffeeStainer('Anna Richter', {
		jobTitle: '3D Artist',
		subjectOf: [
			yt_UT9iNA3WGT4,
		],
	})),
];

export default Anna;
