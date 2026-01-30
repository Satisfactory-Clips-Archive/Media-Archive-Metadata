import {SchemaGenerators} from '../../../SchemaTypes.ts';
import {CoffeeStainer, YouTubeVideo} from '../../../utils.ts';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Mikael Niazi', {
		jobTitle: [
			'Community Manager',
		],
		subjectOf: [
			YouTubeVideo('ZdawVdgyG7k', {
				name: 'We got a NEW Community Manager!',
				description: 'Say hello to Mikael, our new community manager for Coffee Stain Studios!',
				uploadDate: '2023-12-08',
			}),
		],
	})),
];
