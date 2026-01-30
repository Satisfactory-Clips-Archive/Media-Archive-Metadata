import {
	YouTubeVideo,
	FormerCoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const İlayda = [
	SchemaGenerators.withContext(FormerCoffeeStainer('İlayda Ertuğrul', {
		jobTitle: 'Community Manager',
		subjectOf: [
			YouTubeVideo('4acDdsEM1Uc', {
				name: 'Meet the new Community Manager for Satisfactory!',
				// eslint-disable-next-line @stylistic/max-len
				description: 'İlayda Ertuğrul answers questions from the Community about their new role at Coffee Stain Studios',
				uploadDate: '2023-02-10',
			}),
		],
	})),
]
