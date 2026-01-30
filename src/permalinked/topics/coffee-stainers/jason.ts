import {SchemaGenerators} from '../../../SchemaTypes.ts';
import {CoffeeStainer, YouTubeVideo} from '../../../utils.ts';

export const Jason = [
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
