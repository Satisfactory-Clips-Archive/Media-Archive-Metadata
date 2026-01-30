import {
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
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
