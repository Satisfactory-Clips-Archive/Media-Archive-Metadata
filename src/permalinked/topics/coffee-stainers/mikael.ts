import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

import {
	CoffeeStainer,
	YouTubeVideo,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';

const Mikael = [
	SchemaGenerators.withContext(CoffeeStainer('Mikael Niazi', {
		jobTitle: [
			'Community Manager',
		],
		subjectOf: [
			YouTubeVideo('ZdawVdgyG7k', {
				name: 'We got a NEW Community Manager!',
				// eslint-disable-next-line @stylistic/max-len
				description: 'Say hello to Mikael, our new community manager for Coffee Stain Studios!',
				uploadDate: '2023-12-08',
			}),
		],
	})),
];

export default Mikael;
