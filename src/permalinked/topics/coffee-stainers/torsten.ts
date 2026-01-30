import {
	YouTubeVideo,
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Torsten = [
	SchemaGenerators.withContext(CoffeeStainer('Torsten Gunst', {
		jobTitle: 'Concept Artist',
		subjectOf: [
			YouTubeVideo('CG-63B4g11U', {
				// eslint-disable-next-line @stylistic/max-len
				'name': 'Multiple Hotbars + Interview with Art Director on updating art assets',
				// eslint-disable-next-line @stylistic/max-len
				'description': 'I sat down with our Art Director, Torsten Gunst, to talk about some concepts for upcoming art asset updates. Oh, and a new feature of course.',
				'uploadDate': '2020-04-10',
			}),
		],
	})),
];

export default Torsten;
