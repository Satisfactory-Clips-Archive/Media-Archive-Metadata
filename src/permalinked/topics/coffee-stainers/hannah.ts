import {
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.ts';
import {
	yt_UT9iNA3WGT4,
// eslint-disable-next-line imports/no-internal-modules
} from '../../../common/youtube.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Hannah Beuger', {
		jobTitle: 'Level Designer',
		subjectOf: [
			YouTubeVideo('8WYNwGDLYNE', {
				'name': 'Developer Highlight - Level Design',
				// eslint-disable-next-line @stylistic/max-len
				'description': 'Come hang out with Hannah-banana as she tells you about her role as a Level Designer.',
				'uploadDate': '2019-10-24',
			}),
			yt_UT9iNA3WGT4,
		],
		url: [
			'https://twitter.com/HannahBeuger'
		],
	})),
];
