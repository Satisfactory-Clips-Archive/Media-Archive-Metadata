import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

import {
	CoffeeStainer,
	YouTubeVideo,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';

const Jason = [
	SchemaGenerators.withContext(CoffeeStainer('Jason Edwards', {
		jobTitle: [
			'Community Manager',
		],
		subjectOf: [
			YouTubeVideo('1uma1Z3yRUc', {
				name: 'A New Community Manager Approaches!',
				description: 'A New Community Manager Approaches!',
				uploadDate: '2025-05-16',
			}),
		],
	})),
];

export default Jason;
