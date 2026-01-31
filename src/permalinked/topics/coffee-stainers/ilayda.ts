import {
	FormerCoffeeStainer,
	YouTubeVideo,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const İlayda = [
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
];

export default İlayda;
