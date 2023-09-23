import {
	YouTubeVideo,
	FormerCoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(FormerCoffeeStainer('İlayda Ertuğrul', {
		jobTitle: 'Community Manager',
		subjectOf: [
			YouTubeVideo('4acDdsEM1Uc', {
				name: 'Meet the new Community Manager for Satisfactory!',
				description: 'İlayda Ertuğrul answers questions from the Community about their new role at Coffee Stain Studios',
				uploadDate: '2023-02-10',
			}),
		],
	})),
]
